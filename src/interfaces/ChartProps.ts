import IAppointment from "../types/IAppointment";
import IProfessional from "../types/IProfessional";

export interface ChartProps {
    professionals: IProfessional[] | null,
    appointments: IAppointment[] | null,
}