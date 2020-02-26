import React, { useState, useCallback } from "react";
// import logo from "./logo.svg";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./Gallery/Photos";

import "./App.scss";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Avatar from "./Avatar/Avatar";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <div className="App_body-container">
        <Avatar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>In progress!</h2>
      </div>
      <div className="footer_wrapper">
        {" "}
        <Footer />
      </div>
      <div>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  );
}

export default App;
