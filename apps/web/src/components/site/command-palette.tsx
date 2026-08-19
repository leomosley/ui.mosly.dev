import { CheckIcon, ComponentIcon, CopyIcon, HomeIcon, MoonIcon, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { components } from "@/data/components";

const installCommand = "npx shadcn@latest add https://ui.mosly.dev/r/theme.json";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  function navigate(path: string) {
    setOpen(false);
    window.location.href = path;
  }

  async function copyInstall() {
    await navigator.clipboard.writeText(installCommand);
    setOpen(false);
    toast.success("Install command copied");
  }

  return (
    <>
      <button
        type="button"
        className="text-muted-foreground hover:text-foreground hover:bg-accent hidden h-8 items-center gap-2 rounded-md border px-2.5 text-xs transition-colors sm:flex"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="size-3.5" />
        Search
        <span className="border-border bg-muted ml-4 rounded border px-1.5 font-mono">⌘ K</span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search components and actions..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => navigate("/")}>
              <HomeIcon />
              Home
            </CommandItem>
            <CommandItem onSelect={() => navigate("/components")}>
              <ComponentIcon />
              Components
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem onSelect={copyInstall}>
              <CopyIcon />
              Copy install command
              <CommandShortcut>
                <CheckIcon />
              </CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => document.documentElement.classList.toggle("dark")}>
              <MoonIcon />
              Toggle theme
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Components">
            {components.map((component) => (
              <CommandItem
                key={component.slug}
                value={`${component.name} ${component.keywords.join(" ")}`}
                onSelect={() => navigate(`/components/${component.slug}`)}
              >
                <ComponentIcon />
                {component.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
