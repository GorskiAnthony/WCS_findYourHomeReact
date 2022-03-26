import React from "react";

const CreateCard = ({ data }) => {
	return (
		<div className="card">
			<div className="card-header">
				<div
					className="card-img"
					style={{ backgroundImage: `url(${data.img})` }}
				></div>
			</div>
			<div className="card-body">
				<h2 className="card-title">{data.name}</h2>
				<p className="card-description">{data.desc}</p>
				<button className="card-button">I want it!</button>
			</div>
		</div>
	);
};

export default CreateCard;
