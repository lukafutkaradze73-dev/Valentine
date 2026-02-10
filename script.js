const yes = document.getElementById("yes");
const no = document.getElementById("no");
const result = document.getElementById("result");

let step = 0;
let yesScale = 1;

no.onmouseover = () => {
  step++;

  // ტექსტების ეტაპები
  if (step === 1) {
    result.innerText = "დარწმუნებული ხარ? 🤨";
  } else if (step === 2) {
    result.innerText = "ნამდვილად? 😳";
  } else if (step === 3) {
    result.innerText = "კარგად დაფიქრდი 😅";
  } else {
    result.innerText = "კაი, გასაგებია… მაგრამ პასუხი უკვე ნათელია 😄💖";
  }

  // „არა“ გარბის
  no.style.position = "absolute";
  no.style.left = Math.random() * 80 + "%";
  no.style.top = Math.random() * 80 + "%";

  // „კი“ იზრდება
  yesScale += 0.15;
  yes.style.transform = scale(${yesScale});
};

yes.onclick = () => {
  result.innerText = "ვიცოდიიი 💖😍";
  no.style.display = "none";
  yes.style.transform = "scale(1.6)";
};
