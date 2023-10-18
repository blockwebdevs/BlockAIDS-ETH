import {FC, useEffect, useState} from "react";
import MyButton from "../../../ui/MyButton";
import axios from "axios";
import {IUser} from "../../../models/IUser";
import {ITask} from "../../../models/ITask";
import {TaskStatusesEnum} from "../enums/TaskStatusesEnum";
import {tasksApi} from "../../../api/tasksApi";
import {useAppSelector} from "../../../hooks/redux";
import {setNotification} from "../services/notifications";
import {notificationsApi} from "../../../api/notificationsApi";
import Loading from "../../../components/Loading";
import {PhantomProvider} from "../../../models/IPhantomProvider";
import {Web3} from "web3";
import {tokenAbi, tokenContractAddress} from "../../../contracts/scroll/contract";

const ethers = require('ethers');

interface ITaskRewardProps {
  user: IUser;
  task: ITask;
}

const TaskReward: FC<ITaskRewardProps> = ({user, task}) => {
  const {type} = useAppSelector(state => state.authReducer);
  const [updateTask] = tasksApi.useUpdateTaskMutation();
  const [createNotification] = notificationsApi.useCreateNotificationMutation();

  const [provider, setProvider] = useState<string | undefined>(undefined);
  const [walletKey, setWalletKey] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false)

  const transferTokens = async () => {
    const web3 = new Web3((window as any).ethereum);
    const tokenContract = new web3.eth.Contract(tokenAbi, tokenContractAddress);
    const senderAddress = '0xF4E00d71d285F65d824175E6C709B1CF01A68383';
    const recipientAddress = '0xda79251323303eBBF57ad02b01Be26563d281CcC';
    const amount = 100;

    try {
      // @ts-ignore
      const transaction = await tokenContract.methods.transferFrom(senderAddress, recipientAddress, amount).send({from: senderAddress});
      console.log('Token transfer successful:', transaction);
    } catch (error) {
      console.error('Token transfer error:', error);
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
              <MyButton onClick={transferTokens}>
                  Transfer Reward
              </MyButton>
          </>
      }
      {
        task.status === TaskStatusesEnum.Approved &&
          <div>
              <h3>Approved Task:</h3>
              <h4>Blockchain Signature: </h4>
              <a href={`https://explorer.solana.com/tx/${task.pay_signature}?cluster=testnet`} target="_blank"
                 rel="noreferrer">
                  <small style={{fontSize: '12px'}}>{task.pay_signature}</small>
              </a>
          </div>
      }
    </>
  )
}

export default TaskReward;