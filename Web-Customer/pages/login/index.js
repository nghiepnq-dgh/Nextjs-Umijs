import React from "react";
import dynamic from "next/dynamic";

const HeaderLayout = dynamic(() =>
  import("../../src/layouts/only-header-layout")
);
const SignIn = dynamic(() => import("../../src/modules/login"));
const Login = () => {
  return (
    <HeaderLayout>
      <SignIn />
    </HeaderLayout>
  );
};

export default Login;
