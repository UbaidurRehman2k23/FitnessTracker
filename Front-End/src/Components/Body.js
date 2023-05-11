import React from "react";
import "./Body.css";


function Body() {
  return (
    <div>
      <div className="text-center col-md-12 p-5 bodycolor">
        <h2>Start Tracking Your Progress From Today</h2>
        <div className="container col-md-10 d-flex align-items-center mt-5 mb-5">
          <div className="col-md-4 border bg-dark p-4 shadow-lg rounded">
            <h4>Easy Sign up & Login</h4>
            <p>Make your account to track your fitness</p>
            <button className="btn btn-outline-primary bodycolor border col-md-12">Join Us</button>
          </div>
          <div className="col-md-4 border bg-dark p-4 shadow-lg rounded ml-3">
            <h4>Add Activities</h4>
            <p>You can add your activity daily and for the coming week</p>
            <button className="btn btn-outline-primary bodycolor border col-md-12">Make your Fitness Plan</button>
          </div>
          <div className="col-md-4 border bg-dark p-4 shadow-lg rounded ml-3">
            <h4>Show Activities</h4>
            <p>You can view activities and plan your next activity</p>
            <button className="btn btn-outline-primary bodycolor border col-md-12">View your Workout Schedule</button>          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
