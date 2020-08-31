import { defaults } from "lodash";

export const API_INTERNAL_URL =
  process.env.API_INTERNAL_URL || "http://localhost:8000/v2";
export const API_PUBLIC_URL =
  process.env.API_PUBLIC_URL || "http://localhost:8000/v2";

export function getBackendURL() {
  try {
    const _window = global.window;
    if (_window) {
      return API_PUBLIC_URL;
    }
  } catch (error) {
    console.log(`
      +===============================+
      |                               | 
      | Error getBackendURL ${error}  |    
      |                               |
      +===============================+
    `);
  }
  return API_INTERNAL_URL;
}
