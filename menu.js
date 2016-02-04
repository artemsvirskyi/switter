import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const App = React.createClass({
	getInitialState(){
		return {currentIndex: 0};
	},
	change(index){
		this.setState({currentIndex: index});
	},
	render(){
		return (
			<div>
				<Menu index={this.state.currentIndex} onChange={this.change}></Menu>
				<Pages index={this.state.currentIndex}></Pages>
			</div>
		);
	}
});

const Menu = React.createClass({
	getButtons(activeIndex){
		return ['me', 'likes', 'tweets'].map((text, index) => {
			var btnClass = classnames({
				active: activeIndex === index
			});

			return <button onClick={this.props.onChange.bind(null, index)} className={btnClass} key={index}>{text}</button>
		});
	},
	render(){
		return (
			<div className="menu">{this.getButtons(this.props.index)}</div>
		);
	}
});

const Pages = React.createClass({
	render(){
		return <div>{this.props.index}</div>
	}
});

ReactDOM.render(<App />, document.getElementById('app'));