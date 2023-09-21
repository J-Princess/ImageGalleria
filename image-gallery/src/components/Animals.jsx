import React, { Suspense } from "react";
import Animal from "./images/pexels-devashish-gupta-15723624.jpg";
import Animal1 from "./images/francesco-ZxNKxnR32Ng-unsplash.jpg";
import Animal2 from "./images/gwen-weustink-I3C1sSXj1i8-unsplash.jpg";
import Animal3 from "./images/boris-smokrovic-lyvCvA8sKGc-unsplash.jpg";

const Animals = () => {
  return (
    <>
     <Suspense fallback={<div>Loading</div>}>
    <div className="container card-group">
      <div
        className="card p-1 text-start m-2 col-sm-4 border-0"
        style={{ width: "18rem" }}
        data-testid="movie-card"
      >
        <img src={Animal}className="card-img-top" alt="..." style={{height: "200px"}}/>
        <div className="card-body">
          <p className="card-text" data-testid="movie-release-date"></p>
        </div>
      </div>
      <div
        className="card p-1 text-start m-2 col-sm-4 border-0"
        style={{ width: "18rem" }}
        data-testid="movie-card"
      >
        <img src={Animal1}className="card-img-top" style={{height: "200px"}} alt="..." />
        <div className="card-body">
          <p className="card-text" data-testid="movie-release-date"></p>
        </div>
      </div>
      <div
        className="card p-1 text-start m-2 col-sm-4 border-0"
        style={{ width: "18rem" }}
        data-testid="movie-card"
      >
        <img src={Animal2}className="card-img-top" alt="..." style={{height: "200px"}}/>
        <div className="card-body">
          <p className="card-text" data-testid="movie-release-date"></p>
        </div>
      </div>
      <div
        className="card p-1 text-start m-2 col-sm-4 border-0"
        style={{ width: "18rem" }}
        data-testid="movie-card"
      >
        <img src={Animal3}className="card-img-top" alt="..." style={{height: "200px"}}/>
        <div className="card-body">
          <p className="card-text" data-testid="movie-release-date"></p>
        </div>
      </div>
      </div>
      </Suspense>
    </>
  );
};


export default Animals;
