import { MarkerType } from "reactflow";

const initialEdges = [
    {
        id: 'e1-2',
        source: 'n-1',
        target: 'n-2',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e2-3',
        source: 'n-2',
        sourceHandle: 'true',
        target: 'n-3',
        label: 'Да',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e2-4',
        source: 'n-2',
        sourceHandle: 'false',
        target: 'n-4',
        label: 'Нет',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e3-5',
        source: 'n-3',
        target: 'n-5',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e4-6',
        source: 'n-4',
        target: 'n-6',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e5-7',
        source: 'n-5',
        target: 'n-7',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e6-8',
        source: 'n-6',
        target: 'n-8',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e7-9',
        source: 'n-7',
        sourceHandle: 'true',
        target: 'n-9',
        label: 'Да',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e7-10',
        source: 'n-7',
        sourceHandle: 'false',
        target: 'n-10',
        label: 'Нет',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e8-11',
        source: 'n-8',
        sourceHandle: 'true',
        target: 'n-11',
        label: 'Да',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e8-12',
        source: 'n-8',
        sourceHandle: 'false',
        target: 'n-12',
        label: 'Нет',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e9-13',
        source: 'n-9',
        target: 'n-13',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e10-14',
        source: 'n-10',
        target: 'n-14',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e11-15',
        source: 'n-11',
        target: 'n-15',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e12-16',
        source: 'n-12',
        target: 'n-16',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e14-17',
        source: 'n-14',
        target: 'n-17',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e15-18',
        source: 'n-15',
        target: 'n-18',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e16-19',
        source: 'n-16',
        target: 'n-19',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e17-20',
        source: 'n-17',
        sourceHandle: 'true',
        target: 'n-20',
        label: 'Да',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e17-21',
        source: 'n-17',
        sourceHandle: 'false',
        target: 'n-21',
        label: 'Нет',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e20-22',
        source: 'n-20',
        target: 'n-22',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
    {
        id: 'e21-23',
        source: 'n-21',
        target: 'n-23',
        markerEnd: {
            type: MarkerType.Arrow,
        },
    },
];

export default initialEdges;