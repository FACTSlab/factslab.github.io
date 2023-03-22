---
layout: page
title: People
permalink: /people/
published: true
images: assets/img/people/
---

<script>

function toggleGroupDisplay(divId, linkId) {
  var x = document.getElementById(divId);
  var l = document.getElementById(linkId);

  if (x.style.display === "none") {
    x.style.display = "block";
    l.text = "(hide)";
  } else {
    x.style.display = "none";
    l.text = "(show)";
  }
}

</script>

<div class="page" markdown="1">

{% for group in site.data.people.groups %}
  <center><h1>{{ group[1].name }} <a onclick="toggleGroupDisplay('{{ group[1].name | downcase }}', 'hide{{ group[1].name }}Link')" id="hide{{ group[1].name }}Link">(hide)</a></h1></center>
  <div id="{{ group[1].name | downcase }}">
  {% for personid in group[1].members %}
    {% assign person = site.data.people.people[personid] %}
    <center>
    <a href="{{ person.website }}"><img class="people" alt="{{ person.name }}" src="{{ page.images | relative_url }}{{ person.image }}" srcset="{{ page.images | relative_url }}{{ person.image }}" /></a>
    </center>  
    <center><b>{{ person.name }}</b></center>
    <!-- <center>{{ person.role }}</center> -->
    <!-- <center><i>{{ person.department }}</i></center> -->
    <!-- <center><i>{{ person.university }}</i></center> -->
    {{ person.description }}
  {% endfor %}
  </div>
  <br/>
  <br/>
{% endfor %}
</div>
