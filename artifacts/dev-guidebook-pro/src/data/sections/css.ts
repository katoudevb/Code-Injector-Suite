import type { Section } from "../types";
import { cssCourse } from "./cssCourse";
import { cssFrontend } from "./cssFrontend";

export const css: Section = {
  id: "css",
  title: "CSS",
  icon: "Palette",
  tags: ["css"],
  subsections: [...cssCourse, ...cssFrontend],
};
