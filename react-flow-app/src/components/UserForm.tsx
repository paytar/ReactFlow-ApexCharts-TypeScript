import { useState } from "react";
import { useTeamContext } from "../context/TeamContext";

const UserForm = () => {
    const { teams, addUserToTeam } = useTeamContext();
    const [userName, setUserName] = useState("");
    const [selectedTeam, setSelectedTeam] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userName.trim() && selectedTeam) {
            addUserToTeam(selectedTeam, userName);
            setUserName("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
                <option value="">Ekip Seç</option>
                {teams.map((team) => (
                    <option key={team.id} value={team.id}>
                        {team.name}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Kullanıcı Adı"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button type="submit">Kullanıcı Ekle</button>
        </form>
    );
};

export default UserForm;
