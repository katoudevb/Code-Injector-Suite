import type { Section } from "../types";
import { htmlCourse } from "./htmlCourse";
import { htmlFrontend } from "./htmlFrontend";
import { laConsoleHtml } from "./laConsoleHtml";
import { laConsoleArticlesHtml } from "./laConsoleArticlesHtml";
import { laConsoleArticles3Html } from "./laConsoleArticles3Html";
import { laConsoleArticles5Html } from "./laConsoleArticles5Html";

export const html: Section = {
  id: "html",
  title: "HTML",
  icon: "FileCode",
  tags: ["html"],
  subsections: [...htmlCourse, ...htmlFrontend, ...laConsoleHtml, ...laConsoleArticlesHtml, ...laConsoleArticles3Html, ...laConsoleArticles5Html],
};
