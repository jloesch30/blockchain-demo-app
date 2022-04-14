import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function SimpleBottomNavigation({
  renderPageValue,
  setRenderPageValue,
}) {
  const [value, setValue] = React.useState(renderPageValue);

  return (
    <Box sx={{ width: "full" }} className="fixed bottom-0 w-full">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setRenderPageValue(newValue);
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Contract" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
