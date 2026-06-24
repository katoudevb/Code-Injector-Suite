import type { Tech } from "@/data";

const LABELS: Record<Tech, string> = {
  html: "HTML",
  css: "CSS",
  js: "JS",
  php: "PHP",
  ts: "TS",
};

const CLASSES: Record<Tech, string> = {
  html: "tag-html",
  css: "tag-css",
  js: "tag-js",
  php: "tag-php",
  ts: "tag-ts",
};

export function TechTag({ tech }: { tech: Tech }) {
  return (
    <span
      className={`rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold ${CLASSES[tech]}`}
    >
      {LABELS[tech]}
    </span>
  );
}