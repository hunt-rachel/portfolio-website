//function for displaying modal with correct information
function displayModal(mID) {
    //get all modal elements
    const mTitle= document.querySelector(".modalTitle");
    //add smth for video when have functionality
    const mTags = document.querySelector(".modalTag");
    const mText = document.getElementById("modalText");
    const mVideo = document.querySelector(".modalVideo");
    
    console.log("function called");
    
    if(modalObj.hasOwnProperty(mID)) {
        mTitle.innerHTML = `<h2><i>${modalObj[mID].title}</i></h2>
                            <a class="modalClose" href="#close" onclick="resetTags()">&times;</a>`;
        
        mText.innerHTML = `<p id="modalText"> ${modalObj[mID].text}</p>`;

        for(let i = 0; i < modalObj[mID].tags.length; i++) {
            let tag = document.createElement("p");
            tag.innerHTML=`<span>${modalObj[mID].tags[i]}</span>`;
            mTags.appendChild(tag);
        };
        

        console.log("function successful");

    }
}

//functtion for ing modal tags to allow fresh dynamic generations
function resetTags(){
    const mTags = document.querySelector(".modalTag");
    mTags.innerHTML=``;
}

//modal information for each portfolio card based on id
/**
 * object base
 * id: {
        title: "",
        videoId: "",
        tags: [
            "",
        ],
        text: "",
    },
 */

const modalObj = {
    //shuffle showdown section
    ShShTitle: {
        title: "Shuffle Showdown Title Theme",
        videoId: `ShTitleVid`,
        tags: [
            "logic pro x",
            "fmod",
            "unity"
        ],
        text: `title screen theme composed for shuffle showdown.`,
    },

    cr1: {
        title: `Club Roland: Track 1`,
        videoId: `cr1Vid`,
        tags: [
            "logic pro x",
            "fmod",
            "unity"
        ],
        text: `club roland track 1 for shuffle showdown`,
    },

    de1: {
        title: `Disco Express: Track 1`,
        videoId: `de1Vid`,
        tags: [
            "logic pro x",
            "fmod",
            "unity"
        ],
        text: `disco express track 1 for shuffle showdown`,
    },

    de2: {
        title: "Disco Express: Track 2",
        videoId: "de2Vid",
        tags: [
            "logic pro x",
            "fmod",
            "unity"
        ],
        text: "disco express track 2 for shuffle showdown",
    },

    dd1: {
        title: "Diva Docks: Track 1",
        videoId: "dd1Vid",
        tags: [
            "logic pro x",
            "fmod",
            "unity",
        ],
        text: "diva docks track 1 for shuffle showdown",
    },

    dd2: {
        title: "Diva Docks: Track 2",
        videoId: "dd2Vid",
        tags: [
            "logic ppro x",
            "fmod",
            "unity",
        ],
        text: "diva docks track 2 for shuffle showdown",
    },

    gg1: {
        title: "Groovy Gardens: Track 1",
        videoId: "gg1Vid",
        tags: [
            "logic pro x",
            "fmod",
            "untiy"
        ],
        text: "groovy gardens track 1 for shuffle showdown",
    },
    
    gg2: {
        title: "Groovy Gardens: Track 2",
        videoId: "gg2Vid",
        tags: [
            "logic pro x",
            "fmod",
            "unity",
        ],
        text: "groovy gardens track 2 for shuffle showdown",
    },

    rr1: {
        title: "Roland Rooftops: Track 1",
        videoId: "rr1Vid",
        tags: [
            "logic pro x",
            "fmod",
            "unity"
        ],
        text: "roland rooftops track 1 for shuffle showdown",
    },

    tfs: {
        title: "The Final Showdown",
        videoId: "tfsVid",
        tags: [
            "logic pro x",
            "fmod",
            "unity"
        ],
        text: "the final showdown for shuffle showdown",
    },

    ShShFMOD: {
        title: "Shuffle Showdown FMOD",
        videoId: "ShFMODVid",
        tags: [
            "fmod",
            "unity"
        ],
        text: "fmod file for working ",
    },

    //software development section
    cbg: {
        title: "Composition Brief Generator",
        videoId: "cbgVid",
        tags: [
            "unity",
            "c#",
            "ui programming"
        ],
        text: "composition brief generator text",
    },

    eightbp: {
        title: "8 Ball Pool Game",
        videoId: "8bpVid",
        tags: [
            "unity",
            "c#",
            "2D physics",
        ],
        text: "8 ball pool game",
    },

    ms: {
        title: "Minesweeper Game",
        videoId: "msVid",
        tags: [
            "unity",
            "c#",
        ],
        text: "minesweeper game",
    },

    fdma: {
        title: "Food and Drink Map App",
        videoId: "fdmaVid",
        tags: [
            "swift",
            "xcode",
            "ui/ux design"
        ],
        text: "food and drink map app",
    },

    tcga: {
        title: "'The Chase' Game App",
        videoId: "tcgaVid",
        tags: [
            "swift",
            "xcode",
        ],
        text: "the chase game app",
    },

    //music composition section
    afbm: {
        title: "Adaptive Final Boss Music",
        videoId: "afbmVid",
        tags: [
            "musescore 4",
            "fmod"
        ],
        text: "adaptive final boss music",
    },

    argm: {
        title: "Adaptive Racing Game Music",
        videoId: "argmVid",
        tags: [
            "cubase 12",
            "fmod",
            "unity",
            "foley recording"
        ],
        text: "adaptive racing game music",
    },

    rsfa: {
        title: "Robot Short Film Audio",
        videoId: "rsfaVid",
        tags: [
            "logic pro x",
            "foley recording"
        ],
        text: "robot short film audio",
    },

    almc: {
        title: "A Level Music Composition",
        videoId: "almcVid",
        tags: [
            "musescore 4",
        ],
        text: "a level music final composition",
    },
};