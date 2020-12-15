---
title: '15s'
menu: true
lang: en
permalink: '/15s/'
ref: 15segundos
---

sound gifs

<div class="video-grid">
    {% for video in site.data.segundosdiarios %} 
      <div class="video-wrapper-1x1">     
        <iframe src="https://player.vimeo.com/video/{{ video.videonumber }}?loop=1&title=0&byline=0&portrait=0" width="640" height="640" frameborder="0" ></iframe>
      </div>
    {% endfor %}
</div>