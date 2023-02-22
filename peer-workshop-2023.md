---
layout: page
title: Workshop on Processing and Evaluating Event Representations
permalink: /peer-workshop-2023/
published: true
images: assets/img/peer-workshop-2023/
---

# Workshop on Processing and Evaluating Event Representations (PEER)

This workshop aims to bring together researchers working on computational models of incremental language understanding with researchers working on event semantics from both a computational and experimental perspective.

The workshop is sponsored by the [Central New York Humanities Corridor](https://www.cnycorridor.net/) and the [Center for Language Sciences](https://www.sas.rochester.edu/cls/) at the [University of Rochester](https://rochester.edu/).

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
{{ personinfo.description }}
{% endif %}    
{% endfor %}

## Location

The workshop will be located on the [University of Rochester's River Campus](https://goo.gl/maps/Ghb8wfrDARG9a3Ki9). Talks will be held in the Gowen Room ([Wilson Commons](https://goo.gl/maps/PTRsbx2HyfSnUhB27) 213), and breaks will be held in the Rettner Atrium ([Rettner Hall](https://goo.gl/maps/LDBokBW2nXk1hb8c6) 100). Virtual talks will be broadcast via zoom to in-person participants in the Gowen Room. 

Participation via zoom is by invitation only. Requests for a virtual participation invitation can be made using the registration link below.  

## Registration

There is no cost for participation in the workshop, but if you plan to attend, we ask that you register [here](https://docs.google.com/forms/d/e/1FAIpQLScde5i8BmCDhub5ONyOjT7KUNw0NrOPb66tNtGTyWEjGFN6Gw/viewform?usp=sf_link) by March 17. 

## Parking

If you are coming into Rochester from out of town and need a parking pass, please indicate this on the registration form. We cannot guarantee parking passes for late registrants, so if you need a pass, please make sure to register on time.

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
{{ personinfo.description }}
{% endif %}    
{% endfor %}