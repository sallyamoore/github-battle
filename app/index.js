var USER_DATA = {
  name: 'Sally Moore',
  username: 'sallyamoore',
  imageUrl: 'http://thumbs2.ebaystatic.com/d/l225/m/m_LqIq_aXBV6gnRg2DikaYw.jpg'
}

var React = require('react');
var ReactDOM = require('react-dom');

// var HelloWorld = React.createClass({
//   render: function() {
//     return (
//       <div>Hello!!! ^_^</div>
//     )
//   }
// });

class ProfilePic extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
}

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.changeUrl = this.changeUrl.bind(this);
  }

  changeUrl() {
    window.location.replace(this.props.href)
  }

  render() {
    return (
      <span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeUrl}>
        {this.props.children}
      </span>
    )
  }
}

class ProfileLink extends React.Component {
  render() {
    return (
      <div>
        <Link href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
}

class ProfileName extends React.Component {
  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.imageUrl} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
}

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
