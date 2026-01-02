// Dados das opções de personalização
const customizationOptions = {
    dials: [
        { id: 1, name: "Wave Grey", image: "/5454watch/images/dials/wave1.png" },
        { id: 2, name: "Wave Black", image: "/5454watch/images/dials/wave2.png" },
        { id: 3, name: "Marine Master", image: "/5454watch/images/dials/marinemaster1.png" },
        { id: 4, name: "Thin Black", image: "/5454watch/images/dials/thindetailed1.png" },
        { id: 5, name: "Thin White", image: "/5454watch/images/dials/thindetailed2.png" },
        { id: 6, name: "Thin Blue", image: "/5454watch/images/dials/thindetailed3.png" },
        { id: 7, name: "Diver White", image: "/5454watch/images/dials/diverwhite.png" },
        { id: 8, name: "Diver Blue", image: "/5454watch/images/dials/diverbabyblue.png" },
        { id: 9, name: "Marine Master Blue", image: "/5454watch/images/dials/marinemasterblue.png" },
        { id: 10, name: "Romanic Grey", image: "/5454watch/images/dials/romangrey.png" },
        { id: 11, name: "Romanic Green", image: "/5454watch/images/dials/romangreen.png" },
        { id: 12, name: "Romanic Black", image: "/5454watch/images/dials/romanblack.png" },
        { id: 13, name: "Romanic BabyBlue", image: "/5454watch/images/dials/romanbabyblue.png" },
        { id: 14, name: "Diamond Brown", image: "/5454watch/images/dials/diamondbrown.png" },
        { id: 15, name: "Diamond Grey", image: "/5454watch/images/dials/diamondgrey.png" }
    ],
    hands: [
        { 
            id: 1, 
            name: "Clássicos", 
            image: "/5454watch/images/hands/classic_set.png",
            position: {
                top: "-8px",
                left: "22px",
                scale: 0.95
            }
            },
        { 
            id: 2, 
            name: "Class. Siver", 
            image: "/5454watch/images/hands/silver_set.png",
            position: {
                top: "3px",
                left: "-6px",
                scale: 1.3
            }
            },
        { 
            id: 3, 
            name: "Red", 
            image: "/5454watch/images/hands/reds_set.png",
            position: {
            top: "-12px",
            left: "10px",
            scale: 1.20
            }
            },
        { 
            id: 4 , 
            name: "Golden", 
            image: "/5454watch/images/hands/golds_set.png",
            position: {
                top: "-19px",
                left: "10px",
                scale: 1.15
            }
            },
        
        { 
            id: 5, 
            name: "Silver", 
            image: "/5454watch/images/hands/silvers_set.png",
            position: {
                top: "-17px",
                left: "1px",
                scale: 1.2
            }
            },
        { 
            id: 6, 
            name: "Black", 
            image: "/5454watch/images/hands/blacks_set.png",
            position: {
                top: "17px",
                left: "6px",
                scale: 1.2
            }
            },
        { 
            id: 7, 
            name: "Black 2", 
            image: "/5454watch/images/hands/blacks2_set.png",
            position: {
                top: "22px",
                left: "10px",
                scale: 1.2
            }
            },
        { 
            id: 8, 
            name: "Rose Gold", 
            image: "/5454watch/images/hands/rosethin_set.png",
            position: {
                top: "-14 px",
                left: "12px",
                scale: 1.1
            }
            },
        { 
            id: 9, 
            name: "Black thin style", 
            image: "/5454watch/images/hands/blackthin_set.png",
            position: {
                top: "-28px",
                left: "6px",
                scale: 1.2
            }
            },
        
    ],
   //* straps: [
       cases: [
        { 
            id: 1, 
            name: "C1", 
            image: "./images/cases/conc1brac.png",
            position: {
                top: "0px",
                left: "0px",
                scale: 1.0
            }
        },
        { 
            id: 2, 
            name: "C2", 
            image: "./images/cases/conc2brac.png",
            position: {
                top: "0px",
                left: "0px",
                scale: 1.0
            }
        },
        { 
            id: 3, 
            name: "Gold", 
            image: "./images/cases/goldcrownbrac.png",
            position: {
                top: "0px",
                left: "0px",
                scale: 1.0
            }
        },
        { 
            id: 4, 
            name: "Rose", 
            image: "./images/cases/rosecrownbrac.png",
            position: {
                top: "0px",
                left: "0px",
                scale: 1.0
            }
        },
        { 
            id: 5, 
            name: "Wayne", 
            image: "./images/cases/waynebrac.png",
            position: {
                top: "0px",
                left: "0px",
                scale: 1.0
            }
            },
            { 
            id: 6, 
            name: "Batman", 
            image: "./images/cases/batmanbrac.png",
            position: {
                top: "0px",
                left: "0px",
                scale: 1.0
                }
                },
            { 
            id: 7, 
            name: "Sub", 
            image: "./images/cases/subbrac.png",
            position: {
                top: "0px",
                left: "0px",
                scale: 1.0
            }
            },
            { 
            id: 8, 
            name: "Rubber", 
            image: "./images/cases/rubberbrac.png",
            position: {
                top: "0px",
                left: "0px",
                scale: 1.0
            }
            },
            { 
            id: 9, 
            name: "Silver", 
            image: "./images/cases/simpsilverbrac.png",
            position: {
                top: "0px",
                left: "0px",
                scale: 1.0
            }
            },
            { 
            id: 10, 
            name: "Silver8", 
            image: "./images/cases/octsilverbrac.png",
            position: {
                top: "0px",
                left: "0px",
                scale: 1.0
            }
            },
            { 
            id: 11, 
            name: "Black8", 
            image: "./images/cases/octblackbrac.png",
            position: {
                top: "0px",
                left: "0px",
                scale: 1.0
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

// Inicializar a interface
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Inicializando customizador...");
    initializeOptions();
    updateWatchPreview();
    
    // Iniciar ferramenta de ajuste
    initializePositionAdjuster();
    initializeCasePositionAdjuster();
});

// Inicializar as opções na página
function initializeOptions() {
        // Opções de mostrador (mantém igual)
    const dialOptionsContainer = document.getElementById('dial-options');
    customizationOptions.dials.forEach(dial => {
        const optionElement = createDialOptionElement(dial);
        dialOptionsContainer.appendChild(optionElement);
    });

    // Opções de ponteiros (mantém igual)
    const handsOptionsContainer = document.getElementById('hands-options');
    customizationOptions.hands.forEach(hand => {
        const optionElement = createHandsOptionElement(hand);
        handsOptionsContainer.appendChild(optionElement);
    });

    // NOVO: Opções de case/pulseira
    const caseOptionsContainer = document.getElementById('case-options');
    if (caseOptionsContainer) {
        caseOptionsContainer.innerHTML = '';
        customizationOptions.cases.forEach(caseItem => {
            const optionElement = createCaseOptionElement(caseItem);
            caseOptionsContainer.appendChild(optionElement);
        });
    }
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

// NOVA FUNÇÃO: Criar elemento de opção para cases
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
        preview.style.backgroundColor = caseItem.color || '#ccc';
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

    // Atualizar nome nas ferramentas de ajuste
    if (type === 'hands' && document.getElementById('current-hands-name')) {
        document.getElementById('current-hands-name').textContent = option.name;
    }
    if (type === 'case' && document.getElementById('current-case-name')) {
        document.getElementById('current-case-name').textContent = option.name;
    }
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

// Atualizar pré-visualização do relógio COM CASES
function updateWatchPreview() {
    console.log("🔄 Atualizando visualização...");
    
    // Elementos
    const dial = document.getElementById('watch-dial');
    const handsOverlay = document.getElementById('watch-hands');
    const caseOverlay = document.getElementById('watch-case-overlay'); // NOVO
    
    if (!dial || !handsOverlay || !caseOverlay) {
        console.error("❌ Elementos do relógio não encontrados!");
        return;
    }
    
    // 1. ATUALIZAR CASE/PULSEIRA (fica ATRÁS do mostrador)
    const caseOption = currentSelections.case;
    console.log("Aplicando case:", caseOption.name, "Imagem:", caseOption.image);
    
    if (caseOption.image) {
        caseOverlay.style.backgroundImage = `url('${caseOption.image}')`;
        caseOverlay.style.backgroundColor = 'transparent';
        caseOverlay.style.backgroundSize = 'contain';
        caseOverlay.style.backgroundPosition = 'center';
        caseOverlay.style.backgroundRepeat = 'no-repeat';
        caseOverlay.style.opacity = '1';
        
        // APLICAR AJUSTES DE POSIÇÃO DO CASE
        if (caseOption.position) {
            const pos = caseOption.position;
            const topValue = parseInt(pos.top) || 0;
            const leftValue = parseInt(pos.left) || 0;
            const scaleValue = pos.scale || 1.0;
            
            const transform = `translate(calc(-50% + ${leftValue}px), calc(-50% + ${topValue}px)) scale(${scaleValue})`;
            caseOverlay.style.transform = transform;
            
            console.log(`Case posição: transform="${transform}"`);
        } else {
            caseOverlay.style.transform = 'translate(-50%, -50%)';
        }
    } else {
        caseOverlay.style.opacity = '0';
    }
    
    // 2. ATUALIZAR MOSTRADOR (mantém igual)
    const dialOption = currentSelections.dial;
    dial.style.backgroundImage = dialOption.image ? `url('${dialOption.image}')` : 'none';
    dial.style.backgroundSize = 'contain';
    dial.style.backgroundPosition = 'center';
    dial.style.backgroundRepeat = 'no-repeat';
    
    // 3. ATUALIZAR PONTEIROS (mantém igual)
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

// NOVA FERRAMENTA: Ajuste de posição para Cases
function initializeCasePositionAdjuster() {
    console.log("🔧 Inicializando ferramenta de ajuste para Cases...");
    
    // REMOVER elementos antigos se existirem
    const oldBtn = document.getElementById('toggle-case-adjuster');
    const oldPanel = document.getElementById('case-position-adjuster');
    
    if (oldBtn) oldBtn.remove();
    if (oldPanel) oldPanel.remove();
    
    // 1. CRIAR BOTÃO PARA CASES
    const toggleButton = document.createElement('button');
    toggleButton.id = 'toggle-case-adjuster';
    toggleButton.innerHTML = '🔄<br>AJUSTAR<br>CASES';
    toggleButton.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 120px;  /* Mais à esquerda para não sobrepor o outro botão */
        background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
        color: white;
        border: none;
        padding: 15px;
        border-radius: 10px;
        cursor: pointer;
        z-index: 99999;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        box-shadow: 0 6px 12px rgba(52, 152, 219, 0.4);
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1.2;
    `;
    
    // 2. CRIAR PAINEL DE CONTROLE PARA CASES
    const adjusterPanel = document.createElement('div');
    adjusterPanel.id = 'case-position-adjuster';
    adjusterPanel.style.cssText = `
        position: fixed;
        bottom: 200px;
        right: 120px;
        background: white;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        z-index: 99998;
        width: 350px;
        border: 3px solid #3498db;
        display: none;
    `;
    
    adjusterPanel.innerHTML = `
        <div style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0; color: #2c3e50;">📐 AJUSTAR CASE/PULSEIRA</h3>
            <button id="close-case-adjuster" style="background: #f44336; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">X</button>
        </div>
        
        <div style="background: #f8f9fa; padding: 10px; border-radius: 8px; margin-bottom: 15px;">
            <div style="font-size: 12px; color: #666; margin-bottom: 5px;">Case atual: <strong id="current-case-name">${currentSelections.case.name}</strong></div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <label style="font-weight: bold;">← ESQUERDA → DIREITA</label>
                <span id="case-horizontal-value" style="font-weight: bold; color: #3498db;">0px</span>
            </div>
            <input type="range" id="case-horizontal-slider" min="-100" max="100" value="0" style="width: 100%; height: 10px;">
        </div>
        
        <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <label style="font-weight: bold;">↑ CIMA ↓ BAIXO</label>
                <span id="case-vertical-value" style="font-weight: bold; color: #9b59b6;">0px</span>
            </div>
            <input type="range" id="case-vertical-slider" min="-100" max="100" value="0" style="width: 100%; height: 10px;">
        </div>
        
        <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <label style="font-weight: bold;">🔍 TAMANHO</label>
                <span id="case-scale-value" style="font-weight: bold; color: #2ecc71;">100%</span>
            </div>
            <input type="range" id="case-scale-slider" min="50" max="200" value="100" step="5" style="width: 100%; height: 10px;">
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <button id="apply-case-adjustment" style="padding: 12px; background: #27ae60; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
                ✅ APLICAR
            </button>
            <button id="reset-case-adjustment" style="padding: 12px; background: #e74c3c; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
                🔄 RESETAR
            </button>
        </div>
        
        <div style="margin-top: 15px; padding: 10px; background: #e8f4fc; border-radius: 5px; font-size: 12px; color: #2c3e50;">
            💡 <strong>Como usar:</strong> Ajuste os sliders e clique em "APLICAR". Copie os valores do console (F12).
        </div>
    `;
    
    // 3. ADICIONAR AO BODY
    document.body.appendChild(toggleButton);
    document.body.appendChild(adjusterPanel);
    console.log("✅ Ferramenta de ajuste para Cases criada!");
    
    // 4. EVENTOS
    toggleButton.addEventListener('click', function() {
        adjusterPanel.style.display = adjusterPanel.style.display === 'block' ? 'none' : 'block';
        document.getElementById('current-case-name').textContent = currentSelections.case.name;
    });
    
    document.getElementById('close-case-adjuster').addEventListener('click', function() {
        adjusterPanel.style.display = 'none';
    });
    
    // Sliders para cases
    const horizontalSlider = document.getElementById('case-horizontal-slider');
    const verticalSlider = document.getElementById('case-vertical-slider');
    const scaleSlider = document.getElementById('case-scale-slider');
    
    // Configurar valores iniciais
    const currentPos = currentSelections.case.position || { top: "0px", left: "0px", scale: 1.0 };
    horizontalSlider.value = parseInt(currentPos.left) || 0;
    verticalSlider.value = parseInt(currentPos.top) || 0;
    scaleSlider.value = (currentPos.scale || 1.0) * 100;
    
    document.getElementById('case-horizontal-value').textContent = `${horizontalSlider.value}px`;
    document.getElementById('case-vertical-value').textContent = `${verticalSlider.value}px`;
    document.getElementById('case-scale-value').textContent = `${scaleSlider.value}%`;
    
    // Eventos dos sliders
    horizontalSlider.addEventListener('input', (e) => {
        document.getElementById('case-horizontal-value').textContent = `${e.target.value}px`;
    });
    
    verticalSlider.addEventListener('input', (e) => {
        document.getElementById('case-vertical-value').textContent = `${e.target.value}px`;
    });
    
    scaleSlider.addEventListener('input', (e) => {
        document.getElementById('case-scale-value').textContent = `${e.target.value}%`;
    });
    
    // Aplicar ajustes para cases
    document.getElementById('apply-case-adjustment').addEventListener('click', function() {
        const caseOption = currentSelections.case;
        const horizontal = parseInt(horizontalSlider.value);
        const vertical = parseInt(verticalSlider.value);
        const scale = parseInt(scaleSlider.value) / 100;
        
        caseOption.position = {
            top: `${vertical}px`,
            left: `${horizontal}px`,
            scale: scale
        };
        
        updateWatchPreview();
        
        console.log('🎯 ===== VALORES PARA COPIAR (CASE) =====');
        console.log(`// Ajustes para: ${caseOption.name}`);
        console.log(`position: {`);
        console.log(`  top: "${vertical}px",`);
        console.log(`  left: "${horizontal}px",`);
        console.log(`  scale: ${scale.toFixed(2)}`);
        console.log(`}`);
        console.log('=========================================');
        
        alert(`✅ Ajustes do Case aplicados!\n\nAbra o console (F12) para copiar os valores.`);
    });
    
    // Resetar ajustes para cases
    document.getElementById('reset-case-adjustment').addEventListener('click', function() {
        horizontalSlider.value = 0;
        verticalSlider.value = 0;
        scaleSlider.value = 100;
        
        document.getElementById('case-horizontal-value').textContent = '0px';
        document.getElementById('case-vertical-value').textContent = '0px';
        document.getElementById('case-scale-value').textContent = '100%';
        
        const caseOption = currentSelections.case;
        caseOption.position = {
            top: "0px",
            left: "0px",
            scale: 1.0
        };
        
        updateWatchPreview();
        alert('🔄 Ajustes do Case resetados para padrão!');
    });
}
