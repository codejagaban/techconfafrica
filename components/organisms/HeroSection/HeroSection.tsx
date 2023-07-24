import LinkComponent from "@/components/atoms/LinkComponent";

export function HeroSection() {
  return (
    <section className=" h-screen">
      <div className="container mx-auto">
        <div className="text-center translate-y-3/4 relative flex flex-row items-center">
          <h1 className="text-7xl font-black leading-[6rem]">
            Organize
            <span className="mx-2 text-gray-100">•</span>
            Participate
            <span className="mx-2 text-gray-100">•</span>
            Attend
            <span className="mx-2 text-gray-100">•</span>
            <br />
            Tech <span className="text-orange-500"> Events</span> in Africa
          </h1>
          <div className="top-40 relative grid grid-cols-2  gap-10 w-fit">
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
