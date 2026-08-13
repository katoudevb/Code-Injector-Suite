import type { Section } from "../types";
import { cssCourse } from "./cssCourse";
import { cssFrontend } from "./cssFrontend";
import { laConsoleCss } from "./laConsoleCss";
import { laConsoleArticlesCss } from "./laConsoleArticlesCss";

export const css: Section = {
  id: "css",
  title: "CSS",
  icon: "Palette",
  tags: ["css"],
  subsections: [...cssCourse, ...cssFrontend, ...laConsoleCss, ...laConsoleArticlesCss],
};
