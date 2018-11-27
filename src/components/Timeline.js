import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import Timestamp from './Timestamp';
import timelineData from './../data/timeline.json';


const Timeline = (props) => {
  // Fill in your code here

  //const events = timelineData.events
  
  const personCollection = props.events.map((person, i) => {
    return <TimelineEvent key={i} fullName={person.person} status={person.status} timestamp={person.timeStamp} />
  });


  return (
    <section className="timeline">
        {personCollection}
    </section>
  );
};

export default Timeline;
