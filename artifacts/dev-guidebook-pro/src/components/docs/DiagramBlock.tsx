export function DiagramBlock({ content }: { content: string }) {
  const lines = content.split("\n");

  function colorize(line: string): React.ReactNode {
    const parts: React.ReactNode[] = [];
    let i = 0;
    let key = 0;

    while (i < line.length) {
      const ch = line[i];

      // Tree characters
      if ("├└│─┬┼┤┘┐┌┴╔╗╚╝║═╠╣".includes(ch)) {
        parts.push(<span key={key++} className="text-blue-400">{ch}</span>);
        i++;
        continue;
      }
      // Box drawing
      if ("┄┅┆┇┈┉┊┋".includes(ch)) {
        parts.push(<span key={key++} className="text-slate-500">{ch}</span>);
        i++;
        continue;
      }
      // Arrows
      if (ch === "→" || ch === "←" || ch === "↓" || ch === "↑" || ch === "↔" || ch === "⇒" || ch === "⇐" || ch === "⇔") {
        parts.push(<span key={key++} className="text-emerald-400 font-bold">{ch}</span>);
        i++;
        continue;
      }
      // ASCII arrows
      if (ch === "-" && line[i + 1] === ">") {
        parts.push(<span key={key++} className="text-emerald-400 font-bold">-{">"}</span>);
        i += 2;
        continue;
      }
      // ✅ ❌
      if (ch === "✅") {
        parts.push(<span key={key++} className="text-emerald-400">{ch}</span>);
        i++;
        continue;
      }
      if (ch === "❌") {
        parts.push(<span key={key++} className="text-red-400">{ch}</span>);
        i++;
        continue;
      }
      // Comment style /*...*/
      if (ch === "/" && line[i + 1] === "*") {
        const end = line.indexOf("*/", i + 2);
        const comment = end !== -1 ? line.slice(i, end + 2) : line.slice(i);
        parts.push(<span key={key++} className="text-slate-400 italic">{comment}</span>);
        i += comment.length;
        continue;
      }
      // Numbers with → weight patterns like "Poids 001"
      if (/\d/.test(ch) && parts.length === 0) {
        let num = "";
        while (i < line.length && /[\d.]/.test(line[i])) {
          num += line[i++];
        }
        parts.push(<span key={key++} className="text-yellow-400">{num}</span>);
        continue;
      }
      parts.push(<span key={key++}>{ch}</span>);
      i++;
    }

    return <>{parts}</>;
  }

  return (
    <div className="my-4 overflow-x-auto rounded-xl border border-slate-700 bg-[#0f1117] shadow-lg">
      <div className="flex items-center gap-2 border-b border-slate-700 px-4 py-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Schéma
        </span>
        <div className="ml-auto flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
        </div>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-slate-200"
        style={{ fontFamily: "var(--app-font-mono)", tabSize: 2 }}>
        {lines.map((line, idx) => (
          <div key={idx}>{line === "" ? "\u00A0" : colorize(line)}</div>
        ))}
      </pre>
    </div>
  );
}
