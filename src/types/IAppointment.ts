import IProfessional from "./IProfessional";

export default interface IAppointment extends IProfessional {
  id: number;
  date: string;
  time: string;
  professionals: Array<IProfessional>;
  specialty: string;
  patient: string;
  modality: string;
}
