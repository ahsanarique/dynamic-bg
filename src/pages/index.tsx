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

export default function Home({ images }: any) {
  return (
    <main className="min-h-screen p-8">
      <div className="">
        <h1 className="my-4 pb-4 border-b-4 border-indigo-500/100 text-3xl text-center">
          Dynamic Background Colors Based on Image
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {images.length > 0 &&
            images.map((currentImg: imgData) => (
              <ImgComponent
                key={currentImg.id}
                img={currentImg.img}
                id={currentImg.id}
              />
            ))}

          {images.length === 0 && (
            <p className="font-lg text-center">No Image Added</p>
          )}
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const response = imgArr;
  const images = response;

  return {
    props: {
      images,
    },
  };
}
