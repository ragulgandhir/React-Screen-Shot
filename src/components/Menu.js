import React, { useState, createRef, useEffect } from "react";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarFooter,
  CDBIcon,
  CDBContainer
} from "cdbreact";
import { useScreenshot, createFileName } from "use-react-screenshot";
import CSVImg from "./csvSmall.png";

const images = <img src={CSVImg} alt="logo.png"/>;
const Sidebar = () => {
  const ref = createRef(null);

  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if(showImage) {
      takeScreenShot(ref.current).then(download);
      setTimeout(() => {
        setShowImage(false)
      }, 0.5);
  }
}, [showImage]);

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = (e) => {
    e.preventDefault();
    // takeScreenShot(ref.current).then(download);
    setShowImage(true);
  }
  return (
    <>
    <CDBContainer>
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0" ref={ref}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          <div
            className="container"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={
                "https://seeklogo.com/images/B/butterfly-logo-0A00378822-seeklogo.com.png"
              }
              alt=""
              style={{ width: "30px" }}
            />
            <h6 className="ml-2">BABYCARE ™</h6>
          </div>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Product</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line" iconType="solid">
              Report
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter>
          <CDBSidebarMenuItem>
            {/* {showImage ? images : ""} */}
            {/* <img
              src={
                "#####"
              }
              alt=""
              style={{ width: "30px" }}
            /> */}
            {showImage && <img src={CSVImg} alt="logo.png" />}
          </CDBSidebarMenuItem>
        </CDBSidebarFooter>
      </CDBSidebar>
      </CDBContainer>
      <button style={{ color: "#EAB308" }} onClick={downloadScreenshot}>
        <CDBIcon icon="download" />
        Download
      </button>
    </>
  );
};

export default Sidebar;
