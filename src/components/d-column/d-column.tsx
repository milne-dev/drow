import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";
import { FlexJustifyContent } from "../../util/justify-content.type";

@Component({
  tag: "d-column",
  styleUrl: "d-column.css",
  shadow: true,
})
export class DColumn implements ComponentInterface {
  @Prop() justifyContent: FlexJustifyContent;

  render() {
    return (
      <Host style={{ "justify-content": this.justifyContent }}>
        <slot></slot>
      </Host>
    );
  }
}
