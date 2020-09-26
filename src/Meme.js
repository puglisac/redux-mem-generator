import React from "react";
import "./Meme.css";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
const Meme = ({ id, img, topText, botText, color }) => {
	const dispatch = useDispatch();
	console.log(id);

	const deleteMeme = (id) => {
		dispatch({ type: "DELETE", payload: { id } });
	};
	return (
		<div className="Meme col">
			<img className="Meme-img" src={img} alt="meme" />
			<h2 style={{ color: color }} className="Meme-top-text">
				{topText}
			</h2>
			<h2 style={{ color: color }} className="Meme-bot-text">
				{botText}
			</h2>
			<Button onClick={() => deleteMeme(id)}>Delete</Button>
		</div>
	);
};
export default Meme;
