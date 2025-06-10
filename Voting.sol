// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Voting {

    struct Proposal {
        string name;
        uint voteCount;
    }

    Proposal[] public proposals;
    mapping(address => bool) public hasVoted;
    event Voted(address indexed voter, uint proposalIndex);

    constructor(string[] memory _proposalNames) {
        for (uint i = 0; i < _proposalNames.length; i++) {
            proposals.push(Proposal({
                name: _proposalNames[i],
                voteCount: 0
            }));
        }
    }

    function vote(uint _proposalIndex) public {
        require(_proposalIndex < proposals.length, "Essa proposta nao existe.");
        require(!hasVoted[msg.sender], "Voce ja votou.");

        hasVoted[msg.sender] = true;
        proposals[_proposalIndex].voteCount++;
        emit Voted(msg.sender, _proposalIndex);
    }

    
    function getProposalsCount() public view returns (uint) {
        return proposals.length;
    }
}