import { headers } from "next/headers";
import { resolveBrand, type Brand } from "./brand";

/** The active brand for the current request, resolved from its Host header. */
export async function getRequestBrand(): Promise<Brand> {
  const host = (await headers()).get("host");
  return resolveBrand(host);
}
