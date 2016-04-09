/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes, Component } from 'react';
import styles from './HomePage.css';
import withStyles from '../../decorators/withStyles';
import WayPoint from 'react-waypoint';
//@withStyles(bootstrap)
@withStyles(styles)
class ContentPage extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
  };
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  state = {
    path : '#profile'
  };

  _handleWaypointEnter(link){
    console.log('Way point enter')
    console.log('link : ', link);
    this.setState({
      path : "#" + link
    });
    history.pushState(null, null,  "#" + link);
  }

  _handleWaypointLeave(){
    console.log('Way point leave')
  }

  handleScroll(){
    if(window.scrollY > this.lnStickyNavigation){
      this.setState({
        fixed : 'fixed'
      })
    } else {
      this.setState({
        fixed : ''
      })
    }
  }

  componentDidMount(){
    var scrollDownEl = this.refs['scroll-down']
    this.lnStickyNavigation =     scrollDownEl.offsetTop  + 20;
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.handleScroll();
    this.setFirstFoldHeight();
  }

  setFirstFoldHeight(){
    this.refs["top"].style.height = screen.height +'px'
  }

  render() {
    this.context.onSetTitle("Vishwanath Arondekar profile");
    return (
      <div className={"home-page " + this.state.fixed}>

      <WayPoint
        onEnter={(previousPosition, currentPosition, event) => {
          this._handleWaypointEnter("");
        }.bind(this)}
      />

  <div id="top" className="jumbotron" ref="top" >
    <div className="container">
      <h1>Vishwanath Arondekar</h1>
      <p className="lead">Interactive resume</p>
    </div>
    <div className="overlay"></div>
    <a href="#profile" className="scroll-down" ref="scroll-down">
      <span className="glyphicon glyphicon-chevron-down"></span>
    </a>
  </div>

  <Navigation path={this.state.path}/>



  <div className="background-white">

    <WayPoint
        onEnter={(previousPosition, currentPosition, event) => {
          this._handleWaypointEnter("profile");
        }.bind(this)}
      />

    <div id="profile" className="container">
      <h2>Profile</h2>
      <p className="lead">Pro web developer with a pinch of everything else</p>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <h3>About me</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        <div className="col-md-4 text-center">
          <img src="/view/images/vishwanatharondekar.png" alt="Vishwanath Arondekar" width="246" height="246" />
        </div>
        <div className="col-md-4">
          <h3>Details</h3>
          <p>
            <strong>Name:</strong><br />
            Vishwanath Arondekar<br />
            <strong>Age:</strong><br />
            29 years<br />
            <strong>Location:</strong><br />
          Mumbai    </p>

        </div>
      </div>      </div>
    </div>

    <WayPoint
        onEnter={(previousPosition, currentPosition, event) => {
          this._handleWaypointEnter("experiences");
        }.bind(this)}
        onLeave={(previousPosition, currentPosition, event) => {
          //this._handleWaypointEnter("profile");
        }.bind(this)}

      />

    <div id="experiences" className="container">
      <h2>Experiences</h2>
      <p className="lead">
          “Quote”<br />- Quote By
      </p>
      <hr />

      <h3>Educations</h3>
      <div className="experiences">

        <div className="experience row">
          <div className="col-md-4">
            <h4>Mumbai University</h4>
            <p className="experience-period">
              July 2008        -
            May 2016      </p>
          </div>
          <div className="col-md-8">
            <p>
              <strong>Lorem Ipsum</strong>
              <span className="hidden-phone">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.              <span className="experience-details">
                <span className="location">
                  <span className="glyphicon glyphicon-map-marker"></span>
                Online
              </span>
              </span>
              </span>
            </p>
          </div>
        </div>
      </div>


      <hr />
      <h3>Careers</h3>



      <div className="experiences">


        <div className="experience row">
          <div className="col-md-4">
            <h4>Mumbai University</h4>
            <p className="experience-period">
              July 2008        -
            May 2016      </p>
          </div>
          <div className="col-md-8">
            <p>
              <strong>Lorem Ipsum</strong>
              <span className="hidden-phone">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.              <span className="experience-details">
                <span className="location">
                  <span className="glyphicon glyphicon-map-marker"></span>
                Online
              </span>
              </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <WayPoint
        onEnter={(previousPosition, currentPosition, event) => {
          this._handleWaypointEnter("abilities");
        }.bind(this)}
        onLeave={(previousPosition, currentPosition, event) => {
          //this._handleWaypointEnter("experiences");
        }.bind(this)}

      />

    <div className="background-white">
      <div id="abilities" className="container">
        <h2>Abilities</h2>
        <p className="lead">
          “Quote”<br />- Quote By
        </p>
        <hr />
        <h3>Skills</h3>
        <div className="row">

          <div className="col-md-6">
            <ul className="no-bullets">
              <li>
                <span className="ability-title">CSS(3)</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                </span>
              </li>
              <li>
                <span className="ability-title">HTML(5)</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="no-bullets">
              <li>
                <span className="ability-title">React</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star "></span>
                </span>
              </li>
              <li>
                <span className="ability-title">Angular</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star "></span>
                </span>
              </li>
            </ul>
          </div>


        </div>
        <div className="text-center project-referal">
          <p>This project is built on react starter kit.</p>
          <a href="https://github.com/vishwanatharondekar/resume" className="btn btn-primary" target="_blank">See project on Github</a>
        </div>
        <hr />
        <h3>Languages</h3>
        <div className="row">

          <div className="col-md-6">
            <ul className="no-bullets">
              <li>
                <span className="ability-title">Marathi (Mother tongue)</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="no-bullets">
              <li>
                <span className="ability-title">English (Daily use)</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <h3>Tools</h3>
        <div className="row">
          <div className="col-md-6">
            <ul className="no-bullets">

              <li>
                <span className="ability-title">Sublime Text (2 years)</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star "></span>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="no-bullets">
              <li>
                <span className="ability-title">Sublime Text (2 years)</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star "></span>
                </span>
              </li>


            </ul>
          </div>

        </div>
        </div>
      </div>


    <WayPoint
        onEnter={(previousPosition, currentPosition, event) => {
          this._handleWaypointEnter("projects");
        }.bind(this)}
        onLeave={(previousPosition, currentPosition, event) => {
          //this._handleWaypointEnter("abilities");
        }.bind(this)}

      />

      <div id="projects" className="container">
        <h2>Projects</h2>
        <p className="lead">
          “Quote”<br />- Quote By
        </p>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <figure className="effect">
              <img src="/view/images/project_xpenseshare.jpg" alt="XpenseShare" />

              <figcaption>
              <h3>XpenseShare</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p><strong>Tags:</strong> <br />Development, Wordpress, Bootstrap</p>
              <a href="http://studiomals.com" target="_blank">View more</a>
              <span className="icon">
                <span className="glyphicon glyphicon-new-window"></span>
              </span>
              </figcaption>
            </figure>
          </div>

          <div className="col-md-6 col-sm-12 col-xs-12">
            <figure className="effect">
              <img src="/view/images/project_xpenseshare.jpg" alt="XpenseShare" />
              <figcaption>
              <h3>XpenseShare</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p><strong>Tags:</strong> <br />Development, Design, Bootstrap, Wordpress</p>
              <a href="http://medischbiomagnetisme.com" target="_blank">View more</a>
              <span className="icon">
                <span className="glyphicon glyphicon-new-window"></span>
              </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

    <WayPoint
        onEnter={(previousPosition, currentPosition, event) => {
          this._handleWaypointEnter("contact");
        }.bind(this)}
        onLeave={(previousPosition, currentPosition, event) => {
          //this._handleWaypointEnter("projects");
        }.bind(this)}

      />

      <div className="background-gray">
        <div id="contact" className="container">
          <h2>Contact</h2>
          <p className="lead">
            “Quote ”<br />- Quote By
          </p>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <ul className="no-bullets">
                <li>
                  <a href="http://twitter.com/vishwanath_a" target="_blank">
                    <span className="icon icon-twitter"></span>
                  http://twitter.com/vishwanath_a        </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/vishwanath-arondekar-615ab715" target="_blank">
                    <span className="icon icon-linkedin"></span>
                  https://www.linkedin.com/in/vishwanath-arondekar</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="no-bullets">
                <li>
                  <a href="javascript:void(0);">
                    <span className="icon icon-skype"></span>
                  vishwanatharondekar       </a>
                </li>
                <li>
                  <a href="mailto:vishwanatharondekar@gmail.com">
                    <span className="icon icon-email"></span>
                    <span>
                    vishwanatharondekar@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
export default ContentPage;


class Navigation extends Component{

  state={
    path : this.props.path
  };

  componentWillReceiveProps(props){
    this.setState({
      path : props.path
    })
  }

  componentDidMount(){
    this.handleScroll();
  }

  handleScroll(){

  }

  onNavigate(path){
    this.setState({
      path : path
    });
  }

  render(){
    return (
      <nav className="navbar navbar-default" id="navbar-example" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <NavigationLink currentPath={this.state.path} onNavigate={this.onNavigate.bind(this)} href="#profile">Profile</NavigationLink>
            <NavigationLink currentPath={this.state.path} onNavigate={this.onNavigate.bind(this)} href="#experiences">Experiences</NavigationLink>
            <NavigationLink currentPath={this.state.path} onNavigate={this.onNavigate.bind(this)} href="#abilities">Abilities</NavigationLink>
            <NavigationLink currentPath={this.state.path} onNavigate={this.onNavigate.bind(this)} href="#projects">Projects</NavigationLink>
            <NavigationLink currentPath={this.state.path} onNavigate={this.onNavigate.bind(this)} href="#contact">Contact</NavigationLink>
          </ul>
        </div>
      </nav>
    )
  }
}

class NavigationLink extends Component{
  navigate(){
    this.props.onNavigate(this.props.href);
  }

  render(){
    var isActive = this.props.currentPath===this.props.href;

    return (
      <li className={isActive?'active':''}>
        <a onClick={this.navigate.bind(this)} href={this.props.href}>
          {this.props.children}
        </a>
      </li>
    )
  }
}
