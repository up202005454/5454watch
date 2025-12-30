// Atualizar pré-visualização do relógio
function updateWatchPreview() {
    // Atualizar mostrador
    const dial = document.getElementById('watch-dial');
    const dialOption = currentSelections.dial;
    
    dial.style.backgroundImage = dialOption.image ? `url('${dialOption.image}')` : 'none';
    dial.style.backgroundSize = 'contain';
    dial.style.backgroundPosition = 'center';
    dial.style.backgroundRepeat = 'no-repeat';
    dial.style.backgroundColor = 'transparent';
    
    // Atualizar ponteiros com ajuste de posição
    const handsOption = currentSelections.hands;
    const handsOverlay = document.getElementById('watch-hands');
    
    if (handsOption.image) {
        handsOverlay.style.backgroundImage = `url('${handsOption.image}')`;
        handsOverlay.style.backgroundColor = 'transparent';
        handsOverlay.style.backgroundSize = 'contain';
        handsOverlay.style.backgroundPosition = 'center';
        handsOverlay.style.backgroundRepeat = 'no-repeat';
        handsOverlay.style.opacity = '1';
        
        // RESETAR POSIÇÃO PRIMEIRO
        handsOverlay.style.top = '50%';
        handsOverlay.style.left = '50%';
        handsOverlay.style.transform = 'translate(-50%, -50%)';
        
        // APLICAR AJUSTES DE POSIÇÃO - VERSÃO SIMPLIFICADA
        if (handsOption.position) {
            const pos = handsOption.position;
            const topValue = parseInt(pos.top) || 0;
            const leftValue = parseInt(pos.left) || 0;
            const scaleValue = pos.scale || 1.0;
            
            // USAR TRANSFORM PARA MOVER - FUNCIONA MELHOR
            handsOverlay.style.transform = `translate(calc(-50% + ${leftValue}px), calc(-50% + ${topValue}px)) scale(${scaleValue})`;
            
            console.log(`Transform: translate(calc(-50% + ${leftValue}px), calc(-50% + ${topValue}px)) scale(${scaleValue})`);
        }
    } else {
        handsOverlay.style.opacity = '0';
    }
    
    // Atualizar pulseira
    const strap = document.getElementById('watch-strap');
    const strapOption = currentSelections.strap;
    
    strap.style.backgroundColor = strapOption.color;
    strap.style.backgroundImage = 'none';
    
    if (strapOption.material === 'metal') {
        strap.style.background = `linear-gradient(90deg, #888 0%, ${strapOption.color} 30%, ${strapOption.color} 70%, #888 100%)`;
    } else if (strapOption.material === 'fabric') {
        strap.style.background = `repeating-linear-gradient(45deg, ${strapOption.color} 0px, ${strapOption.color} 2px, #ffffff 2px, #ffffff 4px)`;
    }
} // ← FECHA AQUI A FUNÇÃO

// FERRAMENTA DE AJUSTE DE POSIÇÃO
function initializePositionAdjuster() {
    console.log("🚀 Criando ferramenta de ajuste...");
    
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
            <div style="font-size: 12px; color: #666; margin-bottom: 5px;">Ponteiros atuais: <strong id="current-hands-name">Clássicos</strong></div>
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

// TESTE RÁPIDO - Adiciona controles visuais
setTimeout(function() {
    // Criar controles simples
    const debugControls = document.createElement('div');
    debugControls.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 15px;
        border-radius: 10px;
        z-index: 9999;
        font-family: monospace;
    `;
    
    debugControls.innerHTML = `
        <h4 style="margin: 0 0 10px 0;">🎯 DEBUG Ponteiros</h4>
        <div style="margin-bottom: 10px;">
            <button onclick="moveHands(-10, 0)" style="padding: 5px 10px; margin-right: 5px;">← Esquerda</button>
            <button onclick="moveHands(10, 0)" style="padding: 5px 10px;">Direita →</button>
        </div>
        <div style="margin-bottom: 10px;">
            <button onclick="moveHands(0, -10)" style="padding: 5px 10px; margin-right: 5px;">↑ Cima</button>
            <button onclick="moveHands(0, 10)" style="padding: 5px 10px;">Baixo ↓</button>
        </div>
        <div style="font-size: 12px;">
            <div id="debug-info">Posição: 0px, 0px</div>
            <div id="debug-css">CSS: ...</div>
        </div>
    `;
    
    document.body.appendChild(debugControls);
    
    // Funções de movimento
    window.moveHands = function(left, top) {
        const hands = document.getElementById('watch-hands');
        const currentLeft = parseInt(hands.style.left) || 50;
        const currentTop = parseInt(hands.style.top) || 50;
        
        hands.style.left = `${currentLeft + left}%`;
        hands.style.top = `${currentTop + top}%`;
        
        // Atualizar info
        document.getElementById('debug-info').textContent = 
            `Posição: ${hands.style.left}, ${hands.style.top}`;
        document.getElementById('debug-css').textContent = 
            `CSS: left: ${hands.style.left}; top: ${hands.style.top}`;
        
        console.log(`Movido: left=${hands.style.left}, top=${hands.style.top}`);
    };
    
    // Atualizar info inicial
    const hands = document.getElementById('watch-hands');
    document.getElementById('debug-info').textContent = 
        `Posição: ${hands.style.left || '50%'}, ${hands.style.top || '50%'}`;
    document.getElementById('debug-css').textContent = 
        `CSS: left: ${hands.style.left || '50%'}; top: ${hands.style.top || '50%'}`;
    
    console.log("🔧 Controles de debug adicionados!");
}, 1000);
