import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useHistory();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLogin);
  console.log(isLoggedIn);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        console.log("user", result.user);
        console.log("user logged in");
        navigate.push("/");
        dispatch({ type: "LOGIN" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div style={{ height: "100vh" }} className="center-div loginPage">
      <h3>Log In With Google</h3>
      <button className="btn btn-primary " onClick={signIn}>
        Log in
      </button>
    </div>
  );
};

export default Login;
