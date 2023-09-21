import React, { Suspense } from "react";
import Food from "./images/davide-cantelli-jpkfc5_d-DI-unsplash.jpg";
import Food1 from "./images/charlesdeluvio-D-vDQMTfAAU-unsplash.jpg";
import Food2 from "./images/alex-munsell-Yr4n8O_3UPc-unsplash.jpg";
import Food3 from "./images/eaters-collective-12eHC6FxPyg-unsplash.jpg";

const Foods  = () => {
  return (
    <>
     <Suspense fallback={<div>Loading</div>}>
    <div className="container card-group">
      <div
        className="card p-1 text-start m-2 col-sm-4 border-0"
        style={{ width: "18rem" }}
        data-testid="movie-card"
      >
        <img src={Food}className="card-img-top" alt="..." style={{height: "200px"}}/>
        <div className="card-body">
          <p className="card-text" data-testid="movie-release-date"></p>
        </div>
      </div>
      <div
        className="card p-1 text-start m-2 col-sm-4 border-0"
        style={{ width: "18rem" }}
        data-testid="movie-card"
      >
        <img src={Food1}className="card-img-top" alt="..." style={{height: "200px"}}/>
        <div className="card-body">
          <p className="card-text" data-testid="movie-release-date"></p>
        </div>
      </div>
      <div
        className="card p-1 text-start m-2 col-sm-4 border-0"
        style={{ width: "18rem" }}
        data-testid="movie-card"
      >
        <img src={Food2}className="card-img-top" alt="..." style={{height: "200px"}}/>
        <div className="card-body">
          <p className="card-text" data-testid="movie-release-date"></p>
        </div>
      </div>
      <div
        className="card p-1 text-start m-2 col-sm-4 border-0"
        style={{ width: "18rem" }}
        data-testid="movie-card"
      >
        <img src={Food3}className="card-img-top" alt="..." style={{height: "200px"}}/>
        <div className="card-body">
          <p className="card-text" data-testid="movie-release-date"></p>
        </div>
      </div>
      </div>
      </Suspense>
    </>
    
  );
};


export default Foods;
