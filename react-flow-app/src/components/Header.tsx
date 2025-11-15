import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#333333",
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" sx={{ color: "#FFD1B3", fontWeight: "bold" }}>
                    React Flow App
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                        component={Link}
                        to="/"
                        sx={{
                            color: "#FFD1B3",
                            fontWeight: "bold",
                            "&:hover": {
                                color: "#6B8E23",
                            },
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        component={Link}
                        to="/diagram"
                        sx={{
                            color: "#FFD1B3",
                            fontWeight: "bold",
                            "&:hover": {
                                color: "#6B8E23",
                            },
                        }}
                    >
                        Diagram
                    </Button>
                    <Button
                        component={Link}
                        to="/charts"
                        sx={{
                            color: "#FFD1B3",
                            fontWeight: "bold",
                            "&:hover": {
                                color: "#6B8E23",
                            },
                        }}
                    >
                        Charts
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
