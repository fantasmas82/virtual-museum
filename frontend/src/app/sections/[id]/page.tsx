import Link from "next/link";
import { getSection } from "../../../services/api";
import AudioPlayer from "../../../components/AudioPlayer";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SectionPage({ params }: Props) {
  const { id } = await params;

  const section = await getSection(id);

  return (
    <main className="min-h-screen bg-[#F7F4ED] px-6 py-10 text-[#3B2A20]">

      <div className="mx-auto max-w-5xl">

        {/* Back button */}
        <div className="mb-8">
          <Link
            href="/museums/1"
            className="inline-flex items-center gap-2 rounded-full border border-[#A98252]/40 px-5 py-2 text-sm text-[#6B5545] transition-all duration-300 hover:bg-[#A98252] hover:text-white"
          >
            <span>←</span>
            بازگشت به موزه
          </Link>
        </div>

        {/* Header */}
        <div className="text-center">

          <h1 className="text-4xl font-bold md:text-5xl">
            {section.title}
          </h1>

          <div className="mx-auto mt-5 h-px w-20 bg-[#A98252]" />

        </div>

        {/* Audio */}
        <AudioPlayer audioUrl={section.audio} />

        {/* Image */}
        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-[#A98252]/30 bg-white p-3 shadow-lg">

          <img
            src={section.image}
            alt={section.title}
            className="w-full rounded-xl object-cover"
          />

        </div>


        {/* Description */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#A98252]/20 bg-[#EFE7DA]/50 px-6 py-8 md:px-10">
          <p
            dir="rtl"
            className="text-justify text-base leading-9 text-[#5F4A3A] md:text-lg"
          >
            {section.description}
          </p>
        </div>



      </div>

    </main>
  );
}
