---
title: workshops
permalink: '/en/workshops/'
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
lang: en
ref: workshops
---

<br>

---


<br>

### VIDEO SURVEILLANCE: VISIBILITY TACTICS
<br>
Construction of devices for detecting and mapping surveillance cameras.
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
### VIDEO SURVEILLANCE: INVISIBILITY TACTICS
<br>
Construction of devices to hack images recorded by surveillance cameras.
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

### ELECTRICAL INSTALLATIONS FOR WOMEN
<br>
Electrical circuits and residential electrical installations. 
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
