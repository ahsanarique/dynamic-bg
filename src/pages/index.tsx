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

export default function Home() {
  const [currentImgSet, setCurrentImgSet] = useState<StaticImageData[] | []>(
    []
  );

  useEffect(() => {
    const imgArr = [
      img01,
      img02,
      img03,
      img04,
      img05,
      img06,
      img07,
      img08,
      img09,
      img10,
      img11,
      img12,
    ];

    setCurrentImgSet(imgArr);
  }, []);

  return (
    <main className="min-h-screen p-8">
      <div className="">
        <h1 className="my-4 pb-4 border-b-4 border-indigo-500/100 text-3xl text-center">
          Dynamic Background Colors Based on Image
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {currentImgSet.length > 0 ? (
          currentImgSet.map((currentImg: StaticImageData) => (
            <ImgComponent key={currentImg.src} img={currentImg} />
          ))
        ) : (
          <p>No Image Added</p>
        )}
      </div>
    </main>
  );
}
