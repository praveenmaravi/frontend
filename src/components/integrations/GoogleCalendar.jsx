// frontend/src/components/integrations/GoogleCalendar.jsx

import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login'; // Google login library
import axios from 'axios';

const GoogleCalendar = () => {
  const [events, setEvents] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  // Load Google API client
  useEffect(() => {
    window.gapi.load('client:auth2', initClient);
  }, []);

  const initClient = () => {
    window.gapi.client.init({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      scope: 'https://www.googleapis.com/auth/calendar.readonly',
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
    }).then(() => {
      const authInstance = window.gapi.auth2.getAuthInstance();
      setIsAuthenticated(authInstance.isSignedIn.get());
      if (authInstance.isSignedIn.get()) {
        setAuthToken(authInstance.currentUser.get().getAuthResponse().access_token);
      }
    });
  };

  const handleLoginSuccess = (response) => {
    const token = response.tokenId;
    setAuthToken(token);
    setIsAuthenticated(true);
    fetchCalendarEvents(token);
  };

  const fetchCalendarEvents = (token) => {
    axios.get('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      setEvents(response.data.items);
    })
    .catch(error => {
      console.error("Error fetching calendar events:", error);
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEvents([]);
    setAuthToken(null);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginSuccess}
          cookiePolicy={'single_host_origin'}
        />
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <h2>Your Google Calendar Events</h2>
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                <strong>{event.summary}</strong><br />
                {event.start.dateTime ? `Start: ${new Date(event.start.dateTime).toLocaleString()}` : `All day event`}<br />
                {event.end.dateTime ? `End: ${new Date(event.end.dateTime).toLocaleString()}` : `All day event`}<br />
                <a href={event.htmlLink} target="_blank" rel="noopener noreferrer">View in Google Calendar</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GoogleCalendar;
