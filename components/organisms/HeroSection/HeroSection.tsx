import LinkComponent from "@/components/atoms/LinkComponent";

export function HeroSection() {
  return (
    <section className=" h-screen py-10">
      <div className="container mx-auto px-6">
        <div className="text-center lg:translate-y-3/4 translate-y-1/4 relative flex flex-col items-center">
          <h1 className="md:text-7xl text-4xl font-black md:leading-[6rem] leading-relaxed">
            Organize
            <span className="mx-2 text-gray-100"> •</span>
            Participate
            <span className="mx-2 text-gray-100"> •</span>
            Attend
            <span className="mx-2 text-gray-100"> •</span>
            <br />
            Tech <span className="text-orange-500"> Events</span> in Africa
          </h1>
          <div className="top-40 relative grid md:grid-cols-2  gap-10 w-fit">
            <LinkComponent
              size="lg"
              label="Host an Event"
              url="/host-event"
              style="primary"
            />

            <LinkComponent
              size="lg"
              label="Explore Events"
              url="/events"
              style="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
