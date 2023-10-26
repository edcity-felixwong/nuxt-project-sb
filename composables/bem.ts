import { block } from "bem-cn";

export function createBEM(blockName: string) {
  const prefix = "sui";
  return block(`${prefix}-${blockName}`);
}
