import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "d-column",
  styleUrl: "d-column.css",
  shadow: true,
})
export class DColumn implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
