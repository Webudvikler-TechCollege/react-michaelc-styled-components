import React from "react";
import { useForm } from "react-hook-form";

import { useLoginStore } from "./useLoginStore";
import { useNavigate } from "react-router-dom";
import { useFlashMessageStore } from "../../FlashMessages/useFlashMessageStore";
import appService from "../../App/Appservices/App.service";
import { Button } from "../../StyledComponents/Styled.Buttons";

const Login = () => {
  const navigate = useNavigate();

  const { setLoggedIn, loggedIn, username } = useLoginStore((store) => ({
    setLoggedIn: store.setLoggedIn,
    loggedIn: store.loggedIn,
    username: store.username,
  }));

  const { setFlashMessage } = useFlashMessageStore((store) => ({
    setFlashMessage: store.setFlashMessage,
  }));

  const { register, handleSubmit } = useForm();

  const onSubmit = (submitdata) => {
    const fetchResult = async () => {
      try {
        const response = await appService.Login(submitdata.username, submitdata.password);

        if (response.data) {
          console.log(response.data);
          setLoggedIn(true, response.data.username, response.data.access_token);
          setFlashMessage("Du er nu logged in");
          navigate("/");
        }
      } catch (error) {
        setFlashMessage("Ingen bruger der passer ind");
        console.error(error);
      }
    };
    fetchResult();
  };

  const handleLogOut = () => {
    setLoggedIn(false, "", "");
    setFlashMessage("Kom godt hjem");
    navigate("/");
  };

  return !loggedIn ? (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username", { required: true })} type="text" autoComplete="username" placeholder="brugernavn" />
        <input {...register("password", { required: true })} type="password" autoComplete="password" placeholder="password" />
        <Button>login</Button>
      </form>
    </>
  ) : (
    <>
      {loggedIn && username}
      <Button onClick={() => handleLogOut()}> Logud</Button>
    </>
  );
};

export default Login;
