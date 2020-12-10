import React from "react";
import Hero from "../Hero"
import PDFViewer from "../PDFViewer/PDFViewer";

const Resume = (props) => {
  return (
    <div>
    <Hero title={props.title}/>
      <PDFViewer />
    </div>
  );
};

export default Resume;
