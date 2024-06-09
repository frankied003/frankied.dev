import React, { useState, useEffect } from "react";

/**
 * Library imports.
 */
import moment from "moment-timezone";

export default function Footer() {
  const [myTime, setMyTime] = useState(null);
  const [yourTime, setYourTime] = useState(null);

  useEffect(() => {
    // Set the local time using the user's local timezone
    setYourTime(moment().format("hh:mm:ss A"));

    // Use a setInterval to keep the times updated every second
    const interval = setInterval(() => {
      // For "My Time", we'll use "America/New_York" for Eastern Time
      setMyTime(moment().tz("America/New_York").format("hh:mm:ss A"));
      setYourTime(moment().format("hh:mm:ss A"));
    }, 1000); // Update every second

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="footer-container">
      <div className="top-footer-container">
        <p className="title">Frankied.dev</p>
      </div>
      <div className="bottom-footer-container">
        <p className="copyright">©2024 Frankied.dev, All Rights Reserved</p>
        <div className="time-container">
          <p className="time">
            My Time: <strong>{myTime}</strong>
          </p>
          <p className="time">
            Your Time: <strong>{yourTime}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
