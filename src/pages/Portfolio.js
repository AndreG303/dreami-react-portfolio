/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <Fragment>
            <header className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">...an<span className="dreami">DREAMi</span>lena...</h1>
                    <p className="lead">Ready to win...Win Win Win</p>
                    <a href="mailto:andreamgamez@gmail.com" className="btn btn-dark"><i className="fa fa-envelope"
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
                            <Link className="nav-link" to="/">About</Link>
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
            <main className="container">
                <div className="row">
                    <div className="col-sm-4 py-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">STELLAR SONIC</h3>
                                <img src="/dreami-react-portfolio/assets/images/Stellar sonic.png" className="card-img-top" alt="pasword generator" />
                                <p className="card-text">A place to share your sound!(project 2)</p>
                                <a href="https://dry-shelf-60979.herokuapp.com/" className="btn btn-primary">Check it
                            out</a>
                                <a href="https://github.com/AndreG303/Stellar-Sonic" className="btn btn-primary">Github
                            Repository</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">EMPLOYEE TEMPLATE GENERATOR</h3>
                                <img src="/dreami-react-portfolio/assets/images/Screen Shot 2020-08-11 at 7.13.40 PM copy.png" className="card-img-top" alt="Smokey game" />
                                <p className="card-text">A software engineering team generator command line application</p>
                                <a href="https://scratch.mit.edu/projects/396064541" className="btn btn-primary">check it out</a>
                                <a href="https://github.com/AndreG303/Employee-Template-Generator-" className="btn btn-primary">Github
                            Repository</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">WEATHER DASHBOARD</h3>
                                <img src="/dreami-react-portfolio/assets/images/weather.png" className="card-img-top" alt="Weather-Dashboard-AG" />
                                <p className="card-text">A Weather Dashboard application retrieving data from a third party API
                            (openWeather API), using HTML, CSS and Jquery.</p>
                                <a href="https://andreg303.github.io/Weather-Dashboard-AG/index.html"
                                    className="btn btn-primary">Check it out</a>
                                <a href="https://github.com/AndreG303/Weather-Dashboard-AG" className="btn btn-primary">Github
                            Repository</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">SUPER QUIZ GAMEZ</h3>
                                <img src="/dreami-react-portfolio/assets/images/quiz.png" className="card-img-top" alt="superquizgamez" />
                                <p className="card-text">A responsive timed code and trivia quiz with multiple-choice questions and
                            interactive challenges.</p>
                                <a href=" https://andreg303.github.io/superquizgamez/" className="btn btn-primary">Play</a>
                                <a href="https://github.com/AndreG303/superquizgamez" className="btn btn-primary">Github
                            Repository</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">WORK DAY PLANNER</h3>
                                <img src="/dreami-react-portfolio/assets/images/calendar.png" className="card-img-top" alt="work day planner" />
                                <p className="card-text">A simple calendar application that allows the user to save events for each
                            hour of the day.</p>
                                <a href="https://andreg303.github.io/WorkDaySchedulerAG/" className="btn btn-primary">Check it
                            out</a>
                                <a href="https://github.com/AndreG303/WorkDaySchedulerAG" className="btn btn-primary">Github
                            Repository</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">VIRTUAL ART GALLERY</h3>
                                <img src="/dreami-react-portfolio/assets/images/gallery.png" className="card-img-top" alt="Virtual_Art_Gallery" />
                                <p className="card-text">Dynamic gallery App that can search for pieces of fantasy artwork based on
                            the user input or at random.</p>
                                <a href="https://nlamonaco86.github.io/Virtual_Art_Gallery/" className="btn btn-primary">Check it
                            out</a>
                                <a href="https://github.com/AndreG303/Virtual_Art_Gallery" className="btn btn-primary">Github
                            Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <nav
                    className="navbar fixed-bottom navbar-light bg-transparent flex-fill justify-content-center padding-top: 60px;">
                    <span className="navbar-text">
                        win win win win <span role="img" aria-label="Heart">❤️</span> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> andreaMgamez </span>
                </nav>
            </footer>
        </Fragment>
    )
}

export default Portfolio;