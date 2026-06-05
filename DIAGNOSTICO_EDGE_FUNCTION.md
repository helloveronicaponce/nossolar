# 🔍 Guia de Diagnóstico - Edge Function do Supabase

## Problema Identificado:

A Edge Function está retornando apenas:
```javascript
{month: '2026-06'}
```

Deveria retornar todos os dados do usuário:
```javascript
{
  _cartoes: [...],
  _faturas: {...},
  _limites: {...},
  '2026-06': [...]
}
```

---

## ✅ Como Testar a Edge Function:

### 1. Via Console do Navegador (F12):

```javascript
// Crie dados de teste
D._cartoes = [
  {id:'itau', nome:'Itaú', cor:'#ec7000', emoji:'🟠', fechamento:13, vencimento:20}
];

D._faturas = {
  '2026-06': {itau: 2500}
};

D._limites = {
  itau: 5000
};

// Salve os dados
saveData();
```

**Verifique no Console (F12) a saída:**
- `💾 Salvando dados:` - mostra o que está sendo enviado
- `📤 POST resposta:` - mostra o status HTTP
- `✅ Edge Function respondeu:` - mostra o que retornou

---

### 2. Via Supabase Dashboard:

1. Acesse: https://app.supabase.com
2. Vá para seu projeto
3. Clique em **Functions** (lado esquerdo)
4. Procure por **nosso-lar**
5. Verifique:

#### **O código está correto?**
A função deveria:
- Receber POST com `Authorization: Bearer <token>`
- Buscar dados do usuário no banco de dados (tabela/storage)
- Retornar `{...dados_do_usuario}`

#### **Há erros nos logs?**
Clique em "Invocations" para ver os logs das últimas execuções

---

## 🔧 Possíveis Problemas na Edge Function:

| Sintoma | Possível Causa | Solução |
|---------|----------------|---------|
| Retorna apenas `{month: '...'}` | Função não busca dados do banco | Implementar lógica de busca |
| Status 200 mas sem dados | Dados não salvos no banco | Verificar se `saveData()` persiste |
| Status 500 | Erro na Edge Function | Revisar código da função |
| Status 401 | Token inválido | Verificar autenticação |

---

## 📊 Fluxo Esperado de Dados:

```
Frontend (index.html)
    ↓
    saveData() [POST dados para Edge Function]
    ↓
Edge Function (Supabase)
    ↓
    Busca dados do usuário no banco
    ↓
    Retorna {_cartoes, _faturas, _limites, ...}
    ↓
Frontend
    ↓
    loadFromDB() [GET dados da Edge Function]
    ↓
    Renderiza abas com dados
```

---

## 🚀 Próximos Passos:

1. **Verifique os logs da Edge Function** no Supabase Dashboard
2. **Teste o endpoint manualmente** com curl/Postman:
   ```bash
   curl -X POST https://qwlegnebejakwwuntyrd.supabase.co/functions/v1/nosso-lar \
     -H "Authorization: Bearer <SEU_TOKEN>" \
     -H "Content-Type: application/json" \
     -d '{}'
   ```
3. **Revise o código da Edge Function** para garantir que:
   - Autentica o usuário corretamente
   - Busca dados do Supabase
   - Retorna os dados completos (não apenas `{month: '...'}`)

---

## 💡 Dica para Debug:

No console do navegador, você pode ver exatamente o que a Edge Function está retornando:

```javascript
testConnection()
// Procure por: "Resposta da Edge Function" ou os logs de saveData()
```

Isso ajudará a identificar se:
- Os dados estão sendo enviados corretamente
- A Edge Function está retornando os dados corretos
- Há algum erro na integração

---

**Arquivo**: DIAGNOSTICO_EDGE_FUNCTION.md
**Data**: 2026-06-03
**Status**: Pronto para investigação
