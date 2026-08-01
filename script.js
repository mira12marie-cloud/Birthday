const btn = document.getElementById("giftBtn");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");
const music = document.getElementById("music");

const message = `Dear Nihel,

Happy Birthday to the most amazing best friend I could ever ask for.

Thank you for every laugh, every memory, every moment we've shared together.

I hope this new year of your life brings you endless happiness, success, love and beautiful surprises.

Never forget how special you are and how much you mean to me.

Happy Birthday again.

I love you forever. 🤍`;

btn.onclick = () => {

music.play();

btn.style.display="none";

letter.classList.remove("hidden");

let i=0;

function write(){

if(i<message.length){

typing.innerHTML+=message.charAt(i);

i++;

setTimeout(write,40);

}

}

write();

}

function star(){

const s=document.createElement("div");

s.className="star";

s.innerHTML="✨";

s.style.left=Math.random()*100+"vw";

s.style.fontSize=(10+Math.random()*20)+"px";

s.style.animationDuration=(4+Math.random()*5)+"s";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},9000);

}

setInterval(star,250);
