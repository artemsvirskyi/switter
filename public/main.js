import React from 'react';
import ReactDOM from 'react-dom';
import db from './db.json';
import { Router, Route, Link, browserHistory } from 'react-router';

/*
const App = React.createClass({
	getInitialState(){
		return {tweets: db.tweets, inputValue: ''}
	},
	onClick(){
		const newTweetText = this.state.inputValue;

		if(!newTweetText){
			return;
		}

		this.setState({tweets: [newTweetText].concat(this.state.tweets), inputValue: ''});
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
				<input type="text" value={this.state.inputValue} onChange={this.onChange}/>
				<button onClick={this.onClick}>add</button>
				<Tweets tweets={this.state.tweets} onRemove={this.remove}></Tweets>
			</div>
		);
	}
});

const Tweets = React.createClass({
	render(){
		return (
			<div>
				{this.props.tweets.map((tweet, index) => <Tweet key={index} onRemove={this.props.onRemove} id={index}>{tweet}</Tweet>)}
			</div>
		);
	}
});

const Tweet = React.createClass({
	render(){
		return (
			<div className="tweet">
				<p>{this.props.children}</p>
				<button onClick={this.props.onRemove.bind(null, this.props.id)}>remove tweet</button>
			</div>
		);
	}
});*/

const I = React.createClass({
	render(){
		return (
			<div>I</div>
		);
	}
});

const Likes = React.createClass({
	render(){
		return (
			<div>Likes</div>
		);
	}
});

const Tweets = React.createClass({
	render(){
		return (
			<div>Tweets</div>
		);
	}
});

const NoMatch = React.createClass({
	render(){
		return (
			<div>404 Not Found</div>
		);
	}
});

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={I}>
	      <Route path="*" component={NoMatch}/>
		</Route>
		<Route path="likes" component={Likes}>
	      {/*<Route path="*" component={NoMatch}/>*/}
		</Route>
	  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));