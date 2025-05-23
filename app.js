let url = window.location.href;

let element = ``;
let flag = "";

let isAnime = false;

function setIsAnime() {
  let genres = document.querySelectorAll(`a[data-tid*="603f73a4"]`);
  let anime = false;
  genres.forEach((genre) => {
    if (genre.textContent == "аниме" || genre.textContent == "anime") {
      anime = true;
    }
  });
  return anime;
}
isAnime = setIsAnime();

if (url.includes("kinopoisk")) {
  result = kinopoisk(url, isAnime);
  element = 'div[class*="styles_button"]';
  flag = "kinopoisk";
} else if (url.includes("imdb")) {
  result = imdb();
  element = '[data-testid*="plot"]';
  flag = "imdb";
} else if (url.includes("shikimori")) {
  element = 'a[class*="b-link"]';
  flag = "shikimori";
} else if (url.includes("tmdb-nu")) {
  result = tmdb(url);
  element = 'div[class*="mt-6"]';
  flag = "tmdb";
}else if (url.includes("justwatch")) {
  element = 'span[class*="mt-6"]';
  flag = "justwatch";
}

let newEl = {
  kinopoisk: {
    bg: "linear-gradient(135deg, #f50 69.93%, #d6bb00 100%)",
    minH: "5.2rem",
    minW: "27rem",
    maxH: "5.2rem",
    font: `650 12pt sans-serif`,
  },

  shikimori: {
    bg: "linear-gradient(125deg,rgb(181, 115, 35) 70.93%,rgb(51, 47, 20) 90%)",
    minH: "3.5rem",
    minW: "3.5rem",
    maxH: "3.5rem",
    font: `700 12pt sans-serif`,
  },
  imdb: {
    bg: "linear-gradient(125deg,rgb(195, 169, 40) 70.93%,rgb(51, 47, 20) 90%)",
    minH: "3.5rem",
    minW: "3.5rem",
    maxH: "3.5rem",
    font: `700 12pt sans-serif`,
  },
  tmdb: {
    bg: "linear-gradient(125deg,rgb(181, 115, 35) 70.93%,rgb(51, 47, 20) 90%)",
    minH: "3.5rem",
    minW: "3.5rem",
    maxH: "3.5rem",
    font: `700 12pt sans-serif`,
  },
};

function makeElement(prop, href) {
  const link = document.createElement("a");
  const image = document.createElement("img");
  const textNode = document.createTextNode("Смотреть бесплатно");

  image.style.marginRight = "0.5rem";

  image.src =
    "https://api.iconify.design/material-symbols:play-arrow.svg?color=%23ffffff";
  image.style.width = "3rem";

  link.setAttribute("target", "_blank");
  link.href = href;
  link.style.position = "relative";
  link.style.alignItems = "center";
  link.style.justifyContent = "center";
  link.style.borderRadius = "5.2rem";
  link.style.background = newEl[prop].bg;
  link.style.display = "flex";
  link.style.boxSizing = "border-box";
  link.style.color = "white";
  link.style.textDecoration = "none";
  link.style.minHeight = newEl[prop].minH;
  link.style.minWidth = newEl[prop].minW;
  link.style.maxHeight = newEl[prop].maxH;
  link.style.font = newEl[prop].font;

  link.appendChild(image);
  link.appendChild(textNode);

  return link;
}

function kinopoisk(url, isAnime) {
  url = url.replace("https://www.kinopoisk.ru/", "");

  let start = url.indexOf("/");

  let result = "https://bankaigo.ru/#lol";

  for (let i = start + 1; i < 20; i++) {
    if (url[i] != "/") {
      result += url[i];
    } else {
      break;
    }
  }

  result = result + "#";
  if (isAnime == true) {
    result =
      result +
      "anime?" +
      document.querySelector('span[data-tid*="eb6be8"]').textContent;
  }

  return result + "?";
}

function tmdb(url) {
  url = url.replace("https://tmdb-nu.vercel.app/", "");

  let start = url.indexOf("/");
  let result = "https://bankaigo.ru/#loltm";

  for (let i = start + 1; i < 20; i++) {
    if ("0123456789".includes(url[i])) {
      result += url[i];
    } else {
      break;
    }
  }

  return result + "#";
}

function imdb() {
  url = url.replace("https://www.imdb.com/", "");

  let start = url.indexOf("tt");
  let result = "https://bankaigo.ru/#lol";

  for (let i = start; i < 20; i++) {
    if (url[i] != "/") {
      result += url[i];
    } else {
      break;
    }
  }

  return result + "#";
}

function playShikimori() {
  const divs = document.querySelectorAll(element);
  let linkHref = "";
  let counter = 0;
  divs.forEach((div) => {
    if (div.href.includes("www.kinopoisk")) {
      linkHref = kinopoisk(div.href);
      const subheads = document.querySelectorAll('div[class*="c-info-right"]');

      subheads.forEach((subhead) => {
        const link = makeElement("shikimori", linkHref);
        subhead.append(link);
      });
    }
  });
}

function playKinopoisk() {
  const divs = document.querySelectorAll(element);

  let counter = 0;
  divs.forEach((div) => {
    const link = makeElement("kinopoisk", result);
    link.classList.add(`style_button__PNtXT`);

    if (counter == 0) {
      div.append(link);
      counter += 1;
    }
  });
}

function playImdb() {
  const divs = document.querySelector(element);
  const link = makeElement("imdb", result);

  const br = document.createElement("br");
  divs.parentNode.insertBefore(link, divs);
}

function playTmdb() {
  const divs = document.querySelectorAll(element);

  let counter = 0;
  divs.forEach((div) => {
    const link = makeElement("tmdb", result);
    const br = document.createElement("br");

    if (counter == 0) {
      div.append(br);
      div.append(link);
      counter += 1;
    }
  });
}

function pasteElement() {
  if (flag == "imdb") {
    playImdb();
  } else if (flag == "kinopoisk") {
    playKinopoisk();
  } else if (flag == "tmdb") {
    playTmdb();
  } else {
    playShikimori();
  }
}

pasteElement();
