let url = window.location.href;
url  = url.replace("https://www.kinopoisk.ru/", "")

let start = url.indexOf('/')

let result = "https://asura-code.github.io/react-resume/#lol"

for (let i=start+1; i < 20; i++) {
    if (url[i] != "/"){
        result+=url[i]
    }else{
        break
    }

    
}


function insertText() {
    const newElement = document.createElement('a');
    newElement.textContent = "смотреть бесплатно";
    newElement.href = result + "#"
    newElement.setAttribute('target', '_blank');
    newElement.style.position = 'fixed';
    newElement.style.top = '10px';
    newElement.style.left = '10px';
    newElement.style.backgroundColor = 'white';
    newElement.style.padding = '10px';
    newElement.style.zIndex = '1000';
    
    document.body.appendChild(newElement);
}

insertText()

// if (window.confirm('Хотите посмотреть эту киноленту?')) 
//     {
//     window.location.href=result;
//     };