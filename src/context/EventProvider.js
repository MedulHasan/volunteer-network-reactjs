import React, { useState, useContext, createContext } from 'react';
import { useEffect } from 'react';

const EventContext = createContext();

export const useEvents = () => {
    return useContext(EventContext);
}

const EventProvider = ({ children }) => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:8888/events';
        fetch(url)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    const value = {
        events
    };

    return (
        <EventContext.Provider value={value}>
            {children}
        </EventContext.Provider>
    );
};

export default EventProvider;