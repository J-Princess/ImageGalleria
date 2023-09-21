import MainBody from "./MainBody";
import Footer from "./Footer";
import React from "react";
import ImageCate from './ImageCate';



const UserDef = () => {

  return (
    <>
      <MainBody />


<div className="container-fluid my-3 ">
<div className="container text-start my-3">
    <h2>Welcome</h2>
    <p style={{ fontSize: "20px"}}>Drag image and Move</p>
  </div>
<ImageCate/>
        </div>
      <Footer />
    </>
  );
};

export default UserDef;
