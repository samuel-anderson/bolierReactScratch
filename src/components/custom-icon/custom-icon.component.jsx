// CustomIcon.js
import React from "react";
import IconButton from "@mui/material/IconButton";

function CustomIcon({ icon, onClick }) {
  return <IconButton onClick={onClick}>{icon}</IconButton>;
}

export default CustomIcon;
