function validateCreditCard(number) {
    const regexPatterns = {
        mastercard: /^5[1-5][0-9]{14}$/,
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        enroute: /^(2014|2149)\d{11}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        voyager: /^8699[0-9]{11}$/,
        hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
        aura: /^50[0-9]{14,17}$/
    };

    for (const [cardType, pattern] of Object.entries(regexPatterns)) {
        if (pattern.test(number)) {
            return cardType;
        }
    }
    return 'Invalid card number';
}

// Exemplo de uso
const cardNumber = '4111111111111111'; // Substitua pelo número do cartão que deseja validar
const cardType = validateCreditCard(cardNumber);
console.log(`Card Type: ${cardType}`);