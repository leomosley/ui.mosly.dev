import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

const themeCommand = "npx shadcn@latest add https://ui.mosly.dev/r/theme.json";

export function InstallCommand({ command = themeCommand }: { command?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    toast.success("Copied to clipboard");
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="group bg-card ring-border hover:ring-ring/40 flex w-full items-center gap-3 rounded-lg px-4 py-3 font-mono text-sm ring-1 transition">
      <span className="text-muted-foreground/60 select-none">$</span>
      <code className="min-w-0 flex-1 truncate">{command}</code>
      <Button
        variant="ghost"
        size="icon"
        onClick={copy}
        aria-label="Copy command"
        className="text-muted-foreground hover:text-foreground -mr-1.5 size-7 shrink-0"
      >
        {copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
      </Button>
    </div>
  );
}
