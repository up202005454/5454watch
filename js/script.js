// Dados das opções de personalização
const customizationOptions = {
    dials: [
        { id: 1, name: "Wave Grey", price: 20, image: "images/dials/wave1.png" },
        { id: 2, name: "Wave Black", price: 20, image: "images/dials/wave2.png" },
        { id: 3, name: "Marine Master Y", price: 20, image: "images/dials/marinemaster1.png" },
        { id: 4, name: "Thin Preto", price: 20, image: "images/dials/thindetailed1.png" },
        { id: 5, name: "Thin Branco", price: 20, image: "images/dials/thindetailed2.png" },
        { id: 6, name: "Thin Azul", price: 20, image: "images/dials/thindetailed3.png" },
        { id: 7, name: "Diver Branco", price: 20, image: "images/dials/diverwhite.png" },
        { id: 8, name: "Diver Azul", price: 20, image: "images/dials/diverbabyblue.png" },
        { id: 9, name: "Marine Master Blue", price: 20, image: "images/dials/marinemasterblue.png" },
        { id: 10, name: "Romanic Grey", price: 20, image: "images/dials/romangrey.png" },
        { id: 11, name: "Romanic Green", price: 20, image: "images/dials/romangreen.png" },
        { id: 12, name: "Romanic Black", price: 20, image: "images/dials/romanblack.png" },
        { id: 13, name: "Romanic BabyBlue", price: 20, image: "images/dials/romanbabyblue.png" },
        { id: 14, name: "Diamond Brown", price: 20, image: "images/dials/diamondbrown.png" },
        { id: 15, name: "Diamond Grey", price: 20, image: "images/dials/diamondgrey.png" }
    ],
    hands: [
        { 
            id: 1, 
            name: "Clássicos", 
            price: 0, 
            image: "images/hands/classic_set.png" // Imagem com os 3 ponteiros
        },
        { 
            id: 2, 
            name: "Prata", 
            price: 15, 
            image: "images/hands/silver_set.png" // Imagem com os 3 ponteiros
        },
        { 
            id: 3, 
            name: "Dourados", 
            price: 30, 
            image: "images/hands/gold_set.png" // Imagem com os 3 ponteiros
        },
        { 
            id: 4, 
            name: "Luminosos", 
            price: 25, 
            image: "images/hands/luminous_set.png" // Imagem com os 3 ponteiros
        }
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
});

// Inicializar as opções na página
function initializeOptions() {
    // Opções de mostrador
    const dialOptionsContainer = document.getElementById('dial-options');
    customizationOptions.dials.forEach(dial => {
        const optionElement = createDialOptionElement(dial);
        dialOptionsContainer.appendChild(optionElement);
    });

    // Opções de ponteiros (agora apenas uma imagem)
    const handsOptionsContainer = document.getElementById('hands-options');
    customizationOptions.hands.forEach(hand => {
        const optionElement = createHandsOptionElement(hand);
        handsOptionsContainer.appendChild(optionElement);
    });

    // Opções de pulseira
    const strapOptionsContainer = document.getElementById('strap-options');
    customizationOptions.straps.forEach(strap => {
        const optionElement = createStrapOptionElement(strap);
        strapOptionsContainer.appendChild(optionElement);
    });
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
    }
    
    const name = document.createElement('p');
    name.textContent = dial.name;
    name.style.fontSize = '0.9rem';
    name.style.marginTop = '5px';
    name.style.fontWeight = '500';
    
    const price = document.createElement('p');
    price.textContent = dial.price > 0 ? `+ R$ ${dial.price.toFixed(2)}` : 'Incluído';
    price.style.fontSize = '0.8rem';
    price.style.color = dial.price > 0 ? '#e74c3c' : '#27ae60';
    
    div.appendChild(preview);
    div.appendChild(name);
    div.appendChild(price);
    
    // Marcar a primeira opção como ativa
    if (dial.id === 1) {
        div.classList.add('active');
    }
    
    div.addEventListener('click', () => selectOption(dial, 'dial'));
    
    return div;
}

// Criar elemento de opção para ponteiros (agora apenas uma imagem)
function createHandsOptionElement(hand) {
    const div = document.createElement('div');
    div.className = 'option-item';
    div.dataset.id = hand.id;
    div.dataset.type = 'hands';
    
    // Pré-visualização - apenas uma imagem
    const preview = document.createElement('div');
    preview.className = 'option-preview';
    
    if (hand.image) {
        preview.style.backgroundImage = `url('${hand.image}')`;
        preview.style.backgroundSize = 'contain';
        preview.style.backgroundPosition = 'center';
        preview.style.backgroundRepeat = 'no-repeat';
        preview.style.backgroundColor = '#f5f5f5';
    }
    
    const name = document.createElement('p');
    name.textContent = hand.name;
    name.style.fontSize = '0.9rem';
    name.style.marginTop = '5px';
    name.style.fontWeight = '500';
    
    const price = document.createElement('p');
    price.textContent = hand.price > 0 ? `+ R$ ${hand.price.toFixed(2)}` : 'Incluído';
    price.style.fontSize = '0.8rem';
    price.style.color = hand.price > 0 ? '#e74c3c' : '#27ae60';
    
    div.appendChild(preview);
    div.appendChild(name);
    div.appendChild(price);
    
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
    
    const price = document.createElement('p');
    price.textContent = strap.price > 0 ? `+ R$ ${strap.price.toFixed(2)}` : 'Incluído';
    price.style.fontSize = '0.8rem';
    price.style.color = strap.price > 0 ? '#e74c3c' : '#27ae60';
    
    div.appendChild(preview);
    div.appendChild(name);
    div.appendChild(price);
    
    if (strap.id === 1) {
        div.classList.add('active');
    }
    
    div.addEventListener('click', () => selectOption(strap, 'strap'));
    
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
    
    dial.style.backgroundImage = dialOption.image ? `url('${dialOption.image}')` : 'none';
    dial.style.backgroundSize = 'contain';
    dial.style.backgroundPosition = 'center';
    dial.style.backgroundRepeat = 'no-repeat';
    dial.style.backgroundColor = 'transparent';
    
    // Atualizar ponteiros (agora apenas uma imagem sobreposta)
    const handsOption = currentSelections.hands;
    const handsOverlay = document.getElementById('watch-hands');
    
    if (handsOption.image) {
        handsOverlay.style.backgroundImage = `url('${handsOption.image}')`;
        handsOverlay.style.backgroundColor = 'transparent';
        handsOverlay.style.backgroundSize = 'contain';
        handsOverlay.style.backgroundPosition = 'center';
        handsOverlay.style.backgroundRepeat = 'no-repeat';
        handsOverlay.style.opacity = '1';
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
}

// Atualizar resumo de preço
function updatePriceSummary() {
    const dialPrice = currentSelections.dial.price;
    const handsPrice = currentSelections.hands.price;
    const strapPrice = currentSelections.strap.price;
    
    document.getElementById('dial-price').textContent = `R$ ${dialPrice.toFixed(2)}`;
    document.getElementById('hands-price').textContent = `R$ ${handsPrice.toFixed(2)}`;
    document.getElementById('strap-price').textContent = `R$ ${strapPrice.toFixed(2)}`;
    
    const customPrice = dialPrice + handsPrice + strapPrice;
    document.getElementById('custom-price').textContent = `R$ ${customPrice.toFixed(2)}`;
    
    const totalPrice = basePrice + customPrice;
    document.getElementById('total-price').textContent = `R$ ${totalPrice.toFixed(2)}`;
}

// Adicionar ao carrinho
function addToCart() {
    const totalPrice = basePrice + currentSelections.dial.price + currentSelections.hands.price + currentSelections.strap.price;
    
    alert(`Relógio personalizado adicionado ao carrinho!\n\nConfiguração:\n- Mostrador: ${currentSelections.dial.name}\n- Ponteiros: ${currentSelections.hands.name}\n- Pulseira: ${currentSelections.strap.name}\n\nTotal: R$ ${totalPrice.toFixed(2)}`);
    
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
