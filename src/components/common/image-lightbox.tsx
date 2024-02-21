import React, { useState } from "react";
import { PhotoSlider } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

// props
type IProps = {
  images: string[];
  visible: boolean;
  index: number;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};
const ImageLightbox = ({
  images,
  visible,
  index,
  setVisible,
  setIndex,
}: IProps) => {
  return (
      <PhotoSlider
        images={images.map((item) => ({ src: item, key: item }))}
        visible={visible}
        onClose={() => setVisible(false)}
        index={index}
        onIndexChange={setIndex}
      />
  );
};

export default ImageLightbox;
