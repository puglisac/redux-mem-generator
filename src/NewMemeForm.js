import React, { useState } from "react";
import { Button, Form, Label, Input, FormGroup } from "reactstrap";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
/** 
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const NewMemeForm = () => {
	const INITIAL_STATE = { img: "", topText: "", botText: "", color: "#000" };
	const [ formData, setFormData ] = useState(INITIAL_STATE);
	const dispatch = useDispatch();

	const addMeme = (obj) => {
		obj["id"] = nextId();
		dispatch({ type: "ADD", payload: obj });
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addMeme(formData);
	};

	/** Update local state w/curr state of input elem */

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((fData) => ({
			...fData,
			[name]: value
		}));
	};

	/** render form */

	return (
		<section className="col">
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<h5 className="font-weight-bold text-center">Create a Meme</h5>
					<Label htmlFor="img">Image URL:</Label>
					<Input
						className="text-center"
						id="img"
						name="img"
						value={formData.img}
						onChange={handleChange}
						required
					/>

					<Label htmlFor="topText">Top Text:</Label>
					<Input
						className="text-center"
						type="topText"
						id="topText"
						name="topText"
						value={formData.topText}
						onChange={handleChange}
					/>

					<Label htmlFor="botText">Bottom Text:</Label>
					<Input
						className="text-center"
						id="botText"
						name="botText"
						value={formData.botText}
						onChange={handleChange}
					/>
					<Label htmlFor="color">Text Color: </Label>
					<Input
						className="text-center"
						type="color"
						id="color"
						name="color"
						value={formData.color}
						onChange={handleChange}
					/>

					<Button className="m-2" color="success">
						Create!
					</Button>
				</FormGroup>
			</Form>
		</section>
	);
};

export default NewMemeForm;
