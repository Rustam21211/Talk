function convertToBinary() {
    var inputText = document.getElementById("inputTextArea").value;
    var binary = textToBinary(inputText);
    document.getElementById("outputTextArea").value = binary;
}

function convertToText() {
    var binary = document.getElementById("inputTextArea").value;
    var text = binaryToText(binary);
    document.getElementById("outputTextArea").value = text;
}

function copyText() {
    var outputText = document.getElementById("outputTextArea").value;
    navigator.clipboard.writeText(outputText);
}

async function pasteText() {
    var clipboardText = await navigator.clipboard.readText();
    document.getElementById("inputTextArea").value = clipboardText;
}
