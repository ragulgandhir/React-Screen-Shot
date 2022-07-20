import React, { useState, createRef }  from 'react';
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarFooter,
    CDBBtn, 
    CDBIcon, 
    CDBContainer
  } from 'cdbreact';

  import { useScreenshot, createFileName } from "use-react-screenshot";

  const Sidebar = () => {
    const ref = createRef(null);

    const [image, takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
      });

      const download = (image, { name = "img", extension = "jpg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
      };

      const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

    return (
        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0" ref={ref}>
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={'https://seeklogo.com/images/B/butterfly-logo-0A00378822-seeklogo.com.png'}
                alt=""
                style={{ width: '30px' }}
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
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{ padding: '20px 5px' }}
          >
            Sign Up
          </div>
          <CDBContainer>
            <CDBBtn color="warning" onClick={downloadScreenshot}><CDBIcon icon="download" />Download</CDBBtn>
          </CDBContainer>
        </CDBSidebarFooter>
        </CDBSidebar>
    )
  };
  
  export default Sidebar;