let x = window.location.href;
console.log(x)
x = x.replace("https://www.kinopoisk.ru/", "")

let q = x.indexOf('/')
console.log(q)
let r = ""

for (let i=q+1; i < 20; i++) {
    if (x[i] != "/"){
        r+=x[i]
    }else{
        break
    }

    
}

// snow.addEventListener("click", function (e) {
//     console.log(x)
//   });

let result = "https://asura-code.github.io/react-resume/#lol" + r +"#"
if (window.confirm('Хотите посмотреть эту киноленту?')) 
    {
    window.location.href=result;
    };