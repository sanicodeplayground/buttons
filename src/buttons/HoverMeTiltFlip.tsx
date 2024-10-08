export default function HoverMeTiltFlip() {
  return (
    <>
      <button className="group relative h-12 bg-neutral-950 rounded-md px-6 text-neutral-100">
        <span className="relative inline-flex overflow-hidden">
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
            Hover me
          </div>
          <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            Hover me
          </div>
        </span>
      </button>
    </>
  );
}
