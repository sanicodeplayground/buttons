export default function HoverMeSpinCycle() {
  return (
    <>
      <button className="group relative h-12 overflow-hidden rounded-md px-6 text-neutral-100 bg-neutral-950">
        <span className="relative inline-flex">
          <span className="duration-700 [transition-delay:0.02s] group-hover:[transform:rotateX(360deg)]">
            H
          </span>
          <span className="duration-700 [transition-delay:0.04s] group-hover:[transform:rotateX(360deg)]">
            o
          </span>
          <span className="duration-700 [transition-delay:0.06s] group-hover:[transform:rotateX(360deg)]">
            v
          </span>
          <span className="duration-700 [transition-delay:0.08s] group-hover:[transform:rotateX(360deg)]">
            e
          </span>
          <span className="duration-700 [transition-delay:0.10s] group-hover:[transform:rotateX(360deg)]">
            r
          </span>
          <span className="duration-700 [transition-delay:0.12s] group-hover:[transform:rotateX(360deg)]">
            &nbsp;
          </span>
          <span className="duration-700 [transition-delay:0.14s] group-hover:[transform:rotateX(360deg)]">
            m
          </span>
          <span className="duration-700 [transition-delay:0.16s] group-hover:[transform:rotateX(360deg)]">
            e
          </span>
        </span>
      </button>
    </>
  );
}
