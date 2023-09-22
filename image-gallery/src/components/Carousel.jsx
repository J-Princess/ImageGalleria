import SlidImg from "./images/walls-io-EN-x8CRolk4-unsplash.jpg";
import SliderImg from "./images/pexels-ann-h-15387085.jpg";
import Slid2Img from "./images/pexels-vladyslav-dukhin-296649.jpg";
import Slid3Img from "./images/pexels-mike-bird-1100008.jpg";


const Carousel = () => {

  return(
    <>
        <div className=" pt-2 container-fluid d-block" >
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-inner" style={{ height: "600px"}}>
            <div className="carousel-item active hero" data-bs-interval="1000">
              <img src={SlidImg} className="d-block w-100" alt="... " style={{ opacity: '0.5'}}/>
              <div className=" carousel-caption d-none d-md-block" style={{ height: "550px", color: "black", fontSize: "40px"}}>
                <h1>Galleria</h1>
                <p>
                  Welcome to Galleria. A friendly image gallery that allows you to re-order and align images.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000" >
              <img src={SliderImg} className="d-block w-100" alt="... " style={{ opacity: '0.5'}}/>
              <div className="hero carousel-caption d-none d-md-block" style={{ height: "550px", color: "black", fontSize: "40px" }}>
                <h5>How to Align Images</h5>
                <p>
                  Procede to the Signup Page to enable you get access to move images. 
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={Slid2Img} className="d-block w-100" alt="... " style={{ opacity: '0.5'}}/>
              <div className="hero carousel-caption d-none d-md-block" style={{ height: "550px", color: "black", fontSize: "40px"}}>
                <h5>Voila!</h5>
                <p>
                Simply click on the image you want to move and move it to where you would like it to be.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <img src={Slid3Img} className="d-block w-100" alt="... " style={{ opacity: '0.5'}}/>
              <div className="hero carousel-caption d-none d-md-block " style={{ height: "550px", color: "black", fontSize: "40px"}}>
                <h5>That's All'</h5>
                <p>
                And just like that, you are done. Yay.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Carousel