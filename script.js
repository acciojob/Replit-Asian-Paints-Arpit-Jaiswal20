document.getElementById("change_button").addEventListener("click", function() {
    let blockId = document.getElementById("block_id").value;
    let color = document.getElementById("colour_id").value;

    // Debugging: Log values
    console.log("Block ID:", blockId);
    console.log("Color:", color);

    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.backgroundColor = "transparent";
    });

    let selectedBlock = document.getElementById(blockId);
    if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
    } else {
        console.error("Invalid block ID:", blockId);
    }
});

document.getElementById("reset_button").addEventListener("click", function() {
    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.backgroundColor = "transparent";
    });
});
