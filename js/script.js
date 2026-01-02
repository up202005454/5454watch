// Dados das opções de personalização
const customizationOptions = {
    dials: [
        { id: 1, name: "Wave Grey", image: "images/dials/wave1.png" },
        { id: 2, name: "Wave Black", image: "images/dials/wave2.png" },
        { id: 3, name: "Marine Master", image: "images/dials/marinemaster1.png" },
        { id: 4, name: "Thin Black", image: "images/dials/thindetailed1.png" },
        { id: 5, name: "Thin White", image: "images/dials/thindetailed2.png" },
        { id: 6, name: "Thin Blue", image: "images/dials/thindetailed3.png" },
        { id: 7, name: "Diver White", image: "images/dials/diverwhite.png" },
        { id: 8, name: "Diver Blue", image: "images/dials/diverbabyblue.png" },
        { id: 9, name: "Marine Master Blue", image: "images/dials/marinemasterblue.png" },
        { id: 10, name: "Romanic Grey", image: "images/dials/romangrey.png" },
        { id: 11, name: "Romanic Green", image: "images/dials/romangreen.png" },
        { id: 12, name: "Romanic Black", image: "images/dials/romanblack.png" },
        { id: 13, name: "Romanic BabyBlue", image: "images/dials/romanbabyblue.png" },
        { id: 14, name: "Diamond Brown", image: "images/dials/diamondbrown.png" },
        { id: 15, name: "Diamond Grey", image: "images/dials/diamondgrey.png" }
    ],
    hands: [
        { 
            id: 1, 
            name: "Clássicos", 
            image: "images/hands/classic_set.png",
            position: {
                top: "-8px",
                left: "22px",
                scale: 0.95
            }
        },
        { 
            id: 2, 
            name: "Class. Siver", 
            image: "images/hands/silver_set.png",
            position: {
                top: "3px",
                left: "-6px",
                scale: 1.3
            }
        },
        { 
            id: 3, 
            name: "Red", 
            image: "images/hands/reds_set.png",
            position: {
                top: "-12px",
                left: "10px",
                scale: 1.20
            }
        },
        { 
            id: 4, 
            name: "Golden", 
            image: "images/hands/golds_set.png",
            position: {
                top: "-19px",
                left: "10px",
                scale: 1.15
            }
        },
        { 
            id: 5, 
            name: "Silver", 
            image: "images/hands/silvers_set.png",
            position: {
                top: "-17px",
                left: "1px",
                scale: 1.2
            }
        },
        { 
            id: 6, 
            name: "Black", 
            image: "images/hands/blacks_set.png",
            position: {
                top: "17px",
                left: "6px",
                scale: 1.2
            }
        },
        { 
            id: 7, 
            name: "Black 2", 
            image: "images/hands/blacks2_set.png",
            position: {
                top: "22px",
                left: "10px",
                scale: 1.2
            }
        },
        { 
            id: 8, 
            name: "Rose Gold", 
            image: "images/hands/rosethin_set.png",
            position: {
                top: "-14px",
                left: "12px",
                scale: 1.1
            }
        },
        { 
            id: 9, 
            name: "Black thin style", 
            image: "images/hands/blackthin_set.png",
            position: {
                top: "-28px",
                left: "6px",
                scale: 1.2
            }
        }
    ],
        cases: [
        { 
            id: 1, 
            name: "C1", 
            image: "images/cases/conc1brac.png",
            position: {
                top: "24px",
                left: "17px",
                scale: 1.95
            }
        },
        { 
            id: 2, 
            name: "C2", 
            image: "images/cases/conc2brac.png",
            position: {
                top: "22px",
                left: "17px",
                scale: 1.95
            }
        },
        { 
            id: 3, 
            name: "Gold", 
            image: "images/cases/goldcrownbrac.png",
            position: {
                top: "-5px",
                left: "12px",
                scale: 1.95
            }
        },
        { 
            id: 4, 
            name: "Rose", 
            image: "images/cases/rosecrownbrac.png",
            position: {
                top: "7px",
                left: "14px",
                scale: 1.90
            }
        },
        { 
            id: 5, 
            name: "Wayne", 
            image: "images/cases/waynebrac.png",
            position: {
                top: "43px",
                left: "11px",
                scale: 1.95
            }
        },
        { 
            id: 6, 
            name: "Batman", 
            image: "images/cases/batmanbrac.png",
            position: {
                top: "-3px",
                left: "16px",
                scale: 1.95
            }
        },
        { 
            id: 7, 
            name: "Sub", 
            image: "images/cases/subbrac.png",
            position: {
                top: "40px",
                left: "9px",
                scale: 1.95
            }
        },
        { 
            id: 8, 
            name: "Rubber", 
            image: "images/cases/rubberbrac.png",
            position: {
                top: "42px",
                left: "21px",
                scale: 2
            }
        },
        { 
            id: 9, 
            name: "Silver", 
            image: "images/cases/simpsilverbrac.png",
            position: {
                top: "22px",
                left: "17px",
                scale: 1.80
            }
        },
        { 
            id: 10, 
            name: "Silver8", 
            image: "images/cases/octsilverbrac.png",
            position: {
                top: "30px",
                left: "14px",
                scale: 2
            }
        },
        { 
            id: 11, 
            name: "Black8", 
            image: "images/cases/octblackbrac.png",
            position: {
                top: "32px",
                left: "17px",
                scale: 1.95
            }
        }
    ]
};

// Estado atual das seleções
let currentSelections = {
    dial: customizationOptions.dials[0],
    hands: customizationOptions.hands[0],
    case: customizationOptions.cases[0]
};

// Controlador de inicialização
let isInitialized = false;

// Inicializar a interface
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Inicializando customizador...");
    
    // Verificar se já foi inicializado
    if (isInitialized) {
        console.log("⚠️ Já inicializado, ignorando...");
        return;
    }
    
    isInitialized = true;
    
    initializeOptions();
    updateWatchPreview();
    initializeWatchPreviewSticky();
});

// Inicializar as opções na página (APENAS UMA VEZ)
function initializeOptions() {
    console.log("🎨 Inicializando opções...");
    
    // 1. Mostradores
    const dialOptionsContainer = document.getElementById('dial-options');
    if (dialOptionsContainer && dialOptionsContainer.children.length === 0) {
        console.log("📋 Criando opções de mostrador...");
        customizationOptions.dials.forEach(dial => {
            const optionElement = createDialOptionElement(dial);
            dialOptionsContainer.appendChild(optionElement);
        });
    }
    
    // 2. Ponteiros
    const handsOptionsContainer = document.getElementById('hands-options');
    if (handsOptionsContainer && handsOptionsContainer.children.length === 0) {
        console.log("🕐 Criando opções de ponteiros...");
        customizationOptions.hands.forEach(hand => {
            const optionElement = createHandsOptionElement(hand);
            handsOptionsContainer.appendChild(optionElement);
        });
    }
    
    // 3. Cases
    const caseOptionsContainer = document.getElementById('case-options');
    if (caseOptionsContainer && caseOptionsContainer.children.length === 0) {
        console.log("⌚ Criando opções de case...");
        customizationOptions.cases.forEach(caseItem => {
            const optionElement = createCaseOptionElement(caseItem);
            caseOptionsContainer.appendChild(optionElement);
        });
    }
    
    console.log("✅ Todas as opções criadas!");
}

// Criar elemento de opção para mostradores
function createDialOptionElement(dial) {
    const div = document.createElement('div');
    div.className = 'option-item';
    div.dataset.id = dial.id;
    div.dataset.type = 'dial';
    
    // Pré-visualização
    const preview = document.createElement('div');
    preview.className = 'option-preview';
    
    if (dial.image) {
        preview.style.backgroundImage = `url('${dial.image}')`;
        preview.style.backgroundSize = 'contain';
        preview.style.backgroundPosition = 'center';
        preview.style.backgroundRepeat = 'no-repeat';
        preview.style.backgroundColor = '#f5f5f5';
    } else {
        preview.style.backgroundColor = '#ccc';
        preview.style.display = 'flex';
        preview.style.alignItems = 'center';
        preview.style.justifyContent = 'center';
        preview.innerHTML = '<span style="font-size: 10px; color: #666;">Sem imagem</span>';
    }
    
    const name = document.createElement('p');
    name.textContent = dial.name;
    name.style.fontSize = '0.9rem';
    name.style.marginTop = '5px';
    name.style.fontWeight = '500';
    
    div.appendChild(preview);
    div.appendChild(name);
    
    // Marcar a primeira opção como ativa
    if (dial.id === 1) {
        div.classList.add('active');
    }
    
    div.addEventListener('click', () => selectOption(dial, 'dial'));
    
    return div;
}

// Criar elemento de opção para ponteiros
function createHandsOptionElement(hand) {
    const div = document.createElement('div');
    div.className = 'option-item';
    div.dataset.id = hand.id;
    div.dataset.type = 'hands';
    
    // Pré-visualização
    const preview = document.createElement('div');
    preview.className = 'option-preview';
    
    if (hand.image) {
        preview.style.backgroundImage = `url('${hand.image}')`;
        preview.style.backgroundSize = 'contain';
        preview.style.backgroundPosition = 'center';
        preview.style.backgroundRepeat = 'no-repeat';
        preview.style.backgroundColor = '#f5f5f5';
    } else {
        preview.style.backgroundColor = '#ccc';
        preview.style.display = 'flex';
        preview.style.alignItems = 'center';
        preview.style.justifyContent = 'center';
        preview.innerHTML = '<span style="font-size: 10px; color: #666;">Sem imagem</span>';
    }
    
    const name = document.createElement('p');
    name.textContent = hand.name;
    name.style.fontSize = '0.9rem';
    name.style.marginTop = '5px';
    name.style.fontWeight = '500';
    
    div.appendChild(preview);
    div.appendChild(name);
    
    if (hand.id === 1) {
        div.classList.add('active');
    }
    
    div.addEventListener('click', () => selectOption(hand, 'hands'));
    
    return div;
}

// Criar elemento de opção para cases
function createCaseOptionElement(caseItem) {
    const div = document.createElement('div');
    div.className = 'option-item';
    div.dataset.id = caseItem.id;
    div.dataset.type = 'case';
    
    // Pré-visualização
    const preview = document.createElement('div');
    preview.className = 'option-preview';
    
    if (caseItem.image) {
        preview.style.backgroundImage = `url('${caseItem.image}')`;
        preview.style.backgroundSize = 'contain';
        preview.style.backgroundPosition = 'center';
        preview.style.backgroundRepeat = 'no-repeat';
        preview.style.backgroundColor = '#f5f5f5';
    } else {
        preview.style.backgroundColor = '#ccc';
    }
    
    const name = document.createElement('p');
    name.textContent = caseItem.name;
    name.style.fontSize = '0.9rem';
    name.style.marginTop = '5px';
    name.style.fontWeight = '500';
    
    div.appendChild(preview);
    div.appendChild(name);
    
    // Marcar a primeira opção como ativa
    if (caseItem.id === 1) {
        div.classList.add('active');
    }
    
    div.addEventListener('click', () => selectOption(caseItem, 'case'));
    
    return div;
}

// Selecionar uma opção
function selectOption(option, type) {
    console.log(`🎯 Selecionado: ${type} - ${option.name}`);
    
    // Atualizar seleção atual
    currentSelections[type] = option;
    
    // Atualizar visualização
    updateWatchPreview();
    
    // Atualizar estado visual das opções
    updateActiveOptions(type, option.id);
}

// Atualizar opções ativas
function updateActiveOptions(type, id) {
    // Remover classe 'active' de todas as opções deste tipo
    const options = document.querySelectorAll(`.option-item[data-type="${type}"]`);
    options.forEach(opt => opt.classList.remove('active'));
    
    // Adicionar classe 'active' à opção selecionada
    const selectedOption = document.querySelector(`.option-item[data-type="${type}"][data-id="${id}"]`);
    if (selectedOption) {
        selectedOption.classList.add('active');
    }
}

// Atualizar pré-visualização do relógio
function updateWatchPreview() {
    console.log("🔄 Atualizando visualização...");
    
    // Elementos
    const dial = document.getElementById('watch-dial');
    const handsOverlay = document.getElementById('watch-hands');
    const caseOverlay = document.getElementById('watch-case-overlay');
    
    if (!dial || !handsOverlay || !caseOverlay) {
        console.error("❌ Elementos do relógio não encontrados!");
        return;
    }
    
    // 1. ATUALIZAR CASE/PULSEIRA
    const caseOption = currentSelections.case;
    
    if (caseOption.image) {
        caseOverlay.style.backgroundImage = `url('${caseOption.image}')`;
        caseOverlay.style.backgroundColor = 'transparent';
        caseOverlay.style.backgroundSize = 'contain';
        caseOverlay.style.backgroundPosition = 'center';
        caseOverlay.style.backgroundRepeat = 'no-repeat';
        caseOverlay.style.opacity = '1';
        
        // Aplicar ajustes de posição do CASE
        if (caseOption.position) {
            const pos = caseOption.position;
            const topValue = parseInt(pos.top) || 0;
            const leftValue = parseInt(pos.left) || 0;
            const scaleValue = pos.scale || 1.0;
            
            const transform = `translate(calc(-50% + ${leftValue}px), calc(-50% + ${topValue}px)) scale(${scaleValue})`;
            caseOverlay.style.transform = transform;
        } else {
            caseOverlay.style.transform = 'translate(-50%, -50%)';
        }
    } else {
        caseOverlay.style.opacity = '0';
    }
    
    // 2. ATUALIZAR MOSTRADOR (sem círculo transparente)
    const dialOption = currentSelections.dial;
    if (dialOption.image) {
        dial.style.backgroundImage = `url('${dialOption.image}')`;
        dial.style.backgroundSize = 'cover'; // Usar COVER para eliminar bordas transparentes
        dial.style.backgroundPosition = 'center center';
        dial.style.backgroundRepeat = 'no-repeat';
        dial.style.border = 'none';
        dial.style.boxShadow = 'none';
        dial.style.outline = 'none';
    } else {
        dial.style.backgroundImage = 'none';
    }
    
    // 3. ATUALIZAR PONTEIROS
    const handsOption = currentSelections.hands;
    if (handsOption.image) {
        handsOverlay.style.backgroundImage = `url('${handsOption.image}')`;
        handsOverlay.style.backgroundColor = 'transparent';
        handsOverlay.style.backgroundSize = 'contain';
        handsOverlay.style.backgroundPosition = 'center';
        handsOverlay.style.backgroundRepeat = 'no-repeat';
        handsOverlay.style.opacity = '1';
        
        if (handsOption.position) {
            const pos = handsOption.position;
            const topValue = parseInt(pos.top) || 0;
            const leftValue = parseInt(pos.left) || 0;
            const scaleValue = pos.scale || 1.0;
            
            const transform = `translate(calc(-50% + ${leftValue}px), calc(-50% + ${topValue}px)) scale(${scaleValue})`;
            handsOverlay.style.transform = transform;
        }
    }
    
    console.log("✅ Visualização atualizada");
}

// Sistema de Preview Sticky
function initializeWatchPreviewSticky() {
    const preview = document.querySelector('.watch-preview');
    const customizerContainer = document.querySelector('.customizer-container');
    const header = document.querySelector('header');
    
    if (!preview || !customizerContainer || !header) return;
    
    let isSticky = false;
    let isBottom = false;
    let containerTop = 0;
    let containerHeight = 0;
    let previewHeight = 0;
    
    function init() {
        const containerRect = customizerContainer.getBoundingClientRect();
        const previewRect = preview.getBoundingClientRect();
        
        containerTop = containerRect.top + window.scrollY;
        containerHeight = containerRect.height;
        previewHeight = preview.offsetHeight;
    }
    
    function updateSticky() {
        const scrollY = window.scrollY;
        const headerHeight = header.offsetHeight;
        const stickPoint = containerTop - headerHeight - 20;
        const releasePoint = containerTop + containerHeight - previewHeight - 100;
        
        // Quando começar a rolar além do ponto de fixação
        if (scrollY > stickPoint && !isSticky && scrollY < releasePoint) {
            isSticky = true;
            isBottom = false;
            
            preview.classList.add('sticky-fixed');
            preview.classList.remove('sticky-bottom');
            
            // Calcular posição esquerda
            const containerRect = customizerContainer.getBoundingClientRect();
            const leftPosition = Math.max(20, containerRect.left);
            
            preview.style.left = leftPosition + 'px';
            preview.style.width = preview.offsetWidth + 'px';
            preview.style.top = (headerHeight + 20) + 'px';
        }
        
        // Quando voltar ao topo
        if (scrollY <= stickPoint && isSticky) {
            isSticky = false;
            isBottom = false;
            
            preview.classList.remove('sticky-fixed', 'sticky-bottom');
            preview.style.left = '';
            preview.style.width = '';
            preview.style.top = '';
        }
        
        // Quando chegar ao final do container
        if (scrollY >= releasePoint && isSticky && !isBottom) {
            isBottom = true;
            
            preview.classList.remove('sticky-fixed');
            preview.classList.add('sticky-bottom');
            
            preview.style.position = 'absolute';
            preview.style.top = 'auto';
            preview.style.bottom = '0';
            preview.style.left = '0';
        }
        
        // Ajustar se a janela for redimensionada
        if (isSticky && !isBottom) {
            const containerRect = customizerContainer.getBoundingClientRect();
            const leftPosition = Math.max(20, containerRect.left);
            preview.style.left = leftPosition + 'px';
            preview.style.top = (headerHeight + 20) + 'px';
        }
    }
    
    // Inicializar
    window.addEventListener('load', function() {
        setTimeout(() => {
            init();
            updateSticky();
        }, 500);
    });
    
    window.addEventListener('scroll', updateSticky);
    window.addEventListener('resize', function() {
        init();
        updateSticky();
    });
    
    // Observar mudanças no DOM
    const observer = new MutationObserver(function() {
        init();
        updateSticky();
    });
    
    observer.observe(customizerContainer, {
        childList: true,
        subtree: true
    });
}

// Função auxiliar para verificar duplicatas (debug)
function checkForDuplicates() {
    console.log("🔍 Verificando duplicatas...");
    
    const containers = ['dial-options', 'hands-options', 'case-options'];
    
    containers.forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            const items = container.querySelectorAll('.option-item');
            console.log(`${id}: ${items.length} itens`);
            
            if (items.length > 15) {
                console.log(`⚠️ POSSÍVEL DUPLICAÇÃO em ${id}!`);
            }
        }
    });
}

// Chamar para debug (opcional)
setTimeout(checkForDuplicates, 1000);
