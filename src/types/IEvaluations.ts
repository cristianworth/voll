import IProfessional from "./IProfessional";

export default interface IEvaluations extends IProfessional {
  id: number;
  date: string;
  time: string;
  professionals: Array<IProfessional>;
  rating: number;
}
