import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import img01 from "../assets/1.jpg";
import img02 from "../assets/2.jpg";
import img03 from "../assets/3.jpg";
import img04 from "../assets/4.jpg";
import img05 from "../assets/5.jpg";
import img06 from "../assets/6.jpg";
import img07 from "../assets/7.jpg";
import img08 from "../assets/8.jpg";
import img09 from "../assets/9.png";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import ImgComponent from "../components/ImgComponent";

type imgData = {
  id: string;
  img: StaticImageData;
};

const ImgList = () => {
  const [currentImgSet, setCurrentImgSet] = useState<imgData[] | []>([]);

  useEffect(() => {
    const imgArr = [
      { id: img01.src, img: img01 },
      { id: img02.src, img: img02 },
      { id: img03.src, img: img03 },
      { id: img04.src, img: img04 },
      { id: img05.src, img: img05 },
      { id: img06.src, img: img06 },
      { id: img07.src, img: img07 },
      { id: img08.src, img: img08 },
      { id: img09.src, img: img09 },
      { id: img10.src, img: img10 },
      { id: img11.src, img: img11 },
      { id: img12.src, img: img12 },
    ];

    setCurrentImgSet(imgArr);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {currentImgSet.length > 0 ? (
        currentImgSet.map((currentImg: imgData) => (
          <ImgComponent
            key={currentImg.id}
            img={currentImg.img}
            id={currentImg.id}
          />
        ))
      ) : (
        <p>No Image Added</p>
      )}
    </div>
  );
};

export default ImgList;
