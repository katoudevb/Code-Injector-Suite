import { Info, TriangleAlert, Lightbulb } from "lucide-react";
import type { Block } from "@/data";
import { CodeBlock } from "./CodeBlock";

export function ContentRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-2">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="leading-relaxed text-foreground/85">
                {block.text}
              </p>
            );
          case "h":
            return (
              <h3 key={i} className="mt-6 text-lg font-semibold text-foreground">
                {block.text}
              </h3>
            );
          case "list":
            return (
              <ul key={i} className="ml-5 list-disc space-y-1 text-foreground/85">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "note":
            return (
              <div
                key={i}
                className={`my-4 rounded-r-lg px-4 py-3 ${
                  block.variant === "warning"
                    ? "note-warning"
                    : block.variant === "success"
                      ? "note-success"
                      : "note-info"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  {block.variant === "warning" ? (
                    <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warning)]" />
                  ) : block.variant === "success" ? (
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />
                  ) : (
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-[var(--info)]" />
                  )}
                  <div className="text-sm">
                    {block.title && (
                      <div className="mb-0.5 font-semibold text-foreground">
                        {block.title}
                      </div>
                    )}
                    <p className="text-foreground/80">{block.text}</p>
                  </div>
                </div>
              </div>
            );
          case "code":
            return (
              <CodeBlock
                key={i}
                filename={block.filename}
                language={block.language}
                code={block.code}
              />
            );
          case "table":
            return (
              <div
                key={i}
                className="my-4 overflow-x-auto rounded-lg border border-border"
              >
                <table className="w-full text-sm">
                  <thead className="bg-secondary">
                    <tr>
                      {block.headers.map((h, j) => (
                        <th
                          key={j}
                          className="px-4 py-2.5 text-left font-semibold text-foreground"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className="border-t border-border">
                        {row.map((cell, k) => (
                          <td
                            key={k}
                            className={`px-4 py-2.5 text-foreground/80 ${
                              k === 0 ? "font-mono text-xs" : ""
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}