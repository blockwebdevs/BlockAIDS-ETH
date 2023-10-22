// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FilecoinIPFSStorage {
    address public owner;
    mapping(address => string) public fileCID;

    event FileUploaded(address indexed user, string cid);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    function uploadFile(string memory ipfsCID) external {
        require(bytes(fileCID[msg.sender]).length == 0, "File already uploaded");

        // ... interact with IPFS to upload the file and obtain the CID

        fileCID[msg.sender] = ipfsCID;
        emit FileUploaded(msg.sender, ipfsCID);
    }

    function retrieveFile() external view returns (string memory) {
        return fileCID[msg.sender];
    }
}
