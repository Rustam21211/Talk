function textToBinary(text) {
    return Array.from(text)
        .map(char => char.charCodeAt(0).toString(2))
        .join(" ");
}

function binaryToText(binary) {
    return binary.split(" ")
        .map(bin => parseInt(bin, 2))
        .map(charCode => String.fromCharCode(charCode))
        .join("");
}
