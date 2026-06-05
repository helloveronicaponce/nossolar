# 🐛 LISTA DE BUGS E PROBLEMAS ENCONTRADOS

**Data:** 04/06/2026  
**Análise:** Código-review completo do painel Nosso Lar

---

## 🔴 BUGS CRÍTICOS

### 1. Valores Hardcoded - Spin e Imóvel
**Localização:** Linhas 1213 e 1811  
**Problema:** Os valores da Spin (27466.20, 2288.85) e do Imóvel (570000, 556000) são hardcoded em duas localizações diferentes, não são dinâmicos.  
**Impacto:** Usuário vê dados incorretos/desatualizados  
**Encontrado em:**
```javascript
// Linha 1213 (renderLancamentosDesktop)
+'<div class="v" style="color:var(--r)">'+fv(27466.20)+'</div>'

// Linha 1811 (renderSide)
+'<div class="v" style="color:var(--r)">'+fv(27466.20)+'</div>'
```

### 2. Falta Validação em editCartao()
**Localização:** Linha 1832  
**Problema:** `getFatura(cid).toFixed(2)` pode quebrar se `getFatura()` retornar `null` ou `undefined`  
**Impacto:** Erro em console ao editar cartão  
**Código:**
```javascript
inp.value=isFatura?getFatura(cid).toFixed(2):c[field];
// Sem validação se getFatura retorna null
```

### 3. Múltiplas Definições de Valores de Spin e Imóvel
**Localização:** Linhas 1213, 1811 (duplicados!)  
**Problema:** Mesmos dados aparecem duas vezes, em locais diferentes  
**Impacto:** Difícil manutenção, inconsistência de dados  
**Status:** Dados não sincronizados

---

## 🟠 BUGS FUNCIONAIS

### 4. console.logs Deixados no Código
**Encontrado:** 86 console.log/warn/error statements  
**Problema:** Código de debug não removido  
**Linhas principais:** 589, 597, 598, 601, 603, 606, 611-620, 625-677, 1063, 2323, 2518+  
**Impacto:** Poluição do console, código menos limpo  
**Solução:** Remover todos os console.logs

### 5. Falta tratamento de erro em editCartao
**Localização:** Linha 1835  
**Problema:** Se `syncCartaoLancamento(c)` ou `saveData()` falharem, não há feedback ao usuário  
**Impacto:** Usuário não sabe se dados foram salvos ou não

### 6. Código de Debug não Removido
**Localização:** Linha 609-678  
**Problema:** Funções de debug como `debugCartoes()`, `verificarSupabase()`, `forcarCarregamentoFaturas()` deixadas no código  
**Impacto:** Funcionalidades extras que não deveriam estar no código de produção

---

## 🟡 PROBLEMAS DE UX/RESPONSIVIDADE

### 7. Valores Hardcoded em Spin/Imóvel não Refletem Realidade
**Problema:** Cards de Spin e Imóvel mostram sempre os mesmos valores (36/48, 4/163, etc)  
**Impacto:** Usuário recebe informação incorreta sobre suas parcelações  
**Localizações:** renderLancamentosDesktop() e renderSide()

### 8. Falta Feedback Visual Após Salvar Card Edit
**Problema:** Após editar um cartão e clicar Salvar, página re-renderiza mas usuário não recebe confirmação  
**Impacto:** Incerteza se dados foram salvos corretamente

### 9. Modal de Edicação de Cartão sem Feedback de Carregamento
**Problema:** Quando clica Salvar, a página renderiza de novo (await renderCartoesDesktopNovo) mas sem spinner  
**Impacto:** Usuário pensa que nada aconteceu

---

## 🟢 PROBLEMAS DE LIMPEZA DE CÓDIGO

### 10. Funções de Debug Expostas Globalmente
**Localização:** Linhas 609-678  
**Problemas:**
- `window.debugCartoes` 
- `window.recarregarFaturas`
- `window.verificarSupabase`
- `window.forcarCarregamentoFaturas`

**Impacto:** Funções internas expostas ao usuário, risco de segurança

### 11. Constantes Mágicas em Múltiplos Lugares
**Problema:** Valores como "27466.20", "2288.85", "Set/2026" aparecem hardcoded  
**Impacto:** Difícil manutenção, risco de inconsistência

### 12. HTML Inline Muito Longo
**Localização:** renderSide() (linhas 1802-1814), renderLancamentosDesktop()  
**Problema:** HTML concatenado em strings muito longas, difícil de ler e manter  
**Impacto:** Código ilegível, erros de digitação

---

## 📋 PROBLEMAS POTENCIAIS (Casos Extremos)

### 13. Sem Tratamento se D._faturas está undefined
**Localização:** renderCartoesDesktopNovo()  
**Problema:** Código assume `D._faturas` existe, mas pode ser undefined  
**Impacto:** Erro em tempo de execução se dados não carregarem

### 14. Sem Validação se localStorage Falha Silenciosamente
**Localização:** Linhas 598, 674  
**Problema:** `localStorage.setItem()` pode falhar silenciosamente em alguns navegadores  
**Impacto:** Dados podem não ser salvos sem aviso ao usuário

### 15. Falta Tratamento para Datas Inválidas
**Localização:** editCartao() linha 1834  
**Problema:** Se usuário colocar data inválida, pode quebrar  
**Impacto:** Erro não tratado

---

## 🧹 LIXO DE CÓDIGO ENCONTRADO

### 16. Linhas Comentadas/Desuso
**Encontrado:** Necessário revisar para linhas comentadas

### 17. Funções Duplicadas
**Verificado:** renderSide() duplica dados de Spin/Imóvel em 2 locais diferentes

### 18. Event Listeners Não Removidos
**Problema:** Na função toggleNavPicker (linhas 988-998), event listeners são adicionados mas podem não ser removidos corretamente em alguns casos

---

## 📊 RESUMO POR SEVERIDADE

| Severidade | Qtd | Status |
|-----------|-----|--------|
| 🔴 CRÍTICA | 3 | Valores hardcoded, falta validação, duplicação |
| 🟠 FUNCIONAL | 3 | Console logs, falta feedback, debug no código |
| 🟡 UX | 3 | Feedback visual, responsividade, confirmação |
| 🟢 LIMPEZA | 3 | Funções expostas, constantes, HTML inline |
| ⚪ POTENCIAL | 5 | Casos extremos, validação, error handling |

**Total: 17 problemas + 86 console.logs para remover**

---

## ✅ ITENS POR PRIORIDADE DE CORREÇÃO

### Fase 1 - Crítica (Fazer Agora!)
1. **Remover todos os 86 console.logs** - Limpeza de código (15 min)
2. **Remover funções de debug expostas** - window.debugCartoes, etc (5 min)
3. **Corrigir valores hardcoded de Spin/Imóvel** - Tornar dinâmicos (30 min)
4. **Adicionar validação em editCartao** - Validar getFatura() (5 min)
5. **Adicionar feedback visual ao salvar** - Toast/spinner (15 min)

### Fase 2 - Importante
6. Extrair HTML long em componentes separados
7. Adicionar tratamento de erro para localStorage
8. Validação de datas inválidas
9. Verificar e limpar event listeners não removidos
10. Consolidar valores hardcoded em constantes

### Fase 3 - Polimento
11. Adicionar feedback de carregamento em modalidade
12. Melhorar mensagens de erro
13. Adicionar logs estruturados (sem console.log)
14. Revisar casos de null/undefined
15. Otimizar rendering de HTML

---

## 🎯 RECOMENDAÇÃO

**Começar pela Fase 1** pois tem alto impacto e baixa complexidade.

Total estimado: **4 horas de trabalho** para resolver tudo.

---

**Status:** Pronto para correção!
