import { useState, useCallback, useMemo } from 'react';
import ReactFlow, { applyEdgeChanges, Controls, Background, applyNodeChanges, addEdge} from 'reactflow';
import initialNodes from './nodes';
import initialEdges from './edges';
import ActionNode from "./nodeTypes/ActionNode";
import ConditionNode from "./nodeTypes/ConditionNode";
import EmailNode from "./nodeTypes/EmailNode";
import StartNode from './nodeTypes/StartNode';
import waitNode from './nodeTypes/WaitNode';
import EndNode from './nodeTypes/EndNode';


import 'reactflow/dist/style.css';

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

    return(
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodeTypes={nodeTypes}
                nodes={initialNodes}
                edges={initialEdges}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}