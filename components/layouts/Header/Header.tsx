import Image from "next/image";
import logo from "@/public/logo.svg";
import LinkComponent from "@/components/atoms/LinkComponent";
import Link from "next/link";
const routes = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "Events",
    url: "/events",
  },
];

export function Header() {
  return (
    <header className="bg-white w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-3">
          <div>
            <Image src={logo} alt="TCA Logo" />
          </div>
          <nav className="">
            <ul className="flex justify-center text-gray-500">
              {routes.map((route) => (
                <li key={route.name} className="ml-6 text-sm">
                  <Link href={route.url}>{route.name}</Link>
                </li>
              ))}
              <li className="ml-6">
                <LinkComponent
                  url="/host-event"
                  label="Host an event"
                  style="primary"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
