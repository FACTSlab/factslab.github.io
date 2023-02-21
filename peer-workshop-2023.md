---
layout: page
title: Workshop on Processing and Evaluating Event Representations
permalink: /peer-workshop-2023/
published: true
images: assets/img/peer-workshop-2023/
---

# Workshop on Processing and Evaluating Event Representations (PEER)

This workshop aims to bring together researchers working on computational models of incremental language understanding with researchers working on event semantics from both a computational and experimental perspective.

## Keynote Speakers

{% for person in site.data.workshop.people %}
{% assign personinfo = person[1] %}
{% if personinfo.role == "keynote" %}
<center>
<a href="{{ personinfo.website }}"><img class="people" alt="{{ personinfo.name }}" src="{{ page.images | relative_url }}{{ personinfo.image }}" srcset="{{ page.images | relative_url }}{{ personinfo.image }}" /></a>
</center>  
<center><b>{{ personinfo.name }}</b></center>
<center><i>{{ personinfo.department }}</i></center>
<center><i>{{ personinfo.university }}</i></center>
{% endif %}    
{% endfor %}

## Location

The workshop will be located on the University of Rochester's River Campus. Talks will be held in the Gowen Room (Wilson Commons 213), and breaks will be held in the Rettner Atrium (Rettner Hall 100). Virtual talks will be broadcast via zoom to in-person participants in the Gowen Room. Virtual participation is by invitation only, and virtual participants must register at the link provided with that invitation.  

## Schedule

<table>
<tr>
<th>Time</th>
<th>Event</th>
<th>Presenter</th>
</tr>
{% for event in site.data.workshop.schedule %}
{% if event.type == "break" %}
<tr>
    <td>{{ event.time }}</td>
    <td>{{ event.title }}</td>
    <td></td>
</tr>
{% else %}
{% assign presentationinfo = site.data.workshop.presentations[event.presentation] %}
{% assign personinfo = site.data.workshop.people[presentationinfo.presenter] %}

<tr>
    <td>{{ event.time }}</td>
    <td>{{ presentationinfo.title }}</td>
    <td><a href="{{ personinfo.website }}">{{ personinfo.name }}</a></td>
</tr>
{% endif %}
{% endfor %}
</table>

## Organizers

{% for person in site.data.workshop.people %}
{% assign personinfo = person[1] %}
{% if personinfo.role == "organizer" %}
<center>
<a href="{{ personinfo.website }}"><img class="people" alt="{{ personinfo.name }}" src="{{ page.images | relative_url }}{{ personinfo.image }}" srcset="{{ page.images | relative_url }}{{ personinfo.image }}" /></a>
</center>  
<center><b>{{ personinfo.name }}</b></center>
<center><i>{{ personinfo.department }}</i></center>
<center><i>{{ personinfo.university }}</i></center>
{% endif %}    
{% endfor %}

## Sponsors

This workshop is sponsored by the [Central New York Humanities Corridor](https://www.cnycorridor.net/) and the [Center for Language Sciences](https://www.sas.rochester.edu/cls/) at the [University of Rochester](https://rochester.edu/).