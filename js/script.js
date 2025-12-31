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
                top: "-10px",
                left: "23px",
                scale: 0.9
            }
            },
        { 
            id: 9, 
            name: "Black thin style", 
            image: "/5454watch/images/hands/blackthin_set.png",
            position: {
                top: "-10px",
                left: "23px",
                scale: 0.9
            }
            },
        
    ],
    straps: [
        { id: 1, name: "Couro Marrom", color: "#8B4513", material: "leather" },
        { id: 2, name: "Couro Preto", color: "#111111", material: "leather" },
        { id: 3, name: "Metal Prata", color: "#c0c0c0", material: "metal" },
        { id: 4, name: "Silicone Azul", color: "#1e90ff", material: "silicone" },
        { id: 5, name: "Náutico", color: "#2c3e50", material: "fabric" },
        { id: 6, name: "Esportivo", color: "#e74c3c", material: "rubber" }
    ]
};

// Estado atual das seleções
let currentSelections = {
    dial: customizationOptions.dials[0],
    hands: customizationOptions.hands[0],
    strap: customizationOptions.straps[0]
};

// Inicializar a interface
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Inicializando customizador...");
    initializeOptions();
    updateWatchPreview();
    
    // Iniciar ferramenta de ajuste
    initializePositionAdjuster();
    
    // DEBUG: Verificar inicialização
    console.log("✅ Customizador inicializado");
    console.log("Mostrador atual:", currentSelections.dial.name);
    console.log("Ponteiros atuais:", currentSelections.hands.name);
    console.log("Pulseira atual:", currentSelections.strap.name);
});

// Inicializar as opções na página
function initializeOptions() {
    console.log("📋 Inicializando opções...");
    
    // Opções de mostrador
    const dialOptionsContainer = document.getElementById('dial-options');
    if (!dialOptionsContainer) {
        console.error("❌ Elemento 'dial-options' não encontrado!");
        return;
    }
    
    dialOptionsContainer.innerHTML = '';
    customizationOptions.dials.forEach(dial => {
        const optionElement = createDialOptionElement(dial);
        dialOptionsContainer.appendChild(optionElement);
    });

    // Opções de ponteiros
    const handsOptionsContainer = document.getElementById('hands-options');
    if (handsOptionsContainer) {
        handsOptionsContainer.innerHTML = '';
        customizationOptions.hands.forEach(hand => {
            const optionElement = createHandsOptionElement(hand);
            handsOptionsContainer.appendChild(optionElement);
        });
    }

    // Opções de pulseira
    const strapOptionsContainer = document.getElementById('strap-options');
    if (strapOptionsContainer) {
        strapOptionsContainer.innerHTML = '';
        customizationOptions.straps.forEach(strap => {
            const optionElement = createStrapOptionElement(strap);
            strapOptionsContainer.appendChild(optionElement);
        });
    }
    
    console.log(`✅ ${customizationOptions.dials.length} mostradores carregados`);
    console.log(`✅ ${customizationOptions.hands.length} conjuntos de ponteiros carregados`);
    console.log(`✅ ${customizationOptions.straps.length} pulseiras carregadas`);
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

// Criar elemento de opção para pulseiras
function createStrapOptionElement(strap) {
    const div = document.createElement('div');
    div.className = 'option-item';
    div.dataset.id = strap.id;
    div.dataset.type = 'strap';
    
    const preview = document.createElement('div');
    preview.className = 'option-preview';
    preview.style.backgroundColor = strap.color;
    
    if (strap.material === 'metal') {
        preview.style.background = `linear-gradient(135deg, ${strap.color} 0%, #ffffff 100%)`;
    } else if (strap.material === 'fabric') {
        preview.style.background = `repeating-linear-gradient(45deg, ${strap.color} 0px, ${strap.color} 2px, #ffffff 2px, #ffffff 4px)`;
    }
    
    const name = document.createElement('p');
    name.textContent = strap.name;
    name.style.fontSize = '0.9rem';
    name.style.marginTop = '5px';
    name.style.fontWeight = '500';
    
    div.appendChild(preview);
    div.appendChild(name);
    
    if (strap.id === 1) {
        div.classList.add('active');
    }
    
    div.addEventListener('click', () => selectOption(strap, 'strap'));
    
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
    const strap = document.getElementById('watch-strap');
    
    if (!dial || !handsOverlay || !strap) {
        console.error("❌ Elementos do relógio não encontrados!");
        return;
    }
    
    // 1. ATUALIZAR MOSTRADOR
    const dialOption = currentSelections.dial;
    console.log("Aplicando mostrador:", dialOption.name, "Imagem:", dialOption.image);
    
    dial.style.backgroundImage = dialOption.image ? `url('${dialOption.image}')` : 'none';
    dial.style.backgroundSize = 'contain';
    dial.style.backgroundPosition = 'center';
    dial.style.backgroundRepeat = 'no-repeat';
    dial.style.backgroundColor = 'transparent';
    
    // 2. ATUALIZAR PONTEIROS
    const handsOption = currentSelections.hands;
    console.log("Aplicando ponteiros:", handsOption.name, "Imagem:", handsOption.image);
    
    if (handsOption.image) {
        handsOverlay.style.backgroundImage = `url('${handsOption.image}')`;
        handsOverlay.style.backgroundColor = 'transparent';
        handsOverlay.style.backgroundSize = 'contain';
        handsOverlay.style.backgroundPosition = 'center';
        handsOverlay.style.backgroundRepeat = 'no-repeat';
        handsOverlay.style.opacity = '1';
        
        // APLICAR AJUSTES DE POSIÇÃO
        if (handsOption.position) {
            const pos = handsOption.position;
            const topValue = parseInt(pos.top) || 0;
            const leftValue = parseInt(pos.left) || 0;
            const scaleValue = pos.scale || 1.0;
            
            // USAR TRANSFORM PARA MOVER
            const transform = `translate(calc(-50% + ${leftValue}px), calc(-50% + ${topValue}px)) scale(${scaleValue})`;
            handsOverlay.style.transform = transform;
            
            console.log(`Posição aplicada: transform="${transform}"`);
        } else {
            // Posição padrão
            handsOverlay.style.transform = 'translate(-50%, -50%)';
        }
    } else {
        handsOverlay.style.opacity = '0';
        console.warn("⚠️ Sem imagem para os ponteiros");
    }
    
    // 3. ATUALIZAR PULSEIRA
    const strapOption = currentSelections.strap;
    console.log("Aplicando pulseira:", strapOption.name, "Cor:", strapOption.color);
    
    strap.style.backgroundColor = strapOption.color;
    strap.style.backgroundImage = 'none';
    
    if (strapOption.material === 'metal') {
        strap.style.background = `linear-gradient(90deg, #888 0%, ${strapOption.color} 30%, ${strapOption.color} 70%, #888 100%)`;
    } else if (strapOption.material === 'fabric') {
        strap.style.background = `repeating-linear-gradient(45deg, ${strapOption.color} 0px, ${strapOption.color} 2px, #ffffff 2px, #ffffff 4px)`;
    }
    
    console.log("✅ Visualização atualizada");
}

// FERRAMENTA DE AJUSTE DE POSIÇÃO
function initializePositionAdjuster() {
    console.log("🔧 Inicializando ferramenta de ajuste...");
    
    // REMOVER elementos antigos se existirem
    const oldBtn = document.getElementById('toggle-adjuster');
    const oldPanel = document.getElementById('position-adjuster');
    
    if (oldBtn) oldBtn.remove();
    if (oldPanel) oldPanel.remove();
    
    // 1. CRIAR BOTÃO GRANDE E VISÍVEL
    const toggleButton = document.createElement('button');
    toggleButton.id = 'toggle-adjuster';
    toggleButton.innerHTML = '⚙️<br>AJUSTAR<br>PONTEIROS';
    toggleButton.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        color: white;
        border: none;
        padding: 15px;
        border-radius: 10px;
        cursor: pointer;
        z-index: 99999;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        box-shadow: 0 6px 12px rgba(231, 76, 60, 0.4);
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1.2;
    `;
    
    // 2. CRIAR PAINEL DE CONTROLE
    const adjusterPanel = document.createElement('div');
    adjusterPanel.id = 'position-adjuster';
    adjusterPanel.style.cssText = `
        position: fixed;
        bottom: 200px;
        right: 20px;
        background: white;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        z-index: 99998;
        width: 350px;
        border: 3px solid #2c3e50;
        display: none;
    `;
    
    adjusterPanel.innerHTML = `
        <div style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0; color: #2c3e50;">📐 AJUSTAR PONTEIROS</h3>
            <button id="close-adjuster" style="background: #f44336; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">X</button>
        </div>
        
        <div style="background: #f8f9fa; padding: 10px; border-radius: 8px; margin-bottom: 15px;">
            <div style="font-size: 12px; color: #666; margin-bottom: 5px;">Ponteiros atuais: <strong id="current-hands-name">${currentSelections.hands.name}</strong></div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <label style="font-weight: bold;">← ESQUERDA → DIREITA</label>
                <span id="horizontal-value" style="font-weight: bold; color: #e74c3c;">0px</span>
            </div>
            <input type="range" id="horizontal-slider" min="-100" max="100" value="0" style="width: 100%; height: 10px;">
        </div>
        
        <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <label style="font-weight: bold;">↑ CIMA ↓ BAIXO</label>
                <span id="vertical-value" style="font-weight: bold; color: #3498db;">0px</span>
            </div>
            <input type="range" id="vertical-slider" min="-100" max="100" value="0" style="width: 100%; height: 10px;">
        </div>
        
        <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <label style="font-weight: bold;">🔍 TAMANHO</label>
                <span id="scale-value" style="font-weight: bold; color: #2ecc71;">100%</span>
            </div>
            <input type="range" id="scale-slider" min="50" max="200" value="100" step="5" style="width: 100%; height: 10px;">
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <button id="apply-adjustment" style="padding: 12px; background: #27ae60; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
                ✅ APLICAR
            </button>
            <button id="reset-adjustment" style="padding: 12px; background: #e74c3c; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
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
    console.log("✅ Ferramenta de ajuste criada!");
    
    // 4. EVENTOS
    toggleButton.addEventListener('click', function() {
        adjusterPanel.style.display = adjusterPanel.style.display === 'block' ? 'none' : 'block';
        // Atualizar nome dos ponteiros atuais
        document.getElementById('current-hands-name').textContent = currentSelections.hands.name;
    });
    
    document.getElementById('close-adjuster').addEventListener('click', function() {
        adjusterPanel.style.display = 'none';
    });
    
    // Sliders
    const horizontalSlider = document.getElementById('horizontal-slider');
    const verticalSlider = document.getElementById('vertical-slider');
    const scaleSlider = document.getElementById('scale-slider');
    
    // Configurar valores iniciais baseados na posição atual
    const currentPos = currentSelections.hands.position || { top: "0px", left: "0px", scale: 1.0 };
    horizontalSlider.value = parseInt(currentPos.left) || 0;
    verticalSlider.value = parseInt(currentPos.top) || 0;
    scaleSlider.value = (currentPos.scale || 1.0) * 100;
    
    document.getElementById('horizontal-value').textContent = `${horizontalSlider.value}px`;
    document.getElementById('vertical-value').textContent = `${verticalSlider.value}px`;
    document.getElementById('scale-value').textContent = `${scaleSlider.value}%`;
    
    horizontalSlider.addEventListener('input', (e) => {
        document.getElementById('horizontal-value').textContent = `${e.target.value}px`;
    });
    
    verticalSlider.addEventListener('input', (e) => {
        document.getElementById('vertical-value').textContent = `${e.target.value}px`;
    });
    
    scaleSlider.addEventListener('input', (e) => {
        document.getElementById('scale-value').textContent = `${e.target.value}%`;
    });
    
    // Aplicar ajustes
    document.getElementById('apply-adjustment').addEventListener('click', function() {
        const handsOption = currentSelections.hands;
        const horizontal = parseInt(horizontalSlider.value);
        const vertical = parseInt(verticalSlider.value);
        const scale = parseInt(scaleSlider.value) / 100;
        
        handsOption.position = {
            top: `${vertical}px`,
            left: `${horizontal}px`,
            scale: scale
        };
        
        updateWatchPreview();
        
        console.log('🎯 ===== VALORES PARA COPIAR =====');
        console.log(`// Ajustes para: ${handsOption.name}`);
        console.log(`position: {`);
        console.log(`  top: "${vertical}px",`);
        console.log(`  left: "${horizontal}px",`);
        console.log(`  scale: ${scale.toFixed(2)}`);
        console.log(`}`);
        console.log('=================================');
        
        alert(`✅ Ajustes aplicados!\n\nAbra o console (F12) para copiar os valores.`);
    });
    
    // Resetar
    document.getElementById('reset-adjustment').addEventListener('click', function() {
        horizontalSlider.value = 0;
        verticalSlider.value = 0;
        scaleSlider.value = 100;
        
        document.getElementById('horizontal-value').textContent = '0px';
        document.getElementById('vertical-value').textContent = '0px';
        document.getElementById('scale-value').textContent = '100%';
        
        const handsOption = currentSelections.hands;
        handsOption.position = {
            top: "0px",
            left: "0px",
            scale: 1.0
        };
        
        updateWatchPreview();
        alert('🔄 Ajustes resetados para padrão!');
    });
}

// DEBUG: Verificar imagens
function debugImages() {
    console.log("=== DEBUG DE IMAGENS ===");
    
    // Testar imagens com fallback
    const testImages = [
        'images/dials/wave1.png',
        'images/hands/classic_set.png'
    ];
    
    testImages.forEach(url => {
        const img = new Image();
        img.onload = () => console.log(`✅ ${url} - CARREGADA`);
        img.onerror = () => console.log(`❌ ${url} - NÃO ENCONTRADA`);
        img.src = url;
    });
    
    // Verificar elementos
    console.log("Elementos encontrados:");
    console.log("- watch-dial:", document.getElementById('watch-dial') ? "✅" : "❌");
    console.log("- watch-hands:", document.getElementById('watch-hands') ? "✅" : "❌");
    console.log("- watch-strap:", document.getElementById('watch-strap') ? "✅" : "❌");
    
    // Adicionar bordas para visualização
    setTimeout(() => {
        const dial = document.getElementById('watch-dial');
        const hands = document.getElementById('watch-hands');
        
        if (dial) {
            dial.style.border = "2px dashed red";
            console.log("🔴 Borda vermelha adicionada ao mostrador");
        }
        
        if (hands) {
            hands.style.border = "2px dashed blue";
            console.log("🔵 Borda azul adicionada aos ponteiros");
        }
    }, 500);
}

// Executar debug após carregamento
setTimeout(debugImages, 1000);

// DEBUG AVANÇADO: Testar todos os caminhos de imagem
function testAllImagePaths() {
    console.log("🔍 TESTANDO TODOS OS CAMINHOS DE IMAGEM...");
    
    const allImages = [];
    
    // Coletar todas as imagens
    customizationOptions.dials.forEach(dial => {
        allImages.push({ type: 'dial', name: dial.name, path: dial.image });
    });
    
    customizationOptions.hands.forEach(hand => {
        allImages.push({ type: 'hands', name: hand.name, path: hand.image });
    });
    
    // Testar cada imagem
    allImages.forEach(item => {
        const img = new Image();
        img.onload = () => {
            console.log(`✅ ${item.type.toUpperCase()} - ${item.name}: CARREGADA`);
            console.log(`   Caminho: ${item.path}`);
        };
        img.onerror = () => {
            console.log(`❌ ${item.type.toUpperCase()} - ${item.name}: FALHA`);
            console.log(`   Caminho: ${item.path}`);
            console.log(`   URL tentada: ${img.src}`);
        };
        img.src = item.path;
    });
    
    // Verificar estrutura de elementos
    console.log("\n🎯 ESTRUTURA DO RELÓGIO:");
    console.log("- watch-case:", document.getElementById('watch-case') ? "✅ EXISTE" : "❌ NÃO EXISTE");
    console.log("- watch-dial:", document.getElementById('watch-dial') ? "✅ EXISTE" : "❌ NÃO EXISTE");
    console.log("- watch-hands:", document.getElementById('watch-hands') ? "✅ EXISTE" : "❌ NÃO EXISTE");
    console.log("- watch-strap:", document.getElementById('watch-strap') ? "✅ EXISTE" : "❌ NÃO EXISTE");
    
    // Forçar visualização dos elementos
    setTimeout(() => {
        const elements = ['watch-case', 'watch-dial', 'watch-hands', 'watch-strap'];
        elements.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.border = "2px solid red";
                console.log(`🔴 Borda vermelha adicionada a #${id}`);
            }
        });
    }, 1000);
}

// Executar após 2 segundos
setTimeout(testAllImagePaths, 2000);
