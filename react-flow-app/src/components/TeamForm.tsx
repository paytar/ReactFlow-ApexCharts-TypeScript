import { useState } from "react";
import { useTeamContext } from "../context/TeamContext";
import { TextField, Button, Box } from "@mui/material";

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
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2, mb: 3 }}>
            <TextField
                label="Team Name"
                variant="outlined"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                fullWidth
            />
            <Button
                type="submit"
                variant="contained"
                size="small"
                color="primary"
                sx={{
                    fontWeight: "bold",
                    display: "flex",
                    textTransform: "none",
                    gap: "4px",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
                    "&:active": {
                        transform: "scale(0.95)",
                    },
                    "&:disabled": {
                        backgroundColor: "#b0b0b0",
                        color: "#f0f0f0",
                    },
                }}
            >
                <p>Add</p> <p>Team</p> +
            </Button>

        </Box>
    );
};

export default TeamForm;
