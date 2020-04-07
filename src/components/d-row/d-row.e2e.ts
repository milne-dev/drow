import { newE2EPage } from "@stencil/core/testing";

describe("d-row", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<d-row></d-row>");
    const element = await page.find("d-row");
    expect(element).toHaveClass("hydrated");
  });
});
