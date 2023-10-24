import * as React from "react"

export function EditThisPage({ children }: { children: string }) {
  return (
    <a
      className="sb-unstyled text-sm hover:underline text-[hsl(220,6%,40%)]"
      href={getGithubPath(children)}
      target="_blank"
    >
      ✍️ Edit this page on GitHub
    </a>
  )
}
export function getGithubPath(
  file: string,
  {
    branch = import.meta.env.SB_DEFAULT_BRANCH,
    baseUrl = import.meta.env.SB_GITHUB_REPO_URL,
  }: { branch?: string; baseUrl?: string } = {}
): string {
  /* F: This URL is hard to use... */
  const addTrailingSlash = (s: string): string =>
    s.endsWith("/") ? s : s + "/"
  const removeTrailingSlash = (s: string): string =>
    s.startsWith("/") ? s.substring(1) : s
  return [branch, file].reduce(
    (acc, path) =>
      new URL(removeTrailingSlash(path), addTrailingSlash(acc)).href,
    baseUrl
  )
}
