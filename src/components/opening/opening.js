import { courseOption } from 'components/constantOption';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'


export default function Opening() {
  const [selectedOption, setSelectedOption] = useState('Select');
  const handleChange = (selected) => {
    setSelectedOption(selected);
  };
  return (
    <div>
      <div className="container-xxl py-3">
        <div className="container">
          <div className="mb-3" style={{ display: 'flex', alignItems: 'center', width: '30%' }}>
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
                  <div><h3><b>Company Name</b></h3></div>
                  <div className='row'>
                    <div className='col-4 text-secondary'><b>Role</b></div>
                    <div className='col-8'>Associative Software Engineer</div>
                    <div className='col-4 text-secondary'><b>Pkg</b></div>
                    <div className='col-8'>Not Disclose</div>
                    <div className='col-4 text-secondary'><b>last Date</b></div>
                    <div className='col-8'>dd-mm-yyyy</div>
                    <div className='col-4 text-secondary'><b>Total Vacancy</b></div>
                    <div className='col-8'>250</div>
                    <div className='col-4 text-secondary'><b>Location</b></div>
                    <div className='col-8'>Pan India</div>
                  </div>
                  <Link to="/course-details" className="btn btn-primary">Apply And Read</Link>
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
                  <div><h3><b>Company Name</b></h3></div>
                  <div className='row'>
                    <div className='col-4 text-secondary'><b>Role</b></div>
                    <div className='col-8'>Associative Software Engineer</div>
                    <div className='col-4 text-secondary'><b>Pkg</b></div>
                    <div className='col-8'>Not Disclose</div>
                    <div className='col-4 text-secondary'><b>last Date</b></div>
                    <div className='col-8'>dd-mm-yyyy</div>
                    <div className='col-4 text-secondary'><b>Total Vacancy</b></div>
                    <div className='col-8'>250</div>
                    <div className='col-4 text-secondary'><b>Location</b></div>
                    <div className='col-8'>Pan India</div>
                  </div>
                  <Link to="/course-details" className="btn btn-primary">Apply And Read</Link>
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
                  <div><h3><b>Company Name</b></h3></div>
                  <div className='row'>
                    <div className='col-4 text-secondary'><b>Role</b></div>
                    <div className='col-8'>Associative Software Engineer</div>
                    <div className='col-4 text-secondary'><b>Pkg</b></div>
                    <div className='col-8'>Not Disclose</div>
                    <div className='col-4 text-secondary'><b>last Date</b></div>
                    <div className='col-8'>dd-mm-yyyy</div>
                    <div className='col-4 text-secondary'><b>Total Vacancy</b></div>
                    <div className='col-8'>250</div>
                    <div className='col-4 text-secondary'><b>Location</b></div>
                    <div className='col-8'>Pan India</div>
                  </div>
                  <Link to="/course-details" className="btn btn-primary">Apply And Read</Link>
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
                  <div><h3><b>Company Name</b></h3></div>
                  <div className='row'>
                    <div className='col-4 text-secondary'><b>Role</b></div>
                    <div className='col-8'>Associative Software Engineer</div>
                    <div className='col-4 text-secondary'><b>Pkg</b></div>
                    <div className='col-8'>Not Disclose</div>
                    <div className='col-4 text-secondary'><b>last Date</b></div>
                    <div className='col-8'>dd-mm-yyyy</div>
                    <div className='col-4 text-secondary'><b>Total Vacancy</b></div>
                    <div className='col-8'>250</div>
                    <div className='col-4 text-secondary'><b>Location</b></div>
                    <div className='col-8'>Pan India</div>
                  </div>
                  <Link to="/course-details" className="btn btn-primary">Apply And Read</Link>
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
                  <div><h3><b>Company Name</b></h3></div>
                  <div className='row'>
                    <div className='col-4 text-secondary'><b>Role</b></div>
                    <div className='col-8'>Associative Software Engineer</div>
                    <div className='col-4 text-secondary'><b>Pkg</b></div>
                    <div className='col-8'>Not Disclose</div>
                    <div className='col-4 text-secondary'><b>last Date</b></div>
                    <div className='col-8'>dd-mm-yyyy</div>
                    <div className='col-4 text-secondary'><b>Total Vacancy</b></div>
                    <div className='col-8'>250</div>
                    <div className='col-4 text-secondary'><b>Location</b></div>
                    <div className='col-8'>Pan India</div>
                  </div>
                  <Link to="/course-details" className="btn btn-primary">Apply And Read</Link>
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
                  <div><h3><b>Company Name</b></h3></div>
                  <div className='row'>
                    <div className='col-4 text-secondary'><b>Role</b></div>
                    <div className='col-8'>Associative Software Engineer</div>
                    <div className='col-4 text-secondary'><b>Pkg</b></div>
                    <div className='col-8'>Not Disclose</div>
                    <div className='col-4 text-secondary'><b>last Date</b></div>
                    <div className='col-8'>dd-mm-yyyy</div>
                    <div className='col-4 text-secondary'><b>Total Vacancy</b></div>
                    <div className='col-8'>250</div>
                    <div className='col-4 text-secondary'><b>Location</b></div>
                    <div className='col-8'>Pan India</div>
                  </div>
                  <Link to="/course-details" className="btn btn-primary">Apply And Read</Link>
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
                  <div><h3><b>Company Name</b></h3></div>
                  <div className='row'>
                    <div className='col-4 text-secondary'><b>Role</b></div>
                    <div className='col-8'>Associative Software Engineer</div>
                    <div className='col-4 text-secondary'><b>Pkg</b></div>
                    <div className='col-8'>Not Disclose</div>
                    <div className='col-4 text-secondary'><b>last Date</b></div>
                    <div className='col-8'>dd-mm-yyyy</div>
                    <div className='col-4 text-secondary'><b>Total Vacancy</b></div>
                    <div className='col-8'>250</div>
                    <div className='col-4 text-secondary'><b>Location</b></div>
                    <div className='col-8'>Pan India</div>
                  </div>
                  <Link to="/course-details" className="btn btn-primary">Apply And Read</Link>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

