import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import Education from './components/education';
import Experience from './components/education';
import Header from './components/header';
import Heading from './components/education';
import Skills from './components/education';

function App() {
  return (
    <div className="App">
		<div className="container">
			
			<div className="columns">
				<div className="column col-12">
					<Header></Header>
				</div>
			</div>
			
			<div className="columns">
				<div className="column col-5">
					
				</div>
				<div className="column col-7">
				
				</div>
			</div>
		</div>
    </div>
  );
}

export default App;
