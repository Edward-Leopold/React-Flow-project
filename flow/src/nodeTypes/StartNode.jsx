import { Handle, Position } from "reactflow";

export default function StartNode({ data }) {
    return (
      <div className="startNode">
        <div>
            {data.label}
        </div>
        <Handle type="source" position={Position.Bottom} />
      </div>
    ); 
  }