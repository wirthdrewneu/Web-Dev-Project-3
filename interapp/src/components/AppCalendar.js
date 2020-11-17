import React, { useState } from "react";
/*import { render } from "react-dom";*/
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import EventForm from "./EventForm.js";
import "../css/designs.css"
moment.locale("en-hi");
const localizer = momentLocalizer(moment);
//empty object for now

function AppCalendar(props) {
 const [eventdata, setevents] = useState([]);
  console.log("Get props", props.invites);

  return (
    <main className="container-fluid full-height main-background">
      <div className="container" id = "maincontent"> 
        <div className="card-deck mb-3 text-center">
          <div className="card mb-6 shadow-sm">
            <div className="card-header">
              <h2 className="my-0 font-weight-normal">Calendar</h2>
            </div>    
            <div className="align-items-center p-3 px-md-4 mb-3 bg-white ">
              <Calendar
                localizer={localizer}
                events={props.invites}
                onSelectEvent={event => setevents(event)}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, width: "100%" }}
              />  
            </div>
          </div>
        </div>
        <EventForm eventdata = {eventdata} />
      </div>
    </main>
  );
}
/*AppCalendar.propTypes = {
  posts: AppCalendar.func.isRequired,
};*/

export default AppCalendar;

/* */
