"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";
import {
  ReactSketchCanvas,
  type ReactSketchCanvasRef,
} from "react-sketch-canvas";
import AnchorButton from "@/app/components/AnchorButton";
import Button from "@/app/components/Button";
import NavigateCircleAnchorButton from "@/app/components/NavigateCircleAnchorButton";

export default function HiraganaDetail() {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const params = useParams() as { type: string; letter: string };
  const type = params.type;

  const encodedLetter = params.letter;
  if (!encodedLetter) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        文字が見つかりません
      </div>
    );
  }

  const letter = decodeURIComponent(encodedLetter);

  return (
    <div className="flex flex-col h-screen bg-white mt-5">
      <div className="">
        <div className="flex flex-row justify-center items-center mx-auto relative max-w-[600px] aspect-square">
          <NavigateCircleAnchorButton letterType={"hiragana"} letter={"え"} />
          <div className="w-[100%] h-[100%] aspect-square  border-8 border-sky-300">
            <div className="text-[25rem] text-center text-gray-300">
              {letter}
            </div>
            <ReactSketchCanvas
              ref={canvasRef}
              strokeWidth={40}
              strokeColor="black"
              canvasColor="transparent"
              className="absolute inset-0 w-full h-full"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
          <NavigateCircleAnchorButton letterType={"hiragana"} letter={"え"} />
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="p-4 relative z-10">
          <Button onClick={() => canvasRef.current?.clearCanvas()}>けす</Button>
        </div>
        <div className="p-4 relative z-10">
          <AnchorButton href={`/letters/${type}`}>もどる</AnchorButton>
        </div>
      </div>
    </div>
  );
}
