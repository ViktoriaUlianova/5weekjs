function showNames() {
    const userInput = [];

    for (let part of document.getElementById("fullname").value.split(" ")) {
        if (part) {
            userInput.push(part)
        }
    }

    if (userInput.length !== 3) {
        alert("not enough");
        return;
    }

    let lastName = userInput[0].trim();
    let firstName = userInput[1].trim();
    let middleName = userInput[2].trim();

    document.getElementById("lastname").value = normalizeData(lastName);
    document.getElementById("firstname").value = normalizeData(firstName);
    document.getElementById("middlename").value = normalizeData(middleName);
}

function normalizeData(data) {
    let result = "";

    for (let char of data) {
        result += char.toLowerCase();
    }
    return result[0].toUpperCase() + result.slice(1);
}