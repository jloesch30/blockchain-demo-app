import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function SimpleBottomNavigation({
  renderPageValue,
  setRenderPageValue,
  handleHomeClick,
  handleContractCodeClick,
}) {
  const [value, setValue] = useState(renderPageValue);

  return (
    <Box
      sx={{ width: "full", bgcolor: "black" }}
      className="fixed bottom-0 w-full"
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setRenderPageValue(newValue);
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={handleHomeClick}
          label="Home"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          onClick={handleContractCodeClick}
          label="Contract"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
