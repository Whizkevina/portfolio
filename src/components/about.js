import React, {Component} from 'react';


class About extends Component {
    render() {
        return (
            <div id="colorlib-main">
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                        <div className="flexslider js-fullheight">
                            <ul className="slides">
                                <li style={{backgroundImage: 'url(images/img_bg_1.jpg)'}}>
                                    <div className="overlay"></div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div
                                                className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                                <div className="slider-text-inner js-fullheight">
                                                    <div className="desc">
                                                        <h1>Hi! <br/>I'm Tim </h1>
                                                        <p><a href="#" className="btn btn-primary btn-learn">Download CV <i
                                                            className="icon-download4"></i></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li style={{backgroundImage: 'url(images/img_bg_2.jpg)'}}>
                                    <div className="overlay"></div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div
                                                className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                                <div className="slider-text-inner">
                                                    <div className="desc">
                                                        <h1>I am <br/>a Front-end Engineer </h1>
                                                        <p><a className="btn btn-primary btn-learn">View Portfolio <i
                                                            className="icon-briefcase3"></i></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p><strong>Hi I'm Aina Oluwatimilehin</strong> A Undergraduate Student of University of the People (UoPeople), USA majors in Computer Science.</p>
                                            <p>Currently an Intern at TechSavvy Web Solution, as a Frontend Developer, Love twisting and playing with web design and the layout of it.
                                            Always wanting to Learn and know more...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                        <div className="services color-1">
                                            <span className="icon2"><i className="icon-bulb"></i></span>
                                            <h3>Graphic Design</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                        <div className="services color-2">
                                            <span className="icon2"><i className="icon-globe-outline"></i></span>
                                            <h3>Web Design</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                        <div className="services color-3">
                                            <span className="icon2"><i className="icon-data"></i></span>
                                            <h3>Software</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                        <div className="services color-4">
                                            <span className="icon2"><i className="icon-phone3"></i></span>
                                            <h3>Application</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                        <div className="hire">
                                            <h2>I am happy to know you <br/>that 300+ projects done sucessfully!</h2>
                                            <a href="#" className="btn-hire">Hire me</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        );
    }
}

export default About;