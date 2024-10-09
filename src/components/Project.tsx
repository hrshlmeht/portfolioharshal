import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/hrshlmeht/Django_CRM" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/hrshlmeht/Django_CRM" target="_blank" rel="noreferrer"><h2>CRM Application</h2></a>
                <p>Developed a Customer Relationship Management Application using Djnago for backend and decorated using tailwind CSS.</p>
            </div>
            <div className="project">
                <a href="https://github.com/hrshlmeht/Pneumonia_ML" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/hrshlmeht/Pneumonia_ML" target="_blank" rel="noreferrer"><h2>Pneumionia Detecting ML</h2></a>
                <p>Designed, developed, and launched a Machine Learning app for detecting Pneumonia using Xray images. Used tensorflow for training and MongoDB for Database management</p>
            </div>
            <div className="project">
                <a href="https://github.com/hrshlmeht/Crawler" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/hrshlmeht/Crawler" target="_blank" rel="noreferrer"><h2>Data Extractor - Web Crawling </h2></a>
                <p>Developed a multithreaded application in python for crawling over the web. Application gives the associated links for input URL </p>
            </div>
            <div className="project">
                <a href="https://github.com/hrshlmeht/RealTimeCodeEditor" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/hrshlmeht/RealTimeCodeEditor" target="_blank" rel="noreferrer"><h2>Real time code Editor</h2></a>
                <p>This application allows the users to jump to resepctive coding room. At a time multiple users can be in a single room. Developed backend using Express and ReactJS for front end</p>
            </div>
            <div className="project">
                <a href="https://hrshlmeht.github.io/typing_speed_javascript/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hrshlmeht.github.io/typing_speed_javascript/" target="_blank" rel="noreferrer"><h2>Typing Speed test</h2></a>
                <p>Developed an application for a school where students can register and check their typing speed.Used firebase for database management and simple JS and CSS for UI enhacement. Developed an analytical board for mentors to look at the stats</p>
            </div>
        </div>
    </div>
    );
}

export default Project;