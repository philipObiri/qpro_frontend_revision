let acc = document.getElementsByClassName("accordion");
let i;

// Add "active" class and set max-height for the first accordion by default
acc[0].classList.add("tab_active");
let firstPanel = acc[0].nextElementSibling;
firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        // Toggle "active" class on the clicked accordion
        this.classList.toggle("tab_active");

        // Get the panel associated with the clicked accordion
        let panel = this.nextElementSibling;

        // Toggle the max-height of the panel based on the "active" class
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

        // Reset the icon for all accordions
        for (let j = 0; j < acc.length; j++) {
            if (acc[j] !== this) {
                acc[j].classList.remove("tab_active");
                acc[j].nextElementSibling.style.maxHeight = null;
            }
        }
    });
}
