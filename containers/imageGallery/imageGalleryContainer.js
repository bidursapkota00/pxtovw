import React from "react";
import styles from "./styles/style.module.css";
import Image from "next/image";

import image0 from "./images/image0.jpeg";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpeg";
import image6 from "./images/image6.webp";
import { Header } from "components/header";

export const ImageGalleryContainer = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.imageGallery}>
        <div className={styles.imageContainer}>
          {/*When priority is true, the image will be considered high priority and preload.
                 Lazy loading is automatically disabled for images using priority.*/}
          <Image
            src={image0}
            width={400}
            height={400}
            priority={false}
            placeholder="blur"
            alt={"image"}
          />
          <Image
            src={image1}
            width={400}
            height={400}
            priority={false}
            placeholder="blur"
            alt={"image"}
          />
          <Image
            src={image2}
            width={400}
            height={400}
            priority={false}
            placeholder="blur"
            alt={"image"}
          />
          <Image
            src={image3}
            width={400}
            height={400}
            priority={false}
            placeholder="blur"
            alt={"image"}
          />
          <Image
            src={image4}
            width={400}
            height={400}
            priority={false}
            placeholder="blur"
            alt={"image"}
          />
          <Image
            src={image5}
            width={400}
            height={400}
            priority={false}
            placeholder="blur"
            alt={"image"}
          />
          <Image
            src={image6}
            width={400}
            height={400}
            priority={false}
            placeholder="blur"
            alt={"image"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
