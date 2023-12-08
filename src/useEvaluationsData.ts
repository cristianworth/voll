import IEvaluations from "./types/IEvaluations";
import useFetch from "./useFetch";

const useEvaluationData = () => {
  return useFetch<IEvaluations[]>({ url: "evaluations" });
};

export default useEvaluationData;
