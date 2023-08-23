export default function Sidebar(){
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    }

    return (
        <aside className="dnd-aside">
            <div className="desc">Drag and Drop items to add to the flow</div>
            <div className="dndnode startNode_sidebar" onDragStart={(event) => onDragStart(event, "startNode")} draggable>Start Node</div>
            <div className="dndnode conditionNode_sidebar" onDragStart={(event) => onDragStart(event, "conditionNode")} draggable>Condition Node</div>
            <div className="dndnode actionNode_sidebar" onDragStart={(event) => onDragStart(event, "actionNode")} draggable>Action Node</div>
            <div className="dndnode emailNode_sidebar" onDragStart={(event) => onDragStart(event, "emailNode")} draggable>Email Node</div>
            <div className="dndnode waitNode_sidebar" onDragStart={(event) => onDragStart(event, "waitNode")} draggable>Wait Node</div>
            <div className="dndnode endNode_sidebar" onDragStart={(event) => onDragStart(event, "endNode")} draggable>End Node</div>
        </aside>
    );
}