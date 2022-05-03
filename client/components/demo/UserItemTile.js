import { Button } from "@mui/material";
import { useState } from "react";
import useWeb3 from "../../hooks/useWeb3";
import axios from "axios";

const UserItemTile = ({
  name,
  description,
  isSameUser,
  userId,
  id: skillId,
}) => {
  const [certs, setCerts] = useState();
  const { web3, address, vContract } = useWeb3();

  const testUrl = () => {
    console.log(`/api/user/skill/remove?userId=${userId}&skillId=${skillId}`);
  };

  const verifySkillHandler = async () => {
    // TODO: interacting with the smart contract
    try {
      const res = await vContract.methods
        .requestACert(name, description, address)
        .send({
          from: address,
          value: web3.utils.toWei("0.0012", "ether"),
        });
      setCerts(certs);

      // remove the skill from the database
      const axiosRes = await axios.get(
        `/api/user/skill/remove?userId=${userId}&skillId=${skillId}`
      );
    } catch (err) {
      alert("There was an error or the transaction was cancelled");
    }
  };

  return (
    <div className="bg-slate-400 py-3 px-4 rounded-lg my-2 shadow-md w-3/4 md:max-w-lg">
      <ul className="flex flex-col">
        <li>
          <h1>
            <span className="font-bold">Line Item Name:</span> {name}
          </h1>
        </li>
        <li>{description}</li>
        {isSameUser && (
          <Button
            onClick={verifySkillHandler}
            className="self-end bg-blue-300"
            variant="contained"
            sx={{ fontSize: 10 }}
          >
            Verify skill
          </Button>
        )}
      </ul>
    </div>
  );
};

export default UserItemTile;
