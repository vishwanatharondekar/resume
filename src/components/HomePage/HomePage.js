/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes, Component } from 'react';
import styles from './HomePage.css';
import withStyles from '../../decorators/withStyles';
import WayPoint from 'react-waypoint';
import Profile from './profile';
import Experiences from './experiences';
import Abilities from './abilities';
import Projects from './projects';
import Contact from './contact';

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
    path : '#'
  };

  _handleWaypointEnter(link){
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
    this.refs["top"].style.height = window.innerHeight +'px'
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

        <div style={{"height" : "1000px"}} id="top" className="jumbotron" ref="top" >
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

        <WayPoint
            onEnter={(previousPosition, currentPosition, event) => {
              this._handleWaypointEnter("profile");
            }.bind(this)}
          />
        <Profile/>

        <WayPoint
            onEnter={(previousPosition, currentPosition, event) => {
              this._handleWaypointEnter("experiences");
            }.bind(this)}
            onLeave={(previousPosition, currentPosition, event) => {
              //this._handleWaypointEnter("profile");
            }.bind(this)}

          />
        <Experiences/>

        <WayPoint
            onEnter={(previousPosition, currentPosition, event) => {
              this._handleWaypointEnter("abilities");
            }.bind(this)}
            onLeave={(previousPosition, currentPosition, event) => {
              //this._handleWaypointEnter("experiences");
            }.bind(this)}

          />
        <Abilities/>

        <WayPoint
            onEnter={(previousPosition, currentPosition, event) => {
              this._handleWaypointEnter("projects");
            }.bind(this)}
            onLeave={(previousPosition, currentPosition, event) => {
              //this._handleWaypointEnter("abilities");
            }.bind(this)}

          />
        <Projects/>

        <WayPoint
            onEnter={(previousPosition, currentPosition, event) => {
              this._handleWaypointEnter("contact");
            }.bind(this)}
            onLeave={(previousPosition, currentPosition, event) => {
              //this._handleWaypointEnter("projects");
            }.bind(this)}

          />
        <Contact/>
      </div>);
  }
}


class Navigation extends Component{

  state={
    path : this.props.path,
    open: false
  };

  componentWillReceiveProps(props){
    this.setState({
      path : props.path,
      open:false
    })
  }

  componentDidMount(){
  }

  toggleNavBar(){
    this.setState({
      open : !this.state.open
    })
  }

  onNavigate(path){
    this.setState({
      path : path,
      open : false
    });
  }

  render(){
    return (
      <nav className="navbar navbar-default" id="navbar-example" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" onClick={this.toggleNavBar.bind(this)} >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          </button>
        </div>
        <div className={("collapse navbar-collapse navbar-ex1-collapse") + (this.state.open?' collapse in' : '')}>
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


export default ContentPage;

