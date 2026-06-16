'use client'

/** Renders the current year client-side to avoid build/hydration year mismatch. */
export function YearClient() {
  return <>{new Date().getFullYear()}</>
}
