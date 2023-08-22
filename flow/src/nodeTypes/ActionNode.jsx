import { Handle, Position } from "reactflow";

export default function ActionNode({ data }) {
    return (
      <div className="actionNode">
        <Handle type="target" position={Position.Top} />
        <div>
        {data.label}
        </div>
        <Handle type="source" position={Position.Bottom} />
      </div>
    );
  }