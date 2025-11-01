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
        ]
        text: "",
    }
 */

const modalObj = {
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
    }
};