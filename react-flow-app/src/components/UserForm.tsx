import { useState } from "react";
import { useTeamContext } from "../context/TeamContext";
import { TextField, Button, Box, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

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
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Mobilde dikey, geniş ekranda yatay
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: 2,
                backgroundColor: "#f8f9fa",
                borderRadius: 2,
            }}
        >
            <FormControl sx={{ minWidth: 200 }}>
                <InputLabel id="team-select-label">Ekip Seç</InputLabel>
                <Select
                    labelId="team-select-label"
                    value={selectedTeam}
                    onChange={(e) => setSelectedTeam(e.target.value)}
                >
                    {teams.map((team) => (
                        <MenuItem key={team.id} value={team.id}>
                            {team.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                label="Kullanıcı Adı"
                variant="outlined"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                sx={{
                    minWidth: 200,
                    backgroundColor: "white",
                    borderRadius: 1,
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                    fontWeight: "bold",
                    textTransform: "none",
                    borderRadius: 2,
                    paddingX: 3,
                    paddingY: 1.5,
                    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
                    "&:hover": {
                        backgroundColor: "#004ba0",
                        boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.3)",
                    },
                }}
            >
                Kullanıcı Ekle
            </Button>
        </Box>
    );
};

export default UserForm;
