import React from 'react';
import {
 Link
} from "react-router-dom";

const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><i className="fa fa-newspaper-o" style={{fontSize:"24px"}}></i> News Desk</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/"><i className="fa fa-home" style={{fontSize:"24px"}}></i> Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/"><i className="fa fa-address-book" style={{fontSize:"18px"}}></i> About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/entertainment"> Entertainment</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/general"> General</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/health"> Health</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/science"> Science</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/sports"> Sports</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/technology"> Technology</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
}
export default Navbar;
