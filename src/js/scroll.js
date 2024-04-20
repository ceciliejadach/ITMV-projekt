const svg = document.querySelector("svg.redline");
const path = svg.querySelector("path");

const scroll = () => {
  path.style.strokeDasharray = `60`;
};

scroll();
window.addEventListener("scroll", scroll);
