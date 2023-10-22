// Import required libraries
const {Wormhole, Wallet} = require('wormhole-sdk');
const {ethers} = require('ethers');
const {RPC_URL_ETHEREUM, RPC_URL_POLYGON} = require('./config'); // Define your RPC URLs
const polygonPrivateKey = 'YOUR_POLYGON_PRIVATE_KEY';
const ethereumPrivateKey = 'YOUR_ETHEREUM_PRIVATE_KEY';

// Initialize Wormhole for Polygon
const polygonWallet = new Wallet(polygonPrivateKey, RPC_URL_POLYGON);
const wormholePolygon = new Wormhole(ethers.getDefaultProvider(RPC_URL_ETHEREUM), polygonWallet);

// Example: Transfer an ERC-20 token from Ethereum to Polygon
async function transferTokensFromEthereumToPolygon(ethTokenAddress, recipientPolygonAddress, amount) {
    // Load ERC-20 contract on Ethereum
    const ethereumProvider = new ethers.JsonRpcProvider(RPC_URL_ETHEREUM);
    const ethereumWallet = new ethers.Wallet(ethereumPrivateKey, ethereumProvider);
    const token = new ethers.Contract(ethTokenAddress, ['function approve(address, uint256)'], ethereumWallet);

    // Approve the Wormhole bridge to spend tokens
    const approvalTx = await token.approve(wormholePolygon.ERC20Predicate.address, amount);

    // Deposit assets on the Polygon chain
    const depositTx = await wormholePolygon.depositERC20(
        ethTokenAddress,
        recipientPolygonAddress,
        amount
    );

    console.log('Tokens transferred from Ethereum to Polygon.');
}

// Example: Transfer tokens from Polygon to Ethereum
async function transferTokensFromPolygonToEthereum(polygonTokenAddress, ethRecipientAddress, amount) {
    const tokenContract = new ethers.Contract(polygonTokenAddress, ['function transferFrom(address, address, uint256)'], polygonWallet);

    // Call the transfer function on the Polygon side to initiate the transfer
    const transferTx = await tokenContract.transferFrom(polygonWallet.address, wormholePolygon.ERC20Predicate.address, amount);

    // Withdraw assets on the Ethereum chain
    const withdrawTx = await wormholePolygon.withdrawERC20(
        polygonTokenAddress,
        amount,
        ethRecipientAddress
    );

    console.log('Tokens transferred from Polygon to Ethereum.');
}

// Usage
const ethTokenAddress = '0xYourERC20TokenAddress';
const recipientPolygonAddress = 'YourPolygonWalletAddress';
const transferAmount = 100; // Amount to transfer

transferTokensFromEthereumToPolygon(ethTokenAddress, recipientPolygonAddress, transferAmount)
    .then(() => transferTokensFromPolygonToEthereum('YourPolygonTokenAddress', '0xYourEthereumAddress', transferAmount))
    .catch(error => console.error('Error:', error));
