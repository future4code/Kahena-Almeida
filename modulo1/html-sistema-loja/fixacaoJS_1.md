```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let quantidadeCarros = Number(qtdeCarrosVendidos)
  let totalVendas = Number(valorTotalVendas)
  
  const salariofinal = 2000 + (100 * quantidadeCarros) + ((totalVendas/100)*5)
  return salariofinal

}
```s