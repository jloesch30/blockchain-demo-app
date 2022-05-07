import { Button } from "@mui/material";
import { useState } from "react";
import useWeb3 from "../../hooks/useWeb3";
import axios from "axios";
import Image from "next/image";
import verifiedImage from "../../public/assets/verified.svg";

const UserItemTile = ({
  name,
  description,
  isSameUser,
  userId,
  id: skillId,
  verified,
}) => {
  const [certs, setCerts] = useState();
  const { web3, address, vContract } = useWeb3();

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
            <span className="font-bold text-primaryFont font-sans">{name}</span>
          </h1>
        </li>
        <li>{description}</li>
        <div className="grid place-items-end my-1">
          {verified && (
            <Image src={verifiedImage} height={20} width={20}></Image>
          )}
        </div>
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
