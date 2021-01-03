---
title: 'Other'
swipebox: 
layout: other
permalink: '/other/'
menu: true
category: other
lang: en
---

<br>
<div class="row">
     <div class="column"> 
        {% assign project = site.data.other | where: 'column', '1' | sort: 'order' %}
        {% for cover in project %}
            <div class="static2"> 
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png"></a>
                <div class="center">{{ cover.title-en }}</div>
           </div>
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img class="active22" src="/assets/covers/azul/{{ cover.name }}.png" style="width:100.4%"></a>
                <div class="center">{{ cover.title-en }}</div>
         <br>
        {% endfor %}
      </div>
     <div class="column"> 
        {% assign project = site.data.other | where: 'column', '2' | sort: 'order' %}
        {% for cover in project %} 
            <div class="static2"> 
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png"></a>
                <div class="center">{{ cover.title-en }}</div>
           </div>
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img class="active22" src="/assets/covers/azul/{{ cover.name }}.png" style="width:100.4%"></a>
                <div class="center">{{ cover.title-en }}</div>
         <br>
        {% endfor %}
    </div>
     <div class="column">  
        {% assign project = site.data.other | where: 'column', '3' | sort: 'order' %}
         {% for cover in project %} 
            <div class="static2"> 
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png"></a>
                <div class="center">{{ cover.title-en }}</div>
           </div>
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img class="active22" src="/assets/covers/azul/{{ cover.name }}.png" style="width:100.4%"></a>
                <div class="center">{{ cover.title-en }}</div>
         <br>
        {% endfor %}
    </div>
</div>

<br>
