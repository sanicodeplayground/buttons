export default function HoverMeBGUp() {
  return (
    <>
      <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 font-medium">
        <div className="inline-flex h-12 translate-y-0 items-center justify-center  px-6 text-neutral-100 transition group-hover:-translate-y-[150%]">
          Hover me
        </div>
        <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center bg-blue-500 px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0">
          Hover me
        </div>
      </button>
    </>
  );
}
