---
layout: page
title: Research
permalink: /research/
published: true
---

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

<div class="page" markdown="1">

<img
    class="me"
    alt="{{ author.name }}"
    src="{{ site.author.photo | relative_url }}"
    srcset="{{ site.author.photo2x | relative_url }} 2x"
/>

# Decomp

Traditional semantic annotation frameworks generally define complex, often exclusive category systems that require highly trained annotators to build. And in spite of their high quality for the cases they are designed to handle, these frameworks can be brittle to deviations from prototypical instances of a category.

The [Decompositional Semantics Initiative](http://decomp.io) (Decomp) is founded on the idea that semantic annotation should rather take the form of many simple questions about words or phrases in context that are (i) easy for naive native speakers to answer, thus allowing annotations to be crowd-sourced; and (ii) more robust than traditional category systems, thus allowing coverage of non-prototypical instances. 

Decomp is supported by [DARPA AIDA](https://www.darpa.mil/program/active-interpretation-of-disparate-alternatives), [DARPA KAIROS](https://www.darpa.mil/program/knowledge-directed-artificial-intelligence-reasoning-over-schemas), and [IARPA BETTER](https://www.iarpa.gov/index.php/research-programs/better). It is a large project and so only research products authored by core FACTS.lab members are listed below. A full list of publications, presentations, and available data can be found at [decomp.io](http://decomp.io).

<h2>Papers <a onclick="hidePapers('decompPapers', 'hideDecompPapersLink')" id="hideDecompPapersLink">(show)</a></h2>

<div id="decompPapers" class="csl-bib-body" style="line-height: 1.35; margin-left: 2em; margin-top: 1em; margin-bottom: 2em; text-indent:-2em; display: none;">

{% for paper in site.data.research.decomp.papers %}
    <div class="csl-entry" style="margin-bottom: 1em;">{{ paper.citation }}
    {% if paper.links %}[{% for link in paper.links %}<a href="{{ link.href }}" style="color: #2B599E;">{{ link.label }}</a>{% if forloop.last == false %}, {% endif %}{% endfor %}]{% endif %}</div>
{% endfor %}
  
</div>

<br/>

# MegaAttitude

The [MegaAttitude Project](http://megaattitude.io) addresses how humans draw complex inferences from the thousands of English predicates that combine with subordinate clauses -- "think", "know", "say", "tell", "remember", "forget", etc. -- when the structural characteristics of the clauses they combine with vary. For example, the sentence "John forgot that he bought milk" is similar to the sentence "John forgot to buy milk"; but from the first sentence, a listener infers that John bought milk, while from the second, a listener infers that he didn't. This inference pattern is only one among many such patterns in English; yet, in spite of this variety, there appears to be substantial regularities across predicates and subordinate clause structures that prior work has only scratched the surface of. Investigating the systematicities in how humans compute these inference patterns sheds light on how the human cognitive system constructs complex meanings from simpler parts and supports the development of intelligent computational systems for comprehending and reasoning about natural language in human-like ways.

The current project approaches this investigation in two parts. First, it develops and deploys multiple scalable, crowd-sourced annotation protocols, based on experimental methodologies from psycholinguistics, in order to collect data about a wide variety of inference patterns triggered by all of the thousands of English predicates that combine with subordinate clauses. Second, it leverages recent advances in multi-task machine learning to build a unified computational model of the relationship between such predicates, the structure of their subordinate clauses, and the inferences that they trigger, which is trained on these data. This model not only helps to reveal systematicities in how humans compute the inference patterns of interest; it can also be straightforwardly incorporated into applied technologies for natural language understanding. 

MegaAttitude is supported by a National Science Foundation collaborative grant ([BCS-1748969](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1748969)/[BCS-1749025](https://www.nsf.gov/awardsearch/showAward)).

<h2>Papers <a onclick="hidePapers('megaAttitudePapers', 'hideMegaAttitudePapersLink')" id="hideMegaAttitudePapersLink">(show)</a></h2>

<div id="megaAttitudePapers" class="csl-bib-body" style="line-height: 1.35; margin-left: 2em; margin-top: 1em; margin-bottom: 2em; text-indent:-2em; display: none;">

{% for paper in site.data.research.megaattitude.papers %}
    <div class="csl-entry" style="margin-bottom: 1em;">{{ paper.citation }}
    {% if paper.links %}[{% for link in paper.links %}<a href="{{ link.href }}" style="color: #2B599E;">{{ link.label }}</a>{% if forloop.last == false %}, {% endif %}{% endfor %}]{% endif %}</div>
{% endfor %}
  
</div>

<br/>

# SuperMereo

Human language is a powerful tool for conveying information about complex, multi-faceted events at different levels of specificity: in the space of a breath, we can move from talking about a complex event as a whole to a targeted discussion of its many parts and their inter-relationships. Understanding how we convey such complex information using language is critical to improving not only our scientific understanding of human linguistic capacities, but also the ability of artificial intelligence systems to extract knowledge about the world from the massive bodies of text humans generate every day, and ultimately to improve their ability to serve humanity's needs. With the goal of advancing both aims, this project develops foundational resources and cutting-edge deep learning-based artificial intelligence systems for extracting knowledge from those resources.

To achieve that goal, SuperMereo develops a broad-coverage, automatic method for mapping a description of an event to a rich representation of the relationships among that event's parts: its event structure. It has two main components: (i) it collects behavioral data and text corpus annotations for key aspects of the event structure of verbal, adjectival, and nominal predicates in English; and (ii) it develops and implements a general deep learning-based computational model of event structure, trained using those data. 

The lexicon and corpus produced under this proposal will be annotated for properties of events that are central in current linguistic theories of tense, grammatical aspect, and lexical aspect: (i) does the event have a natural endpoint (running a race) or not (simply running around)?; (ii) does the event happen at an instant (hitting a ball) or over time (building a house); (iii) what are the event's preconditions and results?; (iv) are those results permanent (killing a mosquito) or transient (opening a door, which can be closed again)?; (v) do they come about gradually (cleaning a table) or abruptly (scuffing a table)?; (vi) does the event consist of indivisible parts (individual claps in applause) or not (being red)?; (vii) are those parts similar (tapping on glass) or dissimilar (shopping for clothes); and (viii) do event parts correspond to participant parts (writing a book) or not (combining ingredients)? 

On the basis of these annotations, a computational model will be developed and implemented that jointly induces (a) distinct senses of a predicate (running a race v. running a company); (b) the event structure class(es) associated with those senses; (c) the event structure properties associated with those classes; and (d) a mapping from the event's parts to its participants and temporal/causal structure. This model will integrate Bayesian hierarchical models with recent advances in deep learning and will enable explicit quantitative comparison of alternative theoretical assumptions, such as the number of event structure classes and properties that must be posited to best explain the data.

SuperMereo is supported by a National Science Foundation collaborative grant ([BCS-2040831](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2040831)/[BCS-2040820](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2040820)).

<h2>Papers <a onclick="hidePapers('superMereoPapers', 'hideSuperMereoPapersLink')" id="hideSuperMereoPapersLink">(show)</a></h2>

<div id="superMereoPapers" class="csl-bib-body" style="line-height: 1.35; margin-left: 2em; margin-top: 1em; margin-bottom: 2em; text-indent:-2em; display: none;">

{% for paper in site.data.research.supermereo.papers %}
    <div class="csl-entry" style="margin-bottom: 1em;">{{ paper.citation }}
    {% if paper.links %}[{% for link in paper.links %}<a href="{{ link.href }}" style="color: #2B599E;">{{ link.label }}</a>{% if forloop.last == false %}, {% endif %}{% endfor %}]{% endif %}</div>
{% endfor %}
  
</div>

</div>
