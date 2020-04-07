import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";
import { FlexJustifyContent } from "../../util/justify-content.type";

@Component({
  tag: "d-row",
  styleUrl: "d-row.css",
  shadow: true,
})
export class DRow implements ComponentInterface {
  @Prop() justifyContent: FlexJustifyContent;

  render() {
    return (
      <Host style={{ "justify-content": this.justifyContent }}>
        <slot></slot>
      </Host>
    );
  }
}
