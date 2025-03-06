import {
  ReactSketchCanvas,
  type ReactSketchCanvasRef,
} from 'react-sketch-canvas';

interface SketchCanvasProps {
  letter: string;
  ref: React.RefObject<ReactSketchCanvasRef | null>;
}

export default function SketchCanvas({ letter, ref }: SketchCanvasProps) {
  return (
    <div className="w-[100%] h-[100%] aspect-square  border-8 border-sky-300 ml-5 mr-5">
      <div className="text-[22rem] text-center text-gray-300">{letter}</div>
      <ReactSketchCanvas
        ref={ref}
        strokeWidth={35}
        strokeColor="black"
        canvasColor="transparent"
        className="absolute inset-0 w-full h-full"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
}
