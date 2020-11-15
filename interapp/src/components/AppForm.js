import React, { useState, useEffect } from "react";
import "../css/form.css";

function AppForm ({edit, itemDetails}) {
  const [url, setUrl] = useState("/appform");
  const [fields, setFields] = useState({
    Company: "",
    DateApplied: "",
    JobDescription: "",
    RecruiterInfo: "",
    Role: "",
    Stage: "",
    StageDate: "",
    Type: ""
  });

  useEffect(() => {
    if (edit) {
      setFields(itemDetails);
      setUrl("/updateApplication")
    }
  }, []);
  
  

  return(    
      <div className = "align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <form action={url} method="POST">
        <p className="h4 mb-4">Add application</p>
        <div className="form-group row">
          <label for="company" className="col-10 col-form-label" >Company</label>
          <div className="col-10">
            <input className="form-control" type="text" id="company" name="Company"/>
          </div>
        </div>
        <div className="form-group row">
          <label for="role" className="col-10 col-form-label">Role</label>
          <div className="col-10">
            <input className="form-control" type="text" id="role" name="Role" />
          </div>
        </div>
        <div className="form-group row">
          <label for="type" className="col-10 col-form-label">Type</label>
          <div className="col-10">
            <input className="form-control" type="text" id="type" name="Type" />
          </div>
        </div>
        <div className="form-group row">
          <label for="recruiter" className="col-10 col-form-label">Recruiter Info</label>
          <div className="col-10">
            <input className="form-control" type="text" id="recruiter" name="RecruiterInfo" />
          </div>
        </div>
        <div className="form-group row">
          <label for="appliedDate" className="col-10 col-form-label">Date Applied</label>
          <div className="col-10">
            <input className="form-control" type="date" id="appliedDate" name="DateApplied" />
          </div>
        </div>
        <div className="form-group row">
          <label for="stage" className="col-10 col-form-label">Stage</label>
          <div className="col-10">
            <select className="form-control" id="stage" name="Stage">
              <option>Applied</option>
              <option>Online Assessment</option>
              <option>Interview</option>
              <option>Follow Up</option>
              <option>Offer</option>
              <option>Reject</option>
              <option>Accepted</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label for="stage" className="col-10 col-form-label">Next Due Date</label>
          <div className="col-10">
            <input className="form-control" type="date" id="stage" name="StageDate" />
          </div>
        </div>
        <div className="form-group row">
          <label for="jobDesc" className="col-10 col-form-label">Job Description</label>
          <div className="col-10">
            <textarea className="form-control" id="jobDesc" rows="3" name="JobDescription"></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <input className="form-control" type="ID" value="" id="stage" name="StageDate" />
      </form>
    </div>);

  }
export default AppForm;