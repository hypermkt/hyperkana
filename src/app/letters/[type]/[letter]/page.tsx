"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
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
      <div className="flex-grow relative flex items-center justify-center">
        <span className="text-[30rem] text-gray-300 absolute">{letter}</span>
        <div className="absolute top-0 left-0 w-full h-full">
          <ReactSketchCanvas
            ref={canvasRef}
            strokeWidth={40} // 線の太さ
            strokeColor="black" // 線の色
            canvasColor="transparent" // キャンバスの背景を透明にしてひらがなが見えるようにする
            style={{ width: "100%", height: "100%" }}
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
