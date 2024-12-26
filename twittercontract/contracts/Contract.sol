// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Update {
    uint256 constant MAX_CHARACTER_AMOUNT=140;

    // we will map the wallet address to a string and that string will be status update
    mapping(address=>string) public statusUpdates;

    // this is a event that will be triggered when the status is updated
    event StatusUpdated(address indexed user, string newStatus, uint256 timestamp); // indexed is used to filter the event

    // first function
    function setStatus(string memory _status) public {
        require(bytes(_status).length <= MAX_CHARACTER_AMOUNT, "Status is too long");
        statusUpdates[msg.sender] = _status; // msg.sender is the address of the person who is calling the function and we are mapping that address to the status

        emit StatusUpdated(msg.sender, _status, block.timestamp); // block.timestamp is the time when the block was mined
    }

    function getStatus(address _user) public view returns(string memory) {
        string memory status = statusUpdates[_user];
        if(bytes(status).length == 0) {
            return "No status update";
        }
        return status;
    }


}


// 0xA7B28e2402201ABB5799917914d6162FCEdCd3B7