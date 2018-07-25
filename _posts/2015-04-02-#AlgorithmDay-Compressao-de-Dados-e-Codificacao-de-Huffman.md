---
layout: post
title:  "#AlgorithmDay: Compressão de Dados e Codificação de Huffman"
date:   2015-04-02 16:12:00
author: Victor Hugo da Silva Ribeiro
categories: jekyll update
comments: true
---

Olá pessoal, hoje no *AlgorithmDay* estarei comentando sobre compressão de arquivos e explicando a codificação de Huffman aplicada a compressão de textos.

Os arquivos comprimidos são uma benção para a maioria de nós internautas que desejamos fazer aquele *download* de músicas, filmes ou jogos e para aquelas pessoas que já precisaram armazenar um arquivo em *pen drive* ou até mesmo no *HD* e sofreram com a falta de espaço disponível para armazenamento.

A maioria dos arquivos digitais possuem a mesma informação registrada diversas vezes e através de *softwares* que implementam algoritmos de compressão busca-se eliminar essas redundâncias de *bits* e *bytes*, sendo assim, a compressão de dados consiste em reduzir o espaço ocupado por determinado arquivo em um dispositivo de armazenamento.

Não confundir compressão com compactação, compactação de dados visa unir partes distribuídas de dados. Um exemplo bastante conhecido disto é o desfragmentador de disco do *Windows*, quando se é feita uma alteração num arquivo, as mudanças nem sempre são salvas no mesmo local do arquivo original, então ao executar o desfragmentador de disco, ele irá buscar no disco os arquivos que estão fragmentados e então uni-los novamente.

Os algoritmos de compressão podem ser classificados de diversas formas, porém, os mais conhecidos são os que apresentam ou não perda de dados em seu processo.

- Sem perda de dados (*lossless*): quando se é garantido que após a compressão e descompressão de um arquivo, seus dados são idênticos ao do arquivo original (antes da compressão). Útil para textos, planilhas, *softwares* e demais artigos digitais que demandam de precisão de seus dados.
- Com perda de dados (*lossy*): quando após a compressão ocorre perda de dados, assim o arquivo resultante da compressão é diferente do arquivo original, porém, continuam úteis ao seu propósito. Ocorre muito em arquivos de áudio, vídeo e imagens onde podem ocorrer perdas de frequência de som muito altas e/ou muito baixas e alguns detalhes de imagem, porém são perdas pouco perceptíveis para nós humanos. É importante tomar cuidado com o algoritmo aplicado à esse tipo de compressão, pois pode gerar perdas generativas (*generation loss*) onde mais dados são perdidos cada vez que se realiza uma nova compressão sobre a compressão anterior.

## Codificação de Huffman ##

A codificação de Huffman foi descrita pela primeira vez no artigo "*A Method for the Construction of Minimum-Redundancy Codes*" por David Albert Huffman quando era doutorando no *Massachussetts Institute of Technology* (*MIT*) em 1952 (clique [aqui](http://www.huffmancoding.com/my-uncle/scientific-american) para conhecer um pouco mais da história do grande David Albert Huffman), sendo um dos mais famosos sistemas de compressão, servindo ainda como base para a maioria dos sistemas modernos de compressão.

Este método busca calcular a frequência com que determinados símbolos (caracteres) ocorrem em determinado conjunto de dados a ser salvo (uma palavra, por exemplo), com essa frequência em mãos montaremos uma árvore binária, chamada de Árvore de Huffman e a partir dela, gerar códigos de tamanho variado para representar cada símbolo. Podendo assim, atribuir a símbolos de maior frequência uma curta quantidade de bits para representá-lo.

Exemplificando, vamos aplicar a codificação de Huffman para comprimir a palavra “RECURSIVIDADE”.

1. Devemos separar os caracteres que compõe a palavra recursividade, calcular suas respectivas frequências de aparições e ordená-las de acordo com este atributo. Como mostra a imagem abaixo.

	![](https://raw.githubusercontent.com/recursivejr/recursivejr.github.io/master/images/posts/huffman/Huffman_passo1.png)

2. Concluído o primeiro passo, devemos utilizar os dois elementos de menor frequência para criar um nó da árvore, este deverá ter a frequência equivalente a soma das frequências dos dois elementos selecionados. Feito isto, o nó deverá ser incluído na lista e a mesma reordenada, no caso, os caracteres de menor frequência são ‘A’ e ‘V’, ambos com 7,69% de frequência. Então, com esses caracteres criei um novo nó ‘n1’ cuja frequência equivale a soma das frequências dos caracteres ‘A’ e ‘V’, feito isto, adicionei o nó na lista e em seguida reordenei seus elementos de acordo com a frequência, como ilustra a imagem abaixo.

	![](https://raw.githubusercontent.com/recursivejr/recursivejr.github.io/master/images/posts/huffman/Huffman_passo2.png)

3. Repete-se o segundo passo até que em nossa lista contenha apenas dois elementos, estes, serão filhos da raiz de nossa árvore. Uma forma de perceber que sua árvore está montada corretamente é verificar se a soma das frequências de seus dois últimos elementos corresponde a 100%. No nosso caso, isto não ocorrerá pois utilizamos apenas duas casas decimais de precisão pós vírgula. Caso tenha dificuldade em trabalhar com porcentagens, pode utilizar a quantidade de vezes que um caractere aparece em seu texto, e no fim, a soma dos dois últimos elementos devem corresponder ao total de caracteres que contém o texto. A figura abaixo mostra como ficou nossa árvore de Huffman.

	![](https://raw.githubusercontent.com/recursivejr/recursivejr.github.io/master/images/posts/huffman/Huffman_passo3.png)

4. Com a árvore pronta, devemos atribuir o valor ‘0’ para cada elemento a esquerda de um nó e ‘1’ para os elementos a direita do nó. Percorrendo a árvore e recolhendo os valores de cada aresta, formamos representações binárias de cada caractere. Como mostra a imagem abaixo.

	![](https://raw.githubusercontent.com/recursivejr/recursivejr.github.io/master/images/posts/huffman/Huffman_passo4.png)

Escrevendo a mesma palavra utilizando a representação binária que construímos, podemos perceber que houve uma boa economia de *bits*, como mostra a imagem abaixo.


![](https://raw.githubusercontent.com/recursivejr/recursivejr.github.io/master/images/posts/huffman/Huffman_passo5.png)

## Descompressão ##

Para realizar a descompressão, precisamos da representação binária que formamos anteriormente e claro, da árvore de Huffman que foi utilizada. Partindo da raiz, percorreremos a árvore conforme orienta a representação binária até que encontremos um nó folha. Este nó é o caractere buscado, após encontrá-lo, retornamos à raiz de nossa árvore e repetiremos o processo até que a representação binária termine. Como ilustra a imagem abaixo.

![](https://raw.githubusercontent.com/recursivejr/recursivejr.github.io/master/images/posts/huffman/Huffman_passo6.png)

A codificação de Huffman é muito interessante não? Mas hoje pararemos por aqui, fiquem ligados nos *posts* legais que estão rolando no blog da *Recursive* e em breve estarei trazendo mais conteúdo para vocês. Espero que tenham gostado e aprendido, Abraços!

{% include equipe/victorhugo.html %}
