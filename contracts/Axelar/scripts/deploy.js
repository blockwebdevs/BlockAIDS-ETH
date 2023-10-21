const hre = require("hardhat");

async function main() {
    const Airdrop = await hre.ethers.deployContract("Airdrop", [
        //Polygon
        // "0xBF62ef1486468a6bd26Dd669C06db43dEd5B849B",
        // "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",
        //Scroll
        "0xe432150cce91c13a887f7D836923d5597adD8E31",
        "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6"
    ]);

    await Airdrop.waitForDeployment();

    console.log(`Airdrop contract deployed to ${await Airdrop.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});