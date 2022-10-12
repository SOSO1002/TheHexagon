// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Honey is ERC20, Ownable {
    uint256 public MAX_SUPPLY = 10**25;

    constructor(string memory _name, string memory _symbol)
        ERC20(_name, _symbol)
    {
        
    }

    function mint(address _to, uint256 _amount) external onlyOwner {
        require(totalSupply() + _amount <= MAX_SUPPLY, "Exceeds Max Supply.");
        _mint(_to, _amount);
    }

    function burn(uint256 amount) external onlyOwner {
        _burn(msg.sender, amount);
    }

}
