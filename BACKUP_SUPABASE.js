/**
 * SCRIPT DE BACKUP - Execute no Console do Supabase
 *
 * Este script extrai TODOS os dados do usuário do Supabase
 * e cria um backup que pode ser restaurado
 */

// ============================================
// 1. INSTRUÇÕES DE USO
// ============================================
//
// 1. Vá para: https://app.supabase.com
// 2. Selecione seu projeto
// 3. Clique em "SQL Editor"
// 4. Crie uma nova query
// 5. Cole este código SQL:
//
// SELECT * FROM user_data WHERE user_id = 'helloveronicaponce@gmail.com';
//
// OU procure pela tabela que armazena os dados e execute:
//
// SELECT * FROM <table_name> WHERE user_id = 'helloveronicaponce@gmail.com';
//
// 6. Copie o resultado (JSON ou estruturado)
// 7. Cole abaixo em BACKUP_DATA
//
// ============================================
// 2. BACKUP DOS DADOS
// ============================================

const BACKUP_DATA = {
  // COPIE AQUI O RESULTADO DA QUERY ACIMA
  // Formato esperado:
  // {
  //   _cartoes: [...],
  //   _faturas: {...},
  //   _limites: {...},
  //   '2026-06': [...],
  //   '2026-05': [...]
  // }
};

// ============================================
// 3. RESTAURAR NO FRONTEND
// ============================================

console.log(`
🔄 INSTRUÇÕES PARA RESTAURAR OS DADOS:

1. Execute este script no console do navegador (F12):

D = ${JSON.stringify(BACKUP_DATA)};
saveData();
render();
renderSideGeral();

2. Ou copie este código completo:
`);

const RESTORE_CODE = `
// Cole isto no console (F12) do navegador:
D = ${JSON.stringify(BACKUP_DATA)};
Object.assign(D, ${JSON.stringify(BACKUP_DATA)});
saveData();
render();
renderSideGeral();
renderSideCart();
console.log('✅ Dados restaurados! Atualizando interface...');
`;

console.log(RESTORE_CODE);

// ============================================
// 4. FORMATO ESPERADO DOS DADOS
// ============================================

const DATA_STRUCTURE = {
  "_cartoes": [
    {
      "id": "itau",
      "nome": "Itaú",
      "cor": "#ec7000",
      "emoji": "🟠",
      "fechamento": 13,
      "vencimento": 20
    }
    // ... mais cartões
  ],
  "_faturas": {
    "2026-06": {
      "itau": 2500,
      "santander": 1200
      // ... mais cartões
    }
    // ... mais meses
  },
  "_limites": {
    "itau": 5000,
    "santander": 4000
    // ... mais cartões
  },
  "_meta": {
    "si": 1000
  },
  "2026-06": [
    {
      "id": "1",
      "tipo": "out",
      "venc": "2026-06-05",
      "pag": null,
      "desc": "Aluguel",
      "cat": "Casa",
      "valor": 2500,
      "status": "pendente",
      "parcelas": 1,
      "parcelaAtual": 1
    }
    // ... mais transações
  ]
  // ... mais meses
};

console.log('📋 Estrutura esperada:', DATA_STRUCTURE);

// ============================================
// 5. VERIFICAR SE DADOS FORAM RESTAURADOS
// ============================================

console.log(`
✅ Para verificar se tudo funcionou:

1. Clique na aba "Visão Geral"
2. Procure por: Resumo, Entradas pagas, Saídas pagas
3. Verifique se os valores aparecem
4. Se não funcionar, verifique no console:
   - Procure por erros em vermelho
   - Execute: console.log(D)
   - Isso mostrará os dados carregados
`);
