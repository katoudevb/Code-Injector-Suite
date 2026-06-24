import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { highlight } from "@/lib/prism";

const LANG_LABELS: Record<string, string> = {
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  jsx: "JSX",
  typescript: "TypeScript",
  tsx: "TSX",
  php: "PHP",
  sql: "SQL",
  bash: "Terminal",
  json: "JSON",
  yaml: "YAML",
  twig: "Twig",
  dockerfile: "Dockerfile",
};

interface CodeBlockProps {
  filename: string;
  language: string;
  code: string;
}

export function CodeBlock({ filename, language, code }: CodeBlockProps) {
  const [copie, setCopie] = useState(false);

  const copier = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopie(true);
      setTimeout(() => setCopie(false), 1800);
    } catch {
      /* ignore */
    }
  };

  const html = highlight(code, language);

  return (
    <div className="my-4 overflow-hidden rounded-lg border border-border bg-code-bg">
      <div className="flex items-center justify-between border-b border-border/60 bg-black/20 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground">{filename}</span>
          <span className="rounded bg-primary/15 px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide text-primary">
            {LANG_LABELS[language] ?? language}
          </span>
        </div>
        <button
          onClick={copier}
          className="flex items-center gap-1.5 rounded px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
        >
          {copie ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copié !</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copier
            </>
          )}
        </button>
      </div>
      <pre className={`language-${language} overflow-x-auto p-4`}>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </div>
  );
}