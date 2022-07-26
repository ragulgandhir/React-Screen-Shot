import React from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Charts from './Charts';


function PDFContent() {
    const exportPDF = () => {
        const input = document.getElementById("App")
        html2canvas(input, {logging: true, letterRendering:1, useCORS: true}).then(canvas =>{
            const imgWidth = 200;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const imgData = canvas.toDataURL('img/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save("sample.pdf");
        })
    }
  return (
    <div id="App">
        <button onClick={() => exportPDF()}>Print</button>
        <Charts />    
    </div>
  )
}
export default PDFContent;