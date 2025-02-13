import { useTeamContext } from "../context/TeamContext";

const TeamList = () => {
    const { teams } = useTeamContext();

    return (
        <div>
            <h3>Mevcut Ekipler</h3>
            {teams.map((team) => (
                <div key={team.id}>
                    <h4>{team.name}</h4>
                    <ul>
                        {team.users.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default TeamList;
