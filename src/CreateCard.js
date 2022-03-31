import React from "react";

const CreateCard = ({ img, name, desc, type }) => {
	return (
		<div className="card">
			<div className="card-header">
				<div
					className="card-img"
					style={{
						backgroundImage: `url(${img})`,
					}}
				></div>
			</div>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<p className="card-description">{desc}</p>
				<button className="card-button">I want it!</button>
			</div>
		</div>
	);
};

export default CreateCard;
