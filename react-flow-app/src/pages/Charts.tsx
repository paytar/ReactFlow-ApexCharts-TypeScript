import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useTeamContext } from "../context/TeamContext";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Charts = () => {
    const { teams } = useTeamContext();

    const pieData = teams.map((team) => ({
        name: team.name,
        value: team.users.length,
    }));

    return (
        <div style={{ display: "flex", justifyContent: "space-around", padding: 20 }}>
            {/* Pie Chart */}
            <ResponsiveContainer width="45%" height={300}>
                <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
                        {pieData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>

            {/* Bar Chart */}
            <ResponsiveContainer width="45%" height={300}>
                <BarChart data={pieData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Charts;
