// This shall be the starting point for your code
const counter = document.querySelector<HTMLPreElement>('#clock');

const addZero = (n: number): string => n > 9 ? n.toString() : `0${n}`;

const formatDate = (date: Date): string => {
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  return `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
};

const updateClock = () =>
  requestAnimationFrame(() =>
    counter.textContent = formatDate(new Date()));

setInterval(updateClock, 500);
updateClock();
