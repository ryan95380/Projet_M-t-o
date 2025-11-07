const APIKEY = "9d14fab5293af26cf8dc10b7ff26e891";

const $ = (sel) => document.querySelector(sel);
const temp = $("#temp");
const feels = $("#feels");
const humidity = $("#humidity");
const wind = $("#wind");
const form = $("#form");
const cityInput = $("#city");
const statusEl = $("#status");
const submitBtn = $("#submit");

const setStatus = (msg = "", kind = "muted") => {
  statusEl.textContent = msg;
  statusEl.className = `status ${kind}`;
};

const toKmH = (mps) => Math.round((mps || 0) * 3.6);
const round = (n) => (typeof n === "number" ? Math.round(n) : n);

async function fetchWeather(city) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${APIKEY}&units=metric&lang=fr`;
  const res = await fetch(URL);
  if (!res.ok) {
    let detail = "";
    try {
      const data = await res.json();
      detail = data?.message ? ` (${data.message})` : "";
    } catch {}
    throw new Error(`Impossible de récupérer la météo${detail}`);
  }
  return res.json();
}

function renderWeather(data) {
  temp.innerHTML = `${round(data.main.temp)} <span class="unit">°C</span>`;
  feels.innerHTML = `${round(data.main.feels_like)} <span class="unit">°C</span>`;
  humidity.innerHTML = `${round(data.main.humidity)} <span class="unit">%</span>`;
  wind.innerHTML = `${toKmH(data.wind.speed)} <span class="unit">km/h</span>`;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) {
    setStatus("Veuillez saisir une ville.", "error");
    cityInput.focus();
    return;
  }
  submitBtn.disabled = true;
  setStatus("Chargement en cours…");
  try {
    const data = await fetchWeather(city);
    renderWeather(data);
    setStatus(`Mise à jour pour "${data.name}" (${data.sys?.country ?? ""}).`);
  } catch (err) {
    setStatus(err.message || "Une erreur est survenue.", "error");
  } finally {
    submitBtn.disabled = false;
  }
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    form.requestSubmit();
  }
});
