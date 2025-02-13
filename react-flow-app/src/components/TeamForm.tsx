import { useState } from "react";
import { useTeamContext } from "../context/TeamContext";

const TeamForm = () => {
    const [teamName, setTeamName] = useState("");
    const { addTeam } = useTeamContext();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (teamName.trim()) {
            addTeam(teamName);
            setTeamName("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ekip Adı"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
            />
            <button type="submit">Ekip Ekle</button>
        </form>
    );
};

export default TeamForm;
