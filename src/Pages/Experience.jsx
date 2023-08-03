import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
        className="vertical-timeline-element-education"
        date='2015-2019'
        iconStyle={{background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">University year</h3>
          <p>I finnished Agronomy studies</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element-education"
        date='2019-2019'
        iconStyle={{background: "#3e497a", color: "#fff" }}
        icon={<AgricultureIcon/>}
        >
          <h3 className="vertical-timeline-element-title">Junior Agronomist</h3>
          <p>Junior agronomist position</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element-education"
        date='2019-2023'
        iconStyle={{background: "#3e497a", color: "#fff" }}
        icon={<LocalShippingIcon/>}
        >
          <h3 className="vertical-timeline-element-title">Logistics</h3>
          <p>I was working as a dispatcher for couple of years.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience