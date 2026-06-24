import type { Section } from "./types";
import { jsCourse } from "./sections/jsCourse";
import { htmlCourse } from "./sections/htmlCourse";
import { cssCourse } from "./sections/cssCourse";
import { html } from "./sections/html";
import { css } from "./sections/css";
import { js } from "./sections/js";
import { ts } from "./sections/ts";
import { react } from "./sections/react";
import { next } from "./sections/next";
import { vue } from "./sections/vue";
import { angular } from "./sections/angular";
import { node } from "./sections/node";
import { symfony } from "./sections/symfony";
import { laravel } from "./sections/laravel";
import { sql } from "./sections/sql";
import { mongo } from "./sections/mongo";
import { git } from "./sections/git";
import { docker } from "./sections/docker";
import { rest } from "./sections/rest";
import { security } from "./sections/security";
import { tools } from "./sections/tools";

const jsCourseSection: Section = {
  id: "cours-javascript",
  title: "Cours JavaScript",
  icon: "Code2",
  tags: ["js"],
  subsections: jsCourse,
};

const htmlCourseSection: Section = {
  id: "cours-html",
  title: "Cours HTML",
  icon: "FileCode",
  tags: ["html"],
  subsections: htmlCourse,
};

const cssCourseSection: Section = {
  id: "cours-css",
  title: "Cours CSS",
  icon: "Palette",
  tags: ["css"],
  subsections: cssCourse,
};

export const sections: Section[] = [
  jsCourseSection,
  htmlCourseSection,
  cssCourseSection,
  html,
  css,
  js,
  ts,
  react,
  next,
  vue,
  angular,
  node,
  symfony,
  laravel,
  sql,
  mongo,
  git,
  docker,
  rest,
  security,
  tools,
];

export type { Section, SubSection, Block, Tech } from "./types";
