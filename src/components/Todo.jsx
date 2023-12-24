import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
const Todo = ({ todo, toggleComplete, deleteTodo }) => {
	return (
		<li className="flex justify-between bg-slate-200 p-2 my-2 capitalize">
			<div className="flex justify-between bg-slate-200 p-4 my-2 capitalize">
				<input
					onChange={() => toggleComplete(todo)}
					type="checkbox"
					checked={todo.completed ? "checked" : ""}
				/>
				<p
					className={
						todo.completed 
							? `ml-2 cursor-pointer line-through`
							: `ml-2  cursor-pointer`
					}>
					{todo.title}
				</p>
			</div>
			<button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
		</li>
	);
};

export default Todo;