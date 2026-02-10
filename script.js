const yes = document.getElementById("yes");
const no = document.getElementById("no");
const result = document.getElementById("result");

yes.onclick = () => {
  result.innerText = "დამთანხმდააა 💕😍";
  yes.style.transform = "scale(1.3)";
};

no.onmouseover = () => {
  no.style.position = "absolute";
  no.style.left = Math.random() * 80 + "%";
  no.style.top = Math.random() * 80 + "%";
};
