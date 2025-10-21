import { motion } from "framer-motion";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const CardForChart = (props) => {

    return <motion.div
        key={props.cat.key}
        className="card"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
    >
        <h2>{props.cat.title}</h2>
        <p className="subtitle">Total: {props.totalSum}</p>
        {props.entries.length > 0 ? (
            <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={props.entries.map(([name, count]) => ({
                            name: name || "(Unassigned)",
                            count,
                        }))}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#4F46E5" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        ) : (
            <p className="no-data">No data available</p>
        )}
    </motion.div>

}

export default CardForChart