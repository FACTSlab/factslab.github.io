---
layout: page
title: People
permalink: /people/
published: true
images: assets/img/people/
---

<div class="page" markdown="1">

{% for group in site.data.people %}

  <center><h1>{{ group.name }}</h1></center>

  {% for person in group.people %}

  <center>
  <a href="{{ person.website }}"><img class="people" alt="{{ person.name }}" src="{{ page.images | relative_url }}{{ person.image }}" srcset="{{ page.images | relative_url }}{{ person.image }}" /></a>
  </center>  
  <center><b>{{ person.name }}</b></center>
  <center>{{ person.role }}</center>
  <center><i>{{ person.department }}</i></center>
  <center><i>{{ person.university }}</i></center>
  {{ person.description }}
  {% endfor %}
  <br/>
  <br/>
{% endfor %}
</div>
