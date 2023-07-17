import React, { useState, useEffect } from 'react'
import { courseOption } from 'components/constantOption';
import Select from 'react-select';
import { Link } from 'react-router-dom';


export default function Courses() {
  const [selectedOption, setSelectedOption] = useState('Select');
  const handleChange = (selected) => {
    setSelectedOption(selected);
  };
  return (
    <div>
      <div className="container-xxl py-3">
        <div className="container">
          <div className="mb-3" style={{ display: 'flex', alignItems: 'center', width: '20%' }}>
            <label style={{ marginRight: '10px' }}>Sort By:</label>
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={courseOption}
            />
          </div>
          <div className="card w-100 mb-3">
            <div className="row g-0">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img className="rounded-circle" src={require("assets/img/julie.jpg")} alt="Card Image" style={{ height: "250px" }} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div><h3><b>Course Name</b></h3></div>
                  <div className='row'>
                    <div className='col-4 text-secondary'><b>Trainer</b></div>
                    <div className='col-8'>Json Marcus</div>
                    <div className='col-4 text-secondary'><b>Fees</b></div>
                    <div className='col-8'>INR 999</div>
                    <div className='col-4 text-secondary'><b>Start Date</b></div>
                    <div className='col-8'>dd-mm-yyyy</div>
                    <div className='col-4 text-secondary'><b>Days Left</b></div>
                    <div className='col-8'>4 Days</div>
                    <div className='col-4 text-secondary'><b>Seats Available</b></div>
                    <div className='col-8'>45 sits</div>
                  </div>
                  <Link to="/course-details" className="btn btn-primary">Read More</Link>
                  <Link to="/course-details" className="btn btn-primary">Enroll Now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-100 mb-3">
            <div className="row g-0">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img className="rounded-circle" src={require("assets/img/julie.jpg")} alt="Card Image" style={{ height: "250px" }} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div><h3><b>Course Name</b></h3></div>
                  <div className='row'>
                    <div className='col-4 text-secondary'><b>Trainer</b></div>
                    <div className='col-8'>Json Marcus</div>
                    <div className='col-4 text-secondary'><b>Fees</b></div>
                    <div className='col-8'>INR 999</div>
                    <div className='col-4 text-secondary'><b>Start Date</b></div>
                    <div className='col-8'>dd-mm-yyyy</div>
                    <div className='col-4 text-secondary'><b>Days Left</b></div>
                    <div className='col-8'>4 Days</div>
                    <div className='col-4 text-secondary'><b>Seats Available</b></div>
                    <div className='col-8'>45 sits</div>
                  </div>
                  <Link to="/course-details" className="btn btn-primary">Read More</Link>
                  <Link to="/course-details" className="btn btn-primary">Enroll Now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-100 mb-3">
            <div className="row g-0">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img className="rounded-circle" src={require("assets/img/julie.jpg")} alt="Card Image" style={{ height: "250px" }} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div><h3><b>Course Name</b></h3></div>
                  <div className='row'>
                    <div className='col-4 text-secondary'><b>Trainer</b></div>
                    <div className='col-8'>Json Marcus</div>
                    <div className='col-4 text-secondary'><b>Fees</b></div>
                    <div className='col-8'>INR 999</div>
                    <div className='col-4 text-secondary'><b>Start Date</b></div>
                    <div className='col-8'>dd-mm-yyyy</div>
                    <div className='col-4 text-secondary'><b>Days Left</b></div>
                    <div className='col-8'>4 Days</div>
                    <div className='col-4 text-secondary'><b>Seats Available</b></div>
                    <div className='col-8'>45 sits</div>
                  </div>
                  <Link to="/course-details" className="btn btn-primary">Read More</Link>
                  <Link to="/course-details" className="btn btn-primary">Enroll Now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-100 mb-3">
            <div className="row g-0">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img className="rounded-circle" src={require("assets/img/julie.jpg")} alt="Card Image" style={{ height: "250px" }} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div><h3><b>Course Name</b></h3></div>
                  <div className='row'>
                    <div className='col-4 text-secondary'><b>Trainer</b></div>
                    <div className='col-8'>Json Marcus</div>
                    <div className='col-4 text-secondary'><b>Fees</b></div>
                    <div className='col-8'>INR 999</div>
                    <div className='col-4 text-secondary'><b>Start Date</b></div>
                    <div className='col-8'>dd-mm-yyyy</div>
                    <div className='col-4 text-secondary'><b>Days Left</b></div>
                    <div className='col-8'>4 Days</div>
                    <div className='col-4 text-secondary'><b>Seats Available</b></div>
                    <div className='col-8'>45 sits</div>
                  </div>
                  <Link to="/course-details" className="btn btn-primary">Read More</Link>
                  <Link to="/course-details" className="btn btn-primary">Enroll Now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-100 mb-3">
            <div className="row g-0">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img className="rounded-circle" src={require("assets/img/julie.jpg")} alt="Card Image" style={{ height: "250px" }} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div><h3><b>Course Name</b></h3></div>
                  <div className='row'>
                    <div className='col-4 text-secondary'><b>Trainer</b></div>
                    <div className='col-8'>Json Marcus</div>
                    <div className='col-4 text-secondary'><b>Fees</b></div>
                    <div className='col-8'>INR 999</div>
                    <div className='col-4 text-secondary'><b>Start Date</b></div>
                    <div className='col-8'>dd-mm-yyyy</div>
                    <div className='col-4 text-secondary'><b>Days Left</b></div>
                    <div className='col-8'>4 Days</div>
                    <div className='col-4 text-secondary'><b>Seats Available</b></div>
                    <div className='col-8'>45 sits</div>
                  </div>
                  <Link to="/course-details" className="btn btn-primary">Read More</Link>
                  <Link to="/course-details" className="btn btn-primary">Enroll Now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-100 mb-3">
            <div className="row g-0">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img className="rounded-circle" src={require("assets/img/julie.jpg")} alt="Card Image" style={{ height: "250px" }} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div><h3><b>Course Name</b></h3></div>
                  <div className='row'>
                    <div className='col-4 text-secondary'><b>Trainer</b></div>
                    <div className='col-8'>Json Marcus</div>
                    <div className='col-4 text-secondary'><b>Fees</b></div>
                    <div className='col-8'>INR 999</div>
                    <div className='col-4 text-secondary'><b>Start Date</b></div>
                    <div className='col-8'>dd-mm-yyyy</div>
                    <div className='col-4 text-secondary'><b>Days Left</b></div>
                    <div className='col-8'>4 Days</div>
                    <div className='col-4 text-secondary'><b>Seats Available</b></div>
                    <div className='col-8'>45 sits</div>
                  </div>
                  <Link to="/course-details" className="btn btn-primary">Read More</Link>
                  <Link to="/course-details" className="btn btn-primary">Enroll Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
