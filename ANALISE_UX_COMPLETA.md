# 🎨 ANÁLISE PROFISSIONAL DE UX - NOSSO LAR
**Data:** 2026-06-04  
**Status:** Crítico - Múltiplos problemas de usabilidade  

---

## 🔴 PROBLEMAS CRÍTICOS DE UX

### 1. **HIERARQUIA VISUAL AUSENTE**
**Problema:** As abas têm mesma altura que outros elementos, sem destaque visual  
**Impacto:** Usuário não sabe qual é a seção principal  
**Solução:** Aumentar altura das abas, adicionar mais espaçamento, usar background diferente

### 2. **TIPOGRAFIA CONFUSA**
**Problema:** 
- Tamanhos inconsistentes (10px, 11px, 12px, 13px, 14px, 15px, 17px, 18px)
- Muito peso visual em valores pequenos (font-weight: 600/700 em 10px)
- Sem hierarquia clara entre títulos, subtítulos e textos

**Impacto:** Cansaço visual, dificuldade de leitura, falta de clareza  
**Solução:** 
- Usar apenas 3-4 tamanhos: 14px (corpo), 16px (secondary), 18px (titles), 24px (main)
- Reduzir font-weight em texto pequeno
- Melhorar line-height (muito apertado)

### 3. **CONTRASTE INADEQUADO**
**Problema:**
- `--t3: #9ca3af` (cinza escuro em texto body) tem contraste ruim
- Textos importantes em cores fracas (#FFA502 em fundos claros)
- Labels em ALL CAPS + cinza = difícil de ler

**Impacto:** Cansaço visual, accessibility ruim  
**Solução:** 
- Usar --t2 (#6b7280) para texto secundário
- Reservar --t3 apenas para hints/tertiary
- Melhorar contraste em pelo menos 4.5:1

### 4. **ESPAÇAMENTO INADEQUADO**
**Problema:**
- Cards com padding: 0.9rem (muito apertado)
- Gaps entre elementos: 0.75rem (apertado demais)
- Tabelas muito comprimidas (visual confuso)
- Sem respiração visual

**Impacto:** Interface parece aglomerada, difícil de processar  
**Solução:**
- Cards: 1.25rem padding
- Gaps: 1rem - 1.25rem
- Melhorar espaçamento vertical em tabelas

### 5. **CORES POUCO INTUITIVAS**
**Problema:**
- --a (#FFA502) é alaranjado demais (parece aviso)
- Background (#F4F6F9) muito claro, quase imperceptível
- Sem cores para estados (hover, focus, active)
- Cards brancos em fundo branco com sombra sutil

**Impacto:** Usuário não sabe o que está selecionado/clicável  
**Solução:**
- Usar cor mais neutra (--a pode ser roxo ou azul)
- Background mais visível
- Estados visuais claros (button.on, input:focus, etc)

### 6. **TABELA ILEGÍVEL**
**Problema:**
- Colunas muito estreitas
- Texto cortado (overflow hidden)
- Linhas alternadas (sem zebra-stripes)
- Sem separação clara entre linhas
- Hover muito sutil

**Impacto:** Difícil de ler dados, comparar valores  
**Solução:**
- Melhorar proporção de colunas
- Zebra-stripes (linha alternada com fundo)
- Hover mais visível (não apenas background)
- Adicionar grid lines sutis

### 7. **BOTÕES SEM FEEDBACK VISUAL**
**Problema:**
- Abas não têm feedback ao clicar
- Botões com transição muito rápida (.15s)
- Sem ripple/feedback de clique
- Hover muito sutil

**Impacto:** Usuário não tem confiança de que clicou  
**Solução:**
- Adicionar transição de 0.3s
- Feedback visual on click (transform, shadow)
- Cursor pointer bem visível

### 8. **FILTROS (PILLS) CONFUSOS**
**Problema:**
- Pills com border sutil, parece desligado
- Sem indicação visual clara do que está ativo
- Espaçamento ruim
- Sem hover state claro

**Impacto:** Usuário não sabe quais filtros estão ativos  
**Solução:**
- Pills ativos com fundo + texto + border claro
- Pills inativos com border mais visível
- Melhorar hover state

### 9. **MODAL/POPUP AUSENTE**
**Problema:**
- Quando clica em "+Lançamento", não há feedback visual claro
- Modal não tem backdrop escuro
- Sem animação de entrada

**Impacto:** Usuário fica confuso se algo aconteceu  
**Solução:**
- Melhorar animação
- Backdrop escuro e claro
- Fechar com ESC ou clique fora

### 10. **SIDEBAR POUCO INTUITIVA**
**Problema:**
- Cards de cartões não têm diferenciação clara
- Falta ícones visuais
- Sem separação clara entre seções
- Muita informação aglomerada

**Impacto:** Sobrecarga visual  
**Solução:**
- Melhorar organização visual
- Adicionar ícones
- Usar cores diferentes para cada cartão

### 11. **RESPONSIVIDADE QUEBRADA**
**Problema:**
- Desktop com 2 colunas + sidebar não deixa espaço
- Tabela não funciona em telas pequenas
- Mobile UI visível em desktop às vezes
- Sem break points claros

**Impacto:** Usuários em tablets veem layout ruim  
**Solução:**
- Breakpoints: 768px, 1024px, 1440px
- Stack de 1 coluna em < 1024px
- Layout fluid

### 12. **DENSIDADE DE INFORMAÇÃO**
**Problema:**
- Tabela mostra muitas colunas
- Cada linha muito informação aglomerada
- Sem agrupamento visual

**Impacto:** Cognitive overload  
**Solução:**
- Mostrar apenas informação essencial
- Expandir ao clicar
- Melhorar visual

### 13. **NENHUM ESTADO DE LOADING**
**Problema:**
- Ao clicar nas abas, não há feedback de carregamento
- Usuário não sabe se está acontecendo algo

**Impacto:** Sensação de travamento  
**Solução:**
- Adicionar spinner/skeleton ao trocar página
- Feedback visual de transição

### 14. **ACESSIBILIDADE PÉSSIMA**
**Problema:**
- Nenhum aria-label
- Color-only information (texto colorido sem rótulo)
- Contrast ratio ruim
- Tamanho de clique pequeno (< 48px)
- Nenhuma navegação por teclado

**Impacto:** Inacessível para pessoas com deficiência  
**Solução:**
- Adicionar aria-labels
- Melhorar contraste
- Aumentar click targets
- Suporte a teclado (Tab, Enter, ESC)

### 15. **TIPOGRAFIA DE VALORES CONFUSA**
**Problema:**
- Valores financeiros com tamanhos diferentes
- Sem moeda clara
- Cores inconsistentes para entrada/saída

**Impacto:** Difícil comparar valores  
**Solução:**
- Sempre mostrar "R$" ou moeda
- Usar mesma cor para entrada (verde) e saída (vermelho)
- Tamanho consistente

---

## 📊 RESUMO DOS PROBLEMAS

| Categoria | Severidade | Quantidade |
|-----------|-----------|-----------|
| **Visual** | 🔴 Alta | 8 |
| **Usabilidade** | 🔴 Alta | 5 |
| **Acessibilidade** | 🔴 Crítica | 4 |
| **Performance** | 🟡 Média | 2 |
| **Total** | - | **19 problemas** |

---

## 🎯 PRIORIDADE DE CORREÇÃO

### Fase 1: CRÍTICO (Deve fazer agora)
1. Melhorar tipografia (hierarquia clara)
2. Aumentar espaçamento (respiração visual)
3. Melhorar contraste (WCAG AA)
4. Tornar tabela legível
5. Feedback visual em cliques

### Fase 2: ALTO (Deve fazer em seguida)
6. Melhorar hierarquia das abas
7. Estados visuais claros (active, hover, focus)
8. Responsividade em 1024px
9. Acessibilidade básica (aria-labels)
10. Loading states

### Fase 3: MÉDIO (Nice to have)
11. Animações mais suaves
12. Ícones visuais
13. Filtros melhorados
14. Sidebar reorganizada
15. Density options

---

## 💡 RECOMENDAÇÕES FINAIS

1. **Aumentar whitespace** - 40% mais espaçamento
2. **Tipografia clara** - 3 tamanhos máximo
3. **Contraste forte** - Testes WCAG AA
4. **Feedback imediato** - Transições de 0.2-0.3s
5. **Acessibilidade** - Sem color-only info
6. **Consistência** - Design system claro
7. **Densidade** - Mostrar menos, permitir expandir
8. **Navegação** - Tab order lógico, teclado completo

---

**Próximo passo:** Refatorar CSS para resolver hierarquia, espaçamento e contraste
