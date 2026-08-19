import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

const command = "npx shadcn@latest add https://ui.mosly.dev/r/theme.json";

export function InstallCommand() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    toast.success("Install command copied");
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="bg-card flex w-full max-w-xl items-center gap-3 rounded-lg border p-1.5 pl-4">
      <code className="text-muted-foreground min-w-0 flex-1 truncate font-mono text-xs sm:text-sm">
        {command}
      </code>
      <Button size="sm" onClick={copy}>
        {copied ? <CheckIcon data-icon="inline-start" /> : <CopyIcon data-icon="inline-start" />}
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  );
}
