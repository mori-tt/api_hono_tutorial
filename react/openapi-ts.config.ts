import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-fetch",
  input: "http://localhost:3000/open-api",
  output: {
    path: "src/api/generated",
    format: "prettier",
  },
  plugins: ["@tanstack/react-query"],
  services: {
    operationId: true,
  },
});
