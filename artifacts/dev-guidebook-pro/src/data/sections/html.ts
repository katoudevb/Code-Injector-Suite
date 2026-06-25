import type { Section } from "../types";
import { htmlCourse } from "./htmlCourse";

export const html: Section = {
  id: "html",
  title: "HTML",
  icon: "FileCode",
  tags: ["html"],
  subsections: htmlCourse,
};
