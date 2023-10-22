BlockAIDS is a decentralized ecosystem that harnesses the power of blockchain and web3 technologies to serve millions of
people living with HIV/AIDS and key at-risk populations (e.g. intravenous drug users, members of the LGBTQ community,
commercial sex workers). Utilization of this world-class, secure, and private application restores sovereignty to people
affected by this disease by providing access to records, medications, goods, and services from any place in the world.
Additionally, and equally important, the BlockAIDS community serves as a self-governed platform for enhancing the
product itself, education about managing and preventing the disease, and supporting community initiatives.

We are currently building PledgePositive, an adherence tracker and encouragement platform - a subnet designed to promote
and incentivize healthy behaviors, medication adherence practices, and preventive measures. By utilizing a comprehensive
range of rewards and benefits, the system aims to ensure that individuals engage in regular activities that contribute
to their overall health, well-being, and the safety of others.

For more details on achievements thusfar and PledgePositive specifics, please see the
full [BlockAIDS Summary](/README.md).

![art_03-fe308d](https://github.com/w3f/Grants-Program/assets/59833178/3c522f8c-b38b-4126-82dd-6537c674fae3)

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

### Team members

- Andrei Tintari
- Tudor Iovita
- Chris Georgen
- Erin Murphy
- Nicholas Edmonds

### Contact

- **Contact Name:** Andrei Tintari
- **Contact Email:** project@blockaids.world
- **Website:** https://dev.blockaids.online

