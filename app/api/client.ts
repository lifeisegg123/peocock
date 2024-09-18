import { createClient, createConfig } from "@hey-api/client-fetch";

export const createApiClient = () => {
  return createClient(
    createConfig({
      baseUrl: "https://api.peacock.vm.cd80.run",
    })
  );
};
