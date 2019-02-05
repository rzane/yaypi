import { ReviewApi, Configuration } from "./api";

/**
 * Assemble an API instance. Note that we're proxying
 * requests via create-react-app, hence the `/api`.
 */

const configuration = new Configuration({
  basePath: "/api"
});

export const api = new ReviewApi(configuration);
