
const list = document.getElementById("sortable-list");
let draggedItem = null;



list.addEventListener("dragstart", function (e) {

    console.log("target", e);
    if (e.target.tagName === "LI") {
        draggedItem = e.target;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", e.target.innerHTML);
    }
});

list.addEventListener("dragover", function (e) {
    if (e.target.tagName === "LI") {
        e.preventDefault();
    }
});

list.addEventListener("drop", function (e) {


    if (e.target.tagName === "LI") {
        e.preventDefault();
        if (draggedItem !== e.target) {
            draggedItem.innerHTML = e.target.innerHTML;
            e.target.innerHTML = e.dataTransfer.getData("text/plain");
        }
    }
});

list.addEventListener("dragend", function () {
    draggedItem = null;
});
