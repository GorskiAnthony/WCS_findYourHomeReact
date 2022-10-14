import React, { useState } from "react";
import Card from "./components/Card";
import HouseToRent from "./houseToRent";

function App() {
  const [houses, setHouses] = useState(HouseToRent);

  const handleSelect = (e) => {
    const typeHouse = e.target.value;
    if (typeHouse === "House") {
      setHouses(HouseToRent.filter((house) => house.type === "House"));
    } else if (typeHouse === "Flat") {
      setHouses(HouseToRent.filter((house) => house.type === "Flat"));
    } else {
      setHouses(HouseToRent);
    }
  };

  const handleClick = (e) => {
    // console.log(e.target.checked);
    if (e.target.checked) {
      setHouses(HouseToRent.filter((house) => house.available));
    } else {
      setHouses(HouseToRent);
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
          <select className="select" name="home" onChange={handleSelect}>
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
            {/* <!-- CARD EXAMPLE --> */}
            {
              // HouseToRent est un tableau, je peux donc boucler dessus
              // avec un map.
              // J'informe que chaque élément de houseToRent est une "house"
              houses.map((house, id) => (
                // Via un return implicite à cause de ()
                // Je return une Card avec via le spread operator
                // toute ma house = {...house}
                // 🚨 chaque Card doit être unique, donc j'utilise en 2eme
                // param "id" pour compter l'index de mes cartes et ainsi
                // passer id en props pour le rendre unique.
                <Card key={id} {...house} />
              ))
            }
            {/* <!-- CARD EXAMPLE --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
