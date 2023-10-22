<h1 align="center">
  <img src="https://raw.githubusercontent.com/blockwebdevs/BlockAIDS-ETH/45d2a98d385300f014af65439bc02b540fbe0ef5/frontend/public/images/logo.svg" alt="Markdownify" width="200">
  <br>
</h1>

<h4 align="center">BlockAIDS Task Manager</h4>

### Table of Contents

- [BlockAids Summary](#blockaids-summary)
- [Project Structure](#project-structure)
- [How To Use](#how-to-use)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Connect to EVM powered networks](#connect-to-emv-powered-networks)
- [Scroll Sepolia Testnet](#scroll-sepolia-testnet)
- [Polygon Mumbai](#polygon-mumbai)
- [Mantle Testnet](#mantle-testnet)

## BlockAIDS Summary

**Our Team's Motivation for Building this Project:**

The World Health Organization estimates that nearly 40 million people across the globe live with HIV/AIDS. In the past decade, however, we've learned that the disease does not have to be a death sentence. Due to breakthrough treatments such as rigorous antiretroviral regimens, combined with regular access to healthcare and prevention knowledge, there is hope. The hope of giving people diagnosed with HIV a chance to lead healthy, fulfilling lives and the hope of slowing the spread of HIV/AIDs is why we're building this platform.


**Ecosystem at Present:**

Our ecosystem currently comprises 19 service centers (physical locations that provide HIV patients with medications and services) and ~250 personnel (public health professionals (doctors, therapists, social assistance providers, case managers, researchers, our management team and developers, and more). In the Republic of Moldova, where the project launched, our software already supports 50K active users and over 1M transactions (medical records). We are now building a global digital storage platform for 5 countries (Ukraine, Georgia, Kazakhstan, Moldova, and Kyrgyzstan) and more than 1M users. Much of this push to expand, first regionally and then globally, originated from the inflow of Ukrainian HIV/AIDS patients fleeing the war, arriving in Moldova with no access to their previous disease management regimens and records. BlockAIDS is supported by international organizations and NGOs, such as UNAIDS and other donor organizations (World Bank, Global Funds, PERFAR, UKAID, Elton John AIDS Foundation, etc.), and big pharma companies (HIV R&D investments). 


**Project Summary:**

Originating as a web2 project, BlockAIDS is forging a decentralized ecosystem that harnesses the power of blockchain and web3 technologies to serve millions of people living with HIV/AIDS and key at-risk populations (e.g. intravenous drug users, members of the LGBTQ community, commercial sex workers). In addition to serving impacted populations, BlockAIDs will also help research institutions and pharmaceutical companies to do research, test new medicines, and develop better treatments, and for international, regional, and local organizations to track the medications and services and make better procurement activities.

This decentralized healthcare application addresses 3 of the most salient pain points encountered by HIV/AIDS patients: medical records access, real-time health monitoring, and community empowerment. Utilization of this world-class, secure, and private application restores sovereignty to people affected by this disease by providing access to records, medications, goods, and services from any place in the world. Additionally, and equally important, the BlockAIDS community serves as a self-governed platform for enhancing the product itself, education about managing and preventing the disease and supporting community initiatives.

With access to all of their data, patients can also use BlockAIDS to track and improve many aspects of disease management, such as taking medications and periodic viral load testing. And most importantly, privacy-preserving single sign on technology provides users with zero knowledge proofs for stigma-free access to treatment or prevention mechanisms, like condoms, sterile syringes or STI-testing. 

To encourage and incentivize healthy behaviors, we’re building out PledgePositive, the BlockAIDS token program, which rewards users for meeting a wide range of these personal adherence goals that contribute to their overall health, well-being, and the safety of others.

PledgePositive incorporates various modules and features to address the specific needs of our beneficiary populations:

-Treatment Adherence and Health Management: The primary need we seek to address is adherence to treatment plans by providing rewards for consistently taking prescribed medications, attending medical appointments, and undergoing necessary tests and analyses. This feature includes reminders for medication schedules and tracking mechanisms to monitor progress and achievements.

-Preventive Measures: For individuals from high-risk groups, PledgePositive emphasizes the importance of preventive measures to reduce the risk of HIV infection. It incentivizes the use of condoms, provides access to sterile needless syringes, and promotes the use of social assistance services such as counseling, education programs, and testing facilities.

-Education and Resources: PledgePositive features an extensive resource center with educational materials, articles, videos, and interactive tools that provide valuable information on HIV prevention, treatment, and overall health maintenance. Users can earn rewards by actively engaging with these educational resources, empowering them with the knowledge to make informed decisions along their journey to improved health outcomes.

-Support Networks & Community Engagement: PledgePositive facilitates the formation of support networks and communities, forging meaningful connections amongst individuals and/or groups facing similar challenges. It offers online support groups, forums, and messaging capabilities to foster social connections, exchange experiences, and seek guidance from peers.

-Rewards and Incentives: PledgePositive provides a range of rewards and incentives to motivate and recognize positive behaviors. To make the rewards more tangible for users, we have created for their usage an impact and reward token.

![17 05 2020-3](https://github.com/w3f/Grants-Program/assets/59833178/bd821d36-ca41-401a-b174-08587c36f001)

### Project Details
As mentioned above, we are committed to building PledgePositive, an integral component of the BlockAIDs application designed to promote and incentivize healthy behaviors and preventive measures for individuals living with HIV as well as those from high-risk groups. This incentivization framework aims to ensure that individuals engage in regular activities that contribute to their overall health, well-being, and the safety of others.

**PledgePositive incorporates various modules and features to address the specific needs of our beneficiary populations:**

- **Treatment Adherence and Health Management:** The primary need we seek to address is adherence to treatment plans by providing rewards for consistently taking prescribed medications, attending medical appointments, and undergoing necessary tests and analyses. This feature includes reminders for medication schedules and tracking mechanisms to monitor progress and achievements.
 
- **Preventive Measures:** For individuals from high-risk groups, PledgePositive emphasizes the importance of preventive measures to reduce the risk of HIV infection. It incentivizes the use of condoms, provides access to sterile needless syringes, and promotes the use of social assistance services such as counseling, education programs, and testing facilities.

- **Education and Resources:** PledgePositive features an extensive resource center with educational materials, articles, videos, and interactive tools that provide valuable information on HIV prevention, treatment, and overall health maintenance. Users can earn rewards by actively engaging with these educational resources, empowering them with the knowledge to make informed decisions along their journey to improved health outcomes.

- **Support Networks & Community Engagement:** PledgePositive facilitates the formation of support networks and communities, forging meaningful connections amongst individuals and/or groups facing similar challenges. It offers online support groups, forums, and messaging capabilities to foster social connections, exchange experiences, and seek guidance from peers.

- **Rewards and Incentives:** PledgePositive provides a range of rewards and incentives to motivate and recognize positive behaviors. To make the rewards more tangible for users, we have created for their usage an impact and reward token.


## Project Structure

* Frontend Part (React.js)
* Backend Part (Nest.js)
* Contracts (Solidity Smart Contracts)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/)
(which comes with [npm](http://npmjs.com)) and [PostgreSQL](https://www.postgresql.org/) installed on your computer.
From your command line:

- Clone this repository

```bash
git clone https://github.com/blockwebdevs/BlockAIDS-ETH.git
```

### Frontend Setup

- Go into the repository

```bash
cd BlockAIDS-ETH/frontend
```

- Install dependencies

```bash
npm install
```

- Create .env file

```bash
cp .env.example .env
```

> **Note**
> You can use already deployed backend part, just set: REACT_APP_BACKEND_URL=https://back.blockaids.online

- Run the app

```bash
npm start
```

### Backend Setup

- Go into the repository

```bash
cd BlockAIDS-ETH/backend
```

- Install dependencies

```bash
npm install
```

- Create a database and add access on PostgreSQL

> You can
> use [this guide](https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e)

- Create .env file and add database credentials

```bash
cp .env.example .env
```

- Run the app

```bash
npm run start
```

Now, you can access [http://localhost:4000](http://localhost:4000) and add in database at least one <b>Organization</b>
and one <b>
Task Type</b> through swagger.

## Connect to EVM powered networks

### Scroll Sepolia Testnet

| Option             | Value                                                |
|--------------------|------------------------------------------------------|
| Network name       | Scroll Sepolia Testnet                               |
| New RPC URL        | https://scroll-sepolia.blockpi.network/v1/rpc/public |
| Chain ID           | 534351                                               |
| Currency symbol    | ETH                                                  |
| Block explorer URL | https://sepolia.scrollscan.dev                       |

### Polygon Mumbai

| Option             | Value                             |
|--------------------|-----------------------------------|
| Network name       | Polygon Mumbai                    |
| New RPC URL        | https://rpc-mumbai.maticvigil.com |
| Chain ID           | 80001                             |
| Currency symbol    | MATIC                             |
| Block explorer URL | https://mumbai.polygonscan.com    |

### Mantle Testnet

| Option             | Value                               |
|--------------------|-------------------------------------|
| Network name       | Mantle Testnet                      |
| New RPC URL        | https://rpc.testnet.mantle.xyz      |
| Chain ID           | 5001                                |
| Currency symbol    | MNT                                 |
| Block explorer URL | https://explorer.testnet.mantle.xyz |

