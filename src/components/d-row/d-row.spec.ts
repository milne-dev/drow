import { newSpecPage } from "@stencil/core/testing";
import { DRow } from "./d-row";

describe("d-row", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [DRow],
      html: "<d-row></d-row>",
    });
    expect(root).toEqualHtml(`
      <d-row>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </d-row>
    `);
  });
});
