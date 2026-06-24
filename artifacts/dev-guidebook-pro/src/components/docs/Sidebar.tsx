import { useMemo, useState } from "react";
import { ChevronRight, Search, BookOpen } from "lucide-react";
import * as Icons from "lucide-react";
import type { Section } from "@/data";
import { TechTag } from "./TechTag";

interface SidebarProps {
  sections: Section[];
  activeSection: string;
  activeSub: string;
  onSelect: (sectionId: string, subId: string) => void;
}

function DynIcon({ name }: { name: string }) {
  const lib = Icons as unknown as Record<
    string,
    React.ComponentType<{ className?: string }>
  >;
  const Cmp = lib[name];
  if (!Cmp) return <BookOpen className="h-4 w-4" />;
  return <Cmp className="h-4 w-4" />;
}

export function Sidebar({ sections, activeSection, activeSub, onSelect }: SidebarProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Record<string, boolean>>({ [activeSection]: true });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sections;
    return sections
      .map((s) => ({
        ...s,
        subsections: s.subsections.filter(
          (sub) =>
            sub.title.toLowerCase().includes(q) || s.title.toLowerCase().includes(q),
        ),
      }))
      .filter((s) => s.title.toLowerCase().includes(q) || s.subsections.length > 0);
  }, [query, sections]);

  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  return (
    <div className="flex h-full flex-col bg-sidebar">
      <div className="border-b border-border p-4">
        <div className="mb-3 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <span className="font-semibold text-foreground">DevDocs</span>
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher…"
            className="w-full rounded-md border border-border bg-background py-2 pl-8 pr-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-3">
        {filtered.map((section) => {
          const isOpen = query ? true : open[section.id];
          const isActiveSection = section.id === activeSection;
          return (
            <div key={section.id} className="mb-0.5">
              <button
                onClick={() => {
                  toggle(section.id);
                  onSelect(section.id, section.subsections[0]?.id ?? "");
                }}
                className={`flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm transition-colors ${
                  isActiveSection
                    ? "bg-primary/10 text-primary"
                    : "text-sidebar-foreground hover:bg-white/5"
                }`}
              >
                <ChevronRight
                  className={`h-3.5 w-3.5 shrink-0 transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
                <DynIcon name={section.icon} />
                <span className="flex-1 truncate font-medium">{section.title}</span>
                <span className="rounded-full bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">
                  {section.subsections.length}
                </span>
              </button>

              {isOpen && (
                <ul className="ml-5 mt-0.5 space-y-0.5 border-l border-border pl-2">
                  {section.subsections.map((sub) => {
                    const active = isActiveSection && sub.id === activeSub;
                    return (
                      <li key={sub.id}>
                        <button
                          onClick={() => onSelect(section.id, sub.id)}
                          className={`block w-full rounded px-2.5 py-1.5 text-left text-[13px] transition-colors ${
                            active
                              ? "bg-primary/15 font-medium text-primary"
                              : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                          }`}
                        >
                          {sub.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
        {filtered.length === 0 && (
          <p className="px-3 py-4 text-sm text-muted-foreground">Aucun résultat.</p>
        )}
      </nav>

      <div className="border-t border-border px-4 py-3">
        <div className="flex flex-wrap gap-1.5">
          <TechTag tech="html" />
          <TechTag tech="css" />
          <TechTag tech="js" />
          <TechTag tech="ts" />
          <TechTag tech="php" />
        </div>
      </div>
    </div>
  );
}