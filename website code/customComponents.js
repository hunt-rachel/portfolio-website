/*file for creating custom, modular components*/

/*class for links on home page to direct to work sections*/
class HomeWorkLink extends HTMLElement {
    connectedCallback() {
        const workLink = this.getAttribute("workLink");
        const linkText = this.getAttribute("linkText");
        
        this.innerHTML = `<div class="homeWork">
            <p class="homeWorkText">my <a class="yellowTxt" href="${workLink}">${linkText}</a> work</p>
        </div>`;
    }
}
customElements.define("home-work-link", HomeWorkLink);

class LineDot extends HTMLElement {
    connectedCallback() {
        const direction = this.getAttribute("direction");     
        const lineWidth = this.getAttribute("lineWidth");   
        
        this.innerHTML = `<div class="${direction}">
            <div class="dot"></div>
            <div class="line ${lineWidth}"></div>
        </div>`;
    }
}
customElements.define("line-dot", LineDot);