import React from "react";
import Hero from "../../components/Hero";

const LandingPage = (props) => {
  return (
    <Hero title={props.title} subTitle={props.subTitle} memo={props.memo} />
  );
};

export default LandingPage;
