import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token } from "../env";

export const backendClient = createClient({
  projectId:"sdns4rwg",
  dataset:"production",
  apiVersion: "v2025-01-17",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "skMsvxpLICQJBmTaUSyVxDR3pYzkMPHPZGs14MbaDhq7Pr5GCGArFCGojKOn2EkMFxlVvIHPeblRyuO9zeZ63Y4lzpDRh97IWxuILm49tTL9j3NBuQoXSV0HpIeLDMeJu7BjUoZQot6j4VQCzQSy9V3hsseHyT3xAIwPapgvevjRBYp7qFgfp",
});
