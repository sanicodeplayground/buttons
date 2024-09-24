export default function HoverMe3D() {
  return (
    <>
      <button className="group relative">
        <div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-900 bg-transparent px-6 font-medium text-neutral-900 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3">
          Hover me
        </div>
        <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#292929,10px_10px_#3c3c3c,15px_15px_#555555]"></div>
      </button>
    </>
  );
}
