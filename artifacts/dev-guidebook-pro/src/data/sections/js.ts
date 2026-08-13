import type { Section } from "../types";
import { jsCourse } from "./jsCourse";
import { jsFrontend } from "./jsFrontend";
import { laConsoleJs } from "./laConsoleJs";
import { laConsoleArticles2Js } from "./laConsoleArticles2Js";
import { laConsoleArticles4Js } from "./laConsoleArticles4Js";
import { laConsoleArticles5Js } from "./laConsoleArticles5Js";

export const js: Section = {
  id: "javascript",
  title: "JavaScript",
  icon: "Braces",
  tags: ["js"],
  subsections: [...jsCourse, ...jsFrontend, ...laConsoleJs, ...laConsoleArticles2Js, ...laConsoleArticles4Js, ...laConsoleArticles5Js],
};
