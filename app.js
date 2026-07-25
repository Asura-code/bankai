let url = window.location.href;
let element = ``;
let flag = "";
let result = "";

if (url.includes("kinopoisk")) {
  result = kinopoisk(url);
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
  image.src = "https://api.iconify.design/material-symbols:play-arrow.svg?color=%23ffffff";
  image.style.width = "3rem";

  link.setAttribute("target", "_blank");
  link.href = href + "#";
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

function kinopoisk(currentUrl) {
  currentUrl = currentUrl.replace("https://www.kinopoisk.ru/", "");
  currentUrl = currentUrl.replace("http://www.kinopoisk.ru/series/", "");
  let start = currentUrl.indexOf("/");
  let res = "https://on.kinohub.vip/movie/";
  for (let i = start + 1; i < 20; i++) {
    if (currentUrl[i] != "/") {
      res += currentUrl[i];
    } else {
      break;
    }
  }
  return res;
}

function tmdb(currentUrl) {
  currentUrl = currentUrl.replace("https://tmdb-nu.vercel.app/", "");
  let start = currentUrl.indexOf("/");
  let res = "https://on.kinohub.vip/movie/tm";
  for (let i = start + 1; i < 20; i++) {
    if ("0123456789".includes(currentUrl[i])) {
      res += currentUrl[i];
    } else {
      break;
    }
  }
  return res;
}

function imdb() {
  let currentUrl = window.location.href.replace("https://www.imdb.com/", "");
  let start = currentUrl.indexOf("tt");
  let res = "https://on.kinohub.vip/movie/";
  for (let i = start; i < 20; i++) {
    if (currentUrl[i] != "/") {
      res += currentUrl[i];
    } else {
      break;
    }
  }
  return res;
}

function playShikimori() {
  const divs = document.querySelectorAll(element);
  divs.forEach((div) => {
    if (div.href && div.href.includes("www.kinopoisk")) {
      let linkHref = kinopoisk(div.href);
      const subheads = document.querySelectorAll('div[class*="c-info-right"]');
      subheads.forEach((subhead) => {
        const link = makeElement("shikimori", linkHref);
        subhead.append(link);
      });
    }
  });
}

function playKinopoisk() {
  if (!document.querySelector('.bankai-custom-button')) {
    const divs = document.querySelectorAll(element);
    let counter = 0;
    divs.forEach((div) => {
      const link = makeElement("kinopoisk", result);
      link.classList.add(`style_button__PNtXT`, 'bankai-custom-button');
      if (counter == 0) {
        div.append(link);
        counter += 1;
      }
    });
  }

  if (!document.getElementById('bankai-matrix-wrapper')) {
    const targetBlock = document.querySelector('div[data-tid="e810e001"]') || document.querySelector('div[id^="bvyobldesktop_"]');
    if (targetBlock) {
      targetBlock.innerHTML = '';
      targetBlock.style.position = 'relative';
      targetBlock.style.overflow = 'hidden';
      targetBlock.style.minHeight = '250px';
      targetBlock.style.borderRadius = '8px';
      targetBlock.style.background = '#000';
      targetBlock.id = 'bankai-matrix-wrapper';

      const canvas = document.createElement('canvas');
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.zIndex = '1';
      targetBlock.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      const resizeCanvas = () => {
        canvas.width = targetBlock.clientWidth || 800;
        canvas.height = targetBlock.clientHeight || 250;
      };
      resizeCanvas();

      const chars = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ0123456789:・.=*+-<>¦｜';
      const charArray = chars.split('');
      const fontSize = 14;
      let columns = Math.floor(canvas.width / fontSize);
      let drops = [];
      
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -50;
      }

      const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
          const text = charArray[Math.floor(Math.random() * charArray.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };

      targetBlock._matrixInterval = setInterval(draw, 35);

      const textOverlay = document.createElement('div');
      textOverlay.style.position = 'absolute';
      textOverlay.style.top = '50%';
      textOverlay.style.left = '50%';
      textOverlay.style.transform = 'translate(-50%, -50%)';
      textOverlay.style.zIndex = '2';
      textOverlay.style.color = '#fff';
      textOverlay.style.fontSize = '2.5rem';
      textOverlay.style.fontWeight = '900';
      textOverlay.style.fontFamily = "'Arial Black', sans-serif";
      textOverlay.style.textTransform = 'uppercase';
      textOverlay.style.letterSpacing = '6px';
      textOverlay.style.textShadow = '0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0, 0 0 80px #0f0';
      textOverlay.style.animation = 'bankaiMatrixPulse 2.5s ease-in-out infinite';
      textOverlay.style.textAlign = 'center';
      textOverlay.style.whiteSpace = 'nowrap';
      textOverlay.style.pointerEvents = 'none';
      textOverlay.textContent = 'BANKAI KINO';

      targetBlock.appendChild(textOverlay);

      if (!document.getElementById('bankai-matrix-style')) {
        const style = document.createElement('style');
        style.id = 'bankai-matrix-style';
        style.textContent = `
          @keyframes bankaiMatrixPulse {
            0%, 100% { 
              transform: translate(-50%, -50%) scale(1); 
              text-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0; 
              color: #fff; 
            }
            50% { 
              transform: translate(-50%, -50%) scale(1.08); 
              text-shadow: 0 0 20px #0f0, 0 0 40px #0f0, 0 0 80px #0f0, 0 0 120px #fff; 
              color: #cfc; 
            }
          }
        `;
        document.head.appendChild(style);
      }
    }
  }
}

function playImdb() {
  const divs = document.querySelector(element);
  if (divs && !document.querySelector('.bankai-custom-button')) {
    const link = makeElement("imdb", result);
    link.classList.add('bankai-custom-button');
    const br = document.createElement("br");
    divs.parentNode.insertBefore(br, divs);
    divs.parentNode.insertBefore(link, divs);
  }
}

function playTmdb() {
  if (!document.querySelector('.bankai-custom-button')) {
    const divs = document.querySelectorAll(element);
    let counter = 0;
    divs.forEach((div) => {
      const link = makeElement("tmdb", result);
      link.classList.add('bankai-custom-button');
      const br = document.createElement("br");
      if (counter == 0) {
        div.append(br);
        div.append(link);
        counter += 1;
      }
    });
  }
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

let debounceTimer;
const observer = new MutationObserver(() => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const currentUrl = window.location.href;
    if (currentUrl !== url) {
      url = currentUrl;
      if (url.includes("kinopoisk")) {
        result = kinopoisk(url);
        flag = "kinopoisk";
        element = 'div[class*="styles_button"]';
      } else if (url.includes("imdb")) {
        result = imdb();
        flag = "imdb";
        element = '[data-testid*="plot"]';
      } else if (url.includes("shikimori")) {
        flag = "shikimori";
        element = 'a[class*="b-link"]';
      } else if (url.includes("tmdb-nu")) {
        result = tmdb(url);
        flag = "tmdb";
        element = 'div[class*="mt-6"]';
      }
      pasteElement();
    }
  }, 400);
});

observer.observe(document.body, { childList: true, subtree: true });
