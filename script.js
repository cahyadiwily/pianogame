const papanSkor = document.querySelector('.score');
let skor;
skor = 0;
papanSkor.textContent = 0;

function addNotes(){
//random line letak kemunculan notes
var line = Math.floor(Math.random() * 4 + 1);
if(line === 1){
document.querySelector(".l1").insertAdjacentHTML(
    'afterbegin',
    "<div ><img class='notes ND' src='images/virus.png' width='42' height='42'></div>"     
  );  
  const ND = document.querySelector(".ND");
  setTimeout(()=> ND.remove(),1800);
  }
  if(line === 2){
document.querySelector(".l2").insertAdjacentHTML(
    'afterbegin',
    "<div ><img class='notes NF' src='images/virus.png' width='42' height='42'></div>"     
  );
  const NF = document.querySelector(".NF");
  setTimeout(()=> NF.remove(),1800);
  }
  if(line === 3){
document.querySelector(".l3").insertAdjacentHTML(
    'afterbegin',
    "<div ><img class='notes NJ' src='images/virus.png' width='42' height='42'></div>"     
  );
  const NJ = document.querySelector(".NJ");
  setTimeout(()=> NJ.remove(),1800);
  }
  if(line === 4){
document.querySelector(".l4").insertAdjacentHTML(
    'afterbegin',
    "<div ><img class='notes NK' src='images/virus.png' width='42' height='42'></div>"     
  );
  const NK = document.querySelector(".NK");
  setTimeout(()=> NK.remove(),1800);
  }
  //random interval kemunculan notes baru
  var time = Math.round(Math.random() * 700 + 300);
  setTimeout(()=> addNotes(),time);
  console.log(time);
  
};



// D
const DKey = document.querySelector(".kd");
const playD = () => {
  DKey.classList.add("active");
  setTimeout(() => DKey.classList.remove("active"), 200);
  const ND = document.querySelector(".l1");
  ND.lastElementChild.remove();
  skor++;
  papanSkor.textContent = skor;
};
DKey.addEventListener("click", playD);

// F
const FKey = document.querySelector(".kf");
const playF = () => {
  FKey.classList.add("active");
  setTimeout(() => FKey.classList.remove("active"), 200);
  const NF = document.querySelector(".l2");
  NF.lastElementChild.remove();
  skor++;
  papanSkor.textContent = skor;
};
FKey.addEventListener("click", playF);

// J
const JKey = document.querySelector(".kj");
const playJ = () => {
  JKey.classList.add("active");
  setTimeout(() => JKey.classList.remove("active"), 200);
  const NJ = document.querySelector(".l3");
  NJ.lastElementChild.remove();
  skor++;
  papanSkor.textContent = skor;
};
JKey.addEventListener("click", playJ);

// K
const KKey = document.querySelector(".kk");
const playK = () => {
  KKey.classList.add("active");
  setTimeout(() => KKey.classList.remove("active"), 200);
  const NK = document.querySelector(".l4");
  NK.lastElementChild.remove();
  skor++;
  papanSkor.textContent = skor;
};
KKey.addEventListener("click", playK);

window.addEventListener("keydown", ({ keyCode }) => {
  // Press D
  if (keyCode === 68) return playD();

  // Press F
  if (keyCode === 70) return playF();

  // Press J
  if (keyCode === 74) return playJ();

  // Press K
  if (keyCode === 75) return playK();

}); 