```
function calculaPrecoTotal(quantidade) {
  if(quantidade < 12) {
    let custo = quantidade * 1.30
    return custo
  } else if(quantidade >= 12)  {
    let custo = quantidade * 1
    return custo
  }
}

```