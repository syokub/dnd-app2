import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import CardComponent from "./Card";

const MemoizedCard = memo(CardComponent);

function Task({ task, index }) {
	return (
		<Draggable draggableId={task.id} index={index}>
			{(provided) => <MemoizedCard el={task} provided={provided} />}
		</Draggable>
	);
}

export default Task;
