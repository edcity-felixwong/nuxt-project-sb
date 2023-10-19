import * as path from "path"
import * as fs from "fs"
import { config } from "../config/nuxt-config"

export const resolveRoot = (...pathName: string[]): string =>
  path.resolve(path.dirname(__dirname), ...pathName)
export const resolveNuxt = (...pathName: string[]): string =>
  resolveRoot(".nuxt", ...pathName)

const toObject = (s: string): Record<string, any> =>
  JSON.parse(
    s.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) =>
      g ? "" : m
    )
  )

type PathResolver = (path: string) => string

const getTsConfig = (
  pathName: string,
  resolver: PathResolver
): Record<string, any> => toObject(fs.readFileSync(resolver(pathName), "utf8"))

const nuxtTsConfig = getTsConfig("tsconfig.json", resolveNuxt)

// const rootTsConfig = getTsConfig("tsconfig.json", resolveRoot)

const pathToAlias = (
  paths: Record<string, string[]>,
  resolver: PathResolver
): Record<string, string> =>
  Object.entries(paths).reduce(
    (acc, [key, val]) => ({
      ...acc,
      [key]: resolver(val[0]),
    }),
    {}
  )

function parsePathsTsConfig(
  tsConfig: Record<any, any>,
  resolver: PathResolver
): Record<string, string> {
  const paths = (tsConfig?.compilerOptions?.paths ?? {}) as Record<
    string,
    string[]
  >
  return pathToAlias(paths, resolver)
}

export const nuxtPaths = parsePathsTsConfig(nuxtTsConfig, resolveNuxt)
export const paths = config.alias
