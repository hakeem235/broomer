import "./dashboard.css";
import React from "react";
import Calendar from "./calendar/calendar";
import List from "./list/List";
import { Button, Container } from "react-bootstrap";


const Dashboard = () => {
  return (
    <div className="main">
      <div className="rightSide">
        <div className="medSection">
          <div className="listview">
            <Container>
              <List />
            </Container>
          </div>
        </div>
        <div>
          <Container className="boxSection">
            <div className="postJobBox">
              <h4>Jod Posted</h4>
              <div className="JobList">
              <ul>
                <li>Job Tital <span><Button variant="warning">Edit Job</Button> <Button variant="danger">Delete Job</Button> <Button variant="secondary">Done</Button></span></li>
                <li>Job Tital <span><Button variant="warning">Edit Job</Button> <Button variant="danger">Delete Job</Button> <Button variant="secondary">Done</Button></span></li>
                <li>Job Tital <span><Button variant="warning">Edit Job</Button> <Button variant="danger">Delete Job</Button> <Button variant="secondary">Done</Button></span></li>
                <li>Job Tital <span><Button variant="warning">Edit Job</Button> <Button variant="danger">Delete Job</Button> <Button variant="secondary">Done</Button></span></li>
                <li>Job Tital <span><Button variant="warning">Edit Job</Button> <Button variant="danger">Delete Job</Button> <Button variant="secondary">Done</Button></span></li>
              </ul>
              </div>
              <Button>Add Job</Button>
            </div>
            <div className="compeletJobBox">
              <h4>Jod Completed</h4>
              <div className="JobList">
              <ul>
                <li>Job Tital <span><Button variant="info">Write Review</Button></span></li>
                <li>Job Tital <span><Button variant="info">Write Review</Button></span></li>
                <li>Job Tital <span><Button variant="info">Write Review</Button></span></li>
                <li>Job Tital <span><Button variant="info">Write Review</Button></span></li>
              </ul>
              </div>
            </div>
            <div className="incomBox">
              <h4>Income</h4>
              <div className="JobList">
              <ul>
                <li>Job Tital: $ </li>
                <li>Job Tital: $ </li>
                <li>Job Tital: $ </li>
                <li>Job Tital: $ </li>
              </ul>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
