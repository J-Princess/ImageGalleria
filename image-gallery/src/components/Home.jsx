import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Nature from './Nature';
import Animals from './Animals';
import Foods from './Foods';

const Home = () => {
  return (
    <>
    <div className="container-fluid">
      <Header />
  <Carousel/>
  <div className="container fluid my-3">
  

    <h2 className="text-start">Nature</h2>
    <Nature/>
  <h2 className="text-start">Animals</h2>
  <Animals/>
  <h2 className="text-start">Food</h2>
  <Foods/>
    </div>
    <Footer />
  </div>
   

    </>
  );
};

export default Home;
