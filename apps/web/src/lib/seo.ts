const site = "https://ui.mosly.dev";

interface SeoInput {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function buildSeo({
  title = "Mosly UI, a shadcn theme worth stealing",
  description = "A calm, Linear-inspired shadcn/ui theme with every component in one place.",
  path = "/",
  image = "/og/default.png",
}: SeoInput = {}) {
  const resolvedTitle = title.includes("Mosly UI") ? title : `${title} · Mosly UI`;

  return {
    title: resolvedTitle,
    description,
    canonical: new URL(path, site).toString(),
    image: new URL(image, site).toString(),
  };
}
