export type Tech = "html" | "css" | "js" | "php" | "ts";

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; variant: "info" | "warning" | "success"; title?: string; text: string }
  | { type: "code"; filename: string; language: string; code: string }
  | { type: "image"; src: string; alt: string }
  | { type: "diagram"; content: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface SubSection {
  id: string;
  title: string;
  blocks: Block[];
}

export interface Section {
  id: string;
  title: string;
  icon: string;
  tags: Tech[];
  subsections: SubSection[];
}
