// Dados do Quiz: Organelas e Analogias
const quizData = [
  { id: 'mitocondria', organelle: '⚡ Mitocôndria', analogy: 'Usina de Energia (Produz ATP/Energia)' },
  { id: 'nucleo', organelle: '🧠 Núcleo', analogy: 'Centro de Comando / Prefeitura (Guarda o DNA)' },
  { id: 'ribossomo', organelle: '🏗️ Ribossoma', analogy: 'Fábrica de Construção (Sintetiza Proteínas)' },
  { id: 'complexo', organelle: '📦 Complexo de Golgi', analogy: 'Correios / Centro de Distribuição (Empacota e envia)' },
  { id: 'lisossomo', organelle: '♻️ Lisossoma', analogy: 'Empresa de Reciclagem / Limpeza (Digestão celular)' }
];

const organellesContainer = document.getElementById('organelles-container');
const analogiesContainer = document.getElementById('analogies-container');
const btnCheck = document.getElementById('btn-check');
const btnReset = document.getElementById('btn-reset');
const scoreText = document.getElementById('score-text');

let draggedItem = null;

// Inicializar o Jogo
function initGame() {
  organellesContainer.innerHTML = '';
  analogiesContainer.innerHTML = '';
  scoreText.innerText = `Pontuação: 0 / ${quizData.length}`;

  // Embaralhar as organelas e analogias para não ficarem na mesma ordem
  const shuffledOrganelles = [...quizData].sort(() => Math.random() - 0.5);
  const shuffledAnalogies = [...quizData].sort(() => Math.random() - 0.5);

  // Criar os itens arrastáveis (Organelas)
  shuffledOrganelles.forEach(item => {
    const el = document.createElement('div');
    el.className = 'draggable-item';
    el.draggable = true;
    el.dataset.id = item.id;
    el.innerText = item.organelle;

    el.addEventListener('dragstart', handleDragStart);
    el.addEventListener('dragend', handleDragEnd);

    organellesContainer.appendChild(el);
  });

  // Criar as zonas de soltar (Analogias)
  shuffledAnalogies.forEach(item => {
    const card = document.createElement('div');
    card.className = 'dropzone-card';
    card.dataset.correctId = item.id;

    card.innerHTML = `
      <div class="dropzone-label">🏢 ${item.analogy}</div>
      <div class="dropzone-slot"></div>
    `;

    card.addEventListener('dragover', handleDragOver);
    card.addEventListener('dragenter', handleDragEnter);
    card.addEventListener('dragleave', handleDragLeave);
    card.addEventListener('drop', handleDrop);

    analogiesContainer.appendChild(card);
  });
}

// Eventos de Arrastar
function handleDragStart(e) {
  draggedItem = this;
  setTimeout(() => this.classList.add('dragging'), 0);
}

function handleDragEnd(e) {
  this.classList.remove('dragging');
  draggedItem = null;
}

// Eventos da Zona de Soltar
function handleDragOver(e) {
  e.preventDefault();
}

function handleDragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function handleDragLeave() {
  this.classList.remove('hovered');
}

function handleDrop(e) {
  this.classList.remove('hovered');
  const slot = this.querySelector('.dropzone-slot');

  if (draggedItem) {
    // Se o slot já tiver um item, devolve-o para a caixa original
    if (slot.children.length > 0) {
      organellesContainer.appendChild(slot.children[0]);
    }
    slot.appendChild(draggedItem);
  }
}

// Permitir devolver itens para a caixa original ao arrastar de volta
organellesContainer.addEventListener('dragover', e => e.preventDefault());
organellesContainer.addEventListener('drop', function() {
  if (draggedItem) {
    organellesContainer.appendChild(draggedItem);
  }
});

// Verificar Respostas
btnCheck.addEventListener('click', () => {
  let score = 0;
  const cards = analogiesContainer.querySelectorAll('.dropzone-card');

  cards.forEach(card => {
    const slot = card.querySelector('.dropzone-slot');
    const correctId = card.dataset.correctId;

    card.classList.remove('correct', 'incorrect');

    if (slot.children.length > 0) {
      const placedItemId = slot.children[0].dataset.id;
      if (placedItemId === correctId) {
        card.classList.add('correct');
        score++;
      } else {
        card.classList.add('incorrect');
      }
    } else {
      card.classList.add('incorrect');
    }
  });

  scoreText.innerText = `Pontuação: ${score} / ${quizData.length}`;

  if (score === quizData.length) {
    alert('🎉 Parabéns! Acertaste em todas as analogias organela-mundo real!');
  } else {
    alert(`Fizeste ${score} de ${quizData.length} pontos. As caixas a vermelho precisam de ajuste!`);
  }
});

btnReset.addEventListener('click', initGame);

// Iniciar ao carregar
initGame();
