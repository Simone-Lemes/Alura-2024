# Imersão Alura 2024

```markdown
## Diferenças entre `let` e `const` em JavaScript

Em JavaScript, as palavras-chave `let` e `const` são usadas para declarar variáveis, mas com comportamentos distintos em relação à mutabilidade e escopo.

### `let`

* **Mutabilidade:** Permite que o valor da variável seja alterado após a declaração. 
* **Escopo:** Tem escopo de bloco, ou seja, a variável é acessível apenas dentro do bloco (como um `if`, `for`, ou função) em que foi declarada.
* **Hoisting:** É "hoistada", mas não inicializada. Isso significa que você pode declarar a variável depois de usá-la dentro do mesmo bloco, mas ela terá o valor `undefined` até ser inicializada.

**Exemplo:**

```javascript
let nome = "João";
nome = "Maria"; // Valor alterado com sucesso
```

### `const`

* **Mutabilidade:** O valor da variável **não pode ser alterado** após a declaração.
* **Escopo:** Assim como `let`, tem escopo de bloco.
* **Inicialização:** **Deve ser inicializada** no momento da declaração.

**Exemplo:**

```javascript
const PI = 3.14159;
PI = 3.14; // Isso gerará um erro, pois o valor de PI não pode ser alterado
```

**Quando usar cada uma:**

* **`const`:**
  * Para valores que nunca mudarão, como constantes matemáticas (π, e), configurações, etc.
  * Para tornar o código mais seguro, evitando alterações acidentais.

* **`let`:**
  * Para valores que podem mudar ao longo do tempo, como contadores em loops, resultados de cálculos, etc.

**Resumo:**

| Característica | `let` | `const` |
|---|---|---|
| Mutabilidade | Sim | Não |
| Escopo | Bloco | Bloco |
| Inicialização | Não obrigatória | Obrigatória |
| Hoisting | Sim (não inicializada) | Não |

**Em resumo:**

* **`const`** é ideal para valores imutáveis, promovendo código mais seguro e previsível.
* **`let`** é mais flexível para valores que podem mudar, mas use-o com cautela para evitar bugs.

**Recomendação:**

É altamente recomendado usar `const` por padrão e só usar `let` quando realmente precisar de uma variável mutável. Isso ajuda a evitar erros comuns em JavaScript e torna o seu código mais robusto.

**Exemplo prático:**

```javascript
// Utilizando const para valores constantes
const gravidade = 9.8;

// Utilizando let para valores que podem mudar
let contador = 0;
while (contador < 10) {
  console.log(contador);
  contador++;
}
```

**Em suma:**

Ao entender as diferenças entre `let` e `const`, você escreve código JavaScript mais limpo, seguro e eficiente.

**Gostaria de ver mais exemplos ou tem alguma outra dúvida sobre `let` e `const`?**
```

