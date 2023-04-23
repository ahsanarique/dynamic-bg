import ImgList from "@/components/ImgList";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="">
        <h1 className="my-4 pb-4 border-b-4 border-indigo-500/100 text-3xl text-center">
          Dynamic Background Colors Based on Image
        </h1>
      </div>
      <div>
        <ImgList />
      </div>
    </main>
  );
}
