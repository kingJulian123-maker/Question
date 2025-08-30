const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "Yayyyyy I love you tooo!";
    gif.src = "https://i.pinimg.com/originals/11/17/7e/11177e116e8cabc312e1cbf0e38e02e4.gif";
});
noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});