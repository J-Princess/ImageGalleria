import React, { useState } from "react";
import { Link } from "react-router-dom";
import Images from "./Image";
import Images1 from "./images/qingbao-meng-01_igFr7hd4-unsplash.jpg";
import Image1 from "./images/john-towner-CakC6u4d95g-unsplash.jpg";
import Image2 from "./images/mark-harpur-K2s_YE031CA-unsplash.jpg";
import Image3 from "./images/jonatan-pie-g6tqHx0ME1o-unsplash.jpg";
import Food from "./images/davide-cantelli-jpkfc5_d-DI-unsplash.jpg";
import Food1 from "./images/charlesdeluvio-D-vDQMTfAAU-unsplash.jpg";
import Food2 from "./images/alex-munsell-Yr4n8O_3UPc-unsplash.jpg";
import Food3 from "./images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg";
import Food5 from "./images/pexels-pixabay-47547.jpg";
import Food6 from "./images/eaters-collective-12eHC6FxPyg-unsplash.jpg";
import Image7 from "./images/pexels-pixabay-66898.jpg";
import Animal from "./images/pexels-devashish-gupta-15723624.jpg";
import Animal1 from "./images/francesco-ZxNKxnR32Ng-unsplash.jpg";
import Animal2 from "./images/gwen-weustink-I3C1sSXj1i8-unsplash.jpg";
import Animal3 from "./images/boris-smokrovic-lyvCvA8sKGc-unsplash.jpg";
import Food4 from "./images/chad-montano-MqT0asuoIcU-unsplash.jpg";
import Image4 from "./images/pexels-stein-egil-liland-3408744.jpg";
import Image5 from "./images/pexels-dorota-semla-8969237.jpg";
import Image6 from "./images/pexels-anthony-📷📹🙂-133459.jpg";

const MainBody = () => {
  const initialImages = [
    { id: "1", src: Images1, alt: "Image 1", category: "Nature" },
    { id: "3", src: Image1, alt: "Image 2", category: "Nature" },
    { id: "2", src: Animal, alt: "Image 1", category: "Nature" },
    { id: "4", src: Image2, alt: "Image 1", category: "Nature" },
    { id: "5", src: Food4, alt: "Image 1", category: "Food" },
    { id: "8", src: Image5, alt: "Image 2", category: "Nature" },
    { id: "6", src: Image6, alt: "Image 1", category: "Nature" },
    { id: "7", src: Image7, alt: "Image 2", category: "Animals" },
    { id: "9", src: Food, alt: "Image 1", category: "Food" },
    { id: "10", src: Food1, alt: "Image 2", category: "Animals" },
    { id: "11", src: Animal3, alt: "Image 1", category: "Animals" },
    { id: "12", src: Food2, alt: "Image 1", category: "Food" },
    { id: "15", src: Food3, alt: "Image 2", category: "Food" },
    { id: "16", src: Image4, alt: "Image 1", category: "Food" },
    { id: "13", src: Food5, alt: "Image 2", category: "Food" },
    { id: "17", src: Food6, alt: "Image 1", category: "Food" },
    { id: "14", src: Animal1, alt: "Image 2", category: "Animals" },
    { id: "18", src: Animal2, alt: "Image 1", category: "Animals" },
    { id: "19", src: Image3, alt: "Image 2", category: "Animals" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  const categories = ["Nature", "Food", "Animals"];
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);


    const filtered = initialImages.filter(
      (image) => category === "" || image.category === category
    );

    setFilteredImages(filtered);
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setSearchPerformed(false);


    const filtered = initialImages.filter(
      (image) =>
        (selectedCategory === "" || image.category === selectedCategory) &&
        image.category.toLowerCase().includes(query)
    );

    setFilteredImages(filtered);
  };

  const handleSearchButtonClick = () => {
    setSearchPerformed(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex">
            <h2 style={{ margin: "5px 20px" }}>Galleria</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex w-50 mx-auto" role="search">
              <input
                className="form-control me-2 text-primary one"
                type="search"
                placeholder="Search by tag..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                style={{ background: "transparent" }}
              />
              <button
                className="btn btn-outline-success mr-3"
                type="button"
                id="searchDropdown"
                onClick={handleSearchButtonClick}
              >
                Search
              </button>

              {searchPerformed && (
                <div className="dropdown mt-3 mx-3">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="searchDropdown"
                    data-bs-toggle={searchPerformed ? "dropdown" : ""}
                    aria-expanded={searchPerformed ? "true" : "false"}
                  >
                    Select an Image
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="searchDropdown"
                  >
                    {filteredImages.map((image) => (
                      <li key={image.id}>
                        <a className="dropdown-item" href="#">
                        
                          <Images src={image.src} alt={image.alt} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </form>

            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item ">
                <Link to="/" className="nav-link active " aria-current="page">
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainBody;
