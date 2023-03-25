import React, { useState } from "react";
import nextIcon from "../../images/next-more-icon.png";
import "./ImageSlider.css";

const ImageSilder = (props) => {
  const { imagesArray, freeze } = props;

  const [imageShown, setImageShown] = useState(0);
  const [scrollButtons, setShowScrolls] = useState(false);

  const nextImage = () => {
    if (imageShown + 1 < imagesArray.length) {
      setImageShown(imageShown + 1);
    }
  };

  const previousImage = () => {
    if (imageShown - 1 >= 0) {
      setImageShown(imageShown - 1);
    }
  };

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="images-slider-container"
      onMouseOver={() => setShowScrolls(true)}
      onMouseLeave={() => setShowScrolls(false)}
    >
      <div className="image-slider-video-wrap">
        <img src={imagesArray[imageShown]} alt="" className="my_store_image" />
      </div>

      {!freeze && imagesArray.length !== 1 ? (
        <>
          {scrollButtons ? (
            <>
              <div className="image-slider-buttons-wrapper">
                <div>
                  <button
                    className="button-next-image-left"
                    onClick={previousImage}
                  >
                    <img src={nextIcon} alt="" />
                  </button>
                  <button
                    className="button-next-image-right"
                    onClick={nextImage}
                  >
                    <img src={nextIcon} alt="" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {!freeze && imagesArray.length !== 1 ? (
        <div className="image-sliders-dots-wrap">
          {imagesArray.map((image, id) => (
            <div
              className={
                id === imageShown
                  ? "image-slider-dots current-dot"
                  : "image-slider-dots"
              }
              onClick={() => setImageShown(id)}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageSilder;