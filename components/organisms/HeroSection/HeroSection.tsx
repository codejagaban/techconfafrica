import LinkComponent from "@/components/atoms/LinkComponent";
import styles from "./style.module.css";

export function HeroSection() {
  return (
    <section className=" h-screen py-10">
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
              <span> Tech</span>
              <span className="overflow-hidden w-auto">
                <span className={`${styles.spin} text-orange-500`}>
                  Conferences
                </span>
                <span className={`${styles.spin} text-cyan-500`}>Hangouts</span>
                <span className={`${styles.spin} text-red-500`}>Festivals</span>
                <span className={`${styles.spin} text-teal-500`}>Summits</span>
                <span className={`${styles.spin} text-teal-500`}>Webinar</span>
                <span className={`${styles.spin} text-indigo-500`}>
                  Workshops
                </span>
                <span className={`${styles.spin} text-orange-500`}>
                  Conferences
                </span>
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
