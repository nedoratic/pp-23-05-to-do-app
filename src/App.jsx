function App() {
	return (
		<div className="app">
			<h1 className="app__title">To Do App</h1>
			<form className="app__form">
				<label className="app__form__label" htmlFor="app__form__input">
					New Item
				</label>
				<input className="app__form__input" id="app__form__input" type="text" />
			</form>
			<button className="app__btn btn btn-add">Add Item</button>
			<h2 className="app__header">To Do List</h2>
			<ul className="app__list">
				<li className="app__list__item">
					<label className="app__list__item__label" htmlFor="">
						<input className="app__list__item__checkbox" type="checkbox" />
						Item 1
					</label>
					<button className="app__list__item__btn btn btn-delete">Delete</button>
				</li>
				<li className="app__list__item">
					<label className="app__list__item__label" htmlFor="">
						<input className="app__list__item__checkbox" type="checkbox" />
						Item 2
					</label>
					<button className="app__list__item__btn btn btn-delete">Delete</button>
				</li>
				<li className="app__list__item">
					<label className="app__list__item__label" htmlFor="">
						<input className="app__list__item__checkbox" type="checkbox" />
						Item 3
					</label>
					<button className="app__list__item__btn btn btn-delete">Delete</button>
				</li>
			</ul>
		</div>
	);
}

export default App;
