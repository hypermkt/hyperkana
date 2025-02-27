interface KanaTitleProps {
  title: string;
  colors: string[];
}

export default function KanaTitle({ title, colors }: KanaTitleProps) {
  return (
    <div className="flex justify-center gap-2 mb-4">
      {title.split("").map((char, index) => (
        <div
          key={index}
          className={`w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full text-white text-4xl lg:text-5xl font-bold ${
            colors[index % colors.length]
          }`}
        >
          {char}
        </div>
      ))}
    </div>
  );
}
