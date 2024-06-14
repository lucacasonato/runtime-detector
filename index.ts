/**
 * COMING FROM GITHUB!
 * 
 * 
 * This function detects which runtime you are executing in.
 * @returns The runtime you are in, and null if the runtime could not be detected.
 */
export function detect(): "deno" | "node" | "browser" | null {
  if ("Deno" in globalThis) return "deno";
  if ("process" in globalThis) return "node";
  if ("document" in globalThis) return "browser";
  return null;
}
