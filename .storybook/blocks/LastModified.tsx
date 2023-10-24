import * as React from "react"

export const LastModified = ({ children }: { children: string }) => {
  const dateTime = new Date(`${children}Z`)
  return (
    <p className="sb-unstyled text-sm !m-0 text-[hsl(220,6%,40%)]">{`📜 Last updated at ${dateTime.toLocaleString()}`}</p>
  )
}
