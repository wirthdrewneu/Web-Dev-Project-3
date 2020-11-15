import React from "react";
/*import { render } from "react-dom";*/
import "../css/form.css";



function EventForm(props){
 console.log("Event form" , props.eventdata);

    return(    

      <div className = "align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <div className="card-deck mb-3 text-center">
    <div className="card mb-6 shadow-sm">
      <div className="card-header">
        <h6 className="my-0 font-weight-normal">Add Stage</h6>
      </div>
      <div className="card-body">
         <form action="/createappevent" method="Post">
        <div className="form-group row">
          <label for="company" className="col-10 control-label" style={{"textAlign": "left"}}>Company</label>
          <div className="col-10">
            <input className="form-control" type="text" id="company" name="title"/>
          </div>
        </div>
      
       
     
        <div className="form-group row">
          <label for="appliedDate" className="col-10 control-label" style={{"textAlign": "left"}}>Start Date</label>
          <div className="col-10">
            <input className="form-control" type="date"  id="appliedDate1" name="start" />
          </div>
        </div>

      <div className="form-group row">
          <label for="appliedDate" className="col-10 control-label" style={{"textAlign": "left"}}>End Date</label>
          <div className="col-10">
            <input className="form-control" type="date"  id="appliedDate2" name="end" />
          </div>
        </div>

        <div className="form-group row">
          <label for="stage" className="col-10 control-label" style={{"textAlign": "left"}}>Stage</label>
          <div className="col-10">
            <select className="form-control" id="stage" name="Stage">
              <option>Applied/Apply</option>
              <option>Application Deadline</option>
              <option>Online Assessment</option>
              <option>Interview</option>
              <option>Follow Up</option>
            </select>
          </div>
        </div>

        
        <button type="submit" className="btn btn-lg btn-block btn-outline-primary">Submit</button>
      </form>
      </div>
    </div>
    <div className="card mb-6 shadow-sm">
      <div className="card-header">
        <h6 className="my-0 font-weight-normal">Event Details</h6>
      </div>
      <div className="card-body">


 <form action="/updateappevent" method="Post">
       
        <div className="form-group row">
          <label for="company" className="col-10 control-label" style={{"textAlign": "left"}}>Company</label>
          <div className="col-10">
            <input className="form-control" type="text" value ={props.eventdata.title} id="company" name="title"/>
          </div>
        </div>
      
       
     
        <div className="form-group row">
          <label for="appliedDate" className="col-10 control-label" style={{"textAlign": "left"}}>Start Date</label>
          <div className="col-10">
            <input className="form-control" placeholder = {props.eventdata.start} type="date"  id="appliedDate1" name="start" />
          </div>
        </div>

      <div className="form-group row">
          <label for="appliedDate" className="col-10 control-label" style={{"textAlign": "left"}}>End Date</label>
          <div className="col-10">
            <input className="form-control" type="date"  id="appliedDate2" name="end" placeholder = {props.eventdata.end} />
          </div>
        </div>

        <div className="form-group row">
          <label for="stage" className="col-10 control-label" style={{"textAlign": "left"}}>Stage</label>
          <div className="col-10">
            <select className="form-control" id="stage" name="Stage" placeholder = {props.eventdata.Stage}>
              <option>Applied/Apply</option>
              <option>Application Deadline</option>
              <option>Online Assessment</option>
              <option>Interview</option>
              <option>Follow Up</option>
            </select>
          </div>
        </div>

        
        <button type="submit" className="btn btn-lg btn-block btn-outline-primary">Update</button>
      </form>
        
      <form>
            
        <button type="submit"  onClick = {async (evt) => {
        
    
    const response = await fetch("/delappevent", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({title : props.eventdata.title}) // body data type must match "Content-Type" header
  });
         

          }

        }


         className="btn btn-lg btn-block btn-outline-primary">Delete</button>
      </form>

      
      </div>
    </div>
  </div>
    </div>);

  }
export default EventForm;