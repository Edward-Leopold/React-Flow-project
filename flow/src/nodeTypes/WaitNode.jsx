import { Handle, Position } from "reactflow";

export default function waitNode({ data }) {
    return (
      <div className="waitNode">
        <Handle type="target" position={Position.Top} />
        <div>
        {data.label}
        </div>
        <Handle type="source" position={Position.Bottom} />
      </div>
    );
  }