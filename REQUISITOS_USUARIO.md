# 📋 REQUISITOS DO USUÁRIO - CORREÇÕES FUNCIONAIS

## 17 PROBLEMAS IDENTIFICADOS EM TESTE MANUAL

### ABA LANÇAMENTOS

#### 1. ❌ Carregamento inicial vazio
**Descrição:** Ao abrir o painel, a aba Lançamentos fica em branco. Só aparece conteúdo após trocar para outra aba (Cartões) e voltar.
**Prioridade:** 🔴 CRÍTICA
**Solução:** Carregar dados da aba Lançamentos no init() ou ao carregar a página

#### 2. ❌ Linhas da tabela muito espaçadas
**Descrição:** As linhas de lançamentos têm altura excessiva (36px mínimo)
**Prioridade:** 🟡 MÉDIA
**Solução:** Reduzir altura à metade (aproximadamente 18-20px)
**Modificar:** `.tr { min-height: ... }` no CSS

#### 3. ❌ Colunas comprimidas
**Descrição:** Colunas "Valor", "Status" e "Saldo" estão muito próximas. Valores grandes transbordam para coluna adjacente.
**Prioridade:** 🔴 ALTA
**Solução:** Melhorar distribuição de colunas no grid
```
Atual: grid-template-columns:32px 70px 1.8fr 60px 100px 75px 80px 32px;
Ajustar: proporção para dar mais espaço ao Valor (100px+) e Status
```

#### 4. ❌ Saldo projetado incorreto
**Descrição:** Mostra "31.000 positivos" mas deveria ser "-2.078"
**Prioridade:** 🔴 CRÍTICA
**Causa:** Cálculo do saldo projetado final está errado
**Solução:** Usar dados reais das faturas para calcular saldo final do mês

#### 5. ❌ Saldo inicial do mês seguinte
**Descrição:** Saldo inicial do próximo mês deve ser "projetado", não o realizado do mês atual
**Prioridade:** 🔴 ALTA
**Solução:** Saldo inicial mês N+1 = Saldo projetado final mês N

#### 6. ❌ Aviso de saldo negativo
**Descrição:** Aparece aviso "Saldo negativo após Escola, mínimo projetado: -6.000"
**Prioridade:** 🟢 BAIXA
**Ação:** Remover/esconder esse aviso

---

### ABA CARTÕES

#### 7. ❌ Tooltip do gráfico duplicado
**Descrição:** Mostra "2026-01" duas vezes: uma como mês e outra como valor
**Prioridade:** 🟡 MÉDIA
**Exemplo atual:** "2026-01: 2026-01: R$ 8.900"
**Esperado:** "R$ 8.900" (apenas valor)
**Solução:** Remover repetição no renderGraficoConsumoMensal()

#### 8. ❌ Interatividade do gráfico
**Descrição:** Ao clicar em uma bolinha do gráfico, deve mostrar breakdown por cartão daquele mês
**Prioridade:** 🟡 MÉDIA
**Esperado:** 
```
Clique em bolinha de 2026-06:
→ Abre modal/popup com:
  - Santander: R$ 2.300
  - Itaú: R$ 1.500
  - Banco Pan: R$ 4.100
  - Total: R$ 8.900
```

#### 9. ❌ Falta saldo total e limite
**Descrição:** Saldo total acumulado e limite total de cartões não estão sendo exibidos
**Prioridade:** 🟡 MÉDIA
**Solução:** Adicionar esses dados ao painel de cartões

#### 10. ❌ Modal fica preso após fechar
**Descrição:** Ao clicar em "Editar" ou "Detalhes", abre um modal. Ao clicar em "Cancelar" ou "Salvar", a página fica com opacidade baixa (cinza) e não responde.
**Prioridade:** 🔴 CRÍTICA
**Causa:** Modal não está sendo removido do DOM corretamente
**Solução:** Verificar função de fechamento do modal
```javascript
// Ao clicar em X ou Cancelar/Salvar:
this.closest('div').parentNode.remove()
```

#### 11. ❌ Histórico de faturas vazio
**Descrição:** As faturas passadas não aparecem no painel de "Detalhes" do cartão
**Prioridade:** 🔴 CRÍTICA
**Esperado:** Mostrar histórico completo de faturas (ex: últimos 6-12 meses)
**Solução:** Buscar D._faturasRaw e filtrar por cartão.id no showCartaoDetalhes()

---

### ABA VISÃO GERAL

#### 12. ❌ Cards em 2 linhas ao invés de 1
**Descrição:** Os 6 cards de resumo (Saldo Inicial, Total Entrada, etc.) estão distribuídos em 2 linhas
**Prioridade:** 🟡 MÉDIA
**Solução:** Ajustar grid para 6 colunas ou usar flexbox com wrap

#### 13. ❌ Valores zerados
**Descrição:** Mostra:
- Saldo inicial: R$ 0,00
- Total de entrada: R$ 0,00
- Total de cartões: R$ 0,00
**Prioridade:** 🔴 CRÍTICA
**Causa:** Dados não estão sendo puxados de Lançamentos e Cartões
**Solução:** Conectar com dados reais das abas

#### 14. ❌ Gráfico entradas/saídas período errado
**Descrição:** Gráfico mostra período incorreto, não últimos 12 meses com ano atual em destaque
**Prioridade:** 🟡 MÉDIA
**Requisitos:**
- Mostrar últimos 12 meses
- Ano atual em destaque
- Permitir editar quais meses e se quer entradas/saídas/ambas
**Solução:** Filtrar dados para últimos 12 meses, adicionar filtro interativo

#### 15. ❌ Entradas não aparecem
**Descrição:** Gráfico mostra apenas saídas, não aparecem entradas
**Prioridade:** 🔴 ALTA
**Causa:** Filtro de dados está errado ou incompleto
**Solução:** Verificar lógica de renderização do gráfico

#### 16. ❌ Visão não consolidada
**Descrição:** Está mostrando apenas dados de Cartões, não Lançamentos + Cartões
**Prioridade:** 🔴 CRÍTICA
**Requisito:** "Visão Geral deve ser uma visão consolidada de Lançamentos + Cartões"
**Solução:** Somar valores de ambas as abas

#### 17. ❌ Parcelados faltam (Espinha/Imóvel)
**Descrição:** Compras grandes parceladas (Espinha/Imóvel) não estão aparecendo na Visão Geral
**Prioridade:** 🟡 MÉDIA
**Solução:** Incluir lançamentos com tipo="parcelado" na consolidação

---

## 📊 RESUMO POR SEVERIDADE

| Severidade | Qtd | Problemas |
|-----------|-----|-----------|
| 🔴 CRÍTICA | 6 | Carregamento vazio, Saldo projetado, Modal preso, Histórico vazio, Valores zerados, Visão não consolidada |
| 🔴 ALTA | 4 | Colunas comprimidas, Saldo inicial mês seguinte, Entradas não aparecem, Revisão consolidação |
| 🟡 MÉDIA | 7 | Linhas altas, Tooltip duplicado, Interatividade gráfico, Falta limite, Cards em 2 linhas, Período gráfico, Parcelados |

**Total: 17 problemas**

---

## 🎯 ORDEM DE CORREÇÃO (RECOMENDADA)

### Fase 1 - CRÍTICA (hoje)
1. ✅ Carregar dados de Lançamentos no init()
2. ✅ Corrigir saldo projetado final
3. ✅ Conectar saldo inicial mês seguinte
4. ✅ Corrigir fechamento de modal
5. ✅ Buscar e exibir histórico de faturas
6. ✅ Conectar dados com Visão Geral (consolidar Lançamentos + Cartões)

### Fase 2 - ALTA
7. ✅ Melhorar distribuição de colunas na tabela
8. ✅ Conectar saldo inicial mês N+1 com projetado mês N
9. ✅ Corrigir gráfico para mostrar entradas
10. ✅ Verificar lógica de consolidação

### Fase 3 - MÉDIA
11. ⏳ Reduzir altura de linhas da tabela
12. ⏳ Remover tooltip duplicado
13. ⏳ Adicionar interatividade ao gráfico (clique em bolinha)
14. ⏳ Adicionar saldo total e limite ao painel
15. ⏳ Ajustar cards em 1 linha
16. ⏳ Ajustar período do gráfico
17. ⏳ Incluir parcelados
