import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

export type Student = {
    name:string;
    age:number;
}

@customElement('my-list')
export class MyList extends LitElement {
  @state()
  private items: Student[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.loadData();
  }

  public async loadData() {
    // Load fresh data from API
    const response = await fetch('http://localhost:8080/getAllStudents');
    const result = await response.json();
    this.items = result as Student[] || []; // Assume API returns { items: [...] }
  }

  render() {
    return html`
      <ul>
        ${this.items.map(item => html`<li>${item.name +' '+ item.age}</li>`)}
      </ul>
    `;
  }
}
