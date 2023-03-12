import { render, screen } from "@testing-library/react";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { api } from "./api";

test("should display text", async () => {
  render(
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  );

  const apiResponseElemnent = await screen.findByText("First post");

  expect(apiResponseElemnent).toBeInTheDocument();
});
