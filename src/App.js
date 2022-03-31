import React, { useState } from "react";
import CreateCard from "./CreateCard";
import houseToRent from "./houseToRent";

function App() {
	// Je vais initialiser un state de mon app
	const [houses, setHouses] = useState(houseToRent);

	const handleSelect = (event) => {
		if (event.target.value === "Flat") {
			setHouses(houseToRent.filter((house) => house.type === "Flat"));
		} else if (event.target.value === "House") {
			setHouses(houseToRent.filter((house) => house.type === "House"));
		} else {
			setHouses(houseToRent);
		}
	};

	const handleText = (event) => {
		// créer une variable search qui prendra le texte du user et le transforme en minuscule
		const search = event.target.value.toLowerCase();
		// mettre à jour le state (houses) avec un filtre qui inclut
		// mon search
		setHouses(
			houseToRent.filter((house) =>
				house.name.toLowerCase().includes(search)
			)
		);
		// Si pas de texte alors renvoi toutes mes maisons
		// Cette ecriture {if (!search)}
		// est la même que celle là { if (search === "")}
		if (search === "") {
			setHouses(houseToRent);
		}
	};

	const handleClick = (event) => {
		if (event.target.checked) {
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
						onKeyUp={handleText}
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
							onClick={handleClick}
						/>
					</div>
				</div>
				<div>
					<div className="cards">
						{houses.map((house, key) => {
							return <CreateCard key={key} {...house} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
