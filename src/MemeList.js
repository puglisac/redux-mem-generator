import React from "react";
import { useSelector } from "react-redux";
import Meme from "./Meme";

const MemeList = () => {
	const memes = useSelector((st) => st.memes);

	return (
		<div>
			{memes.map((m) => (
				<Meme key={m.id} id={m.id} img={m.img} topText={m.topText} botText={m.botText} color={m.color} />
			))}
		</div>
	);
};
export default MemeList;
