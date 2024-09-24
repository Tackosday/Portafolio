let Words = ["< Artist />","< Frontend />","< Backend />" ]

document.addEventListener("DOMContentLoaded", () => {
   
   //Animation Typing Subtitle
    let interation = 1
    let timeWait = 4000;

    typing(Words[0])

    function typing(word) {
        let elementRaw = document.getElementsByClassName("subtitle")[0]
        // elementRaw.textContent = `${Words[interation]}`
        let i = 0;
        let inter = 0;
        let actionText = "";
        



        for (i; i < word.length; i++) {
            setTimeout(() => {
                actionText = actionText + word[inter]
                elementRaw.textContent = `${actionText}`
                inter++
                setTimeout(() => {
                    if(inter > 1){
                        actionText = actionText.slice(0,inter)
                    }else if(inter == 1){
                        actionText = "\u00A0";
                    }
                        elementRaw.textContent = actionText
                        inter--
                }, timeWait)
            }, i * 50)
        }


    }


    function alternator() {
        typing(Words[interation])
        interation == Words.length - 1 ? interation = 0 : interation++
    }

    setInterval(alternator, timeWait+(100*Words[interation].length))


    //animation copy bottom 
    let elementRaw = document.querySelector(".imgCopy")
    let AlternatorImg = false;
    let urlCheckOut ="https://github.com/Tackosday/Portafolio/blob/Testing/Resources/check%23f2cfa0.png?raw=true";
    let urlCopyOut ="https://github.com/Tackosday/Portafolio/blob/Testing/Resources/Copy%23f2cfa0.png?raw=true";
    let urlCheckOver ="https://github.com/Tackosday/Portafolio/blob/Testing/Resources/check%234d3202.png?raw=true";
    let urlCopyOver ="https://github.com/Tackosday/Portafolio/blob/Testing/Resources/copy%234d3202.png?raw=true";
    let url

    elementRaw.addEventListener("mouseover",()=>{
        if(AlternatorImg == false){
            elementRaw.src = urlCopyOver;
        }else if(AlternatorImg == true){
            elementRaw.src = urlCheckOver;
        }
        
    })
    elementRaw.addEventListener("mouseout",()=>{
        if(AlternatorImg == false){
            elementRaw.src = urlCopyOut;
        }else if(AlternatorImg == true){
            elementRaw.src = urlCheckOut;
        }
        
    })
    elementRaw.addEventListener("click",()=>{
        elementRaw.src = "https://github.com/Tackosday/Portafolio/blob/Testing/Resources/check%234d3202.png?raw=true"
        AlternatorImg= true
        let elementRawEmail = document.querySelector("#email").value
        navigator.clipboard.writeText(elementRawEmail)
        // console.log(elementRawEmail)
    })
})