# Respostas:

1. a.

### O que são os round e salt?

    Por "salt round" entende-se o fator de custo. Ele controla quanto tempo é necessário para calcular um único hash BCrypt. Quanto maior o fator de custo, mais rodadas de hash são feitas. Quanto mais tempo for necessário, mais difícil será a força bruta.
    O salt é um valor aleatório e deve ser diferente para cada cálculo, portanto, o resultado dificilmente deve ser o mesmo, mesmo para senhas iguais. E geralmente é incluído na sequência de hash resultante em forma legível. Assim, ao armazenar a hash-string, você também armazena o salt.

### Que valores são recomendados para o round? Por quê?

    O valor padrão é 10, pois você deseja selecionar um número alto o suficiente para evitar ataques, mas não mais lento do que a paciência do usuário em potencial.

2. a.
