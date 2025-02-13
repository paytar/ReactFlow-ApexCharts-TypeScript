import { useState } from "react";
import { useTeamContext } from "../context/TeamContext";
import {
    Card,
    Typography,
    List,
    ListItem,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TeamList = () => {
    const { teams } = useTeamContext();
    const [expandedTeams, setExpandedTeams] = useState<{ [key: string]: boolean }>({});

    const toggleExpand = (teamId: string, hasUsers: boolean) => {
        if (!hasUsers) return;
        setExpandedTeams((prev) => ({
            ...prev,
            [teamId]: !prev[teamId],
        }));
    };

    return (
        <>
            <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>Existing Teams</Typography>
            {teams.map((team) => {
                const hasUsers = team.users.length > 0;
                return (
                    <Card key={team.id} sx={{ mb: 2 }}>
                        <Accordion
                            expanded={hasUsers ? expandedTeams[team.id] : false}
                            onChange={() => toggleExpand(team.id, hasUsers)}
                        >
                            <AccordionSummary
                                expandIcon={hasUsers ? <ExpandMoreIcon /> : null}
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    height: "60px",
                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                    padding: "10px",
                                    backgroundColor: hasUsers ? "#f5f5f5" : "#e0e0e0",
                                    "&:hover": hasUsers ? {
                                        backgroundColor: "#d6d6d6",
                                        transition: "background-color 0.3s ease",
                                    } : {
                                        backgroundColor: "#d6d6d6",
                                    },

                                }}
                            >
                                <Typography variant="h6">{team.name}</Typography>
                            </AccordionSummary>

                            {hasUsers && (
                                <AccordionDetails>
                                    <List>
                                        {team.users.map((user) => (
                                            <ListItem key={user.id}>{user.name}</ListItem>
                                        ))}
                                    </List>
                                </AccordionDetails>
                            )}
                        </Accordion>
                    </Card>
                );
            })}
        </>
    );
};

export default TeamList;
