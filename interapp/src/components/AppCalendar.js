import React, { useState, useEffect } from "react";
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
    <div id = "maincontent">
      <div className="align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <Calendar
          localizer={localizer}
          events={props.invites}
          onSelectEvent={event => setevents(event)}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, width: "100%" }}
        />
    
      </div>

      <EventForm eventdata = {eventdata} />
    </div>
  );
}
/*AppCalendar.propTypes = {
  posts: AppCalendar.func.isRequired,
};*/

export default AppCalendar;

/* */
