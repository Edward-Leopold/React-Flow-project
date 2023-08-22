import { Handle, Position } from "reactflow";

export default function EndNode({ data }) {
    return (
      <div className="startNode">
        <Handle type="target" position={Position.Top} />
        <div>
            {data.label}
        </div>
      </div>
    ); 
  }