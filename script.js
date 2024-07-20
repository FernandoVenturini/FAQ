// Selecionando a div (accordion-header):
const headers = document.querySelectorAll(".accordion-header");
// Selecionando a div (accordion-item):
const accordionItems = document.querySelectorAll(".accordion-item");

// Selecionando a variavel "headers" e setando um forEach() para percorrer toda a div que tenha a class header:
headers.forEach(function (header) {
    header.addEventListener("click", function () {
        // Manipulando Classes dos Itens do Accordion:
        const item = this.parentNode;

        const isActive = item.classList.contains("accordion-item-active");
        accordionItems.forEach((item) => {
            item.classList.remove("accordion-item-active");
            item.classList.add("accordion-item-closed");
        });

        // Ativando o Item do Accordion Clicado:
        if (!isActive) {
            item.classList.add("accordion-item-active");
            item.classList.remove("accordion-item-closed");
        }
    });
});
