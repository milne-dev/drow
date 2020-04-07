import { newSpecPage } from "@stencil/core/testing";
import { DColumn } from "./d-column";

describe("d-column", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [DColumn],
      html: `<d-column></d-column>`,
    });
    expect(page.root).toEqualHtml(`
      <d-column>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-column>
    `);
  });
});
