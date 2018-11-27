import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // Fill in your code here

  const name = props.fullName

  return (
    <section className="timeline-event">

      <div className="event-person">
        {name}
      </div>

      <div className="event-status">
        {props.status}
      </div>
      <div className="event-time">
        <Timestamp time={props.timestamp} />
      </div>

    </section>
  )
};

export default TimelineEvent;
