// Base de Dados configurada com as imagens reais da pasta imagens/ e o seu foco ideal exclusivo
const slidesData = {
  onion: {
    title: "Epiderme de Cebola (Célula Vegetal)",
    desc: "Parede celular vegetal bem evidente corada em tons de roxo com o núcleo visível.",
    img: "../imagens/epiderme cebola.jpg",
    focoIdeal: 4.5
  },
  blood: {
    title: "Esfregaço de Sangue Humano",
    desc: "Hemácias distribuídas uniformemente pelo campo de visão para transporte de oxigênio.",
    img: "../imagens/sangue.jpg",
    focoIdeal: 7.2
  },
  bacteria: {
    title: "Colónia de Bactérias Bacilos",
    desc: "Micro-organismos procariontes em colónias densas.",
    img: "../imagens/bacilos.jpg",
    focoIdeal: 3.0
  },
  neuron: {
    title: "Neurônios e Axônios",
    desc: "Células nervosas altamente ramificadas para condução de impulsos elétricos.",
    img: "../imagens/neuronio.jpg",
    focoIdeal: 8.1
  },
  muscle: {
    title: "Fibra Muscular Esquelética",
    desc: "Tecido muscular estriado responsável pelos movimentos voluntários do corpo.",
    img: "../imagens/fibra muscular.jpg",
    focoIdeal: 5.5
  },
  bone: {
    title: "Tecido Ósseo Compacto",
    desc: "Matriz óssea ricamente vascularizada e estruturada.",
    img: "../imagens/tecido osseo.jpg",
    focoIdeal: 2.2
  },
  stomata: {
    title: "Estômatos de Folha",
    desc: "Aberturas especializadas na epiderme foliar para trocas gasosas e transpiração.",
    img: "../imagens/estomato folha.jpg",
    focoIdeal: 6.8
  },
  paramecium: {
    title: "Protozoário Paramecium",
    desc: "Organismo unicelular ciliado de ambiente aquático doce.",
    img: "../imagens/paramecium.jpg",
    focoIdeal: 4.0
  },
  cheek: {
    title: "Células da Mucosa Bucal",
    desc: "Células epiteliais planas do revestimento interno da boca humana.",
    img: "../imagens/mucosa bucal.jpg",
    focoIdeal: 7.8
  },
  pollen: {
    title: "Grãos de Pólen",
    desc: "Microssporos vegetais com superfícies ornamentadas adaptadas para polinização.",
    img: "../imagens/polen.jpg",
    focoIdeal: 5.0
  }
};

// Referências HTML
const viewport = document.getElementById('viewport');
const slideSelect = document.getElementById('slide-select');
const focusSlider = document.getElementById('focus-slider');
const zoomSelect = document.getElementById('zoom-select');
const lightSlider = document.getElementById('light-slider');
const statusTag = document.getElementById('status-tag');
const infoTitle = document.getElementById('info-title');
const infoDesc = document.getElementById('info-desc');
const focusVal = document.getElementById('focus-val');
const lightVal = document.getElementById('light-val');
const btnSnap = document.getElementById('btn-snap');
const gallery = document.getElementById('gallery');

// Carregar Lâmina com Imagem Real
function loadSlide() {
  const data = slidesData[slideSelect.value];
  
  // Injeta a tag <img> apontando para a foto da pasta imagens/
  viewport.innerHTML = `<img src="${data.img}" alt="${data.title}" style="width:100%; height:100%; object-fit:cover;">`;
  
  infoTitle.innerText = data.title;
  infoDesc.innerText = data.desc;
  
  // O slider começa sempre desalinhado (em 1.0) para obrigar o aluno a procurar o foco certo
  focusSlider.value = 1.0;
  updateMicroscope();
}

// Atualizar Efeitos do Microscópio e Mensagem de Foco
function updateMicroscope() {
  const focus = parseFloat(focusSlider.value);
  const zoom = parseFloat(zoomSelect.value);
  const light = parseFloat(lightSlider.value);

  // Obtém o foco ideal específico da lâmina atualmente selecionada
  const currentSlide = slidesData[slideSelect.value];
  const blur = Math.abs(currentSlide.focoIdeal - focus) * 2.2;

  // Atualizar contadores no painel
  focusVal.innerText = `${Math.round((focus / 10) * 100)}%`;
  lightVal.innerText = `${light}%`;

  // Aplicar Filtros no Visor
  viewport.style.filter = `blur(${blur}px) brightness(${light}%)`;
  viewport.style.transform = `scale(${zoom})`;

  // Mensagens pedagógicas dinâmicas
  if (blur <= 0.4) {
    statusTag.innerText = "✨ Foco Perfeito! A imagem está cristalina.";
    statusTag.style.color = "#00b894";
  } else if (blur <= 2.5) {
    statusTag.innerText = "🔍 Quase lá... ajuste fino no parafuso!";
    statusTag.style.color = "#fdcb6e";
  } else {
    statusTag.innerText = "⚠️ Imagem desfocada. Mova a barra de foco!";
    statusTag.style.color = "#ff7675";
  }
}

// Tirar Foto e Guardar no LocalStorage para o Diário do Cientista
btnSnap.addEventListener('click', () => {
  const currentSlide = slidesData[slideSelect.value];
  
  const newPhoto = {
    title: currentSlide.title,
    html: viewport.innerHTML
  };

  let photos = JSON.parse(localStorage.getItem('scilab_microscope_photos') || '[]');
  photos.push(newPhoto);
  localStorage.setItem('scilab_microscope_photos', JSON.stringify(photos));

  // Mostrar miniatura na galeria local da página do microscópio
  const thumb = document.createElement('div');
  thumb.className = 'photo-thumb';
  thumb.style.overflow = 'hidden';
  thumb.style.background = '#000';
  thumb.title = currentSlide.title;
  thumb.innerHTML = viewport.innerHTML;
  gallery.appendChild(thumb);

  alert(`📸 Foto de "${currentSlide.title}" guardada no seu Diário do Cientista!`);
});

// Eventos
slideSelect.addEventListener('change', loadSlide);
focusSlider.addEventListener('input', updateMicroscope);
zoomSelect.addEventListener('change', updateMicroscope);
lightSlider.addEventListener('input', updateMicroscope);

// Iniciar
loadSlide();