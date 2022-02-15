Sistema p/ Loja:
- Gerenciamento de usuários
       id primary key: string
       email: string
       nome: string
       senha: string
- Tipos de usuários e informações (subclasses)
      consumidores/clientes
          cartão de crédito: number
          histórico de compras (R$): number
      funcionários
          salário base: number
      vendedores
          vendas realizadas: number
      
