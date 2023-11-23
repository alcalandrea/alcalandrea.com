import classNames from "classnames"
import {Dosis} from "next/font/google"
import Link, {LinkProps} from "next/link"

/* we only apply this font to these links */
const dosis = Dosis({subsets: ["latin"], weight: ["500", "700", "800"]})

/**
 * A basic link to an internal or external href. Can
 * be styled by passing a variant and/or a className
 */
export function CoreLink({
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
          ? "text-pink-600 underline dark:text-pink-400"
          : null,
      )}
      {...props}
      {...{href}}
      /* ensure external links open in a new tab */
      {...(href.toString().startsWith("http") ? {target: "_blank"} : {})}
    >
      {children}
    </Link>
  )
}
