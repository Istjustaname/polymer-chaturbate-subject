import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ChaturbateSubject extends PolymerElement {
static get template() {
  return html`
  <style>
    :host {
      --cb-info-color: #fff;
      --cb-chat-text-shadow-color: rgba(0, 0, 0, 0.65);
      --cb-default-background-color: rgba(0,0,0,0.5);
    }

    .subject {
      color: var(--cb-info-color);
      background-color: var(--cb-default-background-color);
      text-shadow: -1px 0 var(--cb-chat-text-shadow-color),
                   0 1px var(--cb-chat-text-shadow-color),
                   1px 0 var(--cb-chat-text-shadow-color),
                   0 -1px var(--cb-chat-text-shadow-color);
      display: inline-table;
      padding: 8px;
      border-radius: 4px;
    }
  </style>

  <div>
    <span class="subject">
      {{subject}}
    </span>
  </div>`;
}

static get properties() {
  return {
    subject: {
      type: String,
      value: '',
      notify: true
    }
  }
}
}

if (!customElements.get('chaturbate-subject')) {
    customElements.define('chaturbate-subject', ChaturbateSubject);
}