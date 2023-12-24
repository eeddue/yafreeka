import React from "react";

const GoogleLogin = () => {
  const onLogin = (user: any) => {
    console.log(user);
  };
  return (
    <div
      id="g_id_onload"
      data-client_id="589035861274-ccp8u2m5p44q89bo3eap2ovo6k8n0gm1.apps.googleusercontent.com"
      data-context="sign-in"
      data-close_on_tap_outside="false"
      //   data-callBack={onLogin}/
    />
  );
};

export default GoogleLogin;
