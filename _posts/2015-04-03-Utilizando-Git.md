---
layout: post
title:  "Utilizando GIT"
date:   2015-04-03 12:37:42
author: Douglas Gabriel
categories: jekyll update
comments: true
image: images/posts/git/cover.png
key_words: git, bitbucket, github
description: Neste post você aprenderá como interagir de forma amigável com a ferramenta de controle de versões 'Git' de forma básica e eficiênte nos seus projetos.
---

Saudações,

Neste post falarei, de forma simples, como venho utilizando a ferramenta de controle de versão, Git, abordando suas principais funcionalidades e mostrando como um programador pode (deve) estabelecer uma relação firme e duradoura com esta ferramenta que facilita tanto o nosso trabalho. Vamos lá!

###Objetivos###

Ao fim deste post você deverá:

- Entender o que é Git;
- Entender os termos frequentemente utilizados no trabalho com a ferramenta;
- Aprender como utilizar a ferramenta localmente (via linha de comando) e utilizar repositórios remotos já oferecidos por alguns serviços. (Bitbucket e GitHub).

> OBS: Não será abordado como criar um servidor Git.

###O que é Git?###

Basicamente, Git é uma ferramenta de controle de versão distribuída, além de um sistema de gerenciamento de código fonte, desenvolvido por [Linus Torvalds][Linus], para auxiliar no desenvolvimento do Kernel Linux, mas acabou sendo adotado por muitos outros projetos.

Na prática, o Git trabalha com um sistema de repositórios, onde cada repositório contém um projeto que será monitorado, tendo todo o seu histórico de modificações gravado, permitindo, assim, o controle das suas versões.

Por ser um sistema distribuído, é possível criar repositórios em algum servidor e acessá-los remotamente, facilitando o trabalho de uma equipe geograficamente distribuída. Porém, é possível, também, trabalhar com repositórios apenas localmente.

###Por que é importante?###

Bem, é fácil imaginarmos situações em que o Git pode facilitar nosso trabalho, por exemplo: quem nunca, ao desenvolver um projeto, precisou fazer um backup do código funcional para poder adicionar alguma funcionalidade, com medo que a alteração interferisse de forma negativa nas já desenvolvidas? Além disto, é possível, também, que ao desenvolver um projeto que só possui uma cópia, esta cópia se perca por vários motivos, o que não é um acontecimento raro de se ver. O Git possui funcionalidades que ajudam o desenvolvedor nestas e outras situações.

###Glossário###

Antes de nos aprofundarmos no assunto, é necessário ter em mente algumas expressões comumente utilizadas quando se trabalha com Git:

- Clonar: é o ato de copiar e mapear um repositório remoto em uma máquina local;
- Fork: é o ato de copiar um repositório em um outro repositório. A diferença entre Clone e Fork é que ao copiar um repositório usando Fork, o projeto criado no outro passa a ser totalmente independente do original (as modificações realizadas em um não repercutem no outro), sendo, assim, tratado como um novo projeto;
- Stage: Antes de serem salvas/monitoradas pelo Git, precisamos informar quais modificações desejamos salvar, isto é feito adicionando os arquivos modificados à chamada *Stage Area*, a isto se dá o nome de Stage;
- Commit: é o ato de salvar, localmente, as modificações que se encontram na *Stage Area*;
- Push: é o ato de mandar as modificações salvas localmente para o repositório remoto;
- Pull: é o ato de baixar as modificações do repositório remoto para o local;
- Tag: São marcações especiais adicionadas a alguns commits, normalmente simbolizando novas versões do projeto.
- Branch: São as diferentes ramificações que podem ser criadas durante o desenvolvimento de um projeto. Modificações feitas em uma branch não repercutem nas demais, porém, posteriormente, é possível unir novamente as branches através de um merge.
- Merge: é o ato de unir as modificações existentes em um local com as existentes em outro, por exemplo: branches e repositórios.

Com estes termos devidamente explicados, podemos continuar!

###Instalação###

A instalação do Git é bastante simples em todas as plataformas. Apenas clique na plataforma que esteja utilizando e será redirecionado para o link de instalação:

- [Windows][Windows]
- [Linux][Linux]
- [Mac][Mac]

Usuário Linux, apenas rodem o comando correspondente a sua distribuição, e os demais (Windows e Mac), precisam apenas executar os arquivos baixados.

###Criando um repositório remoto###

Na criação de um repositório remoto, iremos utilizar os serviços oferecidos pelas duas ferramentas mais populares do seguimento: o [Bitbucket] e/ou o [GitHub].

No quesito "repositórios oferecidos" ambos os serviços mostram-se extremamente iguais, as diferenças que podem nos levar a escolher um dentre os dois estão nas funcionalidades extras oferecidas pelos serviços. Para o nosso tutorial, vamos nos ater a comentar apenas uma diferença básica que fará com que você decida qual o melhor para utilizar-se neste momento.

O Bitbucket oferece repositórios privados e públicos gratuitamente, diferente do GitHub que oferece apenas repositórios públicos gratuitamente.

> Repositórios privados oferecem um controle de acesso, onde apenas pessoas credenciadas e, dependendo das permissões concedidas, podem ler, escrever e copiar os arquivos do projeto. Já repositórios públicos, ficam visíveis à todos, sendo que todos podem ler e copiar seus arquivos, porém a escrita só é feita mediante a aprovação de um administrador do repositório.

Independente do serviço que você escolheu, os passos para a criação do repositório são bastante semelhantes.

Para a criação de um repositório, uma conta se faz necessário, sendo assim, caso ainda não tenha, crie sua conta no serviço escolhido e realize o login.

Com o login realizado, vamos agora criar o repositório que iremos trabalhar:

No GitHub:

<img src="{{ site.absolute_url }}/images/posts/git/criarrepositoriogithub.png">

No Bitbucket:

<img src="{{ site.absolute_url }}/images/posts/git/criarrepositoriobitbucket.png">

Ao clicar na opção, preencha o formulário com as informações do seu repositório e ao confirmar, a criação do seu repositório remoto estará concluída!

###Criando repositório local e mapeando para o remoto###

Existem duas formas de fazermos isto. A primeira, é mais simples e consiste em rodar o seguinte comando no terminal:

    git clone <url do repositório>

A url do seu repositório pode ser encontrada:

No GitHub:

<img src="{{ site.absolute_url }}/images/posts/git/urlgithub.png">

No Bitbuket:

<img src="{{ site.absolute_url }}/images/posts/git/urlbitbucket.png">

> Este comando irá criar um diretório com  mesmo nome do repositório clonado dentro do diretório que o terminal está atualmente.

A outra forma de criar um repositório local e mapear para o remoto requer mais passos que a forma anterior, porém nos trás mais versatilidade:

Primeiro, é necessário criar um diretório onde o repositório será mapeado. Depois, navegue até este diretório com o terminal e digite o seguinte comando:

	git init

Este comando tornará o seu diretório mapeado pelo Git. Em seguida vamos mapear o repositório local para o remoto com o seguinte comando:

	git remote add <nome do repositório> <url do repositório>

A versatilidade trazida por esta abordagem é que é possível atribuir um nome para o repositório (caso você use a primeira forma ou oculte o nome do repositório na segunda, o nome do repositório será 'origin') e o fato de que é possível usá-la em projetos já criados e que você a princípio não usou Git na hora de sua criação.

Com o repositório devidamente mapeado, podemos começar a desenvolver nosso projeto e controlá-lo com o Git.

###Trabalhando em equipe###

Uma das maiores vantagens de se usar o Git é na hora de se trabalhar com uma equipe de desenvolvimento, e para se trabalhar em equipe, é necessário dar permissão para os demais membros acessarem e modificarem os arquivos do seu repositório. Os dois serviços utilizados oferecem um gerenciamento facilitado nesse quesito.

Para adicionar os membros da equipe, será necessário que eles também possuam contas no serviço utilizado. Em ambos os passos são muito semelhantes:

No GitHub, no seu repositório, você deverá ir na opção 'Settings' que se encontra na barra vertical à direita da sua tela. Em seguida, vá na opção 'Collaborators' que se encontra na barra vertical à esquerda de sua tela e no formulário que apareceu, digite o *username* ou nome completo da pessoa que deseja adicionar.

No Bitbucket, no seu repositório, clique na opção 'Settings' na barra vertical à esquerda, em seguida vá em 'Gerenciamento de acesso' e preencha o formulário que aparecer, escolhendo, também, o nível de acesso dos membros da equipe.

Ao adicionar sua equipe, todos estarão aptos a trabalhar utilizando os passos descritos a seguir.

###Pull###

Ao se trabalhar em equipe, este passo é bastante importante!

Antes de começar a modificar os arquivos do seu repositório, é sempre bom rodar o seguinte comando:

	git pull

Isso porque é possível que haja mudanças no repositório remoto feitas por outros membros da equipe, e caso você modifique algum arquivo que tenha sido alterado no repositório remoto, conflitos podem acontecer, resultando, até, na perda do seu trabalho.

> O Git não permitirá enviar modificações para o repositório remoto caso haja modificações não baixadas no seu repositório local.

###Comitando modificações###

Ao modificar os arquivos do projeto, é necessário mapear as mudanças no Git. Fazemos isto através dos comites.

Para isto, devemos, primeiro, informar quais modificações desejamos salvar. Para sabermos quais arquivos foram modificados e ainda não foram comitados, podemos rodar o seguinte comando:

	git status

> Ao rodar este comando, os nomes em vermelho indicam os arquivos que ainda não estão na *Stage Area*, por tanto, precisam ser adicionados, já os que aparecem em verde são os arquivos adicionados, prontos para serem comitados.

Sabendo quais os arquivos que faltam ser adicionados, podemos rodar o seguinte comando para adicioná-los à *Stage Area*:

	git add * //adiciona todos os arquivos do diretório onde você se encontra

	git add --all //adiciona todos os arquivos do repositório

	git add <caminho do arquivo> //adiciona um arquivo específico

Após adicionar os arquivos modificados à *Stage Area* é hora de comitar as modificações, através do comando:

	git commit -m "<descrição do commit>"

A mensagem que descreve o commit é necessária e serve para que posteriormente você e os membros de sua equipe saibam o que foi modificado no projeto naquele commit, sendo assim, uma mensagem com uma descrição clara, se faz necessária.

> Não há uma regra para 'quando se deve realizar um commit', porém, o recomendado é que os seus commits contem uma 'história' sobre o desenvolvimento do projeto, sendo assim, é interessante que a cada tarefa concluída, um commit seja efetuado, fazendo com que seja fácil acompanhar a evolução do projeto.

###Push###

Com suas alterações mapeadas no repositório local, chegou a hora de torná-las disponíveis no repositório remoto, através do comando:

	git push <nome do repositório (o nome padrão é 'origin')> <nome da branch (normalmente é a 'master')>

##Conclusão##

Então, pessoal, esse post vai ficando por aqui. Ainda existem algumas funcionalidades interessantes do Git que não foram abordadas (tagging e branches), mas prometo abordá-las em uma futura continuação.

Espero tê-los ajudado a manter uma boa relação com este grande amigo dos programadores!

Sem mais, até mais...

{% include equipe/douglasgabriel.html %}

[Linus]: http://pt.wikipedia.org/wiki/Linus_Torvalds;
[Windows]:http://git-scm.com/download/win;
[Linux]:http://git-scm.com/download/linux
[Mac]:http://git-scm.com/download/mac;
[Bitbucket]:https://bitbucket.org/;
[Github]:https://github.com/;
