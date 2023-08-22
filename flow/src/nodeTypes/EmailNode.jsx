import { Handle, Position } from "reactflow";

export default function EmailNode({ data }) {
    return (
      <div className="emailNode">
        <Handle type="target" position={Position.Top} />
        <div>
            {data.label}
        </div>
        <Handle type="source" position={Position.Bottom} />
      </div>
    ); 
  }