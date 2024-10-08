---
layout: projects
title: SuperMereo
project_id: supermereo
description: Human language is a powerful tool for conveying information about complex, multi-faceted events at different levels of specificity... 
text: |
  Human language is a powerful tool for conveying information about complex, multi-faceted events at different levels of specificity: in the space of a breath, we can move from talking about a complex event as a whole to a targeted discussion of its many parts and their inter-relationships. Understanding how we convey such complex information using language is critical to improving not only our scientific understanding of human linguistic capacities, but also the ability of artificial intelligence systems to extract knowledge about the world from the massive bodies of text humans generate every day, and ultimately to improve their ability to serve humanity's needs. With the goal of advancing both aims, this project develops foundational resources and cutting-edge deep learning-based artificial intelligence systems for extracting knowledge from those resources.

  To achieve that goal, SuperMereo develops a broad-coverage, automatic method for mapping a description of an event to a rich representation of the relationships among that event's parts: its event structure. It has two main components: (i) it collects behavioral data and text corpus annotations for key aspects of the event structure of verbal, adjectival, and nominal predicates in English; and (ii) it develops and implements a general deep learning-based computational model of event structure, trained using those data. 

  The lexicon and corpus produced under this proposal will be annotated for properties of events that are central in current linguistic theories of tense, grammatical aspect, and lexical aspect: (i) does the event have a natural endpoint (running a race) or not (simply running around)?; (ii) does the event happen at an instant (hitting a ball) or over time (building a house); (iii) what are the event's preconditions and results?; (iv) are those results permanent (killing a mosquito) or transient (opening a door, which can be closed again)?; (v) do they come about gradually (cleaning a table) or abruptly (scuffing a table)?; (vi) does the event consist of indivisible parts (individual claps in applause) or not (being red)?; (vii) are those parts similar (tapping on glass) or dissimilar (shopping for clothes); and (viii) do event parts correspond to participant parts (writing a book) or not (combining ingredients)? 

  On the basis of these annotations, a computational model will be developed and implemented that jointly induces (a) distinct senses of a predicate (running a race v. running a company); (b) the event structure class(es) associated with those senses; (c) the event structure properties associated with those classes; and (d) a mapping from the event's parts to its participants and temporal/causal structure. This model will integrate Bayesian hierarchical models with recent advances in deep learning and will enable explicit quantitative comparison of alternative theoretical assumptions, such as the number of event structure classes and properties that must be posited to best explain the data.

  SuperMereo is supported by a National Science Foundation collaborative grant ([BCS-2040831](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2040831)/[BCS-2040820](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2040820)).
permalink: /projects/supermereo/
published: true
image: /assets/images/supermereo-logo.png
---