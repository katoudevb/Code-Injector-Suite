import { useState, useEffect } from "react";
import { sections } from "@/data";
import { Sidebar } from "@/components/docs/Sidebar";
import { ContentRenderer } from "@/components/docs/ContentRenderer";

export default function App() {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const [activeSub, setActiveSub] = useState(
    sections[0]?.subsections[0]?.id ?? ""
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const currentSection = sections.find((s) => s.id === activeSection);
  const currentSub = currentSection?.subsections.find((s) => s.id === activeSub);

  const handleSelect = (sectionId: string, subId: string) => {
    setActiveSection(sectionId);
    setActiveSub(subId);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeSub]);

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <aside
        className={`shrink-0 transition-all duration-300 ${
          sidebarOpen ? "w-72" : "w-0 overflow-hidden"
        } border-r border-border`}
      >
        <div className="h-full w-72">
          <Sidebar
            sections={sections}
            activeSection={activeSection}
            activeSub={activeSub}
            onSelect={handleSelect}
          />
        </div>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-12 shrink-0 items-center gap-3 border-b border-border px-4">
          <button
            onClick={() => setSidebarOpen((o) => !o)}
            className="rounded p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {currentSection && (
            <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{currentSection.title}</span>
              {currentSub && (
                <>
                  <span>/</span>
                  <span className="text-foreground/70">{currentSub.title}</span>
                </>
              )}
            </nav>
          )}
        </header>

        <main className="flex-1 overflow-y-auto">
          {currentSub ? (
            <article className="mx-auto max-w-3xl px-6 py-8">
              <h1 className="mb-6 text-2xl font-bold text-foreground">
                {currentSub.title}
              </h1>
              <ContentRenderer blocks={currentSub.blocks} />

              <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
                {(() => {
                  const subs = currentSection?.subsections ?? [];
                  const idx = subs.findIndex((s) => s.id === activeSub);
                  const prev = subs[idx - 1];
                  const next = subs[idx + 1];
                  return (
                    <>
                      {prev ? (
                        <button
                          onClick={() => handleSelect(activeSection, prev.id)}
                          className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
                        >
                          <span>←</span>
                          <span>{prev.title}</span>
                        </button>
                      ) : (
                        <div />
                      )}
                      {next && (
                        <button
                          onClick={() => handleSelect(activeSection, next.id)}
                          className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
                        >
                          <span>{next.title}</span>
                          <span>→</span>
                        </button>
                      )}
                    </>
                  );
                })()}
              </div>
            </article>
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              Sélectionnez un chapitre dans le menu.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
