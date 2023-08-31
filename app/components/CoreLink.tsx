import classNames from "classnames"
import Link, {LinkProps} from "next/link"
import {dosis} from "../utils/fonts"

export default function CoreLink({
  children,
  className,
  href,
  variant,
  ...props
}: LinkProps & {
  children: React.ReactNode
  className?: string
  variant?: "filled" | "underlined"
}) {
  return (
    <Link
      className={classNames(
        className,
        dosis.className,
        variant === "filled"
          ? "rounded-xl border border-pink-600 bg-pink-600 px-4 py-1 font-bold text-white transition-colors hover:bg-white hover:text-pink-600"
          : variant === "underlined"
          ? "text-pink-600 underline"
          : "",
      )}
      href={href}
      {...props}
      /* ensure external links open in a new tab */
      {...(href.toString().startsWith("http") ? {target: "_blank"} : {})}
    >
      {children}
    </Link>
  )
}
