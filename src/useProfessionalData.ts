import IProfessional from "./types/IProfessional";
import useFetch from "./useFetch";

const useProfessionalData = () => {
  var professionals = useFetch<IProfessional[]>({ url: "professionals" });
  console.log("All professionals", professionals)
  return professionals;
};

export default useProfessionalData;
