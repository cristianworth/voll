import IProfessional from "./types/IProfessional";
import useFetch from "./useFetch";

const useProfessionalData = () => {
  return useFetch<IProfessional[]>({ url: "professionals" });
};

export default useProfessionalData;
