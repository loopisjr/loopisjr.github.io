---
layout: post
title:  "Adicionando Social Meta Tags ao seu site"
date:   2015-08-03 10:20:00
author: Douglas Gabriel
categories: jekyll update
comments: true
image: images/posts/social-meta-tags/cover.png
key_words: social, facebook, twitter, google, tags, html
description: Neste post é possível ver como melhorar a integração dos seus sites com as mídias sociais através de meta tags html
---

Saudações, pessoal

Atualmente, ter uma boa relação com as mídias sociais é algo necessário para todos, desde pessoas normais que desejam apenas gerenciar seus cículos de amizades ou mesmo produzir conteúdo (por que não?), até grandes empresas que precisam estar cada vez mais presentes na vida de seus clientes e divulgando sua marca.

Esta máxima é ainda mais verdadeira para aqueles que desejam produzir conteúdo para a Internet, uma vez que, caso o seu conteúdo não esteja bem rankeado junto às máquinas da Google, ou não possua boas estratégias de divulgação, poderá passar despercebido aos olhos do seu público alvo.

Neste post pretendo falar sobre como é possível melhorar a integração dos seus sites com as redes sociais e com os mecanismos de busca da Google, apenas fornecendo informações aos mesmos através de meta tags html.

###O que são Meta tags?###

Basicamente, são tags HTML que são usadas como padrão para fornecer informações da página em que encontram-se, de forma facilitada, isto porque processos conhecidos como [*Web Crawlers*][web crawler], resposáveis por, entre outras coisas, indexar conteúdos na web, utilizados por exemplo pela Google, Facebook e Twitter, utilizam estas tags como fonte principal de dados sobre os conteúdos presentes na Web.

###Utilizando###

Primeiramente, é preciso saber que existem muitas meta tags, sendo que cada serviço pode criar suas próprias, sendo assim, me aterei a falar àquelas que julgo principais.

####Tags básicas####

Com as tags básicas é possível prover informações sobre a página, como o autor, bem como dados sobre o conteúdo da mesma, fornecendo uma breve descrição (*description*) e, também, palavras-chave para o conteúdo (*keywords*):

`<meta name="author" content="Douglas Gabriel" />`

`<meta name="description" content="Como utilizar meta tags" />`

`<meta name="keywords" content="tags, html, social" />`

> **OBS:**

> > É recomendado não exceder o limite de 150 caracteres para qualquer meta tag;

> > Não quebre linha ao passar o valor de um atributo, pois o mesmo pode ser interpretado como erro e ser ignorado.

####Facebook####

O Facebook utiliza as meta tags para reconhecer o conteúdo das páginas que são compartilhadas e poder montar um post como o que vemos abaixo:

![Facebook scrap]({{ site.url }}/images/posts/social-meta-tags/facebook.png "Facebook scrap")

Além disto, o mesmo ainda mantém o historico de compartilhamentos e curtidas das páginas. Para tudo isto, utiliza-se da [*API Open Graph Protocol*][og protocol].

Sendo assim, é necessário adicionar as tags definidas por esta *API*:

> **OBS:** para que as tags da *API Open Graph* sejam reconhecidas em sua página, é necessário primeiro que adicione o seguinte código à tag html da página:

`<html prefix="og: http://ogp.me/ns#">`

Com a API devidamente configurada (apenas seguindo o passo acima) podemos adicionar as tags básicas da *API*:

`<meta property="og:title" content="Adicionando Social Meta Tags ao seu site" />` (Este conteúdo é referente ao conteúdo em negrito no *post* criado pelo Facebook);

`<meta property="og:type" content="article" />` (Este conteúdo define como o *post* será desenhado pelo Facebook. Os tipos mais utilizados são: blog, *website* e *article*. Porém existem muitos outros tipos que podem ser vistos [aqui][og types]);

`<meta property="og:url" content="http://recursive.com.br//jekyll/update/2015/08/01/Adicionando-Social-Meta-Tags-ao-seu-site.html" />` (Este conteúdo dirá ao Facebook onde resgatar as demais informações sobre esta página, de forma que se o conteúdo estiver errado, o mesmo não será capaz de reconhecer as demais informações de sua página);

`<meta property="og:description" content="Neste post é possível ver como melhorar a integração dos seus sites com as mídias sociais através de meta tags html" />` (Este conteúdo será mostrado abaixo do título em negrito no *post*);

`<meta property="og:image" content="http://recursive.com.br//images/posts/social-meta-tags/cover.png" />` (Esta é a url da imagem que será mostrada no *post*);

Então, estas são as tags básicas para se usar para interagir com o Facebook, a lista completa de tags pode ser econtrada [aqui][og protocol].

####Twitter####

Outra rede social bastante utilizada para compartilhamento de conteúdos é o Twitter, e para que ele construa um *card* como o que vemos abaixo para a sua página, basta adicionar as seguintes tags:

![Twitter card]({{ site.url }}/images/posts/social-meta-tags/twitter.png "Twitter card")

`<meta name="twitter:card" content="summary"/>` (Semelhante ao *type* do Facebook, suas opções são: *summary*, *photo* ou *player*);

`<meta name="twitter:description" content="Neste post é possível ver como melhorar a integração dos seus sites com as mídias sociais através de meta tags html"/>` (Semelhante ao *description* do Facebook);

`<meta name="twitter:title" content="Criando um Blog com Jekyll"/>` (Semelhante ao *title* do Facebook);

`<meta name="twitter:image:src" content="http://recursive.com.br//images/posts/social-meta-tags/cover.png"/>` (Semelhante a *image* do Facebook)

###Conclusão###

Então pessoal, este *post* vai ficando por aqui, espero que tenha sido util para melhorar a interação de vossos sites com as mídias sociais. Qualquer dúvida ou sugestão, podem deixar nos comentários.

Até a próxima.

**[REFERÊNCIAS]**

W3School- http://www.w3schools.com/tags/tag_meta.asp

InfoWester - http://www.infowester.com/metatags.php

Iacquire - http://www.iacquire.com/blog/18-meta-tags-every-webpage-should-have-in-2013

{% include equipe/douglasgabriel.html %}

[og protocol]:http://ogp.me/
[og types]:https://developers.facebook.com/docs/sharing/opengraph
[web crawler]:https://pt.wikipedia.org/wiki/Web_crawler
