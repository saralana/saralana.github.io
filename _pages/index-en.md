---
title: sara lana 
layout: index
permalink: '/en/'
lang: en
ref: index
---
<div class="row">
     <div class="column"> 
        {% assign project = site.data.index | where: 'column', '1' | sort: 'name' %}
        {% for cover in project %}
         <a href="{{ site.base.url }}/en/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png" style="width:100%"></a>
        {% endfor %}
    </div>
     <div class="column"> 
        {% assign project = site.data.index | where: 'column', '2' | sort: 'name' %}
        {% for cover in project %}
          <a href="{{ site.base.url }}/en/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png" style="width:100%"></a>
        {% endfor %}
    </div>
     <div class="column"> 
        {% assign project = site.data.index | where: 'column', '3' | sort: 'name' %}
        {% for cover in project %}
          <a href="{{ site.base.url }}/en/{{ cover.name }}"><img src="/assets/covers/{{ cover.name }}.png" style="width:100%"></a>
        {% endfor %}
    </div>
</div>

