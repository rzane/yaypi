import { ReviewApi, Configuration } from "./api";
import { FakeApi } from "./fake";

export * from "./api";

/**
 * Configure our API. We set the basePath to `/api`, because
 * we're proxying requests with `create-react-app`.
 */

const configuration = new Configuration({
  basePath: "/api"
});

export const api = new ReviewApi(configuration);

/**
 * Also, export a FakeAPI instance
 */

export const fakeApi = new FakeApi();
