export const mantleExplorer = 'https://explorer.testnet.mantle.xyz/tx/';
export const mantleChainID = 5001;
export const mantleContractAddress = '0xD3d65B24F2813eC152e4FAA3dC714Fc53EA5A47a';
export const mantleContractAbi = [{
  "type": "constructor",
  "stateMutability": "nonpayable",
  "inputs": []
}, {
  "type": "event",
  "name": "Approval",
  "inputs": [{"type": "address", "name": "owner", "internalType": "address", "indexed": true}, {
    "type": "address",
    "name": "spender",
    "internalType": "address",
    "indexed": true
  }, {"type": "uint256", "name": "value", "internalType": "uint256", "indexed": false}],
  "anonymous": false
}, {
  "type": "event",
  "name": "Transfer",
  "inputs": [{"type": "address", "name": "from", "internalType": "address", "indexed": true}, {
    "type": "address",
    "name": "to",
    "internalType": "address",
    "indexed": true
  }, {"type": "uint256", "name": "value", "internalType": "uint256", "indexed": false}],
  "anonymous": false
}, {
  "type": "function",
  "stateMutability": "view",
  "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
  "name": "allowance",
  "inputs": [{"type": "address", "name": "", "internalType": "address"}, {
    "type": "address",
    "name": "",
    "internalType": "address"
  }]
}, {
  "type": "function",
  "stateMutability": "nonpayable",
  "outputs": [{"type": "bool", "name": "success", "internalType": "bool"}],
  "name": "approve",
  "inputs": [{"type": "address", "name": "spender", "internalType": "address"}, {
    "type": "uint256",
    "name": "value",
    "internalType": "uint256"
  }]
}, {
  "type": "function",
  "stateMutability": "view",
  "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
  "name": "balanceOf",
  "inputs": [{"type": "address", "name": "", "internalType": "address"}]
}, {
  "type": "function",
  "stateMutability": "view",
  "outputs": [{"type": "uint8", "name": "", "internalType": "uint8"}],
  "name": "decimals",
  "inputs": []
}, {
  "type": "function",
  "stateMutability": "view",
  "outputs": [{"type": "string", "name": "", "internalType": "string"}],
  "name": "name",
  "inputs": []
}, {
  "type": "function",
  "stateMutability": "view",
  "outputs": [{"type": "string", "name": "", "internalType": "string"}],
  "name": "symbol",
  "inputs": []
}, {
  "type": "function",
  "stateMutability": "view",
  "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
  "name": "totalSupply",
  "inputs": []
}, {
  "type": "function",
  "stateMutability": "nonpayable",
  "outputs": [{"type": "bool", "name": "success", "internalType": "bool"}],
  "name": "transfer",
  "inputs": [{"type": "address", "name": "to", "internalType": "address"}, {
    "type": "uint256",
    "name": "value",
    "internalType": "uint256"
  }]
}, {
  "type": "function",
  "stateMutability": "nonpayable",
  "outputs": [{"type": "bool", "name": "success", "internalType": "bool"}],
  "name": "transferFrom",
  "inputs": [{"type": "address", "name": "from", "internalType": "address"}, {
    "type": "address",
    "name": "to",
    "internalType": "address"
  }, {"type": "uint256", "name": "value", "internalType": "uint256"}]
}];