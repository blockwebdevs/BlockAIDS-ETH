const ethers = require('ethers');

// Replace with your Ethereum node URL and private key
const ethereumNodeUrl = 'YOUR_ETHEREUM_NODE_URL';
const privateKey = 'YOUR_PRIVATE_KEY';

// Connect to the Ethereum network
const provider = new ethers.JsonRpcProvider(ethereumNodeUrl);
const wallet = new ethers.Wallet(privateKey, provider);

// Replace with the contract address where your FilecoinIPFSStorage contract is deployed
const contractAddress = 'YOUR_CONTRACT_ADDRESS';

// Replace with the ABI of your FilecoinIPFSStorage contract
const contractAbi = [
    // Add the ABI of your contract here
    // For example: { "constant": false, "inputs": [{"name": "ipfsCID", "type": "string"}], "name": "uploadFile", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" },
    // { "constant": true, "inputs": [], "name": "retrieveFile", "outputs": [{"name": "", "type": "string"}], "payable": false, "stateMutability": "view", "type": "function" }
];

// Create an instance of the contract
const contract = new ethers.Contract(contractAddress, contractAbi, wallet);

// Upload a file to IPFS and store the CID in the contract
async function uploadFileToIPFSAndStoreInContract(ipfsCID) {
    try {
        // Call the contract's uploadFile function
        const tx = await contract.uploadFile(ipfsCID);
        await tx.wait();
        console.log(`File with IPFS CID ${ipfsCID} uploaded and stored in the contract.`);
    } catch (error) {
        console.error('Error uploading file to IPFS and storing in the contract:', error);
    }
}

// Retrieve the IPFS CID from the contract
async function retrieveFileCIDFromContract() {
    try {
        const ipfsCID = await contract.retrieveFile();
        console.log(`IPFS CID of the uploaded file: ${ipfsCID}`);
    } catch (error) {
        console.error('Error retrieving file CID from the contract:', error);
    }
}

// Example usage:
// uploadFileToIPFSAndStoreInContract('QmSomeIPFSCID123'); // Replace with an actual IPFS CID
// retrieveFileCIDFromContract();
