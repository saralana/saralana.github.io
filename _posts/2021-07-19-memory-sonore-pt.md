---
title: 'jogo da memória sonoro'
who: 
type: Uma adaptação sonora do típico jogo de memória, geralmente conhecido com imagens.
menu: true
where: 
  - name: Musée Réattu | Arles | França
    url: http://www.museereattu.arles.fr/atelier-memory-sonore.html
  - name: JA.CA | Jardim Canadá | Brasil
    url: https://www.jaca.center
cover: /assets/posts/memorygame1.jpg
data: 2021
ref: memorysonore
swipebox:
permalink: memorygame
lang: pt
credits: 
thanks: Francisca Caporalli, Micrópolis, JACA, Coupé, Ciclo3, Daniel Rouvier, Andy Neyrotti, Marc Jacquin, Fanny Lannoy and the FabLab from Grand Narbonne
---

<div class="video-wrapper-side video-wrapper-16x9"><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/576593011?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>
<br><br>

Este jogo é uma adaptação sonora do típico jogo de memória, geralmente conhecido com imagens. Usamos cubos que soam quando são virados, revelando, cada um, o som que escondem. O mesmo som está presente em 2 cubos diferentes e o objetivo é encontrar os pares idênticos.
Os sons presentes nos cubos foram gravados durante uma oficina de gravação, com as crianças numa escola de Arles. Da mesma forma, o jogo foi construído coletivamente, durante uma oficina de eletrônica.

<br>

---

<br>

## Oficina em Arles

**Com** Adama, Emma, Jade, June, Khadija, Layana, Lucie, Marwa, Matheo, Noah, Nassim, Rodaina, Thiago, Zakaria and Zoubida.
  
**Um projeto de** Sara Lana e Félix Blume
  
**Com a colaboração de** Arthur Thomas, Élisabeth Pouliquen e a professora Aurélie Pelletant.
  
Esse projeto foi possível graças ao [Musée Réattu](http://www.museereattu.arles.fr/){:target="_blank"}, a cidade de Arles (France), [Phonurgia Nova](http://phonurgia.fr/){:target="_blank"} e a escola Mouleyres.


<br>
  <div id="swipebox-gallery">
    {% for file in site.static_files %}
      {% if file.path contains "arles" %}
            <img src="{{ site.baseurl }}{{ file.path }}" class="swipebox" alt="">
      {% endif %}
    {% endfor %}
  </div>
*fotos: Arthur Thomas, Félix Blume e Sara Lana*

<br>

---


<br>

## Oficina no Jaca

**Com** Amanda Paiva, Amanda Faria, Andrey
Davi, Gabriella, Gabriel, Jully, Milena, Sophia, Victor e Vitor.
  
**Um projeto de** Félix Blume e Sara Lana
  
**Com a colaboração da** Francisca Caporalli, Artur Souza, Márcio Gabrich, Felipe Carnevalli, Marcela Rosenburg, André Siqueira e aos professores da escola Transformar.
  
Esse projeto foi possível graças ao [JA.CA – Centro de Arte de tecnologia](https://www.jaca.center){:target="_blank"}, ao [Micrópolis](https://micropolis.com.br/){:target="_blank"} e à escola Transformar.


<br>
  <div id="swipebox-gallery">
    {% for file in site.static_files %}
      {% if file.path contains "jaca-memory" %}
            <img src="{{ site.baseurl }}{{ file.path }}" class="swipebox" alt="">
      {% endif %}
    {% endfor %}
  </div>
*fotos: Arthur Souza e Félix Blume*
