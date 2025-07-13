import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import './my-form';
import './my-list';

@customElement('my-app')
export class MyApp extends LitElement {
  @query('my-list')
  private list!: HTMLElement & { loadData: () => void };

  private handleFormSubmitted() {
    this.list.loadData(); // call public method on my-list
  }

  render() {
    return html`
      <my-form @form-submitted=${this.handleFormSubmitted}></my-form>
      <my-list></my-list>
    `;
  }
}
