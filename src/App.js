import React from "react";
import CreateCard from "./components/CreateCard";
import houseToRent from "./houseToRent";

function App() {
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
						/>
					</div>
				</div>
				<div>
					<div className="cards">
						{houseToRent.map((house, id) => (
							<CreateCard key={id} data={house} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
