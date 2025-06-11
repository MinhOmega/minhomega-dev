// app/scene/page.tsx
import { sacramento } from "@/lib/fonts";
import Image from "next/image";
import NoodleArrow from "@/public/assets/noodle_arrow.svg";
import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  return (
    <div className="absolute top-[100vh] -translate-y-[35%] w-full h-[100vh]">
      {/* Decorative header */}
      <div
        className={`
          ${sacramento.className}
          flex gap-4 absolute left-8 md:left-12 lg:left-28 top-8
          rotate-6 pointer-events-none
        `}
      >
        <h1 className="text-4xl md:text-5xl">
          the ultimate <b className="text-[#61cc9c]">dev</b><br />
          keyboard workflow
        </h1>
        <Image
          src={NoodleArrow}
          alt="noodle-arrow"
          className="w-[100px] translate-y-[10px] translate-x-[-20px]"
        />
      </div>

      {/* Spline scene: SSR placeholder + client hydrate */}
      <Spline scene="https://prod.spline.design/YTurGkXAz-yWLxOO/scene.splinecode" />
    </div>
  );
}
