import Link from "next/link";
import clsx from "clsx";
import { LinkType } from "./types";

export function LinkComponent({ url, label, style }: LinkType) {
  const className = clsx({
    "bg-black px-5 py-3 text-white border-solid border rounded-lg border-black text-sm border-radius-2":
      style === "primary",
    " px-7 py-3 rounded-full border-solid border text-sm font-medium border-primary":
      style === "secondary",
  });
  return (
    <Link href={url} className={className}>
      {label}
    </Link>
  );
}
