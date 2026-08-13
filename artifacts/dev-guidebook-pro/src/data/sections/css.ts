import type { Section } from "../types";
import { cssCourse } from "./cssCourse";
import { cssFrontend } from "./cssFrontend";
import { laConsoleCss } from "./laConsoleCss";
import { laConsoleArticlesCss } from "./laConsoleArticlesCss";
import { laConsoleArticles2Css } from "./laConsoleArticles2Css";
import { laConsoleArticles4Css } from "./laConsoleArticles4Css";
import { laConsoleArticles5Css } from "./laConsoleArticles5Css";

export const css: Section = {
  id: "css",
  title: "CSS",
  icon: "Palette",
  tags: ["css"],
  subsections: [...cssCourse, ...cssFrontend, ...laConsoleCss, ...laConsoleArticlesCss, ...laConsoleArticles2Css, ...laConsoleArticles4Css, ...laConsoleArticles5Css],
};
