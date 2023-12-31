import { useState } from 'react';

function App() {
	const [newItem, setNewItem] = useState('');
	const [todos, setTodos] = useState([]);

	function handleSubmit(e) {
		e.preventDefault();

		setTodos((currentTodos) => {
			return [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false }];
		});

		setNewItem('');
	}

	function toggleTodo(id, completed) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
				}
				return todo;
			});
		});
	}

	function deleteTodo(id) {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => todo.id !== id);
		});
	}

	return (
		<div className="app">
			<h1 className="app__title">To Do App</h1>
			<form className="app__form" onSubmit={handleSubmit}>
				<label className="app__form__label" htmlFor="app__form__input">
					New Item
				</label>
				<input className="app__form__input" id="app__form__input" type="text" required value={newItem} onChange={(e) => setNewItem(e.target.value)} />
				<button className="app__form__btn btn btn-add">Add Item</button>
			</form>
			<h2 className="app__header">To Do List</h2>
			<ul className="app__list">
				{todos.length === 0 && 'Your To Do Items Will Be Displayed Here'}
				{todos.map((todo) => {
					return (
						<li className="app__list__item" key={todo.id}>
							<label className="app__list__item__label" htmlFor="">
								<input className="app__list__item__checkbox" type="checkbox" checked={todo.completed} onChange={(e) => toggleTodo(todo.id, e.target.checked)} />
								{todo.title}
							</label>
							<button className="app__list__item__btn btn btn-delete" onClick={() => deleteTodo(todo.id)}>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
