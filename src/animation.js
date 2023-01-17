const card = document.querySelector(".one");

document.addEventListener("mousemove", rotater);

function rotater(e) {
  const posX = e.clientX;
  const posY = e.clientY;
  const width = card.offsetWidth;
  const height = card.offsetHeight;
  const rotX = (posX / height) * 20;
  const rotY = (posY / width) * 90;
  const rotateX = rotX - 28;
  const rotateY = rotY - 28;
  card.style.transform = `rotateY(${rotateX}deg) rotateX(${-rotateY}deg)`;
  // "rotateX("  " deg) rotateY(" + rotateY + " deg)";
  //   console.log(posY, posX);
  //   console.log(true);
  //   card.style.transform = `rotateY(${500 - posY}deg) rotateX(${1520 - posX}deg)`;
}
