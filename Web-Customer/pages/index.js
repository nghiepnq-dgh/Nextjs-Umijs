import React from "react";
import dynamic from "next/dynamic";

const BasicLayout = dynamic(() => import("../src/layouts/BasicLayout"));
const HomePage = dynamic(() => import("../src/modules/home/index"));

const Home = () => (
  <>
    <BasicLayout>
      <HomePage />
    </BasicLayout>
  </>
);

export default Home;
