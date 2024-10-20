# Analisador de Hierarquia de Palavras (CLI)

Você deve criar uma aplicação de linha de comando (CLI) em TypeScript que carrega uma
árvore hierárquica de palavras, onde cada nível da árvore representa uma profundidade
específica. A aplicação deve analisar uma frase fornecida pelo usuário, identificar a
profundidade associada a uma palavra mencionada na frase, e então exibir os itens mais
próximos dessa profundidade.


## Descrição da hierarquia
Você deve criar uma estrutura hierárquica de palavras onde cada palavra ou grupo de
palavras pode ter subcategorias, semelhante a uma árvore de classificação. A estrutura
deve ser representada em um arquivo json na pasta `dicts/`.


#### Exemplo de Estrutura:
```
- Animais
  - Mamíferos
    - Carnívoros
      - Felinos
        - Leões
        - Tigres
        - Jaguars
        - Leopardos
    - Herbívoros
      - Equídeos
        - Cavalos
        - Zebras
        - Asnos
    - Bovídeos
      - Bois
      - Búfalos
      - Antílopes
      - Cabras
    - Primatas
      - Gorilas
      - Chimpanzés
      - Orangotangos
  - Aves
    - Rapinas
      - Águias
      - Falcões
      - Corujas
      - Milhafres
    - Pássaros
      - Canários
      - Papagaios
      - Pardais
      - Rouxinóis
```
## Desenvolvimento da CLI
#### Comando para analisar uma frase

***syntax:*** bun run cli.ts analyze –depth <n> –verbose (optional) “{phrase}”
Analisa a frase fornecida e exibe uma tabela com a contagem de palavras no nível de
profundidade especificado.

Parâmetros:
- –depth <n>: Nível de profundidade da árvore para o qual exibir a contagem
- “{phrase}” texto a ser analisado
- –verbose: Caso seja informado deve exibir uma tabela no stdout com as seguintes
métricas:
  - Tempo de carregamento dos parâmetros (ms)
  - Tempo de verificação da frase (ms)


### Exemplo de execução
Exemplo 1: Possui uma correspondência e está utilizando todos os parâmetros.\
**comando:** bun run cli.ts analyze –depth 2 “Eu amo papagaios” –verbose\
***output:*** Aves = 1 (Uma ave foi mencionada)

<!-- usando html pois em markdown não é possivel fazer tabela sem header -->
<table>
<tr>
    <td>Tempo de carregamento dos parâmetros</td>
    <td>50ms</td>
</tr>
<tr>
    <td>Tempo de verificação da frase</td>
    <td>10ms</td>
</tr>
</table>

-----

Exemplo 2: Possui duas correspondências.\
**comando:** bun run cli.ts analyze –depth 3 “Eu vi gorilas e papagaios”\
***output:*** Pássaros = 1; Primatas = 1;

-----

Exemplo 3: Não possui correspondência.\
**comando:** bun run cli.ts analyze –depth 5 “Eu tenho preferência por animais carnívoros”\
***output:*** 0;\
Na frase não existe nenhum filho do nível 5 e nem o nível 5 possui os termos especificados


### Requisitos técnicos
- ***Linguagem:*** javascript (com ts)
- ***Arquivos de dados:*** Salve as estruturas que criar dentro da pasta dicts/
- ***Runtime:*** O de sua preferência
- ***Testes:*** Você deve criar testes unitários. Todos devem estar rodando e, ao menos
um, deve ter a análise de um texto de mais de 5000 caracteres.


### O que avaliamos?
- ***Git:*** Como você organizou seu repositório, commits, branchs e clareza do
README.md
- ***Arquitetura:*** Como você organizou os componentes do seu código. Eles são
extensíveis?
- ***Requisitos:*** O projeto implementa tudo que o teste foi solicitado?
- ***Performance:*** Quais técnicas de otimização você utilizou? Qual foi a eficiência do
carregamento dos parâmetros?