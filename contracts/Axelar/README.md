## **Installation**

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Set up the environment variables to deploy the smart contracts:

    - Create a `.env` file in the hardhat directory.
    - Define the following variables in the `.env` file:
      ```apache
       PRIVATE_KEY=<Your Wallet Private Key>
      ```
      Replace `<Your Wallet Private Key>` with your wallet private key.

3. Compile and Deploy the smart contracts:

   ```bash
   npx hardhat run scripts/deploy.js --network <network>
   ```

   Replace `<network>` with the desired network (e.g. `polygon` and `scroll` in this case). Copy the
   contract address once the deployment is complete.

   > Ensure you update the Axelar gateway and gas service address for Binance and Avalanche respectively in `deploy.js`
   file under the `scripts` directory and deploy them separately. You can find the gateway and gas service
   address [here](https://docs.axelar.dev/resources/testnet).
