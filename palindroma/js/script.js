let word = prompt("Inserisci una parola")

palindrome(word)

function palindrome (word){
    console.log(word)
    let wordArray = word.split("")
    console.log(wordArray)
    let reverse = wordArray.reverse()
    console.log(reverse)
    let join = reverse.join("")
    console.log(join)

    let result

    if (word == join) {
        result = alert("La parola è palindroma")
    }
    else {
        result = alert("La parola non è palindroma")
    }

    return result
}


