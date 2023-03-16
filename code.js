function handleClick() {
    const radioButtons = document.querySelectorAll('input[name="choice"]');
    let selectedValue;
    for (const rb of radioButtons) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue == 1) {
        alert("Correct");
        window.location.href = "index.html";
    } else if (selectedValue == 2 || selectedValue == 3 || selectedValue == 4) {
        alert("Incorrect");
    } else {
        alert("Please Select an option");
    }
}