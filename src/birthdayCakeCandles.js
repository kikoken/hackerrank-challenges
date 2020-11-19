const birthdayCakeCandles = () => {
    const mayor = Math.max(...candles)
    const t = candles.filter(item => item === mayor).length
    
    return t
}