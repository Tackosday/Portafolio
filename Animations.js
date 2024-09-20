let Words = ["< Developer />", "< Word2 />", "< Tword3 />"]

document.addEventListener("DOMContentLoaded", () => {
    let interation = 1
    
    function typing(word){
        console.log(word)
        let elementRaw = document.getElementsByClassName("subtitle")[0]
        // elementRaw.textContent = `${Words[interation]}`
        // let i=0;
        // for(i ; ; i++){}
    }

    function deleteTyping(Word){}

    function alternator() {
        typing(Words[interation])
        interation == Words.length-1? interation=0 : interation++
    }

    setInterval(alternator,2000)


})