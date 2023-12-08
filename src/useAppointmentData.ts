import IAppointment from "./types/IAppointment";
import useFetch from "./useFetch";

const useAppointmentData = () => {
  return useFetch<IAppointment[]>({ url: "appointments" });
};

export default useAppointmentData;
