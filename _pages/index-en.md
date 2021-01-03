---
title: sara lana 
layout: index
permalink: '/en/'
lang: en
ref: index
---
<br>
<div class="row">
     <div class="column"> 
        {% assign project = site.data.index | where: 'column', '1' | sort: 'order' %}
        {% for cover in project %}
            <div class="static22"> 
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png"></a><br><br>
                <div class="center">{{ cover.title-en }}</div></div>
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif" style="width:100.4%"></a><br><br>
                <div class="center">{{ cover.title-en }}</div>
         <br><br><br>
        {% endfor %}
      </div>
     <div class="column"> 
        {% assign project = site.data.index | where: 'column', '2' | sort: 'order' %}
        {% for cover in project %}
         <div class="static22"> 
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png"></a><br><br>
                <div class="center">{{ cover.title-en }}</div>
         </div>
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif" style="width:100.4%"></a><br><br>
                <div class="center">{{ cover.title-en }}</div>
         <br><br><br>
        {% endfor %}
    </div>
     <div class="column">  
        {% assign project = site.data.index | where: 'column', '3' | sort: 'order' %}
         {% for cover in project %}
            <div class="static22"> 
                  <a href="{{ site.base.url }}/en/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png"></a><br><br>
                <div class="center">{{ cover.title-en }}</div></div>
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif"></a><br><br>
                <div class="center">{{ cover.title-en }}</div>
         <br><br><br>
        {% endfor %}
    </div>
</div>

<br>