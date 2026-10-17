import type { SVGProps } from "react"

/* Hand-drawn style decorative marks used to scatter scrapbook flourish
   around sections. All use currentColor so they inherit text color. */

export function DoodleStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M20 3 L23 16 L36 13 L25 21 L32 33 L20 25 L8 33 L15 21 L4 13 L17 16 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function DoodleSwirl(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 40" fill="none" {...props}>
      <path
        d="M3 20 Q10 4 24 10 Q38 16 30 28 Q24 37 14 30 Q7 25 14 19 Q20 14 26 19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function DoodleArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 70 50" fill="none" {...props}>
      <path
        d="M4 8 Q30 2 48 24 Q54 31 60 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M48 15 L61 24 L50 34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function Paperclip(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 40" fill="none" {...props}>
      <path
        d="M6 10 V28 a6 6 0 0 0 12 0 V8 a4 4 0 0 0 -8 0 V26 a2 2 0 0 0 4 0 V12"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function PushPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="8" r="6" fill="currentColor" />
      <circle cx="9.5" cy="5.8" r="1.6" fill="white" fillOpacity="0.5" />
      <path d="M12 14 L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
