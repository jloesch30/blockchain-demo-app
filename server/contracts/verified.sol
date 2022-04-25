// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;


//simple contract that represents a certificate
contract Verified{
    address owner;
    uint public certCount = 0;

    struct Cert{
        uint id;
        address issuer;
        string itemName;
        string itemDescription;
        uint valid_start;
        uint valid_end;
        bool valid;
    }

    mapping(uint => address) certToOwner;
    mapping(uint => Cert) certificates;

    event certCreated(
        uint id,
        string itemName,
        string itemDescription
    );

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() public{
        owner = msg.sender;
    }

    function requestACert(string memory _itemName,
                    string memory _itemDescription,
                    address _to
                    )
                    external
                    payable
    {
        require(msg.value > 0.02 ether);
        addCert(_itemName, _itemDescription, _to);
    }
    

    //create a new certificate 
    function addCert(string memory _itemName,
                    string memory _itemDescription,
                    address _to
                    )
                    private 
                    onlyOwner
    {
        certCount ++;
        certificates[certCount] = Cert(certCount, owner, _itemName, _itemDescription, block.timestamp, block.timestamp +  (182 * 1 days), true); 
        certToOwner[certCount] = _to;
        emit certCreated(certCount, _itemName, _itemDescription);
    }

    function invalidate(uint256 _certId) private onlyOwner{
        if(certificates[_certId].valid_end < block.timestamp){
            certificates[_certId].valid = false;
        }
    }


    //view a certificate
    function getCertInfo(uint _id)
        public
        view
        returns (address _issuer,
                address _owner,
                string memory _itemName,
                string memory _itemDescription,
                uint _valid_start,
                uint _valid_end)
    {
        _issuer = certificates[_id].issuer;
        _owner = certToOwner[_id];
        _itemName = certificates[_id].itemName;
        _itemDescription = certificates[_id].itemDescription;
        _valid_start = certificates[_id].valid_start;
        _valid_end = certificates[_id].valid_end;
    }

    function ownerOf(uint256 _certId) external view returns (address) {
        return certToOwner[_certId];
    }

    function isValid(uint256 _certId) external view returns (bool) {
        bool state = certificates[_certId].valid;
        return state;
    }

}