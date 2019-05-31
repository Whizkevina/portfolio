import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <a href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                    <div id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}}/>
                        <h1 id="colorlib-logo"><a href="index"> Aina Tim</a></h1>
                        <span className="position"> <a href="#!">Front-End Developer</a>    in Nigeria</span>
                    </div>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                            <ul>
                                <li className="active"><a href="#" data-nav-section="home">Home</a></li>                        <li><a href="#about" data-nav-section="about">About</a></li>
                                <li><a href="#skill" data-nav-section="skills">Skills</a></li>
                                <li><a href="#experience" data-nav-section="experience">Experience</a></li>
                                <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                            </ul>
                        </div>
                    </nav>

                    <nav id="colorlib-main-menu">
                        <ul>
                            <li><a href="https://www.facebook.com/AnonWhizkevina" target="_blank"><i class="icon-facebook2"></i></a></li>
                            <li><a href="https://www.twitter.com/Iam_Whizkevina" target="_blank"><i class="icon-twitter2"></i></a></li>
                            <li><a href="https://www.linkedin.com/u/AinaOluwatimmy" target="_blank"><i class="icon-linkedin"></i></a></li>
                            <li><a href="https://www.github.com/whizkevina" target="_blank"><i class="icon-github"></i></a></li>
                        </ul>
                    </nav>
            </div>
    </div>
        );
    }
}

export default Sidebar;