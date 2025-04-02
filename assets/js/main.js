// CHIEDO STRINGA TRAMITE PROMPT
// CONVERTO IN LOG STRINGA IN ALFABETO FARFALLINO

// CONSIGLI:
// PROPRIETA LENGTH
// VEDERE COME COMPORRE STRINGA POCO A POCO

const sentence = prompt("Quale frase vuoi tradurre in farfallese?")
console.info("sentence:", sentence)

if (sentence === null || sentence.length == 0 || !isNaN(parseInt(sentence))) {
    let errorMessage = "C'è stato un errore, leggi le istruzioni sotto riportate e ricarica la pagina per riprovare."
    if (sentence === null || sentence.length == 0) {
        errorMessage = `${errorMessage} \n~ LA FRASE NON PUO ESSERE VUOTA!`
    }
    if (!isNaN(parseInt(sentence))) {
        errorMessage = `${errorMessage} \n~ LA FRASE NON PUO ESSERE ESPRESSA SOTTO FORMA DI NUMERO!`
    }

    alert(errorMessage)
    window.location.reload()
} else {
    let output = "";

    // for (let i = 0; i < sentence.length; i++) {
    //     if (sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u") {
    //         output = `${output}${sentence[i]}f${sentence[i]}`
    //     } else {
    //         output = `${output}${sentence[i]}`
    //     }
    // }

    // OPERATORE TERNARIO (SOLUZIONE DI SAMUEL CON VARIABILE ASSEGNATA E OPERATORE TERNARIO, MIGLIORE)
    for (let i = 0; i < sentence.length; i++) {
        const letter = sentence[i];
        // output += letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ? `${letter}f${letter}` : letter;
        output +=
            letter === "a" ||
            letter === "e" ||
            letter === "i" ||
            letter === "o" ||
            letter === "u"
                ? `${letter}f${letter}`
                : letter;
    }
    
    console.log(output);
}