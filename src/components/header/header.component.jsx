import React from "react";
import { AppBar, Toolbar, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>Barber shop</Toolbar>
      </AppBar>

      <Container style={{ marginTop: "64px" }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Header;
