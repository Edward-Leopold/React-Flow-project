import { useState, useCallback, useMemo } from 'react';
import ReactFlow, { applyEdgeChanges, Controls, Background, applyNodeChanges, addEdge, Handle, Position } from 'reactflow';
import Flow from './Flow'

import 'reactflow/dist/style.css';

function App() {
  return (
      <Flow />
  );
}

export default App;
