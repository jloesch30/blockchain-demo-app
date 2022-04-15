import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const UserTile = ({ lineItemDescription, lineItemName, name }) => {
  return (
    <Card sx={{ minWidth: 275, bgcolor: "#EFFBFF" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        </Typography> */}
        <Typography variant="body2">
          Description
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Profile</Button>
      </CardActions>
    </Card>
  );
};

export default UserTile;
