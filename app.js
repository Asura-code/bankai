let url = window.location.href;

let flag = ``;

if (url.includes("kinopoisk")) {
  result = kinopoisk(url);
  flag = 'div[class*="styles_button"]';
} else if (url.includes("imdb")) {
  result = imdb();
  flag = 'div[class*="sc"]';
} else if (url.includes("shikimori")) {
  flag = 'a[class*="b-link"]';
} else if (url.includes("tmdb-nu")) {
  result = tmdb(url);
  flag = 'div[class*="mt-6"]';
}

function kinopoisk(url) {
  url = url.replace("https://www.kinopoisk.ru/", "");

  let start = url.indexOf("/");
  let result = "https://asura-code.github.io/react-resume/#lol";

  for (let i = start + 1; i < 20; i++) {
    if (url[i] != "/") {
      result += url[i];
    } else {
      break;
    }
  }

  return result;
}

function tmdb(url) {
  url = url.replace("https://tmdb-nu.vercel.app/", "");

  let start = url.indexOf("/");
  let result = "https://asura-code.github.io/react-resume/#loltm";

  for (let i = start + 1; i < 20; i++) {
    if ("0123456789".includes(url[i])) {
      result += url[i];
    } else {
      break;
    }
  }

  return result;
}

function imdb() {
  url = url.replace("https://www.imdb.com/", "");

  let start = url.indexOf("tt");
  let result = "https://asura-code.github.io/react-resume/#lol";

  for (let i = start; i < 20; i++) {
    if (url[i] != "/") {
      result += url[i];
    } else {
      break;
    }
  }

  return result;
}

function playShikimori() {
  const divs = document.querySelectorAll(flag);
  let linkHref = "";
  let counter = 0;
  divs.forEach((div) => {
    if (div.href.includes("www.kinopoisk")) {
      linkHref = kinopoisk(div.href);
      const subheads = document.querySelectorAll('div[class*="c-info-right"]');

      subheads.forEach((subhead) => {
        const link = document.createElement("a");

        link.setAttribute("target", "_blank");
        link.textContent = "Смотреть бесплатно";
        link.href = linkHref + "#";
        link.style.position = "relative";
        link.style.alignItems = "center";
        link.style.justifyContent = "center";
        link.style.borderRadius = "5.2rem";
        link.style.background =
          "linear-gradient(125deg,rgb(181, 115, 35) 70.93%,rgb(51, 47, 20) 90%)";
        link.style.display = "flex";
        link.style.boxSizing = "border-box";
        link.style.color = "white";
        link.style.textDecoration = "none";
        link.style.minHeight = "3.5rem";
        link.style.minWidth = "3.5rem";
        link.style.maxHeight = "3.5rem";
        link.style.font = `700 12pt sans-serif`;
        link.className = "bankaiLink";
        subhead.append(link);
      });
    }
  });
}

function playKinopoisk() {
  const divs = document.querySelectorAll(flag);

  let counter = 0;
  divs.forEach((div) => {
    const link = document.createElement("a");

    link.setAttribute("target", "_blank");
    link.textContent = "Смотреть бесплатно";
    link.href = result + "#";
    link.style.position = "relative";
    link.style.alignItems = "center";
    link.style.justifyContent = "center";
    link.style.borderRadius = "5.2rem";
    link.style.background =
      "linear-gradient(135deg, #f50 69.93%, #d6bb00 100%)";
    link.style.display = "flex";
    link.style.boxSizing = "border-box";
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.minHeight = "5.2rem";
    link.style.minWidth = "25rem";
    link.style.maxHeight = "5.2rem";
    link.style.font = `650 12pt sans-serif`;

    if (counter == 0) {
      div.append(link);
      counter += 1;
    }
  });
}

function playImdb() {
  // const newElement = document.createElement("a");
  // newElement.textContent = "смотреть бесплатно";
  // newElement.href = result + "#";
  // newElement.setAttribute("target", "_blank");
  // newElement.style.position = "fixed";
  // newElement.style.top = "10px";
  // newElement.style.left = "10px";
  // newElement.style.backgroundColor = "white";
  // newElement.style.padding = "10px";
  // newElement.style.zIndex = "1000";
  // newElement.className = "newEl";
  // document.body.appendChild(newElement);

  const divs = document.querySelectorAll(flag);

  let counter = 0;
  divs.forEach((div) => {
    const link = document.createElement("a");

    link.setAttribute("target", "_blank");
    link.textContent = "Смотреть бесплатно";
    link.href = result + "#";
    link.style.position = "relative";
    link.style.alignItems = "center";
    link.style.justifyContent = "center";
    link.style.borderRadius = "5.2rem";
    link.style.background =
      "linear-gradient(125deg,rgb(195, 169, 40) 70.93%,rgb(51, 47, 20) 90%)";
    link.style.display = "flex";
    link.style.boxSizing = "border-box";
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.minHeight = "3.5rem";
    link.style.minWidth = "3.5rem";
    link.style.maxHeight = "3.5rem";
    link.style.font = `700 12pt sans-serif`;
    link.className = "bankaiLink";

    if (counter == 30) {
      div.append(link);
      counter += 1;
    } else {
      counter += 1;
    }
  });
}

function playTmdb() {
  const divs = document.querySelectorAll(flag);

  let counter = 0;
  divs.forEach((div) => {
    const link = document.createElement("a");
    const br = document.createElement("br");

    link.setAttribute("target", "_blank");
    link.textContent = "Смотреть бесплатно";
    link.href = result + "#";
    link.style.position = "relative";
    link.style.alignItems = "center";
    link.style.justifyContent = "center";
    link.style.borderRadius = "5.2rem";
    link.style.background =
      "linear-gradient(125deg,rgb(181, 115, 35) 70.93%,rgb(51, 47, 20) 90%)";
    link.style.display = "flex";
    link.style.boxSizing = "border-box";
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.minHeight = "3.5rem";
    link.style.minWidth = "3.5rem";
    link.style.maxHeight = "3.5rem";
    link.style.font = `700 12pt sans-serif`;
    link.className = "bankaiLink";

    if (counter == 0) {
      div.append(br);
      div.append(link);
      counter += 1;
    }
  });
}

function insertText() {
  if (flag == 'div[class*="sc"]') {
    playImdb();
  } else if (flag == 'div[class*="styles_button"]') {
    playKinopoisk();
  } else if (flag == 'div[class*="mt-6"]') {
    playTmdb();
  } else {
    playShikimori();
  }
}

insertText();
