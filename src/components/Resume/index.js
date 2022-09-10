import React from 'react';
import resume from '../../assets/resume.pdf'
import pageOne from '../../assets/images/resume-pg1'
import pageTwo from '../../assets/images/resume-pg2'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function Resume({ setShowResume }) {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(resume).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '';
                alink.click();
            })
        })
    }
    return (
      <section id="Resume">
        <div className="resCont">
          <div className="resImg">
            <FaCloudDownloadAlt
              className="downloadBtn"
              onClick={onButtonClick}
            ></FaCloudDownloadAlt>
            <MdClose
              className="closeRes"
              aria-label="Close modal"
              onClick={() => setShowResume(false)}
            ></MdClose>
    
            <img className="img-1" src={pageOne} alt="resume page one"></img>
            <img className="img-1" src={pageTwo} alt="reume page two"></img>
          </div>
        </div>
      </section>
    );
};
export default Resume;