const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const botonMascotaJugador = document.getElementById("boton-mascota");
const sectionReiniciar = document.getElementById("reiniciar");
const botonReiniciar = document.getElementById("boton-reiniciar");
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanvidasJugador = document.getElementById("vidas-jugador");
const spanvidasEnemigo = document.getElementById("vidas-enemigo");

const sectionMensaje = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataqueJugador");
const ataqueDelEnemigo = document.getElementById("ataqueEnemigo");
const contenedorTarjetas = document.getElementById("tarjetas");
const contenedorBotones = document.getElementById("botones");
const contenerdorCanvas = document.getElementById("verMapa");
const mapa = document.getElementById("mapa");


let mokepones = [];
//let ataqueJugador;
let ataqueEnemigo = [];
let mensajes;
let ataquesMokepon;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let mascotaJugardor;
let botones = [];
let ataqueJugador = [];
let ataquesMokeponEnemigo;
let botonFuego;
let botonAgua;
let botonTierra;
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidaJugador = 5;
let vidaEnemigo = 5;
let opcionDeMokepones;
let mapaBackground=new Image()
mapaBackground.src = './mokemap.png'
let mascotaDelJugadorObjeto

let alturaQueBuscamos;
let anchoDelMapa = window.innerWidth - 90;
const anchoMaximoDelMapa = 650;

if (anchoDelMapa > anchoMaximoDelMapa) {
    console.log(anchoDelMapa)
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800;

mapa.width = anchoDelMapa;
mapa.height = alturaQueBuscamos;



let lienzo = mapa.getContext("2d");
let intervalo

class Mokepon {
  constructor(nombre, foto, vida,fotoMapa) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.ancho = 60
    this.alto = 60
    this.x = aleatorio(0,mapa.width - this.ancho)
    this.y = aleatorio(0,mapa.height - this.alto)
    this.mapaFoto = new Image()
    this.mapaFoto.src = fotoMapa
    this.velocidadX = 0;
    this.velocidadY = 0;
  }
  pintarMokepon(){
    lienzo.drawImage(
      this.mapaFoto,
      this.x,
      this.y,
      this.ancho,
      this.alto
     )
  }
}

let hipodoge = new Mokepon(
  "Hipodoge",
  "https://1.bp.blogspot.com/-jAsNep_W0us/YSaqqAO4u-I/AAAAAAAARWY/CJExPeZp_3IeVW8HB5lduk2BodNzaM6IQCLcBGAsYHQ/s600/Clipart%2Bclash%2Bof%2Bclans%2Broyale%2Bpng%2Bdescarga%2Bgratis%2B%252829%2529.png",
  5,'https://www.deckshop.pro/img/c/ArcherQueen.png'
);
let capipepo = new Mokepon(
  "Capipepo",
  "https://1.bp.blogspot.com/-ba8jwRREJZM/YSarYVtNVqI/AAAAAAAARX0/qLSeXQ6rndMm-wEvrNtTmj_BAUgx1HiiwCLcBGAsYHQ/s600/Clipart%2Bclash%2Bof%2Bclans%2Broyale%2Bpng%2Bdescarga%2Bgratis%2B%252841%2529.png",
  5,'https://www.deckshop.pro/img/c/ElixirGolem.png'
);
let ratigueya = new Mokepon(
  "Ratigueya",
  "https://1.bp.blogspot.com/-YAy_RGcgSv8/YSavGh2a69I/AAAAAAAARfo/FkAalK72y0MnsNYOvVi5pGkJwKfK_I0SACLcBGAsYHQ/s600/Clipart%2Bclash%2Bof%2Bclans%2Broyale%2Bpng%2Bdescarga%2Bgratis%2B%2528139%2529.png",
  5,'https://www.deckshop.pro/img/c/Minions.png'
);
let hipodogeEnemigo = new Mokepon(
  "Hipodoge",
  "https://1.bp.blogspot.com/-jAsNep_W0us/YSaqqAO4u-I/AAAAAAAARWY/CJExPeZp_3IeVW8HB5lduk2BodNzaM6IQCLcBGAsYHQ/s600/Clipart%2Bclash%2Bof%2Bclans%2Broyale%2Bpng%2Bdescarga%2Bgratis%2B%252829%2529.png",
  5,'https://www.deckshop.pro/img/c/ArcherQueen.png'
);
let capipepoEnemigo = new Mokepon(
  "Capipepo",
  "https://1.bp.blogspot.com/-ba8jwRREJZM/YSarYVtNVqI/AAAAAAAARX0/qLSeXQ6rndMm-wEvrNtTmj_BAUgx1HiiwCLcBGAsYHQ/s600/Clipart%2Bclash%2Bof%2Bclans%2Broyale%2Bpng%2Bdescarga%2Bgratis%2B%252841%2529.png",
  5,'https://www.deckshop.pro/img/c/ElixirGolem.png'
);
let ratigueyaEnemigo = new Mokepon(
  "Ratigueya",
  "https://1.bp.blogspot.com/-YAy_RGcgSv8/YSavGh2a69I/AAAAAAAARfo/FkAalK72y0MnsNYOvVi5pGkJwKfK_I0SACLcBGAsYHQ/s600/Clipart%2Bclash%2Bof%2Bclans%2Broyale%2Bpng%2Bdescarga%2Bgratis%2B%2528139%2529.png",
  5,'https://www.deckshop.pro/img/c/Minions.png'
);

hipodoge.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🔥", id: "boton-fuego" }
);
capipepo.ataques.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);
ratigueya.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
);
hipodogeEnemigo.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🔥", id: "boton-fuego" }
);
capipepoEnemigo.ataques.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);
ratigueyaEnemigo.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
);



mokepones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionReiniciar.style.display = "none";
  contenerdorCanvas.style.display = "none";

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
    <input type="radio" name="mascota" id=${mokepon.nombre} />
    <label class="tarjetaL" for=${mokepon.nombre}>
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto}
            alt=${mokepon.nombre}>
    </label>
    `;
    contenedorTarjetas.innerHTML += opcionDeMokepones;
    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
  });

  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
  
  sectionSeleccionarMascota.style.display = "none";



  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = inputHipodoge.id;
    mascotaJugardor = inputHipodoge.id
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = inputCapipepo.id;
    mascotaJugardor = inputCapipepo.id
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = inputRatigueya.id;
    mascotaJugardor = inputRatigueya.id
  } else {
    alert("No elegiste mascota");
  }

    //canvas
    contenerdorCanvas.style.display = "flex";
    iniciarMapa()

  extraerAtaque(mascotaJugardor)
 
}

function extraerAtaque(mascotaJugardor) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugardor === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }
  mostrarAtaques(ataques);
}
//botones de ataques
function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `
    <button id=${ataque.id} class="boton-de-ataque bAtaques">${ataque.nombre}</button>
    `;
    contenedorBotones.innerHTML += ataquesMokepon;
  });
  botonFuego = document.getElementById("boton-fuego");
  botonAgua = document.getElementById("boton-agua");
  botonTierra = document.getElementById("boton-tierra");
  botones = document.querySelectorAll(".bAtaques");
  console.log(botones);
}
function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (e.target.textContent === "🔥") {
        ataqueJugador.push("🔥");
        console.log(ataqueJugador);
        boton.style.background = "#572364";
        boton.disabled = true;
      } else if (e.target.textContent === "💧") {
        ataqueJugador.push("💧");
        console.log(ataqueJugador);
        boton.style.background = "#572364";
        boton.disabled = true;
      } else {
        ataqueJugador.push("🌱");
        console.log(ataqueJugador);
        boton.style.background = "#572364";
      }
      ataqueAleatorioEnemigo();
    });
  });
}

function seleccionarMascotaEnemigo(enemigo) {

  spanMascotaEnemigo.innerHTML=enemigo.nombre
  ataquesMokeponEnemigo=enemigo.ataques


  secuenciaAtaque();
}

//ATAQUE DEL ENEMIGO
function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);

  if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
    ataqueEnemigo.push("🔥");
  } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
    ataqueEnemigo.push("💧");
  } else {
    ataqueEnemigo.push("🌱");
  }
  console.log(ataqueEnemigo);
  iniciarPelea();
}
function iniciarPelea() {
  if (ataqueJugador.length === 5) {
    combate();
  }
}
function indexAmbosOponente(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}
//COMBATE
function combate() {
  for (let index = 0; index < ataqueJugador.length; index++) {
    if (ataqueJugador[index] === ataqueEnemigo[index]) {
      indexAmbosOponente(index, index);
      mensajes = "Empate";
      crearMensaje();
    } else if (ataqueJugador[index] == "🔥" && ataqueEnemigo[index] == "🌱") {
      indexAmbosOponente(index, index);
      mensajes = "Ganaste";
      victoriasJugador++;
      spanvidasJugador.innerHTML = victoriasJugador;
      crearMensaje();
    } else if (ataqueJugador[index] == "💧" && ataqueEnemigo[index] == "🔥") {
      indexAmbosOponente(index, index);
      mensajes = "Ganaste";
      victoriasJugador++;
      spanvidasJugador.innerHTML = victoriasJugador;
      crearMensaje();
    } else if (ataqueJugador[index] == "🌱" && ataqueEnemigo[index] == "💧") {
      indexAmbosOponente(index, index);
      mensajes = "Ganaste";
      victoriasJugador++;
      spanvidasJugador.innerHTML = victoriasJugador;
      crearMensaje();
    } else {
      indexAmbosOponente(index, index);
      mensajes = "Perdiste";
      victoriasEnemigo++;
      spanvidasEnemigo.innerHTML = victoriasEnemigo;
      crearMensaje();
    }
  }

  revisarVidas();
}

function revisarVidas() {
  if (victoriasJugador == victoriasEnemigo) {
    crearMensajeFinal("Empate");
  } else if (victoriasJugador < victoriasEnemigo) {
    crearMensajeFinal("No tienes más vidas, Perdiste");
  } else {
    crearMensajeFinal("Felicidades, Ganaste");
  }
}

function crearMensaje() {
  let nuevoAtaqueJ = document.createElement("p");
  let nuevoAtaqueE = document.createElement("p");

  sectionMensaje.innerHTML = mensajes;
  nuevoAtaqueJ.innerHTML = indexAtaqueJugador;
  nuevoAtaqueE.innerHTML = indexAtaqueEnemigo;

  ataqueDelJugador.appendChild(nuevoAtaqueJ);
  ataqueDelEnemigo.appendChild(nuevoAtaqueE);
}

function crearMensajeFinal(resultadoFianl) {
  sectionMensaje.innerHTML = resultadoFianl;
  sectionReiniciar.style.display = "flex";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//CANVAS
function iniciarMapa(){
  mascotaDelJugadorObjeto = obtenerMascotaC(mascotaJugardor);
  intervalo = setInterval(pintarCanvas, 50)
  window.addEventListener('keydown', sePresionoUnaTecla);
  window.addEventListener('keyup', detenerMovimiento);
}

function pintarCanvas(){

  mascotaDelJugadorObjeto.x = mascotaDelJugadorObjeto.x + mascotaDelJugadorObjeto.velocidadX
  mascotaDelJugadorObjeto.y = mascotaDelJugadorObjeto.y + mascotaDelJugadorObjeto.velocidadY
  lienzo.clearRect(0,0, mapa.width, mapa.height)
  lienzo.drawImage(mapaBackground,0,0,mapa.width,mapa.height)
  mascotaDelJugadorObjeto.pintarMokepon()
  hipodogeEnemigo.pintarMokepon()
  capipepoEnemigo.pintarMokepon()
  ratigueyaEnemigo.pintarMokepon()
  if(mascotaDelJugadorObjeto.velocidadX !== 0 || mascotaDelJugadorObjeto.velocidadY !== 0){
    revisarColision(hipodogeEnemigo)
    revisarColision(ratigueyaEnemigo)
    revisarColision(capipepoEnemigo)
  }
  }

function moverX_R(){
  mascotaDelJugadorObjeto.velocidadX = 5
}
function moverY_D(){
  mascotaDelJugadorObjeto.velocidadY = 5
}
function moverX_L(){
  mascotaDelJugadorObjeto.velocidadX = -5
}
function moverY_U(){
  mascotaDelJugadorObjeto.velocidadY = -5
}
function sePresionoUnaTecla(event){
  switch (event.key) {
    case 'ArrowUp':
      moverY_U()
      break;
    case 'ArrowDown':
      moverY_D()
      break;
    case 'ArrowLeft':
      moverX_L()
      break;
    case 'ArrowRight':
      moverX_R()
      break;
    default:
      break;
  }
}



function obtenerMascotaC(){
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugardor === mokepones[i].nombre) {
      return mokepones[i]
    }
  }
}
function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.y
  const abajoEnemigo = enemigo.y + enemigo.alto
  const derechaEnemigo = enemigo.x + enemigo.ancho
  const izquierdaEnemigo = enemigo.x

  const arribaMascota = 
  mascotaDelJugadorObjeto.y
  const abajoMascota = 
  mascotaDelJugadorObjeto.y + mascotaDelJugadorObjeto.alto
  const derechaMascota = 
  mascotaDelJugadorObjeto.x + mascotaDelJugadorObjeto.ancho
  const izquierdaMascota = 
  mascotaDelJugadorObjeto.x

  if(
      abajoMascota < arribaEnemigo ||
      arribaMascota > abajoEnemigo ||
      derechaMascota < izquierdaEnemigo ||
      izquierdaMascota > derechaEnemigo
  ) {
      return
  }

  detenerMovimiento()
  clearInterval(intervalo);
 sectionSeleccionarAtaque.style.display = "flex";
 contenerdorCanvas.style.display = "none";
 seleccionarMascotaEnemigo(enemigo);
  // alert("Hay colisión " + enemigo.nombre)
}
function detenerMovimiento(){
  mascotaDelJugadorObjeto.velocidadX = 0;
  mascotaDelJugadorObjeto.velocidadY =0;
}

window.addEventListener("load", iniciarJuego);
