import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-base-200 px-3">
      <h1 className="text-6xl md:text-6xl font-bold mb-8 text-center max-w-md">
        もじをなぞってあそぼう！
      </h1>
      <div className="m-3">
        <Link href="/characters/hiragana">
          <button className="btn btn-primary btn-lg text-4xl">ひらがな</button>
        </Link>
      </div>
      <div className="m-3">
        <Link href="/characters/katakana">
          <button className="btn btn-primary btn-lg text-4xl">カタカナ</button>
        </Link>
      </div>
    </main>
  );
}
