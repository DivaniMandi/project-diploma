import React from 'react';
import Select from 'react-select';
//import 'bootstrap/dist/css/bootstrap.min.css';

const platforms = [
  { label: "Coursera", value: 1 },
  { label: "edX", value: 2 },
  { label: "Udacity", value: 3 },
  { label: "Canvas.net", value: 4 },
  { label: "Open Education by blackboard", value: 5 },
  { label: "Miríada X", value: 6 },
  { label: "NovoED", value: 7},
  { label: "FutureLearn", value: 8},
  { label: "OpenSAP", value: 9},
  { label: "OpenHPI", value: 10},
  { label: "OpenLearning", value: 11},



];

const Dropdown = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4"> Filter by platform:</div>
      <div className="col-md-4">
        <Select options={ platforms } />
      </div>
      <div className="col-md-4"></div>
      <div className="col-md-4"></div>      
    </div>
  </div>
);

export default Dropdown