import { getMuseums } from "../../../services/api";
import MuseumPage from "../../../components/MuseumPage";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MuseumDetailPage({ params }: Props) {
  const { id } = await params;

  const museums = await getMuseums();

  const museum = museums.find(
    (item: any) => item.id === Number(id)
  );

  if (!museum) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F4ED] text-[#3B2A20]">
        <p>موزه پیدا نشد.</p>
      </main>
    );
  }

  return <MuseumPage museum={museum} />;
}