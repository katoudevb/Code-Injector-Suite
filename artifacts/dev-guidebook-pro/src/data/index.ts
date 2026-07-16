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
import { django } from "./sections/django";
import { symfony } from "./sections/symfony";
import { php } from "./sections/php";
import { cms } from "./sections/cms";
import { ecommerce } from "./sections/ecommerce";
import { prestashop } from "./sections/prestashop";
import { wordpress } from "./sections/wordpress";
import { configurationProjet } from "./sections/configurationProjet";
import { deploiementWeb } from "./sections/deploiementWeb";
import { cda } from "./sections/cda";
import { maquettage } from "./sections/maquettage";
import { laravel } from "./sections/laravel";
import { sql } from "./sections/sql";
import { mongo } from "./sections/mongo";
import { git } from "./sections/git";
import { docker } from "./sections/docker";
import { rest } from "./sections/rest";
import { security } from "./sections/security";
import { tools } from "./sections/tools";
import { bootstrap } from "./sections/bootstrap";
import { outilsDev } from "./sections/outilsDev";
import { python } from "./sections/python";
import { hebergementAlwaysdata } from "./sections/hebergementAlwaysdata";
import { programmationBackend } from "./sections/programmationBackend";
import { uxUiDesign } from "./sections/uxUiDesign";
import { fondamentauxWeb } from "./sections/fondamentauxWeb";
import { algorithmesIA } from "./sections/algorithmesIA";
import { glossaire } from "./sections/glossaire";
import { devops } from "./sections/devops";
import { gestionProjet } from "./sections/gestionProjet";
import { tests } from "./sections/tests";

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
  django,
  symfony,
  php,
  cms,
  ecommerce,
  prestashop,
  wordpress,
  configurationProjet,
  deploiementWeb,
  cda,
  maquettage,
  laravel,
  sql,
  mongo,
  git,
  docker,
  rest,
  security,
  tools,
  outilsDev,
  python,
  hebergementAlwaysdata,
  programmationBackend,
  uxUiDesign,
  fondamentauxWeb,
  algorithmesIA,
  glossaire,
  devops,
  gestionProjet,
  tests,
];

export type { Section, SubSection, Block, Tech } from "./types";
