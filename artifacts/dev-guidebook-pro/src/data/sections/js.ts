import type { Section } from "../types";
import { jsCourse } from "./jsCourse";
import { jsFrontend } from "./jsFrontend";
import { laConsoleJs } from "./laConsoleJs";

export const js: Section = {
  id: "javascript",
  title: "JavaScript",
  icon: "Braces",
  tags: ["js"],
  subsections: [...jsCourse, ...jsFrontend, ...laConsoleJs],
};
