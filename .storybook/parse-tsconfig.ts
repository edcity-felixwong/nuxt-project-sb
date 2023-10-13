import * as path from "path";
import fs from "fs";

export const resolveRoot = (...pathName: string[]): string =>
  path.resolve(path.dirname(__dirname), ...pathName);
export const resolveNuxt = (...pathName: string[]): string =>
  resolveRoot(".nuxt", ...pathName);

const toObject = (s: string): Record<string, any> =>
  JSON.parse(
    s.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) =>
      g ? "" : m
    )
  );

type PathResolver = (path: string) => string;

const getTsConfig = (
  pathName: string,
  resolver: PathResolver
): Record<string, any> => toObject(fs.readFileSync(resolver(pathName), "utf8"));
// const rawNuxtTsConfig = fs.readFileSync(resolveNuxt("tsconfig.json"), "utf8");
const nuxtTsConfig = getTsConfig("tsconfig.json", resolveNuxt);

// const rawRootTsConfig = fs.readFileSync(resolveRoot("tsconfig.json"), "utf8");
const rootTsConfig = getTsConfig("tsconfig.json", resolveRoot);

function parsePaths(
  tsConfig: Record<any, any>,
  resolver: PathResolver
): Record<string, string> {
  const paths = (tsConfig?.compilerOptions?.paths ?? {}) as Record<
    string,
    string[]
  >;
  const pathsResolved = Object.entries(paths).reduce(
    (acc, [key, val]) => ({
      ...acc,
      [key]: resolver(val[0]),
    }),
    {}
  );
  return pathsResolved;
}

export const nuxtPaths = parsePaths(nuxtTsConfig, resolveNuxt);
export const paths = parsePaths(rootTsConfig, resolveRoot);
