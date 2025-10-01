/*file for creating custom, modular components*/

/*class for links on home page to direct to work sections*/

class HomeWorkLink extends HTMLElement {
    connectedCallback() {
        //link to individual sections of the 'my work' page
        const workLink = this.getAttribute("workLink");
        
        //what link text itself will say
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
        //whether decoration will be left or right aligned
        const direction = this.getAttribute("direction");     
        
        //colour of decoration
        const ldColour = this.getAttribute("ldColour");
        
        //width of the line
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
        //dot colour
        const dColour = this.getAttribute("dColour");
        
        //gap between dots
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
        //whether update will be left or right aligned
        const direction = this.getAttribute("direction");
        
        //update image
        const image = this.getAttribute("image");
        
        //text for update header
        const headerTxt = this.getAttribute("headerTxt");
        
        //text for update paragraph
        const updateTxt = this.getAttribute("updateTxt");
        
        //whether update paragraph will be left or right aligned
        const tAlign = this.getAttribute("tAlign");
        
        this.innerHTML = `
        <div class="uSpacing ${direction}">
            <img class="uImage" src="${image}"></img>

            <div class="uText column">
                <div class="uHeader ${direction} center">
                    <h3>${headerTxt}</h3>
                    <three-dots class="uDots" dColour="darkRed" dGap="gap5"></three-dots>
                </div>

                <p class="${tAlign}">${updateTxt}</p>
            </div>

        </div>
        <div class="gap45"></div>`;
    }
}
customElements.define("update-section", UpdateSection);

/*class for creating each portfolio section in my work page*/
class PortfolioSection extends HTMLElement {
    connnectedCallback() {
        //whether section will be left or right aligned
        const direction = this.getAttribute("direction");
        
        //text for header title
        const headerTxt = this.getAttribute("headerTxt");
        
        //whether description text will be left or right aligned
        const tAlign = this.getAttribute("tAlign");
        
        //text for description
        const desc = this.getAttribute("desc");

        this.innerHTML = `
        <div class="pfSpacing ${direction}">
            <div class="pfText column">
                <div class="pfHeader ${direction} center">
                    <h3><i>${headerTxt}</i></h3>
                    <three-dots class="uDots" dColour="darkBlue" dGap="gap5"></three-dots>
                </div>

                <p class="tAlign">${desc}</p>
            </div>
        </div>`;
    }
}
customElements.define("pf-section", PortfolioSection);

