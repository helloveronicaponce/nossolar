# 🔧 Guia de Correção - Edge Function do Supabase

## Problema Identificado

A Edge Function `nosso-lar` está:
- ✅ **Recebendo requisições** corretamente (HTTP 200)
- ❌ **Retornando apenas** `{month: '2026-06'}`
- ❌ **NÃO retornando** dados reais do usuário

---

## O que a Edge Function DEVERIA fazer

### GET (loadFromDB)
```javascript
// Quando o frontend faz GET
fetch('https://qwlegnebejakwwuntyrd.supabase.co/functions/v1/nosso-lar', {
  headers: { Authorization: 'Bearer <token>' }
})

// Deveria retornar:
{
  _cartoes: [
    {id:'itau', nome:'Itaú', cor:'#ec7000', ...},
    ...
  ],
  _faturas: {
    '2026-06': {itau: 2500, santander: 1200, ...},
    '2026-05': {...},
    ...
  },
  _limites: {itau: 5000, ...},
  '2026-06': [{id:'1', tipo:'out', desc:'Aluguel', ...}, ...],
  '2026-05': [...],
  ...
}
```

### POST (saveData)
```javascript
// Quando o frontend faz POST
fetch('https://qwlegnebejakwwuntyrd.supabase.co/functions/v1/nosso-lar', {
  method: 'POST',
  headers: { Authorization: 'Bearer <token>' },
  body: JSON.stringify(D)  // Todos os dados
})

// Deveria:
// 1. Autenticar o usuário
// 2. Salvar os dados no Supabase
// 3. Retornar confirmação
```

---

## Passos para Diagnosticar

### 1. Acesse o Supabase Dashboard
1. Vá para: https://app.supabase.com
2. Selecione seu projeto
3. Clique em **Functions** (lado esquerdo)
4. Procure por **nosso-lar**

### 2. Verifique o Código da Edge Function

Procure por algo que parece com:

```typescript
// ❌ ERRADO - Retorna apenas mês:
return Response.json({ month: new Date().toISOString().slice(0, 7) })

// ✅ CORRETO - Retorna dados do usuário:
const user = req.user  // Usuário autenticado
const data = await db.from('user_data').select('*').eq('user_id', user.id).single()
return Response.json(data)
```

### 3. Verifique o Banco de Dados

1. Clique em **Database** no Supabase
2. Procure por uma tabela com dados do usuário (ex: `user_data`, `nosso_lar_data`, etc)
3. Verifique se há dados para `user_id = helloveronicaponce@gmail.com`

### 4. Verifique os Logs da Edge Function

1. Clique em **Functions** > **nosso-lar** > **Invocations**
2. Procure por erros ou problemas
3. Veja o que a função está retornando

---

## Possíveis Causas e Soluções

### Causa 1: Edge Function não está implementada

**Sintoma:** Código da função vazio ou só retorna `{month: '...'}`

**Solução:** Implementar a função completa

```typescript
export default async (req: Request) => {
  // Obter usuário autenticado
  const authHeader = req.headers.get('authorization')
  if (!authHeader) return new Response('Unauthorized', { status: 401 })
  
  // GET - Retornar dados
  if (req.method === 'GET') {
    const user = await getUser(authHeader)
    const data = await loadUserData(user.id)
    return Response.json(data)
  }
  
  // POST - Salvar dados
  if (req.method === 'POST') {
    const user = await getUser(authHeader)
    const data = await req.json()
    await saveUserData(user.id, data)
    return Response.json({ success: true })
  }
}
```

### Causa 2: Dados não estão sendo salvos

**Sintoma:** Edge Function funciona mas retorna vazio

**Solução:** Verificar se `saveData()` está funcionando
- Abra Console (F12)
- Crie uma transação nova no painel
- Procure por "💾 Salvando dados:" nos logs
- Procure por "✅ Edge Function respondeu:" para confirmar resposta

### Causa 3: Autenticação não está funcionando

**Sintoma:** Edge Function retorna erro 401/403

**Solução:** Verificar token de autenticação
- Abra Console (F12)
- Execute: `testConnection()`
- Procure por "Auth header:" para confirmar token
- Se vazio, refazer login

---

## Teste Rápido

No Console do navegador (F12), execute:

```javascript
// Teste 1: Verificar autenticação
const h = await getAuthHeader()
console.log('Token:', h.Authorization ? 'SIM' : 'NÃO')

// Teste 2: Tentar carregar dados
fetch('https://qwlegnebejakwwuntyrd.supabase.co/functions/v1/nosso-lar', {
  headers: h
})
.then(r => r.json())
.then(data => {
  console.log('Resposta:', data)
  console.log('Chaves:', Object.keys(data))
  console.log('Tem dados reais?', Object.keys(data).length > 1)
})

// Teste 3: Salvar dados
D._cartoes = [{id:'test', nome:'Teste', cor:'#000', emoji:'📝', fechamento:1, vencimento:5}]
saveData()
// Procure por "💾 Salvando dados:" nos logs
```

---

## Próximas Ações

1. **Acesse o Supabase** e verifique o código da Edge Function
2. **Implemente corretamente** se necessário
3. **Verifique o banco de dados** para dados salvos
4. **Teste novamente** com `testConnection()`

---

**Se a Edge Function estiver vazia ou incorreta, você precisa corrigi-la no Supabase Dashboard diretamente.**

O frontend agora está **100% pronto** para receber dados reais. O problema é **apenas na Edge Function**.
