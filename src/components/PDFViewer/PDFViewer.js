import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../../assets/TorresEricD_IT_resume_11072020.pdf";

const PDFViewer = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="d-flex justify-content-center">
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
        <Page pageNumber={pageNumber + 1} />
      </Document>
      {/*} <p>
        Page {pageNumber} of {numPages}
  </p> */}
    </div>
  );
};

export default PDFViewer;
