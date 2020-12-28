---
title: sara lana 
layout: index
permalink: '/en/'
lang: en
ref: index
---

<div class="row">
     <div class="column"> 
        {% assign project = site.data.index | where: 'column', '1' | sort: 'order' %}
        {% for cover in project %}
            <div class="static22"> 
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png"></a>
                <div class="center">{{ cover.title-en }}</div></div>
                <img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif" style="width:100.4%">
                <div class="center">{{ cover.title-en }}</div>
        {% endfor %}
      </div>
     <div class="column"> 
        {% assign project = site.data.index | where: 'column', '2' | sort: 'order' %}
        {% for cover in project %}
         <div class="static22"> 
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png" style="width:100%"></a>
                <div class="center">{{ cover.title-en }}</div>
         </div>
         <div>
                <img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif" style="width:100.4%"></div>  
                <div class="center">{{ cover.title-en }}</div>
        {% endfor %}
    </div>
     <div class="column">  
        {% assign project = site.data.index | where: 'column', '3' | sort: 'order' %}
         {% for cover in project %}
            <div class="static22"> 
          <a href="{{ site.base.url }}/en/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png" style="width:100%"></a>
                <div class="center">{{ cover.title-en }}</div></div>
                <img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif" style="width:100.4%">
                <div class="center">{{ cover.title-en }}</div>
        {% endfor %}
    </div>
</div>

<br>
<br>