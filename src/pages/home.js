/* eslint-disable jsx-a11y/anchor-has-content */
import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';


function Home() {
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
            <section>
                <div className="container card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <img src="assets/images/IMG_3096.jpg" className="card-img img-fluid" alt="selfie" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">ANDREA M GAMEZ</h3>
                                <p className="card-text">Creative Full Stack Web Developer with a broad customer service background.
                                Bilingual, problem solver, versatile, organized and detail-oriented. Skilled in HTML, CSS, Bootstrap, JavaScript, JQuery, Node.js, React amoung others.</p>
                                <a href="./assets/Resume.pdf" className="btn btn-dark">RESUME</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main class="container">
                <div class="row">
                    <div class="col-sm-4 py-2">
                        <div class="card h-100">
                            <div class="card-body">
                                <h3 class="card-title">STELLAR SONIC</h3>
                                <img src="assets/images/Stellar sonic.png" class="card-img-top" alt="pasword generator" />
                                <p class="card-text">A place to share your sound!(project 2)</p>
                                <a href="https://dry-shelf-60979.herokuapp.com/" class="btn btn-primary">Check it
                            out</a>
                                <a href="https://github.com/AndreG303/Stellar-Sonic" class="btn btn-primary">Github
                            Repository</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 py-2">
                        <div class="card h-100">
                            <div class="card-body">
                                <h3 class="card-title">EMPLOYEE TEMPLATE GENERATOR</h3>
                                <img src="assets/images/Screen Shot 2020-08-11 at 7.13.40 PM copy.png" class="card-img-top" alt="Smokey game" />
                                <p class="card-text">A software engineering team generator command line application</p>
                                <a href="https://scratch.mit.edu/projects/396064541" class="btn btn-primary">check it out</a>
                                <a href="https://github.com/AndreG303/Employee-Template-Generator-" class="btn btn-primary">Github
                            Repository</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 py-2">
                        <div class="card h-100">
                            <div class="card-body">
                                <h3 class="card-title">WEATHER DASHBOARD</h3>
                                <img src="assets/images/weather.png" class="card-img-top" alt="Weather-Dashboard-AG"/>
                                    <p class="card-text">A Weather Dashboard application retrieving data from a third party API
                            (openWeather API), using HTML, CSS and Jquery.</p>
                                    <a href="https://andreg303.github.io/Weather-Dashboard-AG/index.html"
                                        class="btn btn-primary">Check it out</a>
                                    <a href="https://github.com/AndreG303/Weather-Dashboard-AG" class="btn btn-primary">Github
                            Repository</a>
                    </div>
                            </div>
                        </div>
                        <div class="col-sm-4 py-2">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h3 class="card-title">SUPER QUIZ GAMEZ</h3>
                                    <img src="assets/images/quiz.png" class="card-img-top" alt="superquizgamez"/>
                                        <p class="card-text">A responsive timed code and trivia quiz with multiple-choice questions and
                            interactive challenges.</p>
                                        <a href=" https://andreg303.github.io/superquizgamez/" class="btn btn-primary">Play</a>
                                        <a href="https://github.com/AndreG303/superquizgamez" class="btn btn-primary">Github
                            Repository</a>
                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 py-2">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h3 class="card-title">WORK DAY PLANNER</h3>
                                        <img src="assets/images/calendar.png" class="card-img-top" alt="work day planner"/>
                                            <p class="card-text">A simple calendar application that allows the user to save events for each
                            hour of the day.</p>
                                            <a href="https://andreg303.github.io/WorkDaySchedulerAG/" class="btn btn-primary">Check it
                            out</a>
                                            <a href="https://github.com/AndreG303/WorkDaySchedulerAG" class="btn btn-primary">Github
                            Repository</a>
                    </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 py-2">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h3 class="card-title">VIRTUAL ART GALLERY</h3>
                                            <img src="assets/images/gallery.png" class="card-img-top" alt="Virtual_Art_Gallery"/>
                                                <p class="card-text">Dynamic gallery App that can search for pieces of fantasy artwork based on
                            the user input or at random.</p>
                                                <a href="https://nlamonaco86.github.io/Virtual_Art_Gallery/" class="btn btn-primary">Check it
                            out</a>
                                                <a href="https://github.com/AndreG303/Virtual_Art_Gallery" class="btn btn-primary">Github
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
                                        win win win win <span role="img" aria-label="Heart">❤️</span> &COPY; andreaMgamez </span>
                                </nav>
                            </footer>
</Fragment>
)
}
export default Home; 