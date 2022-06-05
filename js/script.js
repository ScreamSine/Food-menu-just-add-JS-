const parentTabs = document.querySelector(".tabheader__items");
const tabs = document.querySelectorAll(".tabheader__item");
const tabContent = document.querySelectorAll(".tabcontent");
const modalTrigger = document.querySelectorAll("[data-modal]");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector("[data-close]");
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