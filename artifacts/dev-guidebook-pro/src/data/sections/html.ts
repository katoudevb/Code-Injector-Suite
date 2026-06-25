import type { Section } from "../types";
import { htmlCourse } from "./htmlCourse";
import { htmlFrontend } from "./htmlFrontend";

export const html: Section = {
  id: "html",
  title: "HTML",
  icon: "FileCode",
  tags: ["html"],
  subsections: [...htmlCourse, ...htmlFrontend],
};
