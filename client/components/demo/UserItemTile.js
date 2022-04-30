import { Button } from "@mui/material";
import { useRouter } from "next/router";

const UserItemTile = ({ name, description, validation, type }) => {
  const router = useRouter();

  return (
    <div className="bg-slate-400 py-3 px-4 rounded-lg my-2 shadow-md w-3/4 md:max-w-lg">
      <ul className="flex flex-col">
        <li>
          <h1>
            <span className="font-bold">Line Item Name:</span> {name}
          </h1>
        </li>
        <li>{description}</li>
        {type === "skill" && (
          <Button
            className="self-end"
            variant="contained"
            sx={{ fontSize: 10 }}
          >
            Skill info
          </Button>
        )}
      </ul>
    </div>
  );
};

export default UserItemTile;
