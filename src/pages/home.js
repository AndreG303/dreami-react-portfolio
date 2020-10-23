/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <header classNameName="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">...an<span className="dreami">DREAMi</span>lena...</h1>
                    <p className="lead">Ready to win...Win Win Win</p>
                    <a  href="mailto:andreamgamez@gmail.com" className="btn btn-dark"><i className="fa fa-envelope"
                        aria-hidden="true"></i></a>
                    <a href="https://github.com/AndreG303" className="btn btn-dark"><i className="fa fa-github"
                        aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/andrea-gamez-b228901a9" className="btn btn-dark"><i
                        className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.facebook.com/andrea.m.diaz.520" className="btn btn-dark"><i className="fa fa-facebook-official"
                        aria-hidden="true"></i></a>
                </div>
            </header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link  className="nav-link" to="/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <section>
                <div className="container card mb-3" style={{maxWidth: "540px"}}>
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <img src="assets/images/IMG_3096.jpg" className="card-img img-fluid" alt="selfie"/>
            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">ANDREA M GAMEZ</h3>
                                    <p className="card-text">Bilingual Frontend Web Developer with a broad customer service background.
                                    Problem solver, versatile, organized and detail-oriented. Skilled in HTML, CSS, JavaScript
                        and JQuery.</p>
                                    <a href="assets/Resume.pdf" className="btn btn-dark">RESUME</a>
                                </div>
                            </div>
                        </div>
                    </div>
</section>
                <footer className="footer">
                    <nav
                        className="navbar fixed-bottom navbar-light bg-transparent flex-fill justify-content-center padding-top: 60px;">
                        <span className="navbar-text">
                            win win win win <span role="img"aria-label="Heart">❤️</span> &COPY; andreaMgamez </span>
                    </nav>
                </footer>
</>
)
}
export default Home; 