/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
            <Navbar />
            <main className="container">
                <div className="row">
                    <div className="col-sm-4 py-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">MEDIA-MADE</h3>
                                <img src="/dreami-react-portfolio/assets/images/Screen Shot 2020-11-26 at 8.42.51 AM.png" className="card-img-top" alt="pasword generator" />
                                <p className="card-text">Be inspired by your fave tv show and curater your own closet(project 3)</p>
                                <a href="https://damp-ocean-72048.herokuapp.com/" className="btn btn-primary">Check it
                            out</a>
                                <a href="https://github.com/AndreG303/MEDIA-MADE" className="btn btn-primary">Github
                            Repository</a>
                            </div>
                        </div>
                    </div>
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
                                <h3 className="card-title">EAT DA BURGER</h3>
                                <img src="/dreami-react-portfolio/assets/images/Screen Shot 2020-11-26 at 8.51.46 AM.png" className="card-img-top" alt="Smokey game" />
                                <p className="card-text">MySQL Burguer Logger where you can track your dreami burguers</p>
                                <a href="https://intense-beach-30364.herokuapp.com/" className="btn btn-primary">check it out</a>
                                <a href="https://github.com/AndreG303/Eat-Da-Burger-Dreami" className="btn btn-primary">Github
                            Repository</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">EMPLOYEE TRACKER</h3>
                                <img src="/dreami-react-portfolio/assets/images/Screen Shot 2020-11-26 at 8.55.24 AM.png" className="card-img-top" alt="Smokey game" />
                                <p className="card-text">A content managment system for managing a company's employees</p>
                                <a href="https://drive.google.com/file/d/1j_SA3K6_CXdxoSWqWyN5S0sMHVBkvVQL/view" className="btn btn-primary">check it out</a>
                                <a href="https://github.com/AndreG303/Dreami-Employee-Tracker-" className="btn btn-primary">Github
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
                                <a href=" https://drive.google.com/file/d/18rUBUSQHDcW95uvquIuncjn5_MjgWrYK/view" className="btn btn-primary">check it out</a>
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
            <Footer />
        </Fragment>
    )
}

export default Portfolio;