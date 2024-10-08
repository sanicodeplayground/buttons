export default function HoverMePulseRipple() {
  return (
    <>
      <button className="relative z-0 h-12 rounded-full bg-slate-950 px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-slate-950 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500">
        Hover me
      </button>
    </>
  );
}
