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


})