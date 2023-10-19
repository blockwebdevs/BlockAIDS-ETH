import {
  polygonChainID,
  polygonContractAbi,
  polygonContractAddress,
  polygonExplorer
} from "../contracts/polygon/contract";
import {scrollChainId, scrollContractAbi, scrollContractAddress, scrollExplorer} from "../contracts/scroll/contract";

export const connectToMetaMask = async () => {
  if ((window as any).ethereum) {
    try {
      await (window as any).ethereum.enable();

      if ((window as any).ethereum) {
        // @ts-ignore
        const web3 = new Web3((window as any).ethereum);
        const accounts = await web3.eth.getAccounts();
        const chainId = await getNetworkId();
        return {account: accounts[0], chainId};
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export const getUserTokenBalance = async (userAddress: string, chainId: number) => {
  // @ts-ignore
  const web3 = new Web3((window as any).ethereum);
  let tokenContract = new web3.eth.Contract(scrollContractAbi, scrollContractAddress);
  if (chainId === polygonChainID) {
    tokenContract = new web3.eth.Contract(polygonContractAbi, polygonContractAddress);
  }

  try {
    const balance: number = await tokenContract.methods.balanceOf(userAddress).call();
    return Number(balance) / 10000000000000;
  } catch (error) {
    console.error(error);
  }
}

export const getNetworkId = async () => {
  // @ts-ignore
  const web3 = new Web3(window.ethereum)
  return await web3.eth.net.getId()
}

export const switchChain = async (chainId: number) => {
  const currentChainId = await getNetworkId()

  if (currentChainId !== chainId) {
    try {
      // @ts-ignore
      await web3.currentProvider.request({
        method: 'wallet_switchEthereumChain',
        // @ts-ignore
        params: [{chainId: Web3.utils.toHex(chainId)}],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        alert('add Scroll Sopelia, Polygon Mumbai or Mantle Testnet');
      }
    }
  }
}

export const transferTokens = async (chainId, senderAddress, recipientAddress, amount) => {
  // @ts-ignore
  const web3 = new Web3((window as any).ethereum);
  let tokenContract = new web3.eth.Contract(scrollContractAbi, scrollContractAddress);
  let explorer = scrollExplorer;
  if (chainId === polygonChainID) {
    tokenContract = new web3.eth.Contract(polygonContractAbi, polygonContractAddress);
    explorer = polygonExplorer;
  }

  const holderAddress = '0xF4E00d71d285F65d824175E6C709B1CF01A68383';

  try {
    // @ts-ignore
    const transaction = await tokenContract.methods.transferFrom(holderAddress, recipientAddress, amount).send({from: senderAddress});
    return explorer + transaction.transactionHash;
  } catch (error) {
    console.error('Token transfer error:', error);
  }
}