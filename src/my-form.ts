import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-form')
export class MyForm extends LitElement {
  static styles = css`
     form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 300px;
    }
    input,
    button {
      padding: 0.5rem;
    }
    .result {
      margin-top: 1rem;
      font-weight: bold;
    }`;

  private async handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      age: formData.get('age'),
    };

    try {
      const response = await fetch('http://localhost:8080/student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit');

      // Emit event on success
      this.dispatchEvent(new CustomEvent('form-submitted', {
        bubbles: true,
        composed: true, // allows event to bubble past shadow DOM
      }));
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <input name="name" placeholder="Name" required />
        <input name="age" placeholder="Age" required />
        <button type="submit">Submit</button>
      </form>
    `;
  }
}
