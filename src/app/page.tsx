import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-base-200">
      <h1 className="text-6xl md:text-6xl font-bold mb-8">
        ひらがなをなぞってをまなぼう
      </h1>
      <Link href="/hiragana">
        <button className="btn btn-primary btn-lg text-4xl">はじめる</button>
      </Link>
    </main>
  );
}
