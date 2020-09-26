import React from "react";
import "./App.css";
import NewMemeForm from "./NewMemeForm";
import MemeList from "./MemeList";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Meme Generator</h1>
			</header>
			<NewMemeForm />
			<MemeList />
		</div>
	);
}

export default App;
