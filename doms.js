const DOMSelectors = {
    manufacturerInput: document.getElementById('manufacturer'),
    modelInput: document.getElementById('model'),
    imageInput: document.getElementById('image'),
    submitButton: document.getElementById('submit'),
    clearButton: document.getElementById('clear'),
    htmlCards: document.querySelector('.html-cards'),
};


DOMSelectors.submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const manufacturer = DOMSelectors.manufacturerInput.value;
    const model = DOMSelectors.modelInput.value;
    const imageUrl = DOMSelectors.imageInput.value;

    if (manufacturer && model && imageUrl) {
        createHtmlCard(manufacturer, model, imageUrl);
        clearInputFields();
    }
});

DOMSelectors.clearButton.addEventListener('click', () => {
/*     clearAllHtmlCards();
 */    clearInputFields();
});

function createHtmlCard(manufacturer, model, imageUrl) {
    const htmlCard = document.createElement('div');
    htmlCard.classList.add('html-card');

    const image = document.createElement('img');
    image.src = imageUrl;

    const htmlCardContent = document.createElement('div');
    htmlCardContent.classList.add('html-card-content');

    const manufacturerInfo = `<p>Manufacturer: ${manufacturer}</p>`;
    const modelInfo = `<p>Model: ${model}</p>`;

    htmlCardContent.insertAdjacentHTML('beforeend', `<button class=remove>Remove Car</button> ${manufacturerInfo}`);
    htmlCardContent.insertAdjacentHTML('beforeend', modelInfo);
    

    htmlCard.appendChild(image);
    htmlCard.appendChild(htmlCardContent);

    DOMSelectors.htmlCards.appendChild(htmlCard);

    
}

function clearInputFields() {
    DOMSelectors.manufacturerInput.value = '';
    DOMSelectors.modelInput.value = '';
    DOMSelectors.imageInput.value = '';
}

/* function clearAllHtmlCards() {
    DOMSelectors.htmlCards.innerHTML = '';
}
 */
