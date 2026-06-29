import type { Section } from "./types";
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
import { bootstrap } from "./sections/bootstrap";

export const sections: Section[] = [
  js,
  html,
  css,
  ts,
  bootstrap,
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
