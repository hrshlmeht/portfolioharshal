import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Educational Qualifications</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sept 2022  - April 2024 "
            iconStyle={{ background: '#3010ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUserGraduate} />}
          >
            <h3 className="vertical-timeline-element-title">Masters of Engineering - Electrical and Computer</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Ottawa , Canada </h4>
            <h4 className="vertical-timeline-element-subtitle">CGPA - 3.9/4.0 </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2020"
            iconStyle={{ background: '#3010ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUserGraduate} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelors of Engineering - Information Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Pune , India</h4>
            <h4 className="vertical-timeline-element-subtitle">CGPA - 8.6/10.0</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;