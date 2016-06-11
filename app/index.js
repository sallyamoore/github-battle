var React = require('react');
var ReactDOM = require('react-dom');

// var HelloWorld = React.createClass({
//   render: function() {
//     return (
//       <div>Hello!!! ^_^</div>
//     )
//   }
// });

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>Fancy Hello!!! ^_^</div>
    )
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
