import React from 'react';
import { useEvents } from '../../../context/EventProvider';
import './AllEvents.css';

const AllEvents = () => {
    const { events } = useEvents();
    // console.log(events);
    return (
        <div className="events-container">
            <div className="all-events">
                {
                    events.length > 0 ? (
                        events.map(event => (
                            <div key={event.id}>
                                <div className="single-event">
                                    <img width="300px" height="300px" src={event.image} alt="" />
                                    <h5 className="py-4">{event.title}</h5>
                                </div>
                            </div>
                        ))
                    ) : ''
                }
            </div>
        </div>
    );
};

export default AllEvents;