const btnCart = document.getElementById("button_cart")
const containerCart = document.querySelector(".hiddenCartElements");

btnCart.addEventListener("click", () => {
    containerCart.classList.toggle("hideElements");
});

const header = document.querySelector(".header");
const buttonSearch = document.querySelector("#button_search");
const searchInput = document.querySelector(".search_input");

const buttonList = document.querySelector("#button_list");
const brandList = document.querySelector(".brands_list");

buttonSearch.addEventListener("click", () => {
    searchInput.classList.toggle("search_input_show");
    brandList.classList.remove("brands_list_show");
});

buttonList.addEventListener("click", () => {
    brandList.classList.toggle("brands_list_show");
    searchInput.classList.remove("search_input_show");
});