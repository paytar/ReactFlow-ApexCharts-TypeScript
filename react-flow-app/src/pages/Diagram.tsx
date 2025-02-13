import React, { useState, useCallback } from "react";
import ReactFlow, {
    Controls,
    Background,
    Node,
    Edge,
    useNodesState,
    useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { useTeamContext } from "../context/TeamContext";

const Diagram = () => {
    const { teams } = useTeamContext();
    const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);
    const [hiddenUsers, setHiddenUsers] = useState<string[]>([]);

    const generateNodesAndEdges = useCallback(() => {
        const newNodes: Node[] = [];
        const newEdges: Edge[] = [];

        teams.forEach((team, index) => {
            const teamNode = {
                id: team.id,
                type: "default",
                data: { label: team.name },
                position: { x: 200, y: index * 150 },
                style: { background: "#007BFF", color: "#fff", padding: 10 },
                onContextMenu: (event: React.MouseEvent) => handleRightClick(event, team.id),
            };
            newNodes.push(teamNode);

            team.users.forEach((user, userIndex) => {
                if (!hiddenUsers.includes(user.id)) {
                    const userNode = {
                        id: user.id,
                        type: "default",
                        data: { label: user.name },
                        position: { x: 400, y: index * 150 + userIndex * 50 },
                        style: { background: "#28a745", color: "#fff", padding: 10 },
                        onContextMenu: (event: React.MouseEvent) => handleRightClick(event, user.id),
                    };
                    newNodes.push(userNode);
                    newEdges.push({ id: `edge-${team.id}-${user.id}`, source: team.id, target: user.id });
                }
            });
        });

        setNodes(newNodes);
        setEdges(newEdges);
    }, [teams, hiddenUsers]);

    // Right click to hide users
    const handleRightClick = (event: React.MouseEvent, nodeId: string) => {
        event.preventDefault();

        const selectedTeam = teams.find((team) => team.id === nodeId);
        if (selectedTeam) {
            const teamUserIds = selectedTeam.users.map((user) => user.id);
            const areAllHidden = teamUserIds.every((id) => hiddenUsers.includes(id));

            if (areAllHidden) {
                setHiddenUsers(hiddenUsers.filter((id) => !teamUserIds.includes(id)));
            } else {
                setHiddenUsers([...hiddenUsers, ...teamUserIds]);
            }
            return;
        }
        if (hiddenUsers.includes(nodeId)) {
            setHiddenUsers(hiddenUsers.filter((id) => id !== nodeId));
        } else {
            setHiddenUsers([...hiddenUsers, nodeId]);
        }
    };


    React.useEffect(() => {
        generateNodesAndEdges();
    }, [teams, hiddenUsers]);

    return (
        <div style={{ width: "100%", height: "80vh", border: "1px solid #ccc" }}>
            <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}>
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
};

export default Diagram;
