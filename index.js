//document.getElementById("count").innerText = 5
let saveel=document.getElementById("save-el")
let countEl = document.getElementById("count-el") //passing arg

let count=0
//console.log(count)

console.log(saveel)

function increment(){
    //count=count+1
    count = count + 1
    countEl.textContent=count
}

function save(){
    let counting = count + " - "
    saveel.textContent += counting
    console.log(count)
    countEl.textContent=0
    count=0

}
