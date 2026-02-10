const yes = document.getElementById("yes");
const no = document.getElementById("no");
const result = document.getElementById("result");

let step = 0;

no.onclick = () => {
  step++;

  if (step === 1) {
    result.innerText = "დარწმუნებული ხარ? 🤨";
  } 
  else if (step === 2) {
    result.innerText = "ნამდვილად? 😳";
  } 
  else if (step === 3) {
    result.innerText = "კარგად დაფიქრდი 😅";
  } 
  else {
    result.innerText = "კაი მაშინ… საბოლოო პასუხია მაინც კი 😄💖";
    no.style.display = "none";
    yes.style.transform = "scale(1.4)";
  }
};

yes.onclick = () => {
  result.innerText = "უი 😍 საუკეთესო პასუხია! 💕";
  no.style.display = "none";
};
