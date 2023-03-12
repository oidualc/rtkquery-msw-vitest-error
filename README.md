# RTK Query, MSW, Vitest error

This repo is a minimal reproduction of an error when using RTK Query with MSW and Vitest.

The RTK Query api is defined in [src/api.ts](src/api.ts) and the test is in [src/App.test.tsx](src/App.test.tsx). The only operation is a `getPosts` query in [src/App.tsx](src/App.tsx), calling a mocked `http://localhost:8000/posts` endpoint.

The MSW server is defined in [src/mocks/server.ts](src/mocks/server.ts).

## Steps to reproduce

1. Clone the repo and `cd` into it
2. Run `pnpm install`
3. Run `pnpm test`

## Expected behavior

Tests should pass

## Actual behavior

Tests fail with the following error:

```
stderr | src/App.test.tsx > should display text
An unhandled error occurred processing a request for the endpoint "getPosts".
In the case of an unhandled error, no tags will be "provided" or "invalidated". TypeError: The "emitter" argument must be an instance of EventEmitter or EventTarget. Received an instance of AbortSignal
    at new NodeError (node:internal/errors:399:5)
    at getEventListeners (node:events:913:9)
    at new Request (node:internal/deps/undici/undici:7138:17)
    at Proxy.<anonymous> (/home/user/rtkquery-msw-vitest-error/node_modules/.pnpm/@reduxjs+toolkit@1.9.3_k4ae6lp43ej6mezo3ztvx6pykq/node_modules/@reduxjs/toolkit/src/query/fetchBaseQuery.ts:267:21)
    at step (/home/user/rtkquery-msw-vitest-error/node_modules/.pnpm/@reduxjs+toolkit@1.9.3_k4ae6lp43ej6mezo3ztvx6pykq/node_modules/@reduxjs/toolkit/dist/query/rtk-query.cjs.development.js:23:23)
    at Object.next (/home/user/rtkquery-msw-vitest-error/node_modules/.pnpm/@reduxjs+toolkit@1.9.3_k4ae6lp43ej6mezo3ztvx6pykq/node_modules/@reduxjs/toolkit/dist/query/rtk-query.cjs.development.js:4:53)
    at fulfilled (/home/user/rtkquery-msw-vitest-error/node_modules/.pnpm/@reduxjs+toolkit@1.9.3_k4ae6lp43ej6mezo3ztvx6pykq/node_modules/@reduxjs/toolkit/dist/query/rtk-query.cjs.development.js:95:32) {
  code: 'ERR_INVALID_ARG_TYPE'
}
```