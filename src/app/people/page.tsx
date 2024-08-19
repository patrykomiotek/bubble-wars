import { Header } from "@/components/Header";
import { People } from "@/components/People";
import { fetchPeople } from "@/lib/services";

export default async function PeoplePage() {
  const { response } = await fetchPeople();

  console.log({ response });

  return (
    <div className="mx-6 mt-6">
      <Header>People</Header>
      <People data={response.results} />
    </div>
  );
}
