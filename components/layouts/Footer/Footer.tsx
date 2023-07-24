import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import TW from "@/public/twitter.svg";
import MAIL from "@/public/mail.svg";
import IN from "@/public/linkedin.svg";
export function Footer() {
  const menu = [
    { name: "Become a Volunteer", link: "/#" },
    { name: "Speakers", link: "/#" },
    { name: "Agenda", link: "/#" },
    { name: "FAQ", link: "/#" },
  ];
  return (
    <footer>
      <div className="container mx-auto">
        <div className="flex justify-between py-10">
          <p className="font-bold text-lg"> Tech Conf Africa</p>
          <div className="flex gap-4 ">
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={TW} alt="Twitter Icon" className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:techconfsafrica@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={MAIL} alt="Mail Icon" className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={IN} alt="LinkedIN Icon" className="w-6 h-6" />
            </Link>
          </div>
          <div>
            <p>Dark Mode </p>
          </div>
        </div>
      </div>
      <div className={styles.footerBg} />
    </footer>
  );
}
