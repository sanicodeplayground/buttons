import { Card } from '@/components/Card';
import { BUTTONS } from '../data/buttons';

export default function Home() {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-screen-lg pb-12 px-2">
      <main>
        <section className="pt-10">
          <div className="flex flex-col items-start">
            <div className="mb-6 flex w-full items-center justify-between">
              <a href="">Icon</a>
              <a
                href="https://github.com/sanicodeplayground/buttons"
                target="_bank"
              >
                Github
              </a>
            </div>
            <div className="mb-6">
              <h1 className="text-neutral-300 font-medium text-xl mb-2">
                buttons.sanita
              </h1>
              <div className="text-neutral-400">
                <p>
                  Discover a collection of Tailwind CSS buttons designed to
                  enhance your website&apos;s look.
                </p>
                <p>Easy to integrate with a copy-paste, no js</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto">
          <div className="grid grid-cols-2 gap-2 sm:cols-2 md:grid-cols-3 lg:grid-cols-4">
            {BUTTONS?.map(Comp => {
              return (
                <Card>
                  <Comp />
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
