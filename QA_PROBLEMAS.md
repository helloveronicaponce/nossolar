# 🔍 QA DE UX - PROBLEMAS IDENTIFICADOS E CORREÇÕES

## Problemas Críticos Identificados (15 total)

### 1. ❌ HIERARQUIA VISUAL AUSENTE NAS ABAS
**Problema:** As abas têm mesma altura que outros elementos, sem destaque visual claro
**Severidade:** ALTA
**Correção:** 
- Aumentar altura das abas de 56px para 64px
- Adicionar underline mais visível (3px → 4px)
- Melhorar espaçamento

### 2. ❌ TIPOGRAFIA CONFUSA
**Problema:** 10+ tamanhos diferentes de fonte (10px, 11px, 12px, 13px, 14px, 15px, 17px, 18px, 22px...)
**Severidade:** ALTA
**Correção:**
- Padronizar para 3 tamanhos: 12px (corpo), 14px (títulos), 16px (grandes)
- Aumentar line-height de 1.5 para 1.6
- Melhorar font-weight hierarchy

### 3. ❌ CONTRASTE INADEQUADO
**Problema:** --t3: #9ca3af tem contraste ruim para leitura
**Severidade:** ALTA
**Correção:**
- --t3 mudar para #8b8b8b (contraste mínimo 4.5:1)
- Aumentar contraste em tabelas
- Labels em ALL CAPS difíceis de ler

### 4. ❌ ESPAÇAMENTO INADEQUADO
**Problema:** Cards com padding 1.25rem muito apertado, gaps 1.25rem também apertado
**Severidade:** ALTA
**Correção:**
- Cards: padding 1.25rem → 1.5rem
- Gaps: 1.25rem → 1.5rem
- Melhorar espaçamento vertical em tabelas

### 5. ❌ CORES POUCO INTUITIVAS
**Problema:** --a: #FFA502 parece aviso/perigo em vez de ação
**Severidade:** MÉDIA
**Correção:**
- Cor primária --a melhor (usar tons mais naturais)
- Adicionar cores para estados (hover, focus, active)
- Melhorar diferenciação visual

### 6. ❌ TABELA ILEGÍVEL
**Problema:** Colunas estreitas, texto cortado, sem zebra-stripes, linhas não separadas claramente
**Severidade:** ALTA
**Correção:**
- Adicionar zebra-stripes (linha alternada)
- Melhorar proporção de colunas
- Aumentar altura das linhas
- Adicionar grid lines sutis

### 7. ❌ BOTÕES SEM FEEDBACK VISUAL
**Problema:** Transições muito rápidas (0.15s), sem ripple/feedback de clique
**Severidade:** MÉDIA
**Correção:**
- Aumentar transição para 0.25s
- Adicionar transform no hover (translateY(-2px))
- Melhorar feedback visual

### 8. ❌ FILTROS (PILLS) CONFUSOS
**Problema:** Pills com border muito sutil, estado "on" não claramente diferenciado
**Severidade:** MÉDIA
**Correção:**
- Pills ativos: fundo + border + cor clara
- Pills inativos: border mais visível
- Melhorar hover state

### 9. ❌ MODAL/POPUP SEM BACKDROP CLARO
**Problema:** Modal com backdrop 0.5 opacity muito translúcido
**Severidade:** BAIXA
**Correção:**
- Aumentar backdrop opacity para 0.6-0.7
- Adicionar blur effect
- Melhorar animação de entrada

### 10. ❌ SIDEBAR POUCO INTUITIVA
**Problema:** Cards de cartões sem diferenciação clara, falta de ícones visuais
**Severidade:** MÉDIA
**Correção:**
- Adicionar ícones claros
- Melhorar separação visual
- Usar cores diferentes para cada cartão

### 11. ❌ RESPONSIVIDADE QUEBRADA
**Problema:** Desktop 2 colunas + sidebar deixa pouco espaço, tabela não adapta
**Severidade:** ALTA
**Correção:**
- Breakpoints: 1024px (1 coluna), 1440px (2 colunas)
- Layout stack em telas pequenas
- Melhorar mobile view

### 12. ❌ DENSIDADE DE INFORMAÇÃO
**Problema:** Tabela mostra muitas colunas, informação aglomerada
**Severidade:** MÉDIA
**Correção:**
- Mostrar apenas informação essencial
- Expandir ao clicar
- Melhorar visual

### 13. ❌ NENHUM ESTADO DE LOADING
**Problema:** Ao trocar abas, nenhum feedback de carregamento
**Severidade:** MÉDIA
**Correção:**
- Adicionar spinner/skeleton
- Melhorar feedback visual de transição
- Disable elementos durante loading

### 14. ❌ ACESSIBILIDADE PÉSSIMA
**Problema:** Nenhum aria-label, color-only info, contraste ruim, click targets < 48px
**Severidade:** CRÍTICA
**Correção:**
- Adicionar aria-labels
- Melhorar contraste (WCAG AA)
- Aumentar click targets para 44-48px
- Suporte a teclado (Tab, Enter, ESC)

### 15. ❌ TIPOGRAFIA DE VALORES CONFUSA
**Problema:** Valores financeiros com tamanhos diferentes, sem moeda clara
**Severidade:** MÉDIA
**Correção:**
- Sempre mostrar "R$" ou moeda
- Usar mesma cor para entrada (verde) e saída (vermelho)
- Tamanho consistente (14px-16px mínimo)

---

## Resumo de Severidade

| Severidade | Qtd | Problemas |
|-----------|-----|-----------|
| 🔴 CRÍTICA | 1 | Acessibilidade |
| 🔴 ALTA | 7 | Hierarquia, Tipografia, Contraste, Espaçamento, Tabela, Responsividade, Densidade |
| 🟡 MÉDIA | 6 | Cores, Botões, Pills, Modal, Sidebar, Loading |
| 🟢 BAIXA | 1 | Modal backdrop |

**Total: 15 problemas identificados**

---

## Prioridade de Implementação

### Fase 1 (URGENTE - vai ser feito agora)
1. Melhorar tipografia (hierarquia clara)
2. Aumentar espaçamento (respiração visual)
3. Melhorar contraste (WCAG AA)
4. Tornar tabela legível
5. Corrigir hierarquia das abas
6. Adicionar aria-labels básicas

### Fase 2 (IMPORTANTE)
7. Feedback visual em botões
8. Melhorar pills/filtros
9. Melhorar responsividade
10. Adicionar loading states
11. Melhorar modal backdrop

### Fase 3 (NICE TO HAVE)
12. Animações mais suaves
13. Ícones visuais
14. Sidebar melhorada
15. Densidade customizável
