let url = window.location.href;

let flag = 'imdb'

if (url.indexOf("kinopoisk")==-1){
    result = imdb()
}else{
    result = kinopoisk()
    flag = 'div[class*="styles_button"]'
}


function kinopoisk(){
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

    return result
}

function imdb(){
    url  = url.replace("https://www.imdb.com/", "")

    let start = url.indexOf('tt')
    let result = "https://asura-code.github.io/react-resume/#lol"
    
    for (let i=start; i < 20; i++) {
        if (url[i] != "/"){
            result+=url[i]
        }else{
            break
        }
        
    }
    
    return result
}






function insertText() {


const divs = document.querySelectorAll(flag);

if (flag == "imdb"){
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
    newElement.className = "newEl"
    document.body.appendChild(newElement);
}

let counter = 0;
divs.forEach(div => {

    const link = document.createElement('a');

    link.setAttribute('target', '_blank');
    link.textContent = "Смотреть бесплатно";
    link.href = result + "#";
    link.style.position = "relative";
    link.style.alignItems = 'center';
    link.style.justifyContent = 'center';
    link.style.borderRadius = '5.2rem';
    link.style.background = 'linear-gradient(135deg, #f50 69.93%, #d6bb00 100%)';
    link.style.display = 'flex';
    link.style.boxSizing = 'border-box'
    link.style.color = 'white'
    link.style.textDecoration = 'none'
    link.style.minHeight = '5.2rem'
    link.style.minWidth = '25rem'
    link.style.maxHeight = '5.2rem'

    if (counter == 0 ){
        div.append(link);
        counter +=1;
    }
});

}

insertText()
