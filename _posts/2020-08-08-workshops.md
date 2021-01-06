---
title: oficinas
permalink: '/workshops/'
menu: true
where: 
  - name: SESC Belenzinho | São Paulo | BR
    url: sem
  - name: SESC Santos | BR
    url: sem
  - name: Favela Hacklab | Gambiologia | Veracruz | BH | BR
    url: sem
  - name: Centro de Referência da Juventudo | BH | BR
    url: sem
  - name: ThoughtWorks | São Paulo | BR
    url: sem 
  - name: MedialabMX | Ciudad de México | MX
    url: sem
  - name: CCD – Centro de Cultura Digital | La Colmena | Tlaxcala | MX
    url: sem
layout: post-about
cover: /assets/posts/oficinas/inst01.png
lang: pt
ref: workshops
---

<br>

---


<br>

### VÍDEO VIGILÂNCIA: TÁTICAS DE VISIBILIDADE
<br>
Construçãode aparatos para detecção e mapeamento de câmeras de vigilância.
<br>
  <div id="swipebox-gallery">
    {% for file in site.static_files %}
      {% if file.path contains "oficina_pc" %}
          <div class="swipebox">
            <img src="{{ site.baseurl }}{{ file.path }}" alt="">
          </div>
      {% endif %}
    {% endfor %}
  </div>
<br>

---

<br>
### VÍDEO VIGILÂNCIA: TÁTICAS DE INVISIBILIDADE
<br>
Construçãode aparatos para ofuscar e apagar as imagens registradas por câmeras de vigilância.
<br>
  <div id="swipebox-gallery">
    {% for file in site.static_files %}
      {% if file.path contains "oficina_inv" %}
          <div class="swipebox">
            <img src="{{ site.baseurl }}{{ file.path }}" alt="">
          </div>
      {% endif %}
    {% endfor %}
  </div>

<br>

---

<br>

### INTRODUÇÃO A CIRCUITOS E INTALAÇÕES ELÉTRICAS PARA MULHERES
<br>
Circuitos elétricos e instalações elétricas residenciais. 
<br>
  <div id="swipebox-gallery">
    {% for file in site.static_files %}
      {% if file.path contains "inst" %}
          <div class="swipebox">
            <img src="{{ site.baseurl }}{{ file.path }}" alt="">
          </div>
      {% endif %}
    {% endfor %}
  </div>
  
<br>
