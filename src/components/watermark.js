import "./style.css";
import { useRef, useEffect, useState } from "react";

export default function WaterMark() {
  const imgContainerRef = useRef(null);
  const [watermark, setWatermark] = useState("watermarked");

  useEffect(() => {
    const imgContainerSelector = imgContainerRef.current.querySelector(
      ".watermarked"
    );

    console.log("watermark ", watermark);

    if (watermark) {
      imgContainerSelector.dataset.watermark = (
        imgContainerSelector.dataset.watermark + "   "
      ).repeat(300);
    } else {
      imgContainerSelector.dataset.watermark = "";
    }
  }, [watermark]);

  const removeWatermark = () => {
    setWatermark(false);
  };

  return (
    <div className="App" ref={imgContainerRef}>
      <h1>Watermark Image in React using CSS</h1>
      <h2>Toggle watermark to see some magic happen!</h2>

      <button onClick={removeWatermark}>Remove watermark</button>
      <br />
      <br />

      <div className="watermarked" data-watermark="LOGO">
        <img
          src="https://source.unsplash.com/Dm-qxdynoEc/800x799"
          alt="mushroom"
        />
      </div>
    </div>
  );
}
