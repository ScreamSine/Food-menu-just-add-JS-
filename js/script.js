const parentTabs = document.querySelector(".tabheader__items");
const tabs = document.querySelectorAll(".tabheader__item");
const tabContent = document.querySelectorAll(".tabcontent");

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