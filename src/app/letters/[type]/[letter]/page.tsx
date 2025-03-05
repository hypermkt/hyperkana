"use client";

import { useRef } from "react";
import { notFound, useParams } from "next/navigation";
import { type ReactSketchCanvasRef } from "react-sketch-canvas";
import AnchorButton from "@/app/components/AnchorButton";
import Button from "@/app/components/Button";
import NavigateCircleAnchorButton from "@/app/components/NavigateCircleAnchorButton";
import { getNextLetter, getPreviousLetter } from "@/app/constants/hiragana";
import { allCharas } from "@/app/constants/hiragana";
import SketchCanvas from "@/app/components/SketchCanvas";

export default function HiraganaDetail() {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const params = useParams() as {
    type: "hiragana" | "katakana" | "numbers";
    letter: string;
  };
  const type = params.type;

  const letter = decodeURIComponent(params.letter);
  if (!type || !allCharas.includes(letter)) {
    notFound();
  }

  const previous = getPreviousLetter(type, letter);
  const next = getNextLetter(type, letter);
  const backButtonHref = type === "numbers" ? "/numbers" : `/letters/${type}`;

  return (
    <div className="flex flex-col h-screen bg-white mt-5">
      <div className="">
        <div className="flex flex-row justify-center items-center mx-auto relative max-w-[500px] aspect-square">
          {previous !== "" && (
            <NavigateCircleAnchorButton
              direction={"left"}
              letterType={type}
              letter={previous}
            />
          )}
          <SketchCanvas letter={letter} ref={canvasRef} />
          {next !== "" && (
            <NavigateCircleAnchorButton
              direction={"right"}
              letterType={type}
              letter={next}
            />
          )}
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="p-4 relative z-10">
          <Button onClick={() => canvasRef.current?.clearCanvas()}>けす</Button>
        </div>
        <div className="p-4 relative z-10">
          <AnchorButton href={backButtonHref}>もどる</AnchorButton>
        </div>
      </div>
    </div>
  );
}
