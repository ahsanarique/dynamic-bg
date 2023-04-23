import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

type imgProps = {
  id: string;
  img: StaticImageData;
};

const ImgComponent = ({ id, img }: imgProps) => {
  const [bgColor, setBgColor] = useState<string>("white");

  useEffect(() => {
    const getAvarageRGB = (imgElement: any) => {
      const blockSize = 5;
      const defaultRGB = { r: 0, g: 0, b: 0 };
      const canvas = document.createElement("canvas");
      const context = canvas.getContext && canvas.getContext("2d");

      let data, width, height, length;
      let i = -4;
      let rgb = { r: 0, g: 0, b: 0 };
      let count = 0;

      if (!context) {
        return defaultRGB;
      }

      height = canvas.height =
        imgElement.naturalHeight ||
        imgElement.offsetHeight ||
        imgElement.height;

      width = canvas.width =
        imgElement.naturalWidth || imgElement.offsetWidth || imgElement.width;

      context.drawImage(imgElement, 0, 0);

      try {
        data = context.getImageData(0, 0, width, height);
      } catch (e) {
        return defaultRGB;
      }

      length = data.data.length;

      //ts ignore
      while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
      }

      rgb.r = ~~(rgb.r / count);
      rgb.g = ~~(rgb.g / count);
      rgb.b = ~~(rgb.b / count);

      return rgb;
    };

    const rgb = getAvarageRGB(document.getElementById(img.src));

    setBgColor(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`);
  }, [img.src]);

  return (
    <div className="img-wrapper" style={{ background: bgColor }}>
      <Image src={img} alt="placeholder" id={id} />
    </div>
  );
};

export default ImgComponent;
