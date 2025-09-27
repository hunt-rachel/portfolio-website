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

/*class for creating the line and dot decoration component - just in case*/
class LineDot extends HTMLElement {
    connectedCallback() {
        const direction = this.getAttribute("direction");     
        const ldColour = this.getAttribute("ldColour");
        const lWidth = this.getAttribute("lWidth");   
        
        this.innerHTML = `<div class="${direction}">
            <div class="dot  ${ldColour}"></div>
            <div class="line ${lWidth} ${ldColour}"></div>
        </div>`;
    }
}
customElements.define("line-dot", LineDot);

/*class for creating decoration consisting of three evenly spaced dots */
class ThreeDots extends HTMLElement {
    connectedCallback() {
        const dColour = this.getAttribute("dColour");
        const dGap = this.getAttribute("dGap");
        
        this.innerHTML = `<div class="row">
            <div class="${dGap}"></div>    
            <div class="dot ${dColour}"></div>
            <div class="${dGap}"></div>
            <div class="dot ${dColour}"></div>
            <div class="${dGap}"></div>
            <div class="dot ${dColour}"></div>
            <div class="${dGap}"></div>
        </div>`;
    }
}
customElements.define("three-dots", ThreeDots);

/*class for creating the update component in about page*/
class UpdateSection extends HTMLElement {
    connectedCallback() {
        const direction = this.getAttribute("direction");
        const image = this.getAttribute("image");
        const headerTxt = this.getAttribute("headerTxt");
        const updateTxt = this.getAttribute("updateTxt");
        const tAlign = this.getAttribute("tAlign");
        
        this.innerHTML = `
        <div class="uSpacing ${direction}">
            <img class="uImage" src="${image}"></img>
            <div class="uText column">
                <div class="uHeader ${direction} center">
                    <h3 class="uTitle"><i>${headerTxt}</i></h3>
                    <three-dots class="uDots" dColour="darkRed" dGap="gap5"></three-dots>
                </div>
                <p class="${tAlign}">${updateTxt}</p>
            </div>
        </div>
        <div class="gap45"></div>`;
    }
}
customElements.define("update-section", UpdateSection);

