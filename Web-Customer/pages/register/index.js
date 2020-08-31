import React from "react";
import dynamic from "next/dynamic";

const HeaderLayout = dynamic(() =>
  import("../../src/layouts/only-header-layout")
);
const SignOut = dynamic(() => import("../../src/modules/registerPage"));

const Register = () => {
  return (
    <HeaderLayout>
      <SignOut />
    </HeaderLayout>
  );
};

export default Register;
