import { PersonDto } from "@/types/Person.dto";
import { Person } from "./Person";

type Props = {
  data: PersonDto[];
};

export const People = ({ data }: Props) => {
  return (
    <div>
      {data.map((person) => (
        <Person key={person._id} person={person} />
      ))}
    </div>
  );
};
