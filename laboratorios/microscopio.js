const slidesData = {
  onion: {
    title: "Epiderme de Cebola (Célula Vegetal)",
    desc: "Parede celular hexagonal bem definida em tom esverdeado com núcleos celulares marcados em roxo.",
    svg: `<svg class="slide-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#e8f5e9"/><path d="M 0,50 Q 150,45 300,50 M 0,110 Q 150,105 300,110 M 0,170 Q 150,165 300,170 M 0,230 Q 150,225 300,230" stroke="#2e7d32" stroke-width="4" fill="none"/><path d="M 80,0 V 300 M 160,0 V 300 M 240,0 V 300" stroke="#2e7d32" stroke-width="3" fill="none"/><circle cx="40" cy="80" r="10" fill="#8e24aa" opacity="0.8"/><circle cx="120" cy="140" r="12" fill="#8e24aa" opacity="0.8"/><circle cx="200" cy="80" r="11" fill="#8e24aa" opacity="0.8"/><circle cx="200" cy="200" r="10" fill="#8e24aa" opacity="0.8"/><circle cx="40" cy="200" r="12" fill="#8e24aa" opacity="0.8"/></svg>`
  },
  blood: {
    title: "Esfregaço de Sangue Humano",
    desc: "Hemácias (glóbulos vermelhos) que transportam oxigênio e um Leucócito (glóbulo branco de defesa).",
    svg: `<svg class="slide-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#fff5f5"/><g fill="#e53935" opacity="0.85"><circle cx="50" cy="60" r="18"/><circle cx="120" cy="50" r="18"/><circle cx="190" cy="80" r="18"/><circle cx="250" cy="40" r="18"/><circle cx="70" cy="130" r="18"/><circle cx="150" cy="120" r="18"/><circle cx="230" cy="140" r="18"/><circle cx="40" cy="200" r="18"/><circle cx="110" cy="220" r="18"/><circle cx="180" cy="210" r="18"/><circle cx="250" cy="230" r="18"/></g><g fill="#ffcdd2"><circle cx="50" cy="60" r="8"/><circle cx="120" cy="50" r="8"/><circle cx="190" cy="80" r="8"/><circle cx="70" cy="130" r="8"/><circle cx="150" cy="120" r="8"/><circle cx="230" cy="140" r="8"/></g><circle cx="130" cy="170" r="26" fill="#5e35b1"/><circle cx="122" cy="165" r="10" fill="#311b92"/><circle cx="138" cy="175" r="9" fill="#311b92"/></svg>`
  },
  bacteria: {
    title: "Bactérias Bacilos (Colônia)",
    desc: "Micro-organismos procariontes em formato de bastonete, fundamentais nos ciclos ecológicos e biotecnologia.",
    svg: `<svg class="slide-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#f3e5f5"/><g fill="#d81b60" stroke="#880e4f" stroke-width="2"><rect x="40" y="50" width="40" height="16" rx="8" transform="rotate(15 40 50)"/><rect x="120" y="80" width="45" height="16" rx="8" transform="rotate(-30 120 80)"/><rect x="200" y="60" width="40" height="16" rx="8" transform="rotate(45 200 60)"/><rect x="70" y="150" width="42" height="16" rx="8" transform="rotate(10 70 150)"/><rect x="160" y="170" width="40" height="16" rx="8" transform="rotate(-60 160 170)"/><rect x="220" y="190" width="45" height="16" rx="8" transform="rotate(20 220 190)"/><rect x="90" y="230" width="40" height="16" rx="8" transform="rotate(-15 90 230)"/></g></svg>`
  },
  paramecium: {
    title: "Protozoário Paramecium Ciliado",
    desc: "Organismo unicelular de água doce que usa cílios microscópicos ao redor do corpo para se locomover.",
    svg: `<svg class="slide-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#e0f7fa"/><ellipse cx="150" cy="150" rx="60" ry="110" fill="none" stroke="#00838f" stroke-width="6" stroke-dasharray="4,4" transform="rotate(-20 150 150)"/><ellipse cx="150" cy="150" rx="52" ry="100" fill="#4dd0e1" opacity="0.8" transform="rotate(-20 150 150)"/><ellipse cx="150" cy="140" rx="18" ry="28" fill="#006064" transform="rotate(-10 150 140)"/><circle cx="135" cy="85" r="10" fill="#e0f7fa" stroke="#00838f" stroke-width="2"/><circle cx="165" cy="210" r="10" fill="#e0f7fa" stroke="#00838f" stroke-width="2"/></svg>`
  },
  neuron: {
    title: "Neurónio (Célula Nervosa)",
    desc: "Célula especializada com axónios e dendritos responsável por transmitir impulsos elétricos pelo corpo.",
    svg: `<svg class="slide-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#fffde7"/><path d="M 150,150 Q 80,100 50,70 M 150,150 Q 220,90 260,60 M 150,150 Q 100,220 70,250 M 150,150 Q 220,220 250,240 M 150,150 L 280,150" stroke="#fbc02d" stroke-width="4" fill="none"/><circle cx="150" cy="150" r="22" fill="#f57f17"/><circle cx="150" cy="150" r="10" fill="#fff59d"/></svg>`
  },
  muscle: {
    title: "Fibra Muscular Esquelética",
    desc: "Tecido estriado responsável pelos movimentos voluntários, apresentando bandas claras e escuras.",
    svg: `<svg class="slide-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#ffebee"/><g stroke="#c62828" stroke-width="8"><line x1="0" y1="60" x2="300" y2="60"/><line x1="0" y1="120" x2="300" y2="120"/><line x1="0" y1="180" x2="300" y2="180"/><line x1="0" y1="240" x2="300" y2="240"/></g><g stroke="#ef9a9a" stroke-width="3" stroke-dasharray="10,10"><line x1="0" y1="60" x2="300" y2="60"/><line x1="0" y1="120" x2="300" y2="120"/><line x1="0" y1="180" x2="300" y2="180"/><line x1="0" y1="240" x2="300" y2="240"/></g></svg>`
  },
  bone: {
    title: "Tecido Ósseo Compacto (Sistema de Havers)",
    desc: "Cortes transversais mostrando os canais centrais por onde passam os vasos sanguíneos nos ossos.",
    svg: `<svg class="slide-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#efebe9"/><g fill="none" stroke="#4e342e" stroke-width="3"><circle cx="90" cy="90" r="35"/><circle cx="90" cy="90" r="18"/><circle cx="210" cy="90" r="35"/><circle cx="210" cy="90" r="18"/><circle cx="150" cy="210" r="35"/><circle cx="150" cy="210" r="18"/></g><circle cx="90" cy="90" r="6" fill="#3e2723"/><circle cx="210" cy="90" r="6" fill="#3e2723"/><circle cx="150" cy="210" r="6" fill="#3e2723"/></svg>`
  },
  stomata: {
    title: "Estômatos de Folha (Células-Guarda)",
    desc: "Pequenas aberturas na epiderme da folha que controlam a troca de gases e a transpiração da planta.",
    svg: `<svg class="slide-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#f1f8e9"/><path d="M 110,150 Q 150,90 190,150 Q 150,210 110,150 Z" fill="#c8e6c9" stroke="#33691e" stroke-width="4"/><ellipse cx="150" cy="150" rx="12" ry="25" fill="#1b5e20"/><circle cx="130" cy="130" r="6" fill="#558b2f"/><circle cx="170" cy="130" r="6" fill="#558b2f"/><circle cx="130" cy="170" r="6" fill="#558b2f"/><circle cx="170" cy="170" r="6" fill="#558b2f"/></svg>`
  },
  cheek: {
    title: "Células da Mucosa Bucal Humana",
    desc: "Células epiteliais planas retiradas do interior da bochecha, com núcleo visível ao centro.",
    svg: `<svg class="slide-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#fce4ec"/><path d="M 30,70 Q 90,30 160,60 Q 240,90 270,160 Q 280,240 210,270 Q 120,290 60,230 Q 10,160 30,70 Z" fill="#f8bbd0" stroke="#880e4f" stroke-width="3"/><circle cx="140" cy="150" r="16" fill="#880e4f"/><circle cx="140" cy="150" r="6" fill="#ad1457"/></svg>`
  },
  pollen: {
    title: "Grãos de Pólen",
    desc: "Estruturas reprodutivas das plantas com texturas fascinantes adaptadas para o transporte pelo vento ou insetos.",
    svg: `<svg class="slide-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#fffde7"/><g fill="#ffeb3b" stroke="#f57f17" stroke-width="3"><circle cx="80" cy="90" r="24"/><circle cx="210" cy="80" r="28"/><circle cx="140" cy="190" r="32"/><circle cx="220" cy="210" r="22"/></g><circle cx="80" cy="90" r="10" fill="#fbc02d"/><circle cx="210" cy="80" r="12" fill="#fbc02d"/><circle cx="140" cy="190" r="14" fill="#fbc02d"/><circle cx="220" cy="210" r="9" fill="#fbc02d"/></svg>`
  }
};

const lensContainer = document.getElementById('lens-container');
const slideSelect = document.getElementById('slide-select');
const focusSlider = document.getElementById('focus-slider');
const zoomSelect = document.getElementById('zoom-select');
const statusMsg = document.getElementById('status-msg');
const infoTitle = document.getElementById('info-title');
const infoDesc = document.getElementById('info-desc');

function loadSlide() {
  const selectedKey = slideSelect.value;
  const data = slidesData[selectedKey];

  lensContainer.innerHTML = data.svg;
  infoTitle.innerText = data.title;
  infoDesc.innerText = data.desc;
  
  focusSlider.value = 1;
  updateLens();
}

function updateLens() {
  const svgElement = lensContainer.querySelector('.slide-svg');
  if (!svgElement) return;

  const focusValue = parseFloat(focusSlider.value);
  const zoomValue = parseFloat(zoomSelect.value);

  const blurAmount = Math.abs(6 - focusValue) * 2.2;

  svgElement.style.filter = `blur(${blurAmount}px)`;
  svgElement.style.transform = `scale(${zoomValue})`;

  if (blurAmount <= 0.5) {
    statusMsg.innerText = "✨ Foco Perfeito! A imagem está cristalina.";
    statusMsg.style.color = "#00b894";
  } else if (blurAmount <= 4) {
    statusMsg.innerText = "🔍 Quase lá... ajuste o micrométrico!";
    statusMsg.style.color = "#fdcb6e";
  } else {
    statusMsg.innerText = "⚠️ Imagem desfocada. Mova a barra de foco!";
    statusMsg.style.color = "#e17055";
  }
}

slideSelect.addEventListener('change', loadSlide);
focusSlider.addEventListener('input', updateLens);
zoomSelect.addEventListener('change', updateLens);

loadSlide();