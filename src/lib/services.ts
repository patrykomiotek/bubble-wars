import { PersonDto } from "@/types/Person.dto";

const API_BASE_URL = process.env.API_BASE_URL;

type ResultsResponse<T> = {
  response: {
    cursor: number;
    results: T[];
    count: number;
    remaining: 0;
  };
};

export const fetchPeople = (): Promise<ResultsResponse<PersonDto>> => {
  return fetch(`${API_BASE_URL}/obj/people`, { cache: "no-cache" }).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Fetching error");
    }
  );
};
