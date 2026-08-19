const site = "https://ui.mosly.dev";

interface SeoInput {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function buildSeo({
  title = "Mosly UI — A restrained shadcn theme",
  description = "A dark-first, Linear-inspired shadcn/ui theme and complete component showcase.",
  path = "/",
  image = "/og/default.svg",
}: SeoInput = {}) {
  const resolvedTitle = title.includes("Mosly UI") ? title : `${title} — Mosly UI`;

  return {
    title: resolvedTitle,
    description,
    canonical: new URL(path, site).toString(),
    image: new URL(image, site).toString(),
  };
}
