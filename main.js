import React from 'react';
import ReactDOM from 'react-dom';
import db from './db.json';

const App = React.createClass({
	getInitialState(){
		return {tweets: db.tweets, inputValue: ''}
	},
	onClick(){
		const newTweetText = this.state.inputValue;

		if(!newTweetText){
			return;
		}

		this.setState({tweets: this.state.tweets.concat(newTweetText), inputValue: ''});
	},
	remove(key){
		this.state.tweets.splice(key, 1);

		this.setState({tweets: this.state.tweets});
	},
	onChange(e){
		this.setState({inputValue: e.target.value});
	},
	render(){
		return (
			<div>
				<h3>My tweets</h3>
				<Tweets tweets={this.state.tweets} onRemove={this.remove}></Tweets>
				<input type="text" value={this.state.inputValue} onChange={this.onChange}/>
				<button onClick={this.onClick}>add</button>
			</div>
		);
	}
});

const Tweets = React.createClass({
	render(){
		return (
			<div>
				{this.props.tweets.slice('').map((tweet, index) => <Tweet key={index} onRemove={this.props.onRemove} id={index}>{tweet}</Tweet>)}
			</div>
		);
	}
});

const Tweet = React.createClass({
	remove(){
		this.props.onRemove(this.props.id);
	},
	render(){
		return (
			<div className="tweet">
				<p>{this.props.children}</p>
				<button onClick={this.remove}>remove tweet</button>
			</div>
		);
	}
});

ReactDOM.render(<App/>, document.getElementById('app'));