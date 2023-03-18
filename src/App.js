import React from "react";
import initialData from "./initialData";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

class App extends React.Component {
	state = initialData;

	onDragEnd = (result) => {
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const startColumn = this.state.columns[source.droppableId];
		const endColumn = this.state.columns[destination.droppableId];

		if (startColumn === endColumn) {
			const newTaskIds = Array.from(startColumn.taskIds);
			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, draggableId);

			const newColumn = {
				...startColumn,
				taskIds: newTaskIds,
			};

			const newState = {
				...this.state,
				columns: {
					...this.state.columns,
					[newColumn.id]: newColumn,
				},
			};

			this.setState(newState);
		} else {
			const startTaskIds = Array.from(startColumn.taskIds);
			startTaskIds.splice(source.index, 1);
			const newStartColumn = {
				...startColumn,
				taskIds: startTaskIds,
			};

			const endTaskIds = Array.from(endColumn.taskIds);
			endTaskIds.splice(destination.index, 0, draggableId);
			const newEndColumn = {
				...endColumn,
				taskIds: endTaskIds,
			};

			const newState = {
				...this.state,
				columns: {
					...this.state.columns,
					[newStartColumn.id]: newStartColumn,
					[newEndColumn.id]: newEndColumn,
				},
			};

			this.setState(newState);
		}
	};

	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<div className="board">
					{this.state.columnOrder.map((columnId) => {
						const column = this.state.columns[columnId];
						const tasks = column.taskIds.map(
							(taskId) => this.state.tasks[taskId]
						);

						return <Column key={column.id} column={column} tasks={tasks} />;
					})}
				</div>
			</DragDropContext>
		);
	}
}

export default App;
