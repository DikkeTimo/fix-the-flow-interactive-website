let progressionbar = document.querySelector("progress");
let allCheckboxes = document.querySelectorAll(".step");

if (allCheckboxes) {
  // zelfde alse een standaard eventlistener, veel korter!
  allCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("input", () => {
      // selecteert alle gecheckte checkboxes ELKE KEER dat een checkbox wordt geklikt (vandaar dat het in de foreach zit)
      let allChecked = document.querySelectorAll(".step:checked");
      // berekening van totaal percentage / totaal checboxes * aantal checkboxes "gechecked"
      let progression = (100 / allCheckboxes.length) * allChecked.length;
      // past de waarde van de progressie bar (vult op)
      progressionbar.setAttribute("value", progression);
    });
  });
}
