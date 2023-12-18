import dayjs from "dayjs";
// import { dayjs } from "@/plugins";

export type DateLike = Parameters<typeof dayjs>[0];

export function starDateFormat(date: DateLike): string {
  return dayjs(date).format("YYYY[-]MM[-]DD[ ]HH:mm");
}
