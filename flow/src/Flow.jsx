import { useState, useCallback, useMemo, useRef } from 'react';
import ReactFlow, { applyEdgeChanges, Controls, Background, applyNodeChanges, addEdge, ReactFlowProvider} from 'reactflow';
import initialNodes from './nodes';
import initialEdges from './edges';
import ActionNode from "./nodeTypes/ActionNode";
import ConditionNode from "./nodeTypes/ConditionNode";
import EmailNode from "./nodeTypes/EmailNode";
import StartNode from './nodeTypes/StartNode';
import waitNode from './nodeTypes/WaitNode';
import EndNode from './nodeTypes/EndNode';
import Sidebar from './Sidebar'; 


import 'reactflow/dist/style.css';



let id = 0;
const getId = () => `dndnode_${id++}`;

export default function Flow() {
    const nodeTypes = useMemo(
        () => ({
            actionNode: ActionNode,
            conditionNode: ConditionNode,
            emailNode: EmailNode,
            startNode: StartNode, 
            waitNode: waitNode,
            endNode: EndNode,
        }), 
        []
    );


    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [] 
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );
    
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback((event) => {
        event.preventDefault();

        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');

        // check if the dropped element is valid
        if (typeof type === 'undefined' || !type) {
            return;
        }

        const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        });

        const newNode = {
            id: getId(),
            type,
            position,
            data: { label: `${type} node` },
        }

        setNodes((nds) => nds.concat(newNode));
    }, [reactFlowInstance]);

    return(
        <div className="wrapper">
            <ReactFlowProvider>
                <div className='ReactFlowWrapper' ref={reactFlowWrapper}>
                    <ReactFlow
                        nodeTypes={nodeTypes}
                        nodes={nodes}
                        onNodesChange={onNodesChange}
                        edges={edges}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                    >
                        <Background />
                        <Controls />
                    </ReactFlow>
                </div>
                <Sidebar />
            </ReactFlowProvider>
        </div>
        
    );
}