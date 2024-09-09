export default function HoverMeTextRush() {
  return (
    <>
      <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md px-6 text-neutral-100 bg-neutral-950">
        <span className="relative inline-flex overflow-hidden">
          <div className="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
            Hover me
          </div>
          <div className="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
            Hover me
          </div>
        </span>
      </button>
    </>
  );
}
