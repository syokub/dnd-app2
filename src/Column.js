import React from "react";
import Task from "./Task";
import { Droppable, Draggable } from "react-beautiful-dnd";

function Column({ column, tasks, index }) {
	return (
		<Draggable draggableId={column.id} index={index}>
			{(provided) => (
				<div
					className="column"
					{...provided.draggableProps}
					ref={provided.innerRef}
				>
					<div className="column-title" {...provided.dragHandleProps}>{column.title}</div>
					<Droppable droppableId={column.id} type="task">
						{(provided) => (
							<div
								className="task-list"
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{tasks.map((task, index) => (
									<Task key={task.id} task={task} index={index} />
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</div>
			)}
		</Draggable>
	);
}

export default Column;
