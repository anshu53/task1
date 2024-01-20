import React from "react";
import Box from "@mui/material/Box";

import Sidevan from "./sidenav";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidevan />
        <div>
          <h1>Home </h1>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
        </div>
      </Box>
    </>
  );
};
export default Home;
