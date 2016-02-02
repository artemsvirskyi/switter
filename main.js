import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
	getInitialState(){
		return {items: []}
	},
	onClick(){
		const newItemText = this.refs.input.value;

		this.setState({items: this.state.items.concat(newItemText), text: ''});

	},
	componentWillMount(){
		console.log(1);
		setTimeout(() => {
			console.log(document.getElementById('some'));
		});
	},
	render(){
		return (
			<div id="some">
				<h3>TODO</h3>
				<input type="text" ref="input" value={this.state.text}/>
				<button onClick={this.onClick}>add</button>
				<TodoList items={this.state.items}></TodoList>
			</div>
		);
	}
});

const TodoList = React.createClass({
	render(){
		return (
			<ul>
				{this.props.items.map(item => <li key={item}>{item}</li>)}
			</ul>
		);
	}
});

ReactDOM.render(<App/>, document.getElementById('app'));