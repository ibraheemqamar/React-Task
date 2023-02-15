import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Log_Url = "https://api.escuelajs.co/api/v1/auth/login";
const Login = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async () => {
    await axios.post(Log_Url, { email: userName, password }).then((result)=>{
        if (result?.data) {
           navigate("/Products");
           localStorage.setItem("access-token",result.data.access_token)
        }
    }).catch(()=>{
       setError(true);
    })
  };
  return (
    <div className="Login-Container">
      <Box className="Box">
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          autoFocus
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <TextField
        className="password-input"
          id="outlined-basic"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          helperText={error && 'Invalid Email or Password'}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={onSubmit}
        >
          Sign In
        </Button>
      </Box>
    </div>
  );
};

export default Login;
