import {FC, useEffect, useState} from "react";
import MyButton from "../../../ui/MyButton";
import {IUser} from "../../../models/IUser";
import {ITask} from "../../../models/ITask";
import {TaskStatusesEnum} from "../enums/TaskStatusesEnum";
import {tasksApi} from "../../../api/tasksApi";
import {useAppSelector} from "../../../hooks/redux";
import {notificationsApi} from "../../../api/notificationsApi";
import Loading from "../../../components/Loading";
import {switchChain, connectToMetaMask, transferTokens} from "../../../helpers/metamask";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {polygonChainID} from "../../../contracts/polygon/contract";
import {scrollChainId} from "../../../contracts/scroll/contract";
import {setNotification} from "../services/notifications";

interface ITaskRewardProps {
  user: IUser;
  task: ITask;
}

const TaskReward: FC<ITaskRewardProps> = ({user, task}) => {
  const {type} = useAppSelector(state => state.authReducer);
  const [updateTask] = tasksApi.useUpdateTaskMutation();
  const [createNotification] = notificationsApi.useCreateNotificationMutation();

  const [walletKey, setWalletKey] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedChain, setSelectedChain] = useState<number>();

  useEffect(() => {
    if (type === 'specialist') {
      if (task.status === TaskStatusesEnum.Done) {
        connectToMetaMask().then((result) => {
          setSelectedChain(result.chainId);
          console.log(result.chainId);
          setWalletKey(result.account);
        });
      }
    }
  }, []);
  const handleSwitchChain = async (chainId: number) => {
    setSelectedChain(chainId);
    await switchChain(chainId);
  }

  const handleTransferReward = async () => {
    const recipientAddress = task.user.public_key;
    if (recipientAddress) {
      try {
        const amount = Number(task.taskType.reward) * 1000000000;
        setLoading(true);
        const transactionLink = await transferTokens(selectedChain, walletKey, recipientAddress, amount);
        updateTask({id: task.id, status: TaskStatusesEnum.Approved, pay_signature: transactionLink});
        setNotification(task, 'approved', type, createNotification);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    }
  }

  return (
    <>
      {
        loading &&
          <Loading/>
      }
      {
        type === 'specialist' && task.status === TaskStatusesEnum.Done &&
          <>
              <div>
                  <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">Choose blockchain:</FormLabel>
                      <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                      >
                          <FormControlLabel value="scroll" control={<Radio/>}
                                            onChange={() => handleSwitchChain(scrollChainId)}
                                            checked={selectedChain === scrollChainId}
                                            label="Scroll Sopelia"/>
                          <FormControlLabel value="polygon" control={<Radio/>}
                                            onChange={() => handleSwitchChain(polygonChainID)}
                                            checked={selectedChain === polygonChainID}
                                            label="Polygon Mumbai"/>
                        {/*<FormControlLabel value="mantle" control={<Radio/>} onChange={() => switchChain(134351)}*/}
                        {/*                  label="Mantle Testnet"/>*/}
                      </RadioGroup>
                  </FormControl>
              </div>
              <MyButton onClick={handleTransferReward}>
                  Transfer Reward
              </MyButton>
          </>
      }
      {
        task.status === TaskStatusesEnum.Approved &&
          <div>
              <h3>Approved Task:</h3>
              <h4>
                  <a href={`https://explorer.solana.com/tx/${task.pay_signature}?cluster=testnet`} target="_blank"
                     rel="noreferrer">
                      <small style={{fontSize: '12px'}}>View on block explorer</small>
                  </a>
              </h4>
          </div>
      }
    </>
  )
}

export default TaskReward;