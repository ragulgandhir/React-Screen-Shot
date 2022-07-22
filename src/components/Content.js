import React, { useState, useEffect, createRef } from "react";
import Text from "./Text";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { CDBIcon } from "cdbreact";
import CSVImg from "./csv.png";

const images = <img src={CSVImg} />;
function Download() {
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot();

  const download = (image, { name = "img", extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const getImage = () => takeScreenShot(ref.current);

  useEffect(() => {
    if (image) {
      download(image, { name: "lorem-ipsum", extension: "png" });
    }
  }, [image]);

  return (
    <div>
      <div
        ref={ref}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <Text />
      </div>
      <button style={{ color: "#EAB308" }} onClick={getImage}>
        <CDBIcon icon="download" />
        Download
      </button>
    </div>
  );
}
export default Download;
