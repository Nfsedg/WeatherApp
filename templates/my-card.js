class cardElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.img = this.getAttribute("img")
    }
    getTamplate() {
        const template = document.createElement("template")
        template.innerHTML = `
        <section class="card2">
            <div class="card2__city">
                <div class="card2__city--time">
                    <p>Actual Time <span>21:00</span></p>
                </div>
                <h2 class="card2__city--name">
                    <slot name="city"></slot>
                </h2>
                <img src="${this.img}">
            </div>
            <div class="card2__wather">
                <div class="card2__wather--cloud">
                    <slot name="cloud"></slot>
                </div>
                <div class="card2__wather--temp">
                    <p>Temperature <br><slot name="temp"></slot>° C</p>
                </div>
            </div>
         </section>
        ${this.getStyles()}
        `
        return template;
    }
    getStyles() {
        return `
            <style>
            .card2 {
                margin: 0;
                padding: 0 10px;
                width: 300px;
                height: 450px;
                background: linear-gradient(rgba(53, 131, 219, 0.753), rgba(17, 26, 37, 0.884));
                border-radius: 10px;
                border: 1px solid grey;
                margin: 5px;
              }
              .card2__city {
                display: grid;
                grid-row: 20px 60px 35px;
              }
              .card2__city--time p {
                font-size: 1.5rem;
                justify-self: left;
              }
              .card2__city--name, .card2__city img {
                justify-self: center;
                color: aliceblue;
                letter-spacing: 0.1rem;
                font-weight: 500;
                font-size: 2.8rem;
              }
              .card2__city img {
                width: 65px;
                height: 65px;
              }
              .card2__wather {
                height: 300px;
                width: 100%;
                display: grid;
                grid-template-rows: 60px 1fr;
                justify-content: center;
                align-items: center;
                color: aliceblue;
              }
              .card2__wather--cloud {
                font-size: 2rem;
                font-weight: 500;
              }
              .card2__wather--temp {
                font-size: 2.8rem;
                text-align: center;
                align-self: stretch;
                margin-top: 20px;
                font-weight: 400;
              }
            </style>
        `
    }
    render() {
        this.shadowRoot.appendChild(this.getTamplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render()
    }
}

customElements.define("my-card", cardElement)