import { z } from "astro:content";

export const compendiumSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z
    .enum([
      "Core Theory",
      "Political Economy",
      "Strategy & Organisation",
      "Ecology & Climate",
      "Global South & Decolonisation",
      "Historical Movements",
    ])
    .default("Core Theory"),
  draft: z.boolean().default(false),
});
