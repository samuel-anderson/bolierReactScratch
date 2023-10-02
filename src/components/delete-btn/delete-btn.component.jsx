import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteBtn } from "./delete-btn.styles";
import { useTheme } from "@mui/material/styles";

const DeleteButton = () => {
  const theme = useTheme();

  return (
    <DeleteBtn variant="contained" color="primary" mycolor="red">
      <DeleteIcon fontSize="small" /> Delete
    </DeleteBtn>
  );
};

export default DeleteButton;
