import React from "react";
import { Draggable } from "react-beautiful-dnd";
import CardComponent from "./Card";

function Task({ task, index }) {
	return (
		<Draggable draggableId={task.id} index={index}>
			{(provided) => (
				// <div
				// 	className="task"
				// 	{...provided.draggableProps}
				// 	{...provided.dragHandleProps}
				// 	ref={provided.innerRef}
				// >
				// 	{task.content}
				// </div>
				<CardComponent el={task} provided={provided} />
			)}
		</Draggable>
	);
}

export default Task;
