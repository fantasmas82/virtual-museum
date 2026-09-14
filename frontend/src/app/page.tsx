import { getMuseums } from "../services/api";
import MuseumHero from "../components/MuseumHero";

export default async function Home() {
  const museums = await getMuseums();
  const museum = museums[0];

  return (
    <main>
      <MuseumHero museum={museum} />
    </main>
  );
}