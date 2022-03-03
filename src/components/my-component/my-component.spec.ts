import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          Hello, World! I'm lost
        </mock:shadow-root>
      </my-component>
    `);
  });
});
