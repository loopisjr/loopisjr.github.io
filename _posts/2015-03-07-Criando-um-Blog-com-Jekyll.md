---
layout: post
title:  "Criando um Blog com Jekyll"
date:   2015-03-07 14:29:42
author: Douglas Gabriel
categories: jekyll update
comments: true
image: images/posts/jekyll/cover.png
key_words: git, github, jekyll, blog
description: Neste post você verá como criar, de forma bastante simples, um blog utilizando a ferramenta Jekyll
---

Saudações,

Como primeiro post, eu pensei: Por que não criar o primeiro post do blog, mostrando como criei este blog?

Sendo assim, neste post falarei de forma simples como criar um Blog hospedado no [GitHub][github] utilizando o [Jekyll][jekyll].

> Basicamente o GitHub é uma plataforma baseada em [Git][git] que oferece repositórios remotos para a hospedagem de projetos.

> O Jekyll é uma ferramenta escrita em Ruby por [Tom Preston-Werner][tomPreston], um dos co-fundadores do GitHub, e tem a intenção de oferecer simplicidade e praticidade na criação de blogs de conteúdo estático.


### Reservando o endereço do seu Blog ###
---
Bem, para começar, uma conta no GitHub se faz necessária. Uma vez que já possua, o próximo passo é criar um repositório, e aqui vai um detalhe importante:

**O nome do repositório deverá ser composto da seguinte forma:**
*[seu nome de usuário].github.io*

Desta forma, a etapa de reservar um endereço para o seu Blog foi concluída com sucesso.

###Preparando sua máquina para trabalhar com Jekyll###
---

> Antes de seguirmos gostaria de avisar que os passos seguintes serão baseados na plataforma Windows

Será necessário ter o GIT devidamente instalado em sua máquina, você poderá baixá-lo [neste link][gitdownload].

Como citado anteriormente, o Jekyll é uma ferramenta escrita em Ruby, sendo assim, é necessário instalar um pacote contendo a linguagem, ambiente de execução e a sua documentação.

No Windows, você deve acessar [este site][rubyinstaller] e  baixar o instalador. Recomendo baixar a [versão 1.9.3][ruby193], uma vez que tive problemas ao trabalhar com todas as outras versões.

Execute o arquivo baixado e quando se deparar com esta tela, marque todas as checkboxes.

<img src="{{ site.absolute_url }}/images/posts/jekyll/rubyinstalation.png">

com o Ruby instalado, agora será necessário instalar o Kit de Desenvolvimento, que encontra-se [no mesmo link][rubyinstaller]. Com o download realizado, descompacte o seu conteúdo dentro da pasta "devkit" dentro do diretório onde o Ruby foi instalado (se não houver esta pasta, crie).

Agora será necessário rodar os seguintes comandos no CMD, dentro da pasta que você descompactou os arquivos baixados:

`ruby dk.rb init`, `ruby dk.rb install` e `gem install rdiscount --platform=ruby`

Desta forma, você já deverá estar apto a instalar o Jekyll na sua máquina apenas rodando o comando `gem install jekyll` no CMD.

Assim, concluímos a etapa de preparação da máquina, vamos para a próxima

###Criando o Blog###
---

Agora serão necessárias mais algumas interações via linha de comando, porém será necessário mais atenção aos comandos, uma vez que você deverá usá-los constantemente durante a manutenção do seu blog:

Primeiro é necessário clonar o repositório criado no GitHub anteriormente rodando o seguinte comando: `git clone [url do ser repositório]`

Depois rode o comando: `jekyll new [nome do seu repositório]`

Assim, o jekyll irá criar um blog prontinho na pasta do ser repositório local, você agora é livre para alterar tudo o que achar que deve: adicionar posts, páginas, mudar layout e etc.

Toda vez que concluir suas alterações deverá rodar a sequência de comandos abaixo:

`git add *`<br>
`git commit -m "[digite aqui uma mensagem comentando suas alterações]"`<br>
`git push`

Assim, as alterações irão ser encaminhadas para o seu repositório no GitHub e ficarão disponíveis na URL igual ao nome do seu repositório.

Teste! digite no seu navegador o nome do ser repositório!

###Conclusão###
---

Isso é tudo, pessoal! Espero que o post tenha sido útil.

Ainda estou descobrindo as funcionalidades do Jekyll, pretendo posteriormente falar um pouco mais sobre as particularidades das estruturas criadas por ele, bem como da forma que tenho trabalhado com ele (inclusão de páginas, posts, mudança de layout e etc)

Sem mais, até mais

{% include equipe/douglasgabriel.html %}

[tomPreston]:    http://en.wikipedia.org/wiki/Tom_Preston-Werner
[jekyll]:        http://jekyllrb.com
[github]:	     https://github.com
[git]:           http://en.wikipedia.org/wiki/Git_%28software%29
[rubyinstaller]: http://rubyinstaller.org/downloads/
[ruby193]:       http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-1.9.3-p551.exe?direct
[gitdownload]:   http://git-scm.com/download/win
