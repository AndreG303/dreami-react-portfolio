/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


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
            <Navbar />
            <section>
                <div className="container card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <img src={`/dreami-react-portfolio/assets/images/IMG_3096.jpg`} className="card-img img-fluid" alt="selfie" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">ANDREA M GAMEZ</h3>
                                <p className="card-text">Creative Full Stack Web Developer with a broad customer service background.
                                Bilingual, problem solver, versatile, organized and detail-oriented. Skilled in HTML, CSS, Bootstrap, JavaScript, JQuery, Node.js, React among others.</p>
                                <a href="/dreami-react-portfolio/Resume1.pdf" className="btn btn-dark">RESUME</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         <Footer />
        </Fragment>
    )
}
export default Home; 