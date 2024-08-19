import { PersonDto } from "@/types/Person.dto";

type Props = {
  person: PersonDto;
};

export const Person = ({ person }: Props) => {
  return (
    <div className="my-4">
      <h3 className="text-xl font-bold">{person.name}</h3>
      <p>👀 Eye color: {person.eye_color}</p>
      <p>🍼 Birth year: {person.birth_year}</p>
      <p>💈 Hair color: {person.hair_color}</p>
      <p>⬆️ Height: {person.height}</p>
    </div>
  );
};
