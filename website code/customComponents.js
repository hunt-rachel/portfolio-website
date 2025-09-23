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