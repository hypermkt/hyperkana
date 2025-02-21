"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";
import {
  ReactSketchCanvas,
  type ReactSketchCanvasRef,
} from "react-sketch-canvas";
import AnchorButtonComponent from "@/app/components/AnchorButtonComponent";
import ButtonComponent from "@/app/components/Button";

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
    <div className="relative flex flex-col h-screen bg-white">
      <div className="flex-grow flex items-center justify-center mt-5">
        <div className="relative w-[80%] max-w-[600px] aspect-square border-8 border-sky-300">
          <span className="absolute inset-0 flex items-center justify-center text-[33rem] text-gray-300">
            {letter}
          </span>
          <ReactSketchCanvas
            ref={canvasRef}
            strokeWidth={40}
            strokeColor="black"
            canvasColor="transparent"
            className="absolute inset-0 w-full h-full"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
      </div>

      <div className="p-4 flex justify-center relative z-10">
        <ButtonComponent onClick={() => canvasRef.current?.clearCanvas()}>
          けす
        </ButtonComponent>
      </div>
      <div className="p-4 flex justify-center relative z-10">
        <AnchorButtonComponent href={`/letters/${type}`}>
          もどる
        </AnchorButtonComponent>
      </div>
    </div>
  );
}
