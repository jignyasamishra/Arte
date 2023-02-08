import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiPaintedPottery } from 'react-icons/gi';
import { GiQueenCrown } from 'react-icons/gi';
import { GiWoodFrame} from 'react-icons/gi';
import { GiPaintBrush} from 'react-icons/gi';




export default function Timeline() {
    return (
        <div id='timelinediv' style={{position:"relative",top:"-216px"}} >
            <VerticalTimeline lineColor={"#533710" } >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#98651E', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #98651E' }}
                    date="2011 - present"
                    iconStyle={{ background: '#6E4B1F', color: '#fff' }}
                    icon={<GiPaintedPottery />}
                >
                    <h3 className="vertical-timeline-element-title">hoii</h3>
                    <h4 className="vertical-timeline-element-subtitle">yo</h4>
                    <p>
                        hey
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#98651E', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #98651E' }}
                    date="2010 - 2011"
                    iconStyle={{ background: '#6E4B1F', color: '#fff' }}
                    icon={<GiQueenCrown/>}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#98651E', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #98651E' }}
                    date="2008 - 2010"
                    iconStyle={{ background: '#6E4B1F', color: '#fff' }}
                    icon={<GiWoodFrame />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#98651E', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #98651E' }}
                    date="2006 - 2008"
                    iconStyle={{ background: '#6E4B1F', color: '#fff' }}
                    icon={<GiPaintBrush/>}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#98651E', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #98651E' }}
                    date="April 2013"
                    iconStyle={{ background: '#6E4B1F', color: '#fff' }}
                    icon={<GiPaintBrush />}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                        Strategy, Social Media
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#98651E', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #98651E' }}
                    date="November 2012"
                    iconStyle={{ background: '#6E4B1F', color: '#fff' }}
                    icon={<GiPaintBrush/>}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#98651E', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #98651E' }}
                    date="2002 - 2006"
                    iconStyle={{ background: '#6E4B1F', color: '#fff' }}
                    icon={<GiPaintBrush />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: '#6E4B1F', color: '#fff' }}
                    icon={<GiPaintBrush />}
                />
            </VerticalTimeline>
        </div>
    )
}
