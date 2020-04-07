import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";
import { JustifyContentType } from "../../util/justify-content.type";
import { AlignItemsType } from "../../util/align-items.type";

@Component({
  tag: "d-row",
  styleUrl: "d-row.css",
  shadow: true,
})
export class DRow implements ComponentInterface {
  @Prop() justifyContent: JustifyContentType;
  @Prop() alignItems: AlignItemsType;

  render() {
    return (
      <Host style={{ "justify-content": this.justifyContent }}>
        <slot></slot>
      </Host>
    );
  }
}
