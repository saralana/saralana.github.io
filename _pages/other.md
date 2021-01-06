---
title: 'outros'
menu: true
permalink: '/outros/'
layout: other
category: other
cover: /assets/covers/twin-sounds-cover.png
lang: pt
---

<br>
<div class="row">
     <div class="column"> 
        {% assign project = site.data.other | where: 'column', '1' | sort: 'order' %}
        {% for cover in project %}
            <div class="static2"> 
                <a href="{{ site.base.url }}/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png"></a>
                <div class="center">{{ cover.title }}</div>
           </div>
                <a href="{{ site.base.url }}/{{ cover.name }}"><img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif" style="width:100.4%"></a>
                <div class="center">{{ cover.title }}</div>
         <br>
        {% endfor %}
      </div>
     <div class="column"> 
        {% assign project = site.data.other | where: 'column', '2' | sort: 'order' %}
        {% for cover in project %} 
            <div class="static2"> 
                <a href="{{ site.base.url }}/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png"></a>
                <div class="center">{{ cover.title }}</div>
           </div>
                <a href="{{ site.base.url }}/{{ cover.name }}"><img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif" style="width:100.4%"></a>
                <div class="center">{{ cover.title }}</div>
         <br>
        {% endfor %}
    </div>
     <div class="column">  
        {% assign project = site.data.other | where: 'column', '3' | sort: 'order' %}
         {% for cover in project %} 
            <div class="static2"> 
                <a href="{{ site.base.url }}/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png"></a>
                <div class="center">{{ cover.title }}</div>
           </div>
                <a href="{{ site.base.url }}/{{ cover.name }}"><img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif" style="width:100.4%"></a>
                <div class="center">{{ cover.title }}</div>
         <br>
        {% endfor %}
    </div>
</div>

<br>