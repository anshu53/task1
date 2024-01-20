import { useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailerror, setEmailerror] = useState(false);
  const [passworderror, setPassworderror] = useState(false);

  const navigate = useNavigate();
  function loginhandle(e) {
    if (email.length < 3 || password.length < 3) {
      alert("typer correct values");
    } else {
      alert("Log In sucessfully");
      navigate("/mainscreen");
      navigate("/sidenav");
    }
    e.preventDefault();
  }

  function emailhandle(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setEmailerror(true);
    } else {
      setEmailerror(false);
    }
    setEmail(item);
  }

  function passwordhandle(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassworderror(true);
    } else {
      setPassworderror(false);
    }
    setPassword(item);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <div>
        <h1>Log In Form</h1>
        <form onSubmit={loginhandle}>
          <input type="text" placeholder="Enter email" onChange={emailhandle} />
          {emailerror ? <span>Email not valid</span> : null}
          <br /> <br />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={passwordhandle}
          />
          {passworderror ? <span>Password not valid</span> : null}
          <br /> <br />
          <button type="submit">Log In</button>
        </form>
      </div>
    </Box>
  );
};
export default LogIn;
