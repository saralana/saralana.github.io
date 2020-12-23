---
title: sara lana 
layout: index
permalink: '/'
lang: pt
ref: index
---
<div class="row">
     <div class="column"> 
        {% assign project = site.data.index | where: 'column', '1' | sort: 'name' %}
        {% for cover in project %}
            <div class="static22"> 
                <a href="{{ site.base.url }}/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png"></a>
            </div>
                <img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif" style="width:100.5%">
        {% endfor %}
      </div>
     <div class="column"> 
        {% assign project = site.data.index | where: 'column', '2' | sort: 'name' %}
        {% for cover in project %}
            <div class="static22"> 
          <a href="{{ site.base.url }}/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png" style="width:100%"></a></div>
         <div>
                <img class="active22" src="/assets/covers/gif/{{ cover.name }}.png" style="width:100.5%"></div>
        {% endfor %}
    </div>
     <div class="column">  
        {% assign project = site.data.index | where: 'column', '3' | sort: 'name' %}
         {% for cover in project %}
            <div class="static22"> 
          <a href="{{ site.base.url }}/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png" style="width:100%"></a></div>
                <img class="active22" src="/assets/covers/gif/{{ cover.name }}.png" style="width:100.5%">
        {% endfor %}
    </div>
</div>