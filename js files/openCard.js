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
                            <a class="modalClose" href="#close" onclick="resetModal()">&times;</a>`;
        
        mText.innerHTML = `<p id="modalText"> ${modalObj[mID].text}</p>`;
        
        for(let i = 0; i < modalObj[mID].tags.length; i++) {
            let tag = document.createElement("p");
            tag.innerHTML=`<span>${modalObj[mID].tags[i]}</span>`;
            mTags.appendChild(tag);
        };

        for(let j = 0; j < modalObj[mID].videos.length; j++) {
            let vid = document.createElement("iframe");
            vid.setAttribute("class", "modalVideo");
            vid.setAttribute("allowfullscreen", "true");
            vid.controls="controls";
            vid.src=modalObj[mID].videos[j];
            mVideo.appendChild(vid);
        }

        if(modalObj[mID].videos.length >= 2) {
            document.getElementById("modVid").style.overflowY = "auto";
            document.getElementById("modVid").style.overflowX = "hidden";
        }
        
        console.log("function successful");

    }
}

//functtion for ing modal tags to allow fresh dynamic generations
function resetModal(){
    const mTags = document.querySelector(".modalTag");
    const mVideo = document.querySelector(".modalVideo");

    mTags.innerHTML=``;
    mVideo.innerHTML=``;
}

//modal information for each portfolio card based on id
/**
 * object base
 * id: {
        title: "",
        videos: [
            "",
        ],
        tags: [
            "",
        ],
        text: `<span class="cardTopInfo"> --- date made --- <br><br></span>`,
    },
 */

const modalObj = {
    //shuffle showdown section
    ShShTitle: {
        title: "Shuffle Showdown Title Theme",
        videos: [
            "https://youtube.com/embed/VrbB-0E_seo"
        ],
        tags: [
            "logic pro x",
            "fmod",
            "unity"
        ],
        text: `<span class="cardTopInfo"> --- February 2025 --- <br><br></span>
        
        For this title track, I composed a simple, almost churning house phrase for two reasons. <br><br>

        First, a title screen likely isn't a place where a player would spend a majority of their time. <br><br>

        Second, this gave the music potential to develop when called upon again for the final showdown between players!`,
    },

    cr1: {
        title: `Club Roland: Track 1`,
        videos: [
            "https://youtube.com/embed/7nq0zOKwZ2s",
            "https://youtube.com/embed/HeH_8Nj6V9I"
        ],
        tags: [
            "logic pro x",
            "fmod",
            "unity"
        ],
        text: `<span class="cardTopInfo"> --- January 2025 --- <br><br></span>
        
        For the Club Roland area of the game, I wanted the music to be inspired by the House & Jersey Club genres. <br><br>

        By combining the dreamy feel of the synths with different percussive patterns and sounds, I was able to create a lighthearted and fun dancing vibe.<br><br>

        Due to outdated recording footage (and the difficulty of re-recording it as only one person!), 
        the intially shown beatmap is different in the released version of Shuffle Showdown. 
        The second video shows the beatmap I designed for the track!`,
    },

    de1: {
        title: `Disco Express: Track 1`,
        videos: [
            "https://youtube.com/embed/-yr42leNfeo",
            "https://youtube.com/embed/TLSxI2MoKQQ"
        ],
        tags: [
            "logic pro x",
            "fmod",
            "unity"
        ],
        text: `<span class="cardTopInfo"> --- November 2024 --- <br><br></span>

        For the Disco Express area of the game, I wanted the music to be inpsired by the Y2K and Funk genres. <br><br>

        By combining a bouncy bass, electronic organ and lead patterns, and a funk percussive rhythm, 
        I wanted to evoke the feeling of grooving in a city that you love! <br><br>
        
        Due to outdated recording footage (and the difficulty of re-recording it as only one person!), 
        both the background and the intially shown beatmap are different in the released version of Shuffle Showdown. 
        The second video shows the beatmap I designed for the track!`,
    },

    de2: {
        title: "Disco Express: Track 2",
        videos: [
            "https://youtube.com/embed/nBPV4MbYtKE"
        ],
        tags: [
            "logic pro x",
            "fmod",
            "unity"
        ],
        text: `<span class="cardTopInfo"> --- March 2025 --- <br><br></span>

        For the Disco Express area of the game, I wanted the music to be inpsired by the Y2K and Funk genres. <br><br>

        By combining a bouncy bass with a smooth and optimistic lead and a twangy guitar counter, 
        I wanted to evoke the feeling of different parts of a city meeting to dance as one! <br><br>`,
    },

    dd1: {
        title: "Diva Docks: Track 1",
        videos: [
            "https://youtube.com/embed/aMCCZotMD-Y",
            "https://youtube.com/embed/_p1nVOX4JvY"
        ],
        tags: [
            "logic pro x",
            "fmod",
            "unity",
        ],
        text: `<span class="cardTopInfo"> --- February 2025 --- <br><br></span>

        For the Diva Docks area of the game, I wanted the music to be inpsired by the Bossa Nova Genre. <br><br>

        By playing extended harmonies and syncopated rhythms through an instrumentation common for this jazzy genre, 
        I wanted to evoke the feeling of having fun on the beach in the summer sun! <br><br>
        
        Due to outdated recording footage (and the difficulty of re-recording it as only one person!), 
        both the background and the intially shown beatmap are different in the released version of Shuffle Showdown. 
        The second video shows the beatmap I designed for the track!`,
    },

    dd2: {
        title: "Diva Docks: Track 2",
        videos: [
            "https://youtube.com/embed/xBQSO9jq86M"
        ],
        tags: [
            "logic ppro x",
            "fmod",
            "unity",
        ],
        text: `<span class="cardTopInfo"> --- April 2025 --- <br><br></span>

        For the Diva Docks area of the game, I wanted the music to be inpsired by the Bossa Nova Genre. <br><br>

        By playing extended harmonies and syncopated rhythms through an instrumentation common for this jazzy genre 
        (in arguably my favourite track I composed for this game!), 
        I wanted to create the cheeky vibe of having fun with your friends, playing in the sand and sea! <br><br>`,
    },

    gg1: {
        title: "Groovy Gardens: Track 1",
        videos: [
            "https://youtube.com/embed/R22WmnZKxaI",
            "https://youtube.com/embed/TCd6ZNuBruE"
        ],
        tags: [
            "logic pro x",
            "fmod",
            "untiy"
        ],
        text: `<span class="cardTopInfo"> --- March 2025 --- <br><br></span>

        For the Groovy Gardens area of the game, I wanted the music to be inpsired by the Frutiger Aero Genre. <br><br>

        By combining aspects such as a bright piano lead and a fast-paced 'four to the floor' percussive rhythm with the electronic accompaniment, 
        I wanted to recreate the feeling of fresh air in the park during a summer holiday! <br><br>
        
        Due to outdated recording footage (and the difficulty of re-recording it as only one person!), 
        both the background and the intially shown beatmap are different in the released version of Shuffle Showdown. 
        The second video shows the beatmap I designed for the track!`,
    },
    
    gg2: {
        title: "Groovy Gardens: Track 2",
        videos: [
            "https://youtube.com/embed/EFiu6kTc0mc"
        ],
        tags: [
            "logic pro x",
            "fmod",
            "unity",
        ],
        text: `<span class="cardTopInfo"> --- May 2025 --- <br><br></span>

        For the Groovy Gardens area of the game, I wanted the music to be inpsired by the Frutiger Aero Genre. <br><br>

        By combining aspects such as a bright electric piano lead and a fast-paced 'four to the floor' percussive rhythm with the electronic accompaniment, 
        I hoped this would creating the feeling for players of playing a high-stakes children's game in the fresh air under a blue summer's sky! <br><br>`,
    },

    rr1: {
        title: "Roland Rooftops: Track 1",
        videos: [
            "https://youtube.com/embed/le5dKZ4Ddto",
            "https://youtube.com/embed/aAK4_qJ5Las"
        ],
        tags: [
            "logic pro x",
            "fmod",
            "unity"
        ],
        text: `<span class="cardTopInfo"> --- January 2025 --- <br><br></span>

        For the Roland Rooftops area of the game, I wanted the music to be inpsired by the House Genre. <br><br>

        By combining self-made sampler instruments with repetitive phrases and pulsing rhythms,
        I wanted this track to be one where players could imagine developing a dance with the sole focus of out-performing their opponent!<br><br>
        
        Due to outdated recording footage (and the difficulty of re-recording it as only one person!), 
        both the background and the intially shown beatmap are different in the released version of Shuffle Showdown. 
        The second video shows the beatmap I designed for the track!`,
    },

    tfs: {
        title: "The Final Showdown",
        videos: [
            "https://youtube.com/embed/GKz7c5O3WEo"
        ],
        tags: [
            "logic pro x",
            "fmod",
            "unity"
        ],
        text: `<span class="cardTopInfo"> --- March 2025 --- <br><br></span>

        For The Final Showdown of the game, I wanted the music to be inpsired by opening theme. <br><br>

        This track only plays in the instance of the ultimate, 4-4 tie break between players. <br><br>

        One of my team members in development had the idea for the main track melody here, 
        so I collaborated with him to bring it to life while still preserving the original sound of the main theme.<br><br>`,
    },

    ShShFMOD: {
        title: "Shuffle Showdown FMOD",
        videos: [
            "https://youtube.com/embed/IRIHEzjyses",
            "https://youtube.com/embed/pYM_yKle1ew"
        ],
        tags: [
            "fmod",
            "unity"
        ],
        text: `<span class="cardTopInfo"> --- Throughout Shuffle Showdown Development --- <br><br></span>

        Here, through 'Diva Docks - Track 1' and 'Roland Rooftops - Track 1', I am showcasing a feature I designed in FMOD where,
        should one player achieve an overwhelming victory in a round before the song can finish,
        an effect plays on the music imitating the slowing of a record on a turntable. This effect could work at any moment during the song<br><br>

        While this effect was not implemented in the final build of the game, 
        I thougt it was still worth mentioning the functionality I designed for potential future use!<br><br>`,
    },

    //software development section
    cbg: {
        title: "Composition Brief Generator",
        videos: [
            "https://youtube.com/embed/8DGWWaOGGYA"
        ],
        tags: [
            "unity",
            "c#",
            "ui programming"
        ],
        text: `<span class="cardTopInfo"> --- March 2025 --- <a href=https://github.com/hunt-rachel/composition-brief-generator target="_blank">github</a> --- <a href=http://rachel-hunt.itch.io/composition-brief-generator target="_blank">itch.io</a> --- </span><br><br>

        A project to help musicians such as myself improve their compositional skills! <br> <br> 

        This generates a music composition brief randomly at the click of a button. Standard features such as time/key signature and length are generated by default. 
        Users can also add their own inspirations and specific purposes or instrumentations to make the generator more suited to personal needs. <br> <br> 

        The font used is <a href="https://www.dafont.com/better-vcr.font?fpp=50&l[]=10" target="_blank">Better VCR by artdzyk</a><br> <br> 

        Developed in Unity, programmed in C#. All the pixel art was also completed myself in Aseprite.`,
    },

    eightbp: {
        title: "8 Ball Pool Game",
        videos: [
            "https://youtube.com/embed/Z7yNoT6CUgE"
        ],
        tags: [
            "unity",
            "c#",
            "2D physics",
        ],
        text: `<span class="cardTopInfo"> --- March 2024 --- <a href=https://github.com/hunt-rachel/recreating-8-ball-pool target="_blank">github</a> --- <a href=http://rachel-hunt.itch.io/recreating-8-ball-pool target="_blank">itch.io</a> --- </span><br><br>

        For one of my university computer science assignments, I was tasked with recreating a game in a game engine of my choice. 
        I decided to recreate 8-ball pool into a two player 2D game. The game plays out the same as the real thing, where players must take turns potting balls of the same colour. <br><br>

        Within this assignment, I programmed 2D physics, including circular collisions, as well as a game state machine to keep track of player turns and rule exceptions.<br><br>

        Developed in Unity, programmed in C#. All the pixel art was also completed myself in Aseprite.<br><br>

        The font used is <a href="https://www.fontspace.com/connection-iii-font-f31976" target="_blank">Connection III Font by KineticPlasma</a><br> <br>
`,
    },

    ms: {
        title: "Minesweeper Game",
        videos: [
            "https://youtube.com/embed/QUeOSwix6jA"
        ],
        tags: [
            "unity",
            "c#",
        ],
        text: `<span class="cardTopInfo"> --- December 2024 --- <a href=https://github.com/hunt-rachel/recreating-minesweeper target="_blank">github</a> --- <a href=http://rachel-hunt.itch.io/recreating-minesweeper target="_blank">itch.io</a> --- </span><br><br>

        A short, independent project I undertook in an evening to learn how to program 2D grid mechanics (especially in the context of a game), and recursion through Minesweeper. <br><br>

        Developed in Unity and programmed using C#. All the artwork was (re)created myself using Aseprite.<br><br>

        The font used is <a href="https://www.fontspace.com/connection-iii-font-f31976" target="_blank">Connection III Font by KineticPlasma</a><br> <br>`,
    },

    fdma: {
        title: "Food and Drink Map App",
        videos: [
            "https://youtube.com/embed/Bln33CWulws"
        ],
        tags: [
            "swift",
            "xcode",
            "ui/ux design"
        ],
        text: `<span class="cardTopInfo"> --- December 2024 --- <a href=https://github.com/hunt-rachel/COMP228-food-and-drink target="_blank">github</a> --- </span><br><br>

        An app with a map simulation displaying different places to eat and drink on the University of Liverpool campus. <br><br>

        The app contains a map view where the user can see nearby amenities geographically, and a table view showing the nearest places in ascending order of distance. <br><br>

        Users have the functionality to leave a 'like' or 'dislike' on the details page of each location, and this opinion will remain persistently on each table cell to remind users how they felt about each place. <br><br>
        
        Designed in XCode and programmed using Swift.`,
    },

    tcga: {
        title: "'The Chase' Game App",
        videos: [
            "https://youtube.com/embed/1eMIyXX9pD4"
        ],
        tags: [
            "swift",
            "xcode",
        ],
        text: `<span class="cardTopInfo"> --- November 2024 --- <a href=https://github.com/hunt-rachel/COMP228-the-chase-app target="_blank">github</a> --- </span><br><br>
        
        An app imitating the gameplay loop of 'The Chase' TV show for an assignment. <br><br>
        
        Players must choose between a 'high', 'middle', and 'low' offer on the ladder to act as their score. 
        This score determines their starting position. From here, both the player and the Chaser must answer trivia questions to move down the ladder. 
        If the player can reach the bottom of the ladder before the chaser reaches them, they win.<br><br>
        
        This project taught me how to program with persistent data, and creating a choice-based enemy AI. Created using XCode and Swift.`,
    },

    //music composition section
    afbm: {
        title: "Adaptive Final Boss Music",
        videos: [
            "https://youtube.com/embed/hrTtGqBPzPs",
            "https://youtube.com/embed/8Dz7NhOXNLA",
        ],
        tags: [
            "musescore 4",
            "fmod"
        ],
        text: `<span class="cardTopInfo"> --- May 2023 --- <a href=http://musescore.com/user/26162011/scores/16565089 target="_blank">musescore</a> --- </span><br><br>
        
        For my university Game Design independent project, I chose to compose a Final Boss soundtrack, for a hypothetical fantasy roguelike game. <br><br>

        I created sheet music for the track displaying different phases of the boss fight and different character motifs depending on the outcome of the game, 
        to act as a proof of concept that would be developed and orchestrated further if the game ever were to be created.<br><br>
        
        In FMOD, I created hypothetical gameplay parameters to imitate player progression throughout the boss fight and, subsequently, the track will loop or continue based on these parameters.<br><br> 
        I automated the volume to ensure a smooth transition from the first to second half of the current boss phase.<br><br>
        Here, different character motifs would layer depending on who is fighting in the final battle. 
        As seen by the parameters in this example, of the four supporting characters available, Characters Two and Three have joined the fight!`,
    },

    argm: {
        title: "Adaptive Racing Game Music",
        videos: [
            "https://youtube.com/embed/0p6dxf9QoXU",
            "https://youtube.com/embed/-53Z9c1j30w"
        ],
        tags: [
            "cubase 12",
            "fmod",
            "unity",
            "foley recording"
        ],
        text: `<span class="cardTopInfo"> --- May 2023 --- <br><br></span>
        
        This is a project where I created both music and sound effects for a Unity project for a Music assignment.<br><br>

        The music I created for this project is both adaptive and generative. 
        A melodic layer is added to the rhythm once the second lap begins, and this melody is played in octaves for the third lap. 
        The melody itself in the A section is generated from 8 different four-bar phrases randomly played in FMOD, to create variety. <br><br>
        
        For the sound effects, I recorded noises for the kart, and samples audio for the audience and announcer. 
        In FMOD, I used skills such as creating a proximity distance for the 3D objects, 
        as well as using seek speed with pitch shift to imitate the sound of the kart revving. <br><br>
        
        Composed in Cubase 12 and put together in FMOD for Unity.  `,
    },

    rsfa: {
        title: "Robot Short Film Audio",
        videos: [
            "https://youtube.com/embed/nQS1bf031SQ",
        ],
        tags: [
            "logic pro x",
            "foley recording"
        ],
        text: `<span class="cardTopInfo"> --- February 2022 --- <br><br></span>
        
        For an assignment relating to audio for media such as films, TV, games, etc., 
        I composed the music and recorded foley for this short film about a robot on a barren planet. <br><br>
        
        Produced all in Logic Pro, I created the synths myself for melodies and backing rhythm, 
        and recorded all necessary sound effects using various features on a DVD player. 
        I then mixed both the track and the sound effects to ensure the different elements gelled well together. 
        I received a distinction for my work here! `,
    },

    almc: {
        title: "A Level Music Composition",
        videos: [
            "https://youtube.com/embed/Je9aoOIaETQ"
        ],
        tags: [
            "musescore 4",
        ],
        text: `<span class="cardTopInfo"> --- March 2022 --- <br><br></span>
        
        For my Year 2 composition assignment in A Level music, 
        I chose to follow the brief composing for a hypothetical moment in a film. 
        I wanted to capture an emotional moment, with highs and lows both to represent the flow of the narrative in the moment
         and allow gaps for potential dialogue. <br><br>
         
        Originally composed in Musescore 3, polished in Musescore 4.`,
    },
};