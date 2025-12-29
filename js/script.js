// Dados das opções de personalização
const customizationOptions = {
    dials: [
        { id: 1, name: "Onda Cinza", price: 20, image: "images/dials/wave1.png" },
        { id: 2, name: "Onda Preto", price: 20, image: "images/dials/wave2.png" },
        { id: 3, name: "MarineMaster", price: 20, image: "images/dials/marinemaster1.png" },
        { id: 4, name: "Quadricula Preto", price: 20, image: "images/dials/thindetailed1.png" },
        { id: 5, name: "Quadricula Branco", price: 20, image: "images/dials/thindetailed2.png" },
        { id: 6, name: "Quadricula Azul", price: 20, image: "images/dials/thindetailed3.png" },
        { id: 7, name: "Diver Branco", price: 20, image: "images/dials/diverwhite.png" },
        { id: 8, name: "Diver Azul", price: 20, image: "images/dials/diverbabyblue.png" },
        { id: 9, name: "Quadricula Azul", price: 20, image: "images/dials/thindetailed3" }
    ],
    hands: [
        { id: 1, name: "Clássicos", price: 0, hourColor: "#e74c3c", minuteColor: "#3498db", secondColor: "#f1c40f" },
        { id: 2, name: "Prata", price: 15, hourColor: "#bdc3c7", minuteColor: "#95a5a6", secondColor: "#7f8c8d" },
        { id: 3, name: "Dourados", price: 30, hourColor: "#D4AF37", minuteColor: "#F1C40F", secondColor: "#F7DC6F" },
        { id: 4, name: "Luminosos", price: 25, hourColor: "#00ff00", minuteColor: "#00ffff", secondColor: "#ff00ff" }
    ],
    straps: [
        { id: 1, name: "Couro Marrom", price: 0, color: "#8B4513", material: "leather" },
        { id: 2, name: "Couro Preto", price: 20, color: "#111111", material: "leather" },
        { id: 3, name: "Metal Prata", price: 40, color: "#c0c0c0", material: "metal" },
        { id: 4, name: "Silicone Azul", price: 15, color: "#1e90ff", material: "silicone" },
        { id: 5, name: "Náutico", price: 25, color: "#2c3e50", material: "fabric" },
        { id: 6, name: "Esportivo", price: 18, color: "#e74c3c", material: "rubber" }
    ]
};

// Estado atual das seleções
let currentSelections = {
    dial: customizationOptions.dials[0],
    hands: customizationOptions.hands[0],
    strap: customizationOptions.straps[0]
};

// Preço base do relógio
const basePrice = 299.00;

// Inicializar a interface
document.addEventListener('DOMContentLoaded', function() {
    initializeOptions();
    updateWatchPreview();
    updatePriceSummary();
    
    // Adicionar eventos aos botões
    document.getElementById('add-to-cart').addEventListener('click', addToCart);
    document.getElementById('save-design').addEventListener('click', saveDesign);
    
    // Animar ponteiros
    animateWatchHands();
});

// Inicializar as opções na página
function initializeOptions() {
    // Opções de mostrador
    const dialOptionsContainer = document.getElementById('dial-options');
    customizationOptions.dials.forEach(dial => {
        const optionElement = createOptionElement(dial, 'dial');
        dialOptionsContainer.appendChild(optionElement);
    });

    // Opções de ponteiros
    const handsOptionsContainer = document.getElementById('hands-options');
    customizationOptions.hands.forEach(hand => {
        const optionElement = createOptionElement(hand, 'hands');
        handsOptionsContainer.appendChild(optionElement);
    });

    // Opções de pulseira
    const strapOptionsContainer = document.getElementById('strap-options');
    customizationOptions.straps.forEach(strap => {
        const optionElement = createOptionElement(strap, 'strap');
        strapOptionsContainer.appendChild(optionElement);
    });
}

// Criar elemento de opção
function createOptionElement(option, type) {
    const div = document.createElement('div');
    div.className = 'option-item';
    div.dataset.id = option.id;
    div.dataset.type = type;
    
    // Criar pré-visualização visual
    const preview = document.createElement('div');
    preview.className = 'option-preview';
    
    // Definir cor/estilo baseado no tipo
    if (type === 'dial') {
        // Se tem imagem, usa imagem
        if (option.image) {
            preview.style.backgroundImage = `url('${option.image}')`;
            preview.style.backgroundSize = 'cover';
            preview.style.backgroundPosition = 'center';
            preview.style.backgroundColor = 'transparent';
        } 
        // Se não tem imagem, usa cor/pattern
        else if (option.color) {
            preview.style.backgroundColor = option.color;
            if (option.pattern === 'gradient') {
                preview.style.background = `linear-gradient(135deg, ${option.color} 0%, #87CEEB 100%)`;
            } else if (option.pattern === 'metal') {
                preview.style.background = `linear-gradient(135deg, ${option.color} 0%, #ffffff 100%)`;
            } else if (option.pattern === 'wood') {
                preview.style.background = `repeating-linear-gradient(45deg, ${option.color} 0px, ${option.color} 2px, #A0522D 2px, #A0522D 4px)`;
            } else if (option.pattern === 'carbon') {
                preview.style.background = `linear-gradient(135deg, #1a1a1a 25%, transparent 25%) -10px 0,
                                          linear-gradient(225deg, #1a1a1a 25%, transparent 25%) -10px 0,
                                          linear-gradient(315deg, #1a1a1a 25%, transparent 25%),
                                          linear-gradient(45deg, #1a1a1a 25%, transparent 25%)`;
                preview.style.backgroundSize = '20px 20px';
                preview.style.backgroundColor = option.color;
            }
        }
    } 
    else if (type === 'hands') {
        preview.style.background = `linear-gradient(90deg, ${option.hourColor} 33%, ${option.minuteColor} 33%, ${option.minuteColor} 66%, ${option.secondColor} 66%)`;
    } 
    else if (type === 'strap') {
        preview.style.backgroundColor = option.color;
        if (option.material === 'metal') {
            preview.style.background = `linear-gradient(135deg, ${option.color} 0%, #ffffff 100%)`;
        } else if (option.material === 'fabric') {
            preview.style.background = `repeating-linear-gradient(45deg, ${option.color} 0px, ${option.color} 2px, #ffffff 2px, #ffffff 4px)`;
        }
    }
    
    const name = document.createElement('p');
    name.textContent = option.name;
    name.style.fontSize = '0.9rem';
    name.style.marginTop = '5px';
    name.style.fontWeight = '500';
    
    const price = document.createElement('p');
    price.textContent = option.price > 0 ? `+ R$ ${option.price.toFixed(2)}` : 'Incluído';
    price.style.fontSize = '0.8rem';
    price.style.color = option.price > 0 ? '#e74c3c' : '#27ae60';
    
    div.appendChild(preview);
    div.appendChild(name);
    div.appendChild(price);
    
    // Marcar a primeira opção como ativa
    if (option.id === 1) {
        div.classList.add('active');
    }
    
    // Adicionar evento de clique
    div.addEventListener('click', () => selectOption(option, type));
    
    return div;
}

// Selecionar uma opção
function selectOption(option, type) {
    // Atualizar seleção atual
    currentSelections[type] = option;
    
    // Atualizar visualização
    updateWatchPreview();
    
    // Atualizar preço
    updatePriceSummary();
    
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
    // Atualizar mostrador
    const dial = document.getElementById('watch-dial');
    const dialOption = currentSelections.dial;
    
    // Resetar estilos
    dial.style.backgroundImage = 'none';
    dial.style.backgroundColor = '';
    dial.style.background = '';
    dial.style.backgroundSize = '';
    
    // Se tem imagem, usar imagem
    if (dialOption.image) {
        dial.style.backgroundImage = `url('${dialOption.image}')`;
        dial.style.backgroundSize = 'cover';
        dial.style.backgroundPosition = 'center';
        dial.style.backgroundColor = 'transparent';
    }
    // Se não tem imagem, usar cor/pattern
    else if (dialOption.color) {
        if (dialOption.pattern === 'solid') {
            dial.style.backgroundColor = dialOption.color;
        } else if (dialOption.pattern === 'gradient') {
            dial.style.background = `radial-gradient(circle, ${dialOption.color} 0%, #000000 100%)`;
        } else if (dialOption.pattern === 'metal') {
            dial.style.background = `radial-gradient(circle at 30% 30%, #ffffff 0%, ${dialOption.color} 70%, #000000 100%)`;
        } else if (dialOption.pattern === 'wood') {
            // Simulação de textura de madeira
            dial.style.background = `repeating-linear-gradient(45deg, ${dialOption.color} 0px, ${dialOption.color} 2px, #A0522D 2px, #A0522D 4px)`;
        } else if (dialOption.pattern === 'carbon') {
            // Simulação de fibra de carbono
            dial.style.background = `linear-gradient(135deg, #1a1a1a 25%, transparent 25%) -10px 0,
                                    linear-gradient(225deg, #1a1a1a 25%, transparent 25%) -10px 0,
                                    linear-gradient(315deg, #1a1a1a 25%, transparent 25%),
                                    linear-gradient(45deg, #1a1a1a 25%, transparent 25%)`;
            dial.style.backgroundSize = '20px 20px';
            dial.style.backgroundColor = dialOption.color;
        } else if (dialOption.pattern === 'matte') {
            dial.style.backgroundColor = dialOption.color;
            dial.style.background = `linear-gradient(135deg, ${dialOption.color} 0%, #333 100%)`;
        } else {
            dial.style.backgroundColor = dialOption.color;
        }
    }
    
    // Atualizar ponteiros
    const handsOption = currentSelections.hands;
    document.getElementById('hour-hand').style.backgroundColor = handsOption.hourColor;
    document.getElementById('minute-hand').style.backgroundColor = handsOption.minuteColor;
    document.getElementById('second-hand').style.backgroundColor = handsOption.secondColor;
    
    // Atualizar pulseira
    const strap = document.getElementById('watch-strap');
    const strapOption = currentSelections.strap;
    
    // Resetar estilos da pulseira
    strap.style.backgroundImage = 'none';
    strap.style.backgroundColor = '';
    strap.style.background = '';
    strap.style.boxShadow = '';
    
    if (strapOption.material === 'leather') {
        strap.style.backgroundColor = strapOption.color;
        strap.style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.3)';
    } else if (strapOption.material === 'metal') {
        strap.style.background = `linear-gradient(90deg, #888 0%, ${strapOption.color} 30%, ${strapOption.color} 70%, #888 100%)`;
        strap.style.boxShadow = '0 0 10px rgba(255,255,255,0.5)';
    } else if (strapOption.material === 'fabric') {
        strap.style.background = `repeating-linear-gradient(45deg, ${strapOption.color} 0px, ${strapOption.color} 2px, #ffffff 2px, #ffffff 4px)`;
    } else {
        strap.style.backgroundColor = strapOption.color;
    }
}

// Atualizar resumo de preço
function updatePriceSummary() {
    const dialPrice = currentSelections.dial.price;
    const handsPrice = currentSelections.hands.price;
    const strapPrice = currentSelections.strap.price;
    
    // Atualizar valores individuais
    document.getElementById('dial-price').textContent = `R$ ${dialPrice.toFixed(2)}`;
    document.getElementById('hands-price').textContent = `R$ ${handsPrice.toFixed(2)}`;
    document.getElementById('strap-price').textContent = `R$ ${strapPrice.toFixed(2)}`;
    
    // Calcular preço de personalização
    const customPrice = dialPrice + handsPrice + strapPrice;
    document.getElementById('custom-price').textContent = `R$ ${customPrice.toFixed(2)}`;
    
    // Calcular e atualizar preço total
    const totalPrice = basePrice + customPrice;
    document.getElementById('total-price').textContent = `R$ ${totalPrice.toFixed(2)}`;
}

// Animar ponteiros do relógio
function animateWatchHands() {
    function updateClock() {
        const now = new Date();
        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        const hourDeg = (hours * 30) + (minutes * 0.5);
        const minuteDeg = (minutes * 6) + (seconds * 0.1);
        const secondDeg = seconds * 6;
        
        document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
        document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
        document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    }
    
    // Atualizar imediatamente
    updateClock();
    
    // Atualizar a cada segundo
    setInterval(updateClock, 1000);
}

// Adicionar ao carrinho
function addToCart() {
    const totalPrice = basePrice + currentSelections.dial.price + currentSelections.hands.price + currentSelections.strap.price;
    
    alert(`Relógio personalizado adicionado ao carrinho!\n\nConfiguração:\n- Mostrador: ${currentSelections.dial.name}\n- Ponteiros: ${currentSelections.hands.name}\n- Pulseira: ${currentSelections.strap.name}\n\nTotal: R$ ${totalPrice.toFixed(2)}`);
    
    // Em um site real, aqui você enviaria os dados para o carrinho
    // Exemplo com localStorage:
    try {
        const cart = JSON.parse(localStorage.getItem('watchCart')) || [];
        cart.push({
            id: Date.now(),
            configuration: currentSelections,
            totalPrice: totalPrice,
            date: new Date().toISOString()
        });
        localStorage.setItem('watchCart', JSON.stringify(cart));
    } catch (e) {
        console.log("Não foi possível salvar no carrinho");
    }
}

// Salvar design
function saveDesign() {
    const designName = prompt("Digite um nome para salvar seu design personalizado:");
    
    if (designName) {
        alert(`Design "${designName}" salvo com sucesso!`);
        
        // Salvar no localStorage
        try {
            const savedDesigns = JSON.parse(localStorage.getItem('watchDesigns')) || [];
            savedDesigns.push({
                name: designName,
                selections: currentSelections,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('watchDesigns', JSON.stringify(savedDesigns));
        } catch (e) {
            console.log("Não foi possível salvar no localStorage");
        }
    }
}

// Função adicional para carregar imagens com fallback
function loadImageWithFallback(imageUrl, fallbackColor) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(imageUrl);
        img.onerror = () => resolve(fallbackColor);
        img.src = imageUrl;
    });
}
