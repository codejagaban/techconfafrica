import LinkComponent from "@/components/atoms/LinkComponent";

export function HeroSection() {
  return (
    <section className=" h-screen py-10 hero-section">
      <div className="container mx-auto px-6">
        <div className="text-center lg:translate-y-2/4 translate-y-1/4 relative flex flex-col items-center">
          <h1 className="md:text-7xl text-4xl font-black md:leading-[6rem] leading-relaxed">
            Organize
            <span className="mx-2 text-gray-100"> •</span>
            Participate
            <span className="mx-2 text-gray-100"> •</span>
            Attend
            <span className="mx-2 text-gray-100"> •</span>
            <br />
            <div className="flex h-24 w-full justify-center">
              <span> Tech </span>
              <span className="overflow-hidden ">
                <span className="spin text-orange-500">Events</span>
                <span className="spin text-cyan-500">Hangouts</span>
                <span className="spin text-red-500">Festivals</span>
                <span className="spin text-teal-500">Summits</span>
                <span className="spin text-emerald-500">Parties</span>
                <span className="spin text-indigo-500">Workshops</span>
                <span className="spin text-orange-500">Events</span>
              </span>
              <span>in Africa</span>
            </div>
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
