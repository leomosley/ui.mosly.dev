import { ArrowRightIcon, SearchIcon } from "lucide-react";
import { useDeferredValue, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { componentGroups, components } from "@/data/components";

export function ComponentSearch() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.toLowerCase());
  const filtered = components.filter((component) =>
    `${component.name} ${component.description} ${component.keywords.join(" ")}`
      .toLowerCase()
      .includes(deferredQuery),
  );

  return (
    <div className="flex flex-col gap-12">
      <InputGroup className="max-w-xl">
        <InputGroupInput
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search all components..."
          aria-label="Search components"
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <span className="font-mono text-xs">{filtered.length}</span>
        </InputGroupAddon>
      </InputGroup>
      {componentGroups.map((group) => {
        const groupComponents = filtered.filter((component) => component.group === group);
        if (!groupComponents.length) return null;
        return (
          <section key={group} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-medium tracking-tight">{group}</h2>
              <Badge variant="secondary">{groupComponents.length}</Badge>
            </div>
            <div className="bg-border grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-3">
              {groupComponents.map((component) => (
                <a
                  key={component.slug}
                  href={`/components/${component.slug}`}
                  className="bg-background hover:bg-card group flex min-h-36 flex-col p-5 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-medium">{component.name}</h3>
                    <ArrowRightIcon className="text-muted-foreground size-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {component.description}
                  </p>
                  <span className="text-muted-foreground mt-auto pt-4 font-mono text-[11px]">
                    {component.slug}
                  </span>
                </a>
              ))}
            </div>
          </section>
        );
      })}
      {filtered.length === 0 && (
        <div className="border-border flex min-h-52 items-center justify-center rounded-xl border border-dashed">
          <p className="text-muted-foreground text-sm">No components match “{query}”.</p>
        </div>
      )}
    </div>
  );
}
