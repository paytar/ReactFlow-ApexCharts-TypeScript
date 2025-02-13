import { createContext, useContext, useState, ReactNode } from "react";

type User = {
    id: string;
    name: string;
};

type Team = {
    id: string;
    name: string;
    users: User[];
};

type TeamContextType = {
    teams: Team[];
    addTeam: (name: string) => void;
    addUserToTeam: (teamId: string, userName: string) => void;
};

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider = ({ children }: { children: ReactNode }) => {
    const [teams, setTeams] = useState<Team[]>([]);

    const addTeam = (name: string) => {
        setTeams([...teams, { id: crypto.randomUUID(), name, users: [] }]);
    };

    const addUserToTeam = (teamId: string, userName: string) => {
        setTeams((prevTeams) =>
            prevTeams.map((team) =>
                team.id === teamId
                    ? { ...team, users: [...team.users, { id: crypto.randomUUID(), name: userName }] }
                    : team
            )
        );
    };

    return (
        <TeamContext.Provider value={{ teams, addTeam, addUserToTeam }}>
            {children}
        </TeamContext.Provider>
    );
};

export const useTeamContext = () => {
    const context = useContext(TeamContext);
    if (!context) throw new Error("useTeamContext must be used within a TeamProvider");
    return context;
};
