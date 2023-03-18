import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./Column";
import initialData from "./initialData";

function Board() {
	const [data, setData] = useState(initialData);

	const onDragEnd = (result) => {
		const { destination, source, draggableId, type } = result;

		// If the draggable is not dropped on a valid destination, return
		if (!destination) {
			return;
		}

		// If the draggable is dropped in the same position, return
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		// Reorder the columns
		if (type === "COLUMN") {
			const newColumnOrder = Array.from(data.columnOrder);
			newColumnOrder.splice(source.index, 1);
			newColumnOrder.splice(destination.index, 0, draggableId);

			const newData = {
				...data,
				columnOrder: newColumnOrder,
			};

			setData(newData);
			return;
		}

		// Reorder the tasks within a column
		const start = data.columns[source.droppableId];
		const finish = data.columns[destination.droppableId];

		if (start === finish) {
			const newTaskIds = Array.from(start.taskIds);
			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, draggableId);

			const newColumn = {
				...start,
				taskIds: newTaskIds,
			};

			const newData = {
				...data,
				columns: {
					...data.columns,
					[newColumn.id]: newColumn,
				},
			};

			setData(newData);
			return;
		}

		// Move the task from one column to another
		const startTaskIds = Array.from(start.taskIds);
		startTaskIds.splice(source.index, 1);
		const newStart = {
			...start,
			taskIds: startTaskIds,
		};

		const finishTaskIds = Array.from(finish.taskIds);
		finishTaskIds.splice(destination.index, 0, draggableId);
		const newFinish = {
			...finish,
			taskIds: finishTaskIds,
		};

		const newData = {
			...data,
			columns: {
				...data.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish,
			},
		};

		setData(newData);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="all-columns" direction="horizontal" type="COLUMN">
				{(provided) => (
					<div
						className="board "
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{data.columnOrder.map((columnId, index) => {
							const column = data.columns[columnId];
							const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

							return (
								<div className="column-wrapper">
									<Column
										key={column.id}
										column={column}
										tasks={tasks}
										index={index}
									/>
								</div>
							);
						})}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
}

export default Board;
