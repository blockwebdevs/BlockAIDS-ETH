import React, {FC, useEffect, useState} from "react";
import {Button} from "@mui/material";
import {useAppSelector} from "../../../hooks/redux";
import {usersApi} from "../../../api/usersApi";
import RefreshIcon from '@mui/icons-material/Refresh';
import {connectToMetaMask, getUserTokenBalance} from "../../../helpers/metamask";

const SidebarWallet: FC = () => {
  const {authUser} = useAppSelector(state => state.authReducer)
  const {data: currentUser} = usersApi.useFetchUserByIdQuery(authUser.id);
  const [updateUser] = usersApi.useUpdateUserMutation();

  const [walletKey, setWalletKey] = useState<string | undefined>(undefined);
  const [connected, setConnected] = useState<boolean>(false)
  const [balance, setBalance] = useState<number>(0)

  const connect = async () => {
    const {account, chainId} = await connectToMetaMask();
    setWalletKey(account);
    updateUser({
      public_key: account,
      id: currentUser.id,
      name: currentUser.name,
      email: currentUser.email,
      phone: currentUser.phone,
      avatar: currentUser.avatar,
      gender: currentUser.gender,
      chain: 'scroll',
    })
    await getUserTokenBalance(account, chainId);
    setConnected(true);
    const balance = await getUserTokenBalance(account, chainId);
    setBalance(balance);
  }

  return (
    <>
      {
        !connected &&
          <Button variant="contained" onClick={connect}>Connect Wallet</Button>
      }

      {
        connected &&
          <div className="wallet-balance-area">
              BALANCE: <br/> {balance} AIDS
              <RefreshIcon sx={{width: '20px', height: '20px'}} onClick={connect}/>
          </div>
      }
    </>
  );
}

export default SidebarWallet;