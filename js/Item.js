class Item {
    constructor(img, alt, name, text, price) {
        this.img = img;
        this.alt = alt;
        this.name = name;
        this.text = text;
        this.price = price;
    }

    render() {
        let div = document.createElement("div");
        div.classList.add("menu__item");
        div.innerHTML = `
            <img src="${this.img}" alt="${this.alt}" />
            <h3 class="menu__item-subtitle">${this.name}</h3>
                <div class="menu__item-descr">${this.text}</div>
                <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> ₽/день</div>
            </div>
        `;
        ourMenu.append(div);
    }
}