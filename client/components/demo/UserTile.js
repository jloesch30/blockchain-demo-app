import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Router, { useRouter } from "next/router";
import { positions } from "@mui/system";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const UserTile = ({ lineItemDescription, lineItemName, name, bio, userId }) => {
  const router = useRouter();

  const cardClickHandler = () => {
    router.push(`/user/${userId}`);
  };
  return (
    <Card sx={{ minWidth: 275, bgcolor: "#EFFBFF" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        </Typography> */}
        <Typography variant="body2">
          <span className="font-light font-sans">Bio</span>
          <br />
          {`"${bio}"`}
        </Typography>
      </CardContent>
      <CardActions>
        <button
          className="font-mono bg-blue-200 transition-all rounded-md py-2 px-4 hover:font-bold hover:shadow-md"
          onClick={cardClickHandler}
        >
          View Profile
        </button>
      </CardActions>
    </Card>
  );
};

export default UserTile;
