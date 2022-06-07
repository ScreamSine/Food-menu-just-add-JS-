const parentTabs = document.querySelector(".tabheader__items");
const tabs = document.querySelectorAll(".tabheader__item");
const tabContent = document.querySelectorAll(".tabcontent");
const modalTrigger = document.querySelectorAll("[data-modal]");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector("[data-close]");
const ourMenu = document.querySelector(".menu__field .container");
const timer = setTimeout(open, 15000);

function close() {
    modal.style.display = "none";
    document.body.style.overflow = "scroll";
}

function open() {
    modal.classList.add("opened");
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    clearInterval(timer);
}

function showModalScroll() {
    if (
        window.pageYOffset + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
    ) {
        open();
        window.removeEventListener("scroll", showModalScroll);
    }
}

function hideContent() {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
}
hideContent();

function showTabContent(i = 0) {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
}
showTabContent();

parentTabs.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideContent();
                showTabContent(i);
            }
        });
    }
});

modalTrigger.forEach((item) => {
    item.addEventListener("click", open);
});

closeModal.addEventListener("click", close);

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        close();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.code == "Escape" && modal.classList.contains("opened")) {
        close();
    }
});

window.addEventListener("scroll", showModalScroll);

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

const div1 = new Item(
    "img/tabs/vegy.jpg",
    "vegy",
    "Меню 'Фитнес'",
    "Меню “Фитнес” - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
    499
);
const div2 = new Item(
    "img/tabs/elite.jpg",
    "elite",
    "Меню 'Премиум'",
    "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    999
);
const div3 = new Item(
    "img/tabs/post.jpg",
    "post",
    "Меню 'Постное'",
    "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    699
);
div1.render();
div2.render();
div3.render();