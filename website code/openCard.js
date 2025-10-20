//modal information for each portfolio card based on id
/**
 * object base
 * id: {
        title: ``,
        videoId: ``,
        tag1: ``,
        tag2: ``,
        tag3: ``,
        text: ``,
    }
 */
const modalObj = {
    ShShTitle: {
        title: `Shuffle Showdown Title Theme`,
        videoId: `ShTitleVid`,
        tag1: `logic pro x`,
        tag2: `fmod`,
        tag3: `unity`,
        text: `title screen theme composed for shuffle showdown.`,
    },

    cr1: {
        title: `Club Roland: Track 1`,
        videoId: `cr1Vid`,
        tag1: `logic pro x`,
        tag2: `fmod`,
        tag3: `unity`,
        text: `club roland track 1 for shuffle showdown`,
    },

    de1: {
        title: `Disco Express: Track 1`,
        videoId: `de1Vid`,
        tag1: `logic pro x`,
        tag2: `fmod`,
        tag3: `unity`,
        text: `disco express track 1 for shuffle showdown`,
    }
};

//get all modal elements
const mTitle= document.querySelector(".modalTitle");
//add smth for video when have functionality
const mTag1 = document.getElementById("modalTag1");
const mTag2 = document.getElementById("modalTag2");
const mTag3 = document.getElementById("modalTag1");
const mText = document.getElementById("modalText");

//function for displaying modal with correct information
function displayModal(mID) {
    if(modalObj.hasOwnProperty(mID)) {
        mTitle.textContent = modalObj[mID].title;
        mTag1.textContent = modalObj[mID].tag1;
        mTag2.textContent = modalObj[mID].tag2;
        mTag3.textContent = modalObj[mID].tag3;
        mText.textContent = modalObj[mID].text;
    }
}