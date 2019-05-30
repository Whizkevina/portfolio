import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <a href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                    <div className="text-center">
                        <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}}></div>
                        <h1 id="colorlib-logo"><a href="index.html">Aina Tim</a></h1>
                        <span className="position"> <a href="#">Front-End Developer </a>   in Nigeria</span>
                    </div>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                            <ul>
                                <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a href="#" data-nav-section="about">About</a></li>
                                <li><a href="#" data-nav-section="services">Services</a></li>
                                <li><a href="#" data-nav-section="skills">Skills</a></li>
                                <li><a href="#" data-nav-section="education">Education</a></li>
                                <li><a href="#" data-nav-section="experience">Experience</a></li>
                                <li><a href="#" data-nav-section="work">Work</a></li>
                                <li><a href="#" data-nav-section="blog">Blog</a></li>
                                <li><a href="#" data-nav-section="contact">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                    <nav id="colorlib-main-menu">
                        <ul>
                            <li><a href="www.facebook.com/AnonWhizkevina" target="_blank"><i class="icon-facebook2"></i></a></li>
                            <li><a href="www.twitter.com/Iam_Whizkevina" target="_blank"><i class="icon-twitter2"></i></a></li>
                            <li><a href="www.linkedin.com/u/AinaOluwatimmy" target="_blank"><i class="icon-linkedin"></i></a></li>
                            <li><a href="www.github.com/whizkevina" target="_blank"><i class="icon-github"></i></a></li>
                        </ul>
                    </nav>
            </aside>


    </div>
        );
    }
}

export default Sidebar;