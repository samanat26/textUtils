import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className= {`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
            </ul>

            {/* <div className="d-flex">
                <div className="bg-primary rounded mx-2" onClick={ () => {props.toggle('primary')}} style={{height : '30px' , width : '30px', cursor : 'pointer'}}></div>             
                <div className="bg-danger rounded mx-2" onClick={ () => {props.toggle('danger')}} style={{height : '30px' , width : '30px', cursor : 'pointer'}}></div>             
                <div className="bg-success rounded mx-2" onClick={ () => {props.toggle('success')}} style={{height : '30px' , width : '30px', cursor : 'pointer'}}></div>             
                <div className="bg-warning rounded mx-2" onClick={ () => {props.toggle('warning')}} style={{height : '30px' , width : '30px', cursor : 'pointer'}}></div>             
                {/* <div className="bg-primary rounded mx-2" onClick={ () => {props.toggle('primary')}} style={{height : '30px' , width : '30px', cursor : 'pointer'}}></div>            
            
            </div> */}

            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={  props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
          </div>
        </div>
      </nav>
    )
}

//to set proptypes for ignorance of error in future

Navbar.propTypes = {
    title : PropTypes.string.isRequired ,
    about : PropTypes.string.isRequired
    
} 

//alternate names in case of not setting/passing the names of required proptypes

Navbar.defaultProps = {
    title : 'set title' ,
    about : 'set information'
}

