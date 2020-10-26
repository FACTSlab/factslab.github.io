---
layout: page
title: Research
permalink: /research/
published: true
---

<div class="page" markdown="1">

<img
    class="me"
    alt="{{ author.name }}"
    src="{{ site.author.photo | relative_url }}"
    srcset="{{ site.author.photo2x | relative_url }} 2x"
/>

# Decomp

The [Decompositional Semantics Initiative](http://decomp.io) (Decomp) is a collection of efforts aimed at collecting and modeling human annotations of meaning via the decomposition of lexical and phrasal meanings into a small set of component parts. Decomp is supported by [DARPA AIDA](https://www.darpa.mil/program/active-interpretation-of-disparate-alternatives), [DARPA KAIROS](https://www.darpa.mil/program/knowledge-directed-artificial-intelligence-reasoning-over-schemas), and [IARPA BETTER](https://www.iarpa.gov/index.php/research-programs/better).

Decomp is a large project and so only research products authored by core FACTS.lab members are listed below. A full list of publications, presentations, and available data can be found at [decomp.io](http://decomp.io).

<script>

function hidePapers(divId, linkId) {
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

<h2>Papers <a onclick="hidePapers('decompPapers', 'hideDecompPapersLink')" id="hideDecompPapersLink">(show)</a></h2>

<div id="decompPapers" class="csl-bib-body" style="line-height: 1.35; margin-left: 2em; margin-top: 1em; margin-bottom: 2em; text-indent:-2em; display: none;">

{% for paper in site.data.research.decomp.papers %}
    <div class="csl-entry" style="margin-bottom: 1em;">{{ paper.citation }}
    {% if paper.links %}[{% for link in paper.links %}<a href="{{ link.href }}" style="color: #2B599E;">{{ link.label }}</a>{% if forloop.last == false %}, {% endif %}{% endfor %}]{% endif %}</div>
{% endfor %}
  
</div>

<br/>

# MegaAttitude

The [MegaAttitude Project](http://megaattitude.io) aims to collect large-scale annotation sets of the selectional behavior of clause-embedding verbs, adjectives, and nouns, based on human acceptability, veridicality, and similarity judgments. It is supported by a National Science Foundation collaborative grant ([BCS-1748969](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1748969&HistoricalAwards=false)/[BCS-1749025](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1749025&HistoricalAwards=false)).

<h2>Papers <a onclick="hidePapers('megaAttitudePapers', 'hideMegaAttitudePapersLink')" id="hideMegaAttitudePapersLink">(show)</a></h2>

<div id="megaAttitudePapers" class="csl-bib-body" style="line-height: 1.35; margin-left: 2em; margin-top: 1em; margin-bottom: 2em; text-indent:-2em; display: none;">

{% for paper in site.data.research.megaattitude.papers %}
    <div class="csl-entry" style="margin-bottom: 1em;">{{ paper.citation }}
    {% if paper.links %}[{% for link in paper.links %}<a href="{{ link.href }}" style="color: #2B599E;">{{ link.label }}</a>{% if forloop.last == false %}, {% endif %}{% endfor %}]{% endif %}</div>
{% endfor %}
  
</div>

</div>
