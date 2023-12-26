import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartProps } from "../../interfaces/ChartProps";
import { IChartData } from "../../interfaces/IChartData";
import useChartData from "./useChartData";
import styled from "styled-components";

const StyledSection = styled.section`
background-color: var(--branco);
border-radius: 16px;
`

function Chart({ professionals, appointments }: ChartProps) {
    let chartData: Array<IChartData> = useChartData({ professionals, appointments });

    return (
        <StyledSection>
            <ResponsiveContainer width={"100%"} height={350}>
                <BarChart layout="vertical" data={chartData} margin={{ top: 25, right: 40, left: 40, bottom: 20 }}>
                    <XAxis type="number"></XAxis>
                    <YAxis type="category" dataKey={"professionalName"}></YAxis>
                    <Bar dataKey={"numberOfAppointments"} fill="#083860" barSize={30}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </StyledSection>
    )
}

export default Chart;