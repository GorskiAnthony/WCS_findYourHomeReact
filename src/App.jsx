import { useState } from "react";
import CreateCard from "./components/CreateCard";
import houses from "./houseToRent";

function App() {
	const [housesFilter, setHousesFilter] = useState(houses);

	const handleClickAvailable = (event) => {
		if (event.target.checked) {
			setHousesFilter(houses.filter((house) => house.available));
		} else {
			setHousesFilter(houses);
		}
	};

	const handleSelect = (event) => {
		if (event.target.value === "Flat") {
			setHousesFilter(houses.filter((house) => house.type === "Flat"));
		} else if (event.target.value === "House") {
			setHousesFilter(houses.filter((house) => house.type === "House"));
		} else {
			setHousesFilter(houses);
		}
	};

	const handleSearch = (e) => {
		const search = e.target.value.toLowerCase();
		setHousesFilter(
			houses.filter((house) => house.name.toLowerCase().includes(search))
		);

		if (e.target.value === "") {
			setHousesFilter(houses);
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
						onChange={handleSearch}
					/>
					<select
						className="select"
						name="home"
						onChange={handleSelect}
					>
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
							onClick={handleClickAvailable}
						/>
					</div>
				</div>
				<div>
					<div className="cards">
						{housesFilter.map((house, index) => {
							return <CreateCard key={index} {...house} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
