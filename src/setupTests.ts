import "@testing-library/jest-dom";

import nodeFetch from "node-fetch";
import { server } from "./mocks/server";

//@ts-ignore
global.fetch = nodeFetch;
//@ts-ignore
global.Request = nodeFetch.Request;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
