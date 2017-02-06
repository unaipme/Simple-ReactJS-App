var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
	render() {
		return (
			<div className="hello">Hello, world!</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('container')
);