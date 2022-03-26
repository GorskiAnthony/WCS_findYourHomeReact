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
						{/* <!-- CARD EXAMPLE --> */}
						<div className="card">
							<div className="card-header">
								<div
									className="card-img"
									style={{
										backgroundImage: `url(
											"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
										)`,
									}}
								></div>
							</div>
							<div className="card-body">
								<h2 className="card-title">Sample Card</h2>
								<p className="card-description">
									This is just a sample card, take the
									structure of this card as an example for the
									function createCard
								</p>
								<button className="card-button">
									I want it!
								</button>
							</div>
						</div>
						{/* <!-- CARD EXAMPLE --> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
