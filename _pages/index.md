---
title: sara lana 
layout: index
permalink: '/'
lang: pt
ref: index
---

<div class="row">
     <div class="column"> 
        {% assign project = site.data.index | where: 'column', '1' | sort: 'order' %}
        {% for cover in project %}
            <div class="static22"> 
                <a href="{{ site.base.url }}/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png"></a> 
                <br><br>
                <div class="center">{{ cover.title }}</div>
            </div>
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif" style="width:100.4%"></a><br><br>
                <div class="center">{{ cover.title }}</div>
                <br><br><br>
        {% endfor %}
      </div>
     <div class="column"> 
        {% assign project = site.data.index | where: 'column', '2' | sort: 'order' %}
        {% for cover in project %}
         <div class="static22"> 
                <a href="{{ site.base.url }}/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png" style="width:100%"></a><br><br>
                <div class="center">{{ cover.title }}</div>
         </div>
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif" style="width:100.4%"></a>   
                <br><br>
                <div class="center">{{ cover.title }}</div>
                <br><br><br>
        {% endfor %}
    </div>
     <div class="column">  
        {% assign project = site.data.index | where: 'column', '3' | sort: 'order' %}
         {% for cover in project %}
            <div class="static22"> 
          <a href="{{ site.base.url }}/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png" style="width:100%"></a> 
                <br><br>
                <div class="center">{{ cover.title }}</div></div>
                <a href="{{ site.base.url }}/en/{{ cover.name }}"><img class="active22" src="/assets/covers/gif/{{ cover.name }}.gif" style="width:100.4%"></a>  
                <br><br>
                <div class="center">{{ cover.title }}</div>
                <br><br><br>
        {% endfor %}
    </div>
</div>

<br>
