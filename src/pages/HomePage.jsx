import useGetHomePicture from "../hooks/useGetHomePicture";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { homePicture, loading } = useGetHomePicture();
  const [bgImage, setBgImage] = useState("../assets/homeAssets/alt-home-bg.jpg");

  useEffect(() => {
    if (homePicture) {
      setBgImage(homePicture.url);
      console.log(`homePicture = ${bgImage}`);
    }
  }, [homePicture, bgImage]);

  if (loading) {
    return (
      <div className="flex-grow flex items-center justify-center h-full">
        <span className="loading loading-spinner loading-lg  text-warning"></span>
      </div>
    );
  }

  return (
    <div className="flex-grow">
      <div className="hero h-full bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="h-full w-full bg-transparent"></div>
        <div className="hero-content text-center">
          <div className="max-w-lg bg-black bg-opacity-40 p-8 rounded-box">
            <h1 className="text-7xl font-bold text-white">Hello there!</h1>
            <p className="py-6 text-lg text-white font-bold">
              Welcome to Anthas Prog React Learning Journey.
              <br />
              Start by picking an option in the nav menu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
