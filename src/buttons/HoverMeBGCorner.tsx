export default function HoverMeBGCorner() {
  return (
    <>
      <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 font-medium">
        <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-100 transition duration-500 group-hover:-translate-y-[150%]">
          Hover me
        </div>
        <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
          <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-blue-500 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
          <span className="z-10">Hover me</span>
        </div>
      </button>
    </>
  );
}
