import Link from "next/link";
import clsx from "clsx";
import { LinkType } from "./types";

export function LinkComponent({ url, label, style, size = "md" }: LinkType) {
  const className = clsx(
    {
      "bg-black text-white border-black": style === "primary",
      "border-gray-200 bg-white": style === "secondary",
      "px-6 text-sm py-3": size === "md",
      "px-7 text-base": size === "lg",
    },
    "rounded-lg border-solid border py-3 font-medium",
  );
  return (
    <Link href={url} className={className}>
      {label}
    </Link>
  );
}
