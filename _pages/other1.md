---
title: 'Other 1'
menu: true
permalink: '/outros/'
layout: other
category: other
lang: pt
---


<div class="row">
     <div class="column"> 
        {% assign project = site.data.other | where: 'column', '1' | sort: 'order' %}
        {% for cover in project %}
            <div class="static22"> 
                <a href="{{ site.base.url }}/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png"></a>
                <div class="center">{{ cover.title }}</div></div>
                <img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif" style="width:100.4%">
                <div class="center">{{ cover.title }}</div>
        {% endfor %}
      </div>
     <div class="column"> 
        {% assign project = site.data.other | where: 'column', '2' | sort: 'order' %}
        {% for cover in project %}
         <div class="static22"> 
                <a href="{{ site.base.url }}/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png" style="width:100%"></a>
                <div class="center">{{ cover.title }}</div>
         </div>
         <div>
                <img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif" style="width:100.4%"></div>  
                <div class="center">{{ cover.title }}</div>
        {% endfor %}
    </div>
     <div class="column">  
        {% assign project = site.data.other | where: 'column', '3' | sort: 'order' %}
         {% for cover in project %}
            <div class="static22"> 
          <a href="{{ site.base.url }}/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png" style="width:100%"></a>
                <div class="center">{{ cover.title }}</div></div>
                <img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif" style="width:100.4%">
                <div class="center">{{ cover.title }}</div>
        {% endfor %}
    </div>
</div>

<br>
<br>