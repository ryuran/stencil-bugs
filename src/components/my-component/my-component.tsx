import { Component, Element, Prop, h, Host } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Element() el: HTMLMyComponentElement;

  render() {
    if (this.el.getRootNode() instanceof ShadowRoot) {
      console.log('I’m in ShadowDOM');
    }
    return <Host>Hello, World! I'm lost</Host>;
  }
}
