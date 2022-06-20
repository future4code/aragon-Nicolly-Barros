function converteTemperatura(temp, grau) {
    if (typeof (temp) === "number") {
        switch (grau) {
            case "K":
                let converteKelvin = temp + 273.15
                return `${temp}° Celsius é equivalente a ${converteKelvin} Kelvin.`
            case "F":
                let converteFahrenheit = (temp * 9 / 5) + 32
                return `${temp}° Celsius é equivalente a ${converteFahrenheit} Fahrenheit.`
            default:
                return `Erro. Parâmetro inválido "${grau}".`
        }
    } else {
        return `Erro. Parâmetro inválido "${temp}".`
    }

}

console.log(converteTemperatura(20, "F"));
console.log(converteTemperatura(30, "K"));
console.log(converteTemperatura("trinta", "K"));
console.log(converteTemperatura(50,"f"));