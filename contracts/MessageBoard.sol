// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract MessageBoard {
    uint256 totalMessages;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function write() public {
        totalMessages += 1;
        console.log("%s has wrote!", msg.sender);
    }

    function getTotalMessages() public view returns (uint256) {
        console.log("We have %d total messages!", totalMessages);
        return totalMessages;
    }
}