import './App.css';
import Button from './components/Button';

customElements.define(
  "user-card",
  class extends HTMLElement {
      constructor() {
          super();
          const template = document.getElementById(
          "user-template",
          ).content;
          const shadowRoot = this.attachShadow({ mode: "open" });
          shadowRoot.appendChild(template.cloneNode(true));
      }
      
      btnClick(callback) {
          this.shadowRoot.querySelector('.btn-toPosts').addEventListener('click', callback);
      }
  },
)

customElements.define(
  "user-post",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById(
        "post-template",
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
  },
);

function App() {
  return (
    <div>
      <Button/>
    </div>
  );
}

export default App;
