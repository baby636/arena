// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// MAZE-ARENA NFT - Into the unknown - MAZE Token Collectibles.
// https://mazetoken.github.io/arena

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MazeArena is ERC1155, ERC1155Burnable, Ownable {
    string public name;
    string public symbol;

    uint256 public constant ARCHITECT = 1;
    uint256 public constant WIZARD = 2;
    uint256 public constant VISIONARY = 3;
    uint256 public constant GEARHEAD = 4;
    uint256 public constant CYBORG = 5;
    uint256 public constant HERO = 6;
    uint256 public constant SPY = 7;
    uint256 public constant WARRIOR = 8;
    uint256 public constant BRAWLER = 9;
    uint256 public constant SAVAGE = 10;

    constructor(string memory _name, string memory _symbol) ERC1155("https://mazetoken.github.io/arena/item/{id}.json") {
        name = _name;
        symbol = _symbol;
        
        _mint(msg.sender, ARCHITECT, 20, "");
        _mint(msg.sender, WIZARD, 40, "");
        _mint(msg.sender, VISIONARY, 60, "");
        _mint(msg.sender, GEARHEAD, 80, "");
        _mint(msg.sender, CYBORG, 100, "");
        _mint(msg.sender, HERO, 120, "");
        _mint(msg.sender, SPY, 140, "");
        _mint(msg.sender, WARRIOR, 160, "");
        _mint(msg.sender, BRAWLER, 180, "");
        _mint(msg.sender, SAVAGE, 200, "");
    }

    function setURI(string memory newuri) public onlyOwner {
       _setURI(newuri);
   }

    function mint(address account, uint256 id, uint256 amount, bytes memory data) public onlyOwner {
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }
}