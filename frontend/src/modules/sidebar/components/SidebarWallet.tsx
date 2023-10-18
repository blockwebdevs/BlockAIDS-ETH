import React, {FC, useEffect, useState} from "react";
import {Button} from "@mui/material";
import {useAppSelector} from "../../../hooks/redux";
import {usersApi} from "../../../api/usersApi";
import RefreshIcon from '@mui/icons-material/Refresh';
import {Web3} from "web3";
import {tokenAbi, tokenContractAddress} from "../../../contracts/scroll/contract";

const SidebarWallet: FC = () => {
  const {authUser} = useAppSelector(state => state.authReducer)
  const {data: currentUser} = usersApi.useFetchUserByIdQuery(authUser.id);
  const [updateUser] = usersApi.useUpdateUserMutation();

  const [walletKey, setWalletKey] = useState<string | undefined>(undefined);
  const [connected, setConnected] = useState<boolean>(false)
  const [balance, setBalance] = useState<number>(0)

  const connectToMetaMask = async () => {
    if ((window as any).ethereum) {
      try {
        await (window as any).ethereum.enable();

        if ((window as any).ethereum) {
          const web3 = new Web3((window as any).ethereum);
          const accounts = await web3.eth.getAccounts();
          setWalletKey(accounts[0]);
          updateUser({
            public_key: accounts[0],
            id: currentUser.id,
            name: currentUser.name,
            email: currentUser.email,
            phone: currentUser.phone,
            avatar: currentUser.avatar,
            gender: currentUser.gender,
            chain: 'scroll',
          })
          await getUserTokenBalance(accounts[0]);
          setConnected(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  const getUserTokenBalance = async (userAddress) => {
    const web3 = new Web3((window as any).ethereum);
    const tokenContract = new web3.eth.Contract(tokenAbi, tokenContractAddress);

    try {
      // @ts-ignore
      const balance1: number = await tokenContract.methods.balanceOf(userAddress).call();
      setBalance(Number(balance1) / 10000000000000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {
        !connected &&
          <Button variant="contained" onClick={connectToMetaMask}>Connect Wallet</Button>
      }

      {
        connected &&
          <div className="wallet-balance-area">
              BALANCE: <br/> {balance} AIDS
              <RefreshIcon sx={{width: '20px', height: '20px'}} onClick={connectToMetaMask}/>
          </div>
      }
    </>
  );
}

export default SidebarWallet;