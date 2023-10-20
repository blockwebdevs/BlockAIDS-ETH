<h1 align="center">
  <img src="https://raw.githubusercontent.com/blockwebdevs/BlockAIDS-ETH/45d2a98d385300f014af65439bc02b540fbe0ef5/frontend/public/images/logo.svg" alt="Markdownify" width="200">
  <br>
</h1>

<h4 align="center">BlockAIDS Task Manager</h4>

### Table of Contents

- [Project Structure](#project-structure)
- [How To Use](#how-to-use)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Connect to EVM powered networks](#connect-to-emv-powered-networks)
- [Scroll Sepolia Testnet](#scroll-sepolia-testnet)
- [Polygon Mumbai](#polygon-mumbai)
- [Mantle Testnet](#mantle-testnet)

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

