import { ChartProps } from "../../interfaces/ChartProps";
import { IChartData } from "../../interfaces/IChartData";
import IAppointment from "../../types/IAppointment";
import IProfessional from "../../types/IProfessional";

const useChartData = ({ professionals, appointments }: ChartProps) => {
    var chartData: Array<IChartData> = [];

    if (professionals && appointments) {
        chartData = professionals.map(
            (professional) => ({
                professionalName: professional.name,
                numberOfAppointments: appointments.filter(
                    (appointment) => appointment.professionals.some((prof) => prof.name === professional.name)
                ).length
            })
        )
    }

    return chartData;
}

export default useChartData;