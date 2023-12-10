import IAppointment from "./types/IAppointment";
import useFetch from "./useFetch";

const useAppointmentData = () => {
  var appointments = useFetch<IAppointment[]>({ url: "appointments" });
  console.log("all appointments", appointments);
  return appointments;
};

export default useAppointmentData;
