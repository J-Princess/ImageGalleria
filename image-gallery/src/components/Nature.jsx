import React, { Suspense } from "react";
import Image from "./images/qingbao-meng-01_igFr7hd4-unsplash.jpg";
import Image1 from "./images/john-towner-CakC6u4d95g-unsplash.jpg";
import Image2 from "./images/mark-harpur-K2s_YE031CA-unsplash.jpg";
import Image3 from "./images/jonatan-pie-g6tqHx0ME1o-unsplash.jpg";

const Nature = () => {
  return (
    <>
     <Suspense fallback={<div>Loading</div>}>
    <div className="container card-group">
      <div
        className="card p-1 text-start m-2 col-sm-4 border-0" 
        style={{ width: "18rem" }}
        data-testid="movie-card"
      >
        <img src={Image}className="card-img-top" alt="..." style={{height: "200px"}}/>
        <div className="card-body">
          <p className="card-text" data-testid="movie-release-date"></p>
        </div>
      </div>
      <div
        className="card p-1 text-start m-2 col-sm-4 border-0"
        style={{ width: "18rem" }}
        data-testid="movie-card"
      >
        <img src={Image1}className="card-img-top" alt="..." style={{height: "200px"}}/>
        <div className="card-body">
          <p className="card-text" data-testid="movie-release-date"></p>
        </div>
      </div>
      <div
        className="card p-1 text-start m-2 col-sm-4 border-0"
        style={{ width: "18rem" }}
        data-testid="movie-card"
      >
        <img src={Image2}className="card-img-top" alt="..." style={{height: "200px"}}/>
        <div className="card-body">
          <p className="card-text" data-testid="movie-release-date"></p>
        </div>
      </div>
      <div
        className="card p-1 text-start m-2 col-sm-4 border-0"
        style={{ width: "18rem" }}
        data-testid="movie-card"
      >
        <img src={Image3}className="card-img-top" alt="..." style={{height: "200px"}}/>
        <div className="card-body">
          <p className="card-text" data-testid="movie-release-date"></p>
        </div>
      </div>
      </div>
      </Suspense>
    </>
  );
};


export default Nature;
