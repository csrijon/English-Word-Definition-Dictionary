function displayResults(data){
    console.log(data)
    const div = document.getElementById("boxkil");
        // const div = document.createElement("div")
        // div.classList.add("box")
        const word = data[0].word;
        const partOfSpeech = data[0].meanings[0].partOfSpeech; 
        const definition = data[0].meanings[0].definitions[0].definition;

        div.innerHTML = `
        <p> Word Name: ${word}</p>
        <p> PartOfSpeech: ${partOfSpeech}</p>
        <p> Definition: ${definition}</p>`;  
        // document.body.appendChild(div);
 }

document.addEventListener("DOMContentLoaded",() => {
    const change = document.querySelector("#dark").addEventListener("change",(e) => {
        document.body.classList.toggle("dark-mode");
      })     
const btn = document.querySelector("#btn").addEventListener("click",() => {
    const wordtext = document.querySelector("#wordtext")
    .addEventListener("submit",(e) => {
        e.preventDefault()
      })
    const input = document.querySelector("#input").value.trim();
    if (input!== ""){
        fetchWordDefinition(input)
    }else{
        alert("Please enter a word")
    }
})
})
    


