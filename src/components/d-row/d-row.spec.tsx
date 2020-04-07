import { newSpecPage } from "@stencil/core/testing";
import { DRow } from "./d-row";

describe("d-row", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [DRow],
      html: `<d-row></d-row>`,
    });
    expect(page.root).toEqualHtml(`
      <d-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-row>
    `);
  });
});
