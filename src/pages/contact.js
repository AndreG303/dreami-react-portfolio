/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <Fragment>
            <header className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">...an<span className="dreami">DREAMi</span>lena...</h1>
                    <p className="lead">Ready to win...Win Win Win</p>
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
                <div className="row justify-content-around">
                    <h5>CONTACT ME</h5>
                    <div className="col-12">
                        <div className="row">
                            <div className="col col-12 col-md-6">
                                <form className="inline">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" placeholder="Add Name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" className="form-control" placeholder="Add Email" />
                                    </div>
                                    <label>Message</label>
                                    <div className="form-group">
                                        <textarea className="form-control" id="Text-Area" placeholder="Add Message">
                                        </textarea>
                                    </div>
                                    <button type="submit" className="btn btn-dark btn btn-lg">
                                        Submit
                            </button>
                                </form>
                            </div>
                            <div className="col col-12 col-md-6">
                                <section className="card text-center">
                                    <h5 className="card-header">. . .</h5>
                                    <div className="card-body">
                                        <a href="mailto:andreamgamez@gmail.com" className="btn btn-dark"><i className="fa fa-envelope"
                                            aria-hidden="true"></i></a>
                                        <a href="tel:(973)7673359" className="btn btn-dark"><i className="fa fa-phone"
                                            aria-hidden="true"></i></a>
                                        <a href="https://github.com/AndreG303" className="btn btn-dark"><i className="fa fa-github"
                                            aria-hidden="true"></i></a>
                                        <a href="https://www.linkedin.com/in/andrea-gamez-b228901a9" className="btn btn-dark"><i
                                            className="fab fa-linkedin-in"></i></a>
                                        <a href="https://www.facebook.com/andrea.m.diaz.520" className="btn btn-dark"><i
                                            className="fa fa-facebook-official" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="card-footer text-dark">
                                        . . .
                            </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default Contact;