/*file for creating custom, modular components*/

/*class for links on home page to direct to work sections*/

//class for home page videos and their captions
class HomeVideo extends HTMLElement {
    connectedCallback() {
        const vidLink = this.getAttribute("vidLink");

        const vidCaption = this.getAttribute("vidCaption");

        this.innerHTML = `<div class=homeVid>
            <video width = "256px" height="144px" src="${vidLink}" controls>
                your browser does not support this video!
            </video>
            <p class="centerTxt">${vidCaption}</p>
        </div>`;
    }
}
customElements.define("home-video", HomeVideo);

class HomeWorkLink extends HTMLElement {
    connectedCallback() {
        //link to individual sections of the 'my work' page
        const workLink = this.getAttribute("workLink");
        
        //what link text itself will say
        const linkText = this.getAttribute("linkText");
        
        this.innerHTML = `<div class="homeWork">
            <p class="homeWorkText"><a class="yellowTxt" href="${workLink}">${linkText}</a></p>
        </div>`;
    }
}
customElements.define("home-work-link", HomeWorkLink);

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
                <div class="uHeader spaceBtwn ${direction} center">
                    <h3>${headerTxt}</h3>
                    <div class="line lFlex darkRed"></div> 
                    <div class="dot darkRed"></div>
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

class PortfolioCard extends HTMLElement {
    connectedCallback() {
        const link = this.getAttribute("link");
        const image = this.getAttribute("image");
        const cardId = this.getAttribute("cardId");
        const text = this.getAttribute("text") ;

        this.innerHTML = `
        <div class="pfContainer">
            <a href="${link}"><img src="${image}" id="${cardId}"/>
            <div class="imgTxt whiteTxt"><p>${text}</p></div></a>
          </div>`;
    }
}
customElements.define("pf-card", PortfolioCard);

