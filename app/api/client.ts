import { createClient, createConfig } from "@hey-api/client-fetch";

export const createApiClient = () => {
  return createClient(
    createConfig({
      baseUrl: "http://api.peacock.vm.cd80.run",
    })
  );
};
