import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import { clickFolders } from './functionality/clickFolders';

class App extends Component {
	render(){
		return(
			<main>
				<h1>Favourite Folders</h1>
				<div className="favourite-folders" onClick={clickFolders}>
					<article className="folder" data-folder="~/Downloads">
						Downloads
					</article>
				</div>
			</main>
		);
	}
}


export default hot(module)(App);
