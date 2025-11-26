// this component used when we create a new resume by it id it go the new page
// where we can see the form section and preview section
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../../Form/Form";
import ResumePreview from "../ResumePreview";
import APIDATA from "../../DATA/APIDATA";
// import DummyData from '/src/DATA/DummyData.jsx'
import { ResumeContext } from "/src/ContextProvider.jsx";

const Edit = () => {
  const params = useParams(); 
console.log(params)
  const { ResumeInfo, setResumeInfo } = useContext(ResumeContext);

  useEffect(() => {
    GetResumeInfo();
  }, []);

  function GetResumeInfo() {
    APIDATA.GetResumeDetails(params?.resumeId)
    .then((res) => {
      // console.log(res.data.data);
      setResumeInfo(res.data.data);
    });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
      <Form />
      <ResumePreview />
    </div>
  );
};
export default Edit;
