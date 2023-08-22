import { Handle, Position } from "reactflow";

export default function ConditionNode({ data }) {
    return (
      <div className="conditionNode">
        <Handle type="target" position={Position.Top} />
        <div>
            {data.label}
        </div>
        <Handle type="source" position={Position.Left} id="true" /> 
        <Handle type="source" position={Position.Right} id="false" />
      </div>
    );
  }