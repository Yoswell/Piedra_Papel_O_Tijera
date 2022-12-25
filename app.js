const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');

const card1 = document.getElementById('piedra');
const card2 = document.getElementById('papel');
const card3 = document.getElementById('tijera');

const respuesta1 = document.getElementById('piedra2');
const respuesta2 = document.getElementById('papel2');
const respuesta3 = document.getElementById('tijera2');
const versus = document.getElementById('vs');
var puntajeUser = document.getElementById('puntajeTu');
var puntajePc = document.getElementById('puntajePc');

var cont1 = 0;
var user1 = 0;
var pc1 = 0;

card1.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('win1').style.display = 'none';
  document.getElementById('over1').style.display = 'none';
  document.getElementById('winer1').style.display = 'none';

  op1.style.display = 'none';
  op2.style.display = 'none';
  op3.style.display = 'none';

  document.getElementById('win2').style.display = 'none';
  document.getElementById('over2').style.display = 'none';
  document.getElementById('winer2').style.display = 'none';
  document.getElementById('win3').style.display = 'none';
  document.getElementById('over3').style.display = 'none';
  document.getElementById('winer3').style.display = 'none';

  respuesta3.style.display = 'none';
  respuesta2.style.display = 'none';
  respuesta1.style.display = 'block';
  versus.style.display = 'block';

  switch(numeroAleatorio()) {
    case 1:
      cont1 = 1;
      op1.style.display = 'block';
      break;
    case 2:
      cont1 = 2;
      op2.style.display = 'block';
      break;
    case 3:
      cont1 = 3;
      op3.style.display = 'block';
      break;
  }

  if(cont1 == 1) {
    document.getElementById('win1').style.display = 'block';
  }
  if(cont1 == 2) {
    document.getElementById('over1').style.display = 'block';
    pc1++;
    puntajePc.innerHTML = pc1;
  }
  if(cont1 == 3) {
    document.getElementById('winer1').style.display = 'block';
    user1++;
    puntajeUser.innerHTML = user1;
  }


});

var cont2 = 0;

card2.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('win2').style.display = 'none';
  document.getElementById('over2').style.display = 'none';
  document.getElementById('winer2').style.display = 'none';
  op1.style.display = 'none';
  op2.style.display = 'none';
  op3.style.display = 'none';

  document.getElementById('win1').style.display = 'none';
  document.getElementById('over1').style.display = 'none';
  document.getElementById('winer1').style.display = 'none';
  document.getElementById('win3').style.display = 'none';
  document.getElementById('over3').style.display = 'none';
  document.getElementById('winer3').style.display = 'none';

  respuesta3.style.display = 'none';
  respuesta2.style.display = 'block';
  respuesta1.style.display = 'none';
  versus.style.display = 'block';

  switch(numeroAleatorio()) {
    case 1:
      cont2 = 1;
      op1.style.display = 'block';
      break;
    case 2:
      cont2 = 2;
      op2.style.display = 'block';
      break;
    case 3:
      cont2 = 3;
      op3.style.display = 'block';
      break;
  }

  if(cont2 == 2) {
    document.getElementById('win2').style.display = 'block';
  }
  if(cont2 == 3) {
    document.getElementById('over2').style.display = 'block';
    pc1++;
    puntajePc.innerHTML = pc1;
  }
  if(cont2 == 1) {
    document.getElementById('winer2').style.display = 'block';
    user1++;
    puntajeUser.innerHTML = user1;
  }
});

var cont3 = 0;

card3.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('win3').style.display = 'none';
  document.getElementById('over3').style.display = 'none';
  document.getElementById('winer3').style.display = 'none';
  op1.style.display = 'none';
  op2.style.display = 'none';
  op3.style.display = 'none';

  document.getElementById('win1').style.display = 'none';
  document.getElementById('over1').style.display = 'none';
  document.getElementById('winer1').style.display = 'none';
  document.getElementById('win2').style.display = 'none';
  document.getElementById('over2').style.display = 'none';
  document.getElementById('winer3').style.display = 'none';

  respuesta3.style.display = 'block';
  respuesta2.style.display = 'none';
  respuesta1.style.display = 'none';
  versus.style.display = 'block';

  switch(numeroAleatorio()) {
    case 1:
      cont3 = 1;
      op1.style.display = 'block';
      break;
    case 2:
      cont3 = 2;
      op2.style.display = 'block';
      break;
    case 3:
      cont3 = 3;
      op3.style.display = 'block';
      break;
  }

  if(cont3 == 3) {
    document.getElementById('win3').style.display = 'block';
  }
  if(cont3 == 2) {
    document.getElementById('winer3').style.display = 'block';
    user1++;
    puntajeUser.innerHTML = user1;
  }
  if(cont3 == 1) {
    document.getElementById('over3').style.display = 'block';
    pc1++;
    puntajePc.innerHTML = pc1;
  }
});

function numeroAleatorio() {
  return Math.floor(Math.random() * 3 + 1);
} 
