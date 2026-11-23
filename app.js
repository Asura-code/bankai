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


/* ======================================================================
 * BANKAI: Shikimori — друзья и друзья друзей в коллекции текущего аниме.
 * Самостоятельный модуль: существующие функции кнопок не изменяются.
 * ====================================================================== */
(() => {
  'use strict';

  const PREFIX = 'bankai-shiki-fof-v2';
  const FRIENDS_TTL = 6 * 60 * 60 * 1000;
  const RATE_TTL = 60 * 60 * 1000;
  // API Shikimori: 5 запросов/сек и 90 запросов/мин. 1 запрос / 1.2 сек.
  const REQUEST_GAP_MS = 1200;
  const FRIENDS_PAGE_SIZE = 100;
  const ANIME_RATES_PAGE_SIZE = 5000;
  const STATUS_RU = {
    planned: 'Запланировано',
    watching: 'Смотрю',
    rewatching: 'Пересматриваю',
    completed: 'Просмотрено',
    on_hold: 'Отложено',
    dropped: 'Брошено'
  };

  let active = null;
  let lastRequestAt = 0;
  let inspectTimer = null;

  const abortError = () => new DOMException('Проверка отменена', 'AbortError');
  const isAbort = (error) => error && error.name === 'AbortError';
  const uniqueKey = (user) => user.id != null
    ? `id:${user.id}`
    : `nick:${String(user.nickname || '').toLowerCase()}`;

  function getAnimeId() {
    // Shikimori: /animes/40591-... И /animes/y269-bleach.
    const match = location.pathname.match(/^\/animes\/(?:[a-z])?(\d+)(?=\D|$)/i);
    return match ? Number(match[1]) : null;
  }

  function getCurrentUser() {
    try {
      const raw = document.body?.getAttribute('data-user');
      if (raw) {
        const user = JSON.parse(raw);
        if (user.id && user.url) {
          return {
            id: Number(user.id),
            nickname: decodeURIComponent(String(user.url).replace(/^\/+|\/+$/g, ''))
          };
        }
      }
    } catch (error) {
      console.warn('[Bankai FOF] Не удалось разобрать body[data-user]', error);
    }
    const link = document.querySelector(
      '.l-top_menu-v2 .menu-dropdown.profile a.submenu-triangle'
    );
    const nickname = link?.querySelector('.nickname')?.textContent?.trim();
    if (!nickname) return null;
    return { id: null, nickname };
  }

  function normalizeUser(user) {
    if (!user || !user.nickname) return null;
    const image = user.image || {};
    return {
      id: user.id != null ? Number(user.id) : null,
      nickname: String(user.nickname),
      avatar: image.x32 || user.avatar || ''
    };
  }

  function cacheRead(key) {
    try {
      const raw = localStorage.getItem(`${PREFIX}:${key}`);
      if (!raw) return { found: false };
      const entry = JSON.parse(raw);
      if (entry.expires < Date.now()) {
        localStorage.removeItem(`${PREFIX}:${key}`);
        return { found: false };
      }
      return { found: true, value: entry.value };
    } catch (_) {
      return { found: false };
    }
  }

  function cacheWrite(key, value, ttl) {
    try {
      localStorage.setItem(`${PREFIX}:${key}`, JSON.stringify({
        expires: Date.now() + ttl, value
      }));
    } catch (_) {
      // Если локальное хранилище заполнено/отключено, работаем без кеша.
    }
  }

  function delay(ms, signal) {
    if (signal.aborted) return Promise.reject(abortError());
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        signal.removeEventListener('abort', onAbort);
        resolve();
      }, Math.max(0, ms));
      function onAbort() {
        clearTimeout(timer);
        reject(abortError());
      }
      signal.addEventListener('abort', onAbort, { once: true });
    });
  }

  async function apiGet(relativePath, ctx) {
    for (let attempt = 0; attempt < 4; attempt++) {
      if (ctx.controller.signal.aborted) throw abortError();
      await delay(Math.max(0, REQUEST_GAP_MS - (Date.now() - lastRequestAt)),
        ctx.controller.signal);
      lastRequestAt = Date.now();

      let response;
      try {
        response = await fetch(`${location.origin}${relativePath}`, {
          method: 'GET',
          credentials: 'same-origin',
          headers: { Accept: 'application/json' },
          signal: ctx.controller.signal
        });
      } catch (error) {
        if (isAbort(error)) throw error;
        if (attempt === 3) throw error;
        await delay(2000 * (attempt + 1), ctx.controller.signal);
        continue;
      }

      if (response.ok) {
        const result = await response.json();
        if (!Array.isArray(result)) throw new Error('Неожиданный формат ответа API');
        return result;
      }
      if ((response.status === 429 || response.status >= 500) && attempt < 3) {
        const retryAfter = Number(response.headers.get('Retry-After'));
        const pause = response.status === 429
          ? Math.max(15000, Number.isFinite(retryAfter) ? retryAfter * 1000 : 0)
          : 3000 * (attempt + 1);
        await delay(Math.min(pause, 120000), ctx.controller.signal);
        continue;
      }
      const error = new Error(`Shikimori API: HTTP ${response.status}`);
      error.status = response.status;
      error.path = relativePath;
      throw error;
    }
    throw new Error('Превышено число попыток запроса');
  }

  async function getFriends(user, ctx) {
    const key = `friends:${uniqueKey(user)}`;
    const cached = cacheRead(key);
    if (cached.found) return cached.value;

    const all = new Map();
    for (let page = 1; page <= 1000; page++) {
      const path = `/api/users/${encodeURIComponent(user.nickname)}/friends` +
        `?limit=${FRIENDS_PAGE_SIZE}&page=${page}`;
      const response = await apiGet(path, ctx);
      // Shikimori иногда отдаёт N+1 элемент для обозначения следующей страницы.
      for (const raw of response.slice(0, FRIENDS_PAGE_SIZE)) {
        const friend = normalizeUser(raw);
        if (friend) all.set(uniqueKey(friend), friend);
      }
      if (response.length < FRIENDS_PAGE_SIZE) {
        const friends = [...all.values()];
        cacheWrite(key, friends, FRIENDS_TTL);
        return friends;
      }
    }
    throw new Error('Слишком много страниц друзей — проверка прервана');
  }

  async function getAnimeRate(user, animeId, ctx) {
    const key = `rate:${animeId}:${uniqueKey(user)}`;
    const cached = cacheRead(key);
    if (cached.found) return cached.value;

    for (let page = 1; page <= 100; page++) {
      const path = `/api/users/${encodeURIComponent(user.nickname)}/anime_rates` +
        `?limit=${ANIME_RATES_PAGE_SIZE}&page=${page}`;
      const rates = await apiGet(path, ctx);
      // ВАЖНО: rates[i].id — ID записи пользователя; ID аниме — rates[i].anime.id.
      const found = rates.find(rate => {
        const id = rate?.anime?.id ?? rate?.anime_id ??
          (String(rate?.target_type).toLowerCase() === 'anime' ? rate?.target_id : null);
        return Number(id) === animeId;
      });
      if (found) {
        const result = {
          status: String(found.status || ''),
          score: Number(found.score) || 0
        };
        cacheWrite(key, result, RATE_TTL);
        return result;
      }
      if (rates.length < ANIME_RATES_PAGE_SIZE) {
        cacheWrite(key, null, RATE_TTL);
        return null;
      }
    }
    throw new Error('Слишком много страниц списка аниме — проверка прервана');
  }

  function findNativeFriendsBlock(menu) {
    return [...menu.querySelectorAll(':scope > .block')].find(block => {
      const headline = block.querySelector(':scope > .subheadline');
      return headline?.textContent?.trim() === 'У друзей';
    }) || null;
  }

  function makeBlock(title) {
    const block = document.createElement('div');
    block.className = 'block';
    const headline = document.createElement('div');
    headline.className = 'subheadline m5';
    headline.textContent = title;
    block.appendChild(headline);
    return block;
  }

  function getFriendTemplate(ctx) {
    return ctx.nativeBlock?.querySelector('.b-menu-line.friend-rate') ||
      document.querySelector('.b-menu-line.friend-rate');
  }

  function makeFriendRow(user, rate, ctx, via) {
    const template = getFriendTemplate(ctx);
    const row = template ? template.cloneNode(true) : document.createElement('div');
    row.className = 'b-menu-line friend-rate bankai-fof-added';
    row.removeAttribute('id');

    let status = row.querySelector('.status');
    if (!status) {
      status = document.createElement('div');
      status.className = 'status';
      row.appendChild(status);
    }
    status.textContent = STATUS_RU[rate.status] || rate.status || 'В списке';
    if (via) status.title = `Общий друг: ${via.join(', ')}`;
    else status.removeAttribute('title');

    let userContainer = row.querySelector('.b-user16');
    if (!userContainer) {
      userContainer = document.createElement('div');
      userContainer.className = 'b-user16';
      row.appendChild(userContainer);
    }
    let link = userContainer.querySelector('a');
    if (!link) {
      link = document.createElement('a');
      userContainer.appendChild(link);
    }
    link.href = `/${encodeURIComponent(user.nickname)}`;
    link.title = via?.length
      ? `${user.nickname} · общий друг: ${via.join(', ')}`
      : user.nickname;
    if (via?.length) row.dataset.via = via.join(', ');
    let img = link.querySelector('img');
    if (!img) {
      img = document.createElement('img');
      link.prepend(img);
    }
    img.alt = user.nickname;
    img.removeAttribute('srcset');
    if (user.avatar) {
      try {
        const imageUrl = new URL(user.avatar, location.origin);
        if (imageUrl.protocol === 'https:' || imageUrl.protocol === 'http:') {
          img.src = imageUrl.href;
        } else img.removeAttribute('src');
      } catch (_) { img.removeAttribute('src'); }
    } else {
      img.removeAttribute('src');
    }
    let label = link.querySelector('span');
    if (!label) {
      label = document.createElement('span');
      link.appendChild(label);
    }
    label.textContent = user.nickname;
    return row;
  }

  function nativeFriendKeys(block) {
    const result = new Set();
    if (!block) return result;
    block.querySelectorAll('.b-user16 a').forEach(link => {
      const name = (link.getAttribute('title') || link.querySelector('span')?.textContent || '')
        .trim().toLowerCase();
      if (name) result.add(name);
    });
    return result;
  }

  function addDirectFriend(ctx, user, rate) {
    if (!ctx.nativeBlock) {
      ctx.nativeBlock = makeBlock('У друзей');
      ctx.fofBlock.insertAdjacentElement('beforebegin', ctx.nativeBlock);
    }
    const present = nativeFriendKeys(ctx.nativeBlock);
    if (!present.has(user.nickname.toLowerCase())) {
      ctx.nativeBlock.appendChild(makeFriendRow(user, rate, ctx));
      ctx.directAdded++;
    }
  }

  function addSecondDegreeFriend(ctx, user, rate, via) {
    if (ctx.shown.has(uniqueKey(user))) return;
    ctx.shown.add(uniqueKey(user));
    ctx.fofBlock.insertBefore(makeFriendRow(user, rate, ctx, via), ctx.progress);
    ctx.found++;
  }

  function updateFailureLog(ctx) {
    ctx.failureDetails.hidden = !ctx.failures.length;
    ctx.failureSummary.textContent = `Пропущенные проверки: ${ctx.errors} (показать)`;
    ctx.failureText.textContent = ctx.failures.slice(-40).join('\n');
  }

  function markSuccess(ctx) {
    ctx.consecutiveDenied = 0;
  }

  function recordFailure(ctx, error, user, phase) {
    if (isAbort(error)) throw error;
    ctx.errors++;
    const reason = error.status ? `HTTP ${error.status}` : error.message;
    const item = `${phase}: ${user.nickname} — ${reason}`;
    ctx.failures.push(item);
    console.warn('[Bankai FOF]', item, error.path || '');
    if (error.status === 401 || error.status === 403) {
      ctx.consecutiveDenied++;
    } else {
      ctx.consecutiveDenied = 0;
    }
    updateFailureLog(ctx);
    // Если сервер запретил доступ для нескольких последовательных профилей,
    // не продолжаем автоматически сотни запросов к заблокированному API.
    if (ctx.consecutiveDenied >= 5) {
      const last = ctx.failures[ctx.failures.length - 1];
      throw new Error(`пять последовательных отказов API; последний: ${last}`);
    }
  }

  function updateProgress(ctx, message, complete = false) {
    if (active !== ctx || !ctx.fofBlock.isConnected) return;
    const suffix = ctx.errors ? ` · Пропущено: ${ctx.errors}` : '';
    ctx.progress.textContent = `${message}${suffix}`;
    ctx.control.textContent = complete ? 'Обновить' : 'Остановить';
    ctx.control.onclick = complete
      ? () => restart()
      : () => {
        ctx.controller.abort();
        ctx.progress.textContent = `Остановлено. Найдено: ${ctx.found}.`;
        ctx.control.textContent = 'Продолжить';
        ctx.control.onclick = () => restart();
      };
  }

  async function scan(ctx) {
    const own = ctx.currentUser;
    const direct = await getFriends(own, ctx);
    const directIds = new Set(direct.map(uniqueKey));
    const directNames = new Set(direct.map(u => u.nickname.toLowerCase()));
    const second = new Map();
    const ownKey = uniqueKey(own);
    let firstChecked = 0;

    updateProgress(ctx, `Найдено друзей: ${direct.length}. Проверка коллекций…`);

    // Первый круг: пополняем родной блок "У друзей", не дублируя строки сайта.
    // Одновременно собираем друзей каждого друга (второй круг).
    for (const friend of direct) {
      if (ctx.controller.signal.aborted) throw abortError();
      try {
        const rate = await getAnimeRate(friend, ctx.animeId, ctx);
        markSuccess(ctx);
        if (rate) addDirectFriend(ctx, friend, rate);
      } catch (error) {
        recordFailure(ctx, error, friend, 'коллекция прямого друга');
      }

      try {
        const friendsOfFriend = await getFriends(friend, ctx);
        markSuccess(ctx);
        for (const person of friendsOfFriend) {
          const key = uniqueKey(person);
          if (key === ownKey || directIds.has(key) ||
              person.nickname.toLowerCase() === own.nickname.toLowerCase() ||
              directNames.has(person.nickname.toLowerCase())) continue;
          if (!second.has(key)) second.set(key, { user: person, via: [] });
          const via = second.get(key).via;
          if (!via.includes(friend.nickname)) via.push(friend.nickname);
        }
      } catch (error) {
        recordFailure(ctx, error, friend, 'список друзей прямого друга');
      }

      firstChecked++;
      updateProgress(ctx, `Первый круг: ${firstChecked}/${direct.length}` +
        ` · Друзей второго круга: ${second.size}` +
        ` · Найдено: ${ctx.found}`);
    }

    let scanned = 0;
    updateProgress(ctx, `Проверка второго круга: 0/${second.size} · Найдено: ${ctx.found}`);
    for (const { user, via } of second.values()) {
      if (ctx.controller.signal.aborted) throw abortError();
      try {
        const rate = await getAnimeRate(user, ctx.animeId, ctx);
        markSuccess(ctx);
        if (rate) addSecondDegreeFriend(ctx, user, rate, via);
      } catch (error) {
        recordFailure(ctx, error, user, `коллекция второго круга (через ${via.join(', ')})`);
      }
      scanned++;
      updateProgress(ctx, `Проверка второго круга: ${scanned}/${second.size}` +
        ` · Найдено: ${ctx.found}`);
    }

    if (ctx.found === 0) {
      updateProgress(ctx, ctx.errors
        ? 'Совпадений не найдено (часть запросов завершилась ошибками).'
        : 'Среди друзей второго круга совпадений не найдено.', true);
    } else {
      updateProgress(ctx, `Найдено друзей второго круга: ${ctx.found}.` +
        (ctx.errors ? ' Результат может быть неполным.' : ' Проверка завершена.'), true);
    }
  }

  function start() {
    const animeId = getAnimeId();
    const menu = document.querySelector('aside.l-menu .b-animes-menu');
    const currentUser = getCurrentUser();
    if (!animeId || !menu || !currentUser) return;
    if (active && active.animeId === animeId &&
        active.menu === menu && active.fofBlock.isConnected &&
        active.currentUser.nickname === currentUser.nickname) return;

    if (active) active.controller.abort();
    document.getElementById('bankai-fof-block')?.remove();
    document.querySelectorAll('.bankai-fof-added').forEach(row => row.remove());
    const nativeBlock = findNativeFriendsBlock(menu);
    const block = makeBlock('У друзей друзей');
    block.id = 'bankai-fof-block';

    const progress = document.createElement('div');
    progress.className = 'bankai-fof-progress';
    progress.style.cssText = 'font-size:11px;opacity:.75;line-height:1.6;margin-top:6px';
    progress.textContent = 'Подготовка проверки…';
    block.appendChild(progress);

    const control = document.createElement('button');
    control.type = 'button';
    control.className = 'bankai-fof-control';
    control.style.cssText =
      'background:none;border:0;padding:4px 0;cursor:pointer;font-size:11px;' +
      'color:inherit;text-decoration:underline;opacity:.8';
    control.textContent = 'Остановить';
    block.appendChild(control);

    const failureDetails = document.createElement('details');
    failureDetails.hidden = true;
    failureDetails.style.cssText = 'font-size:11px;opacity:.8;line-height:1.5;margin-top:4px';
    const failureSummary = document.createElement('summary');
    failureSummary.style.cursor = 'pointer';
    const failureText = document.createElement('div');
    failureText.style.cssText = 'white-space:pre-wrap;overflow-wrap:anywhere;max-height:150px;overflow-y:auto';
    failureDetails.append(failureSummary, failureText);
    block.appendChild(failureDetails);

    if (nativeBlock) nativeBlock.insertAdjacentElement('afterend', block);
    else menu.insertBefore(block, menu.querySelector('.b-favoured'));

    const ctx = {
      animeId, menu, nativeBlock, fofBlock: block,
      progress, control, failureDetails, failureSummary, failureText,
      currentUser, shown: new Set(), found: 0,
      directAdded: 0, errors: 0, consecutiveDenied: 0,
      failures: [], controller: new AbortController()
    };
    active = ctx;
    updateProgress(ctx, 'Запрашиваем список друзей…');
    scan(ctx).catch(error => {
      if (active !== ctx || isAbort(error)) return;
      console.error('[Bankai FOF] Проверка завершилась ошибкой', error);
      updateProgress(ctx,
        `Проверка неполная (${error.message}). Найдено: ${ctx.found}.`,
        true);
    });
  }

  function restart() {
    if (active) active.controller.abort();
    active = null;
    start();
  }

  function inspect() {
    const animeId = getAnimeId();
    const menu = document.querySelector('aside.l-menu .b-animes-menu');
    const currentUser = getCurrentUser();
    if (!animeId || !menu || !currentUser) {
      if (active) {
        active.controller.abort();
        active = null;
      }
      return;
    }
    if (!active || active.animeId !== animeId || active.menu !== menu ||
        !active.fofBlock.isConnected ||
        active.currentUser.nickname !== currentUser.nickname) start();
  }

  function scheduleInspect() {
    clearTimeout(inspectTimer);
    inspectTimer = setTimeout(inspect, 250);
  }

  function init() {
    inspect();
    // Shikimori использует Turbolinks: страницы сменяются без перезагрузки.
    document.addEventListener('turbolinks:load', scheduleInspect);
    window.addEventListener('popstate', scheduleInspect);
    const observer = new MutationObserver(scheduleInspect);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
