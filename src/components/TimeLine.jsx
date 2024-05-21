import React from 'react'
import { TbLetterM, TbNumber1, TbNumber2, TbNumber3, TbNumber4, TbNumber5, TbNumber6 } from "react-icons/tb";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const TimeLine = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#eeeeee', color: '#000000' }}
                contentArrowStyle={{ borderRight: '7px solid  #eeeeee' }}
                date="The Flow"
                iconStyle={{ background: '#eeeeee', color: '#000000' }}
                icon={<TbLetterM />}
            >
                <ul>
                    <li>Our starts</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#eeeeee', color: '#000000' }}
                contentArrowStyle={{ borderRight: '7px solid  #eeeeee' }}
                date="M1-Studying the Idea"
                iconStyle={{ background: '#eeeeee', color: '#000000' }}
                icon={<TbNumber1 />}
            >
                <h3 className="vertical-timeline-element-title font-semibold">M2</h3>
                <ul className='font-thin'>
                    <li>Understanding the problem & Brainstorming the Solutions</li>
                    <li>Finalizing the Idea</li>
                    <li>Defining the Project  and Assigning roles</li>
                    <li>Creating the Project Plan & Timeline</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#eeeeee', color: '#000000' }}
                contentArrowStyle={{ borderRight: '7px solid  #eeeeee' }}
                date="M2-Development & Feedback"
                iconStyle={{ background: '#eeeeee', color: '#000000' }}
                icon={<TbNumber2 />}
            >
                <h3 className="vertical-timeline-element-title font-semibold">M1</h3>
                <ul className='font-thin'>
                    <li>MVP Development</li>
                    <li>Review and Feedback from the inhouse Users, Domain Expert and Program managers </li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#eeeeee', color: '#000000' }}
                contentArrowStyle={{ borderRight: '7px solid  #eeeeee' }}
                date="M3-Testing"
                iconStyle={{ background: '#eeeeee', color: '#000000' }}
                icon={<TbNumber3 />}
            >
                <h3 className="vertical-timeline-element-title font-semibold">M3</h3>
                <ul className='font-thin'>
                    <li>Initial Testing – Features & Functionality. Changes based on Feedback & Improvement</li>
                    <li>Review and Feedback from the inhouse Users, Domain Expert and program managers</li>
                    <li>Preparing for Deployment on field with the Customers / Community</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#eeeeee', color: '#000000' }}
                contentArrowStyle={{ borderRight: '7px solid  #eeeeee' }}
                date="M4-Deployment"
                iconStyle={{ background: '#eeeeee', color: '#000000' }}
                icon={<TbNumber4 />}
            >
                <h3 className="vertical-timeline-element-title font-semibold">M4</h3>
                <ul className='font-thin'>
                    <li>Deploying the project within the Community. Seeking Feedback.</li>
                    <li>Make necessary changes, if any and finalizing the Deployment</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#eeeeee', color: '#000000' }}
                contentArrowStyle={{ borderRight: '7px solid  #eeeeee' }}
                date="M5-Validation"
                iconStyle={{ background: '#eeeeee', color: '#000000' }}
                icon={<TbNumber5 />}
            >
                <h3 className="vertical-timeline-element-title font-semibold">M5</h3>
                <ul className='font-thin'>
                    <li>Preparing the Validation Report</li>
                    <li>Review and Feedback from our Project Coordinators</li>
                    <li>Presentation to our Panel</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#eeeeee', color: '#000000' }}
                contentArrowStyle={{ borderRight: '7px solid  #eeeeee' }}
                date="M6-Launch"
                iconStyle={{ background: '#eeeeee', color: '#000000' }}
                icon={<TbNumber6 />}
            >
                <h3 className="vertical-timeline-element-title font-semibold">M6</h3>
                <ul className='font-thin'>
                    <li>Final Evaluation and release</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: '#eeeeee', color: '#000000' }}
                icon={<TbLetterM />}
            />
        </VerticalTimeline>
    )
}

export default TimeLine




