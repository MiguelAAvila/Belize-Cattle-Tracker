import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LoginForm from "../components/LoginForm/index";
import MainMenu from '../MainPages/MainMenu';

const Home = () => {
  
  const [isAuth, setIsAuth] = useState(false);

    const authorize = () => {
    setIsAuth(true);
  };



  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  }));
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
  });
  return (
    <>
      <MainMenu/>
    </>
  );
};

export default Home;
