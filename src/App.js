import React, { useState, useEffect } from "react";
// Icons
import { AiOutlinePlus } from "react-icons/ai";
// Components
import Todo from "./components/Todo";
//Firebase
import { db } from "./firebase";
import {
	query,
	collection,
	onSnapshot,
	updateDoc,
	doc,
	addDoc,
	deleteDoc,
} from "firebase/firestore";
import { Navbar } from "./components/navbar";

function App() {
	// State
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	//		CRUD
	//	 C - Create
	//	 R - Read
	//	 U - Update
	//	 D - Delete

	// Create Todo
	const createTodo = async (e) => {
		e.preventDefault(e);
		if (input === "") {
			alert("Please enter a todo");
			return;
		}
		await addDoc(collection(db, "todos"), {
			title: input,
			completed: false,
		});
		setInput("");
	};

	// Read Todo
	useEffect(() => {
		const q = query(collection(db, "todos"));
		const unsubscirbe = onSnapshot(q, (querySnapshot) => {
			let todosArr = [];
			querySnapshot.forEach((doc) => {
				todosArr.push({ ...doc.data(), id: doc.id });
			});
			setTodos(todosArr);
		});
		return () => {
			unsubscirbe();
		};
	}, []);

	// Update Todo State ( Done / Not Done )
	const toggleComplete = async (todo) => {
		await updateDoc(doc(db, "todos", todo.id), {
			completed: !todo.completed,
		});
	};

	// Delete Todo
	const deleteTodo = async (id) => {
		await deleteDoc(doc(db, "todos", id));
	};

	return (
		
		<>
		<Navbar/>

		
		<div className="h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]">
			<div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
				<h3 className="text-3xl font-bold text-center text-gray-800 p-2">
					<span className="text-red-600">Todo</span>
					<span className="text-blue-700">App</span>
					<span className="text-orange-600">Eniso</span>
				</h3>
				<form onSubmit={createTodo} className="flex justify-between">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						type="text"
						className="border p-2 w-full text-xl"
						placeholder="Add Todo here"
					/>
					<button className="border p-4 ml-2 bg-purple-500 text-slate-100 rounded-full">
						<AiOutlinePlus size={24} color="white" />
					</button>
				</form>
				<ul>
					{todos.map((todo, index) => {
						return (
							<Todo
								key={index}
								todo={todo}
								toggleComplete={toggleComplete}
								deleteTodo={deleteTodo}
							/>
						);
					})}
				</ul>
			</div>
		</div>
		</>
	);
}

export default App;