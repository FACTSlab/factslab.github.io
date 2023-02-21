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

## Schedule

<table>
<tr>
<th>Time</th>
<th>Event</th>
<th>Presenter</th>
<th>Location</th>
</tr>
{% for event in site.data.workshop.schedule %}
{% if event.type == "break" %}
<tr>
    <td>{{ event.time }}</td>
    <td>{{ event.title }}</td>
    <td></td>
    <td>{{ site.data.workshop.locations.atrium.name }} ({{ site.data.workshop.locations.atrium.building }})</td>
</tr>
{% else %}
{% assign presentationinfo = presentations[event.presentation] %}
{% assign personinfo = site.data.workshop.people[presentationinfo.presenter] %}

<tr>
    <td>{{ event.time }}</td>
    <td>{{ presentationinfo.title }}</td>
    <td>{{ personinfo.name }}</td>
    {% if presentation.type == "inperson" %}
        <td>{{ site.data.workshop.locations.room.name }} ({{ site.data.workshop.locations.room.building }})</td>
    {% else %}
        <td>{{ site.data.workshop.locations.room.name }}/{{ site.data.workshop.locations.zoom.name }}</td>
    {% endif %}
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