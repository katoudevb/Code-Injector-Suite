import type { Section } from "../types";
import { cssCourse } from "./cssCourse";

export const css: Section = {
  id: "css",
  title: "CSS",
  icon: "Palette",
  tags: ["css"],
  subsections: cssCourse,
};
