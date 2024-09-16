import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-fetch",
  input: "https://api.peacock.vm.cd80.run/v3/api-docs",
  output: "app/api",
});
