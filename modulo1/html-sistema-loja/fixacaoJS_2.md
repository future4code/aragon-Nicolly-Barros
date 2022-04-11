```function calculaPrecoTotal(quantidade) {
  if(quantidade < 12){
    let totalDaCompra = quantidade * 1.30
    return (totalDaCompra)
  } else {
    let totalDaCompraDuzia = quantidade * 1.00
    return totalDaCompraDuzia
  }
}```