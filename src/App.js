import React, { useState } from "react";
import CreateCard from "./components/CreateCard";
import houseToRent from "./houseToRent";

function App() {
	const [houses, setHouses] = useState(houseToRent);

	const handleClick = (e) => {
		if (e.target.checked) {
			setHouses(houses.filter((house) => house.available));
		} else {
			setHouses(houseToRent);
		}
	};

	return (
		<div>
			<header>
				<h1>🏠 Find your home</h1>
			</header>
			<div className="wrapper">
				<div className="filters">
					<input
						type="text"
						className="search-input"
						placeholder="🔎 Type to search"
					/>
					<select className="select" name="home">
						<option value="All">All</option>
						<option value="Flat">Flat</option>
						<option value="House">House</option>
					</select>
					<div>
						<label htmlFor="available">Show only Available </label>
						<input
							type="checkbox"
							className="available-checkbox"
							name="checkbox"
							id=""
							onClick={handleClick}
						/>
					</div>
				</div>
				<div>
					<div className="cards">
						{houses.map((data, id) => {
							return <CreateCard key={id} data={data} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
