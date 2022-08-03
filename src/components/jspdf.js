import React from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Charts from './Charts';
import EdgesFlow from "./OverviewFlow";


function PDFContent() {
    const exportPDF = () => {
        const input = document.getElementById("App")
        html2canvas(input, {logging: true, letterRendering:1, useCORS: true}).then(canvas =>{
            const imgWidth = 200;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const imgData = canvas.toDataURL('reactflow/pdf');
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PDF', 0, 0, imgWidth, imgHeight);
            pdf.save("sample.pdf");
        })
    }

    function PDFprint(){
      window.print();
    }
  return (
    <div id="App">
        <button onClick={() => PDFprint()}>Print</button>
        {/* <Charts />     */}
        <EdgesFlow />
    </div>
  )
}
export default PDFContent;