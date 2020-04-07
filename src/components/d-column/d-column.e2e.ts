import { newE2EPage } from "@stencil/core/testing";

describe("d-column", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<d-column></d-column>");

    const element = await page.find("d-column");
    expect(element).toHaveClass("hydrated");
  });
});
