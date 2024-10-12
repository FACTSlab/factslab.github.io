# FACTS.lab website

This repository houses the [FACTS.lab website](http://factslab.io).

## Adding a lab member

To add yourself to the website, you will need to make a pull request that does three things:

1. Adds your information to the [`people`](https://github.com/FACTSlab/factslab.github.io/blob/master/_data/people.yml#L1) hash within [`_data/people.yml`](https://github.com/FACTSlab/factslab.github.io/blob/master/_data/people.yml), ensuring that the correct indentation is used. This information should include six things: `name`, `website` (`null` if you don't have one), `image` (see step 3), `projects`, `papers`, and `description`. An example can be found below:

```yaml
people:
  ...
  wgantt:
    name: William Gantt Walden
    website: https://wgantt.github.io/
    image: /assets/images/people/william-gantt-walden.jpg
    projects:
    - megaattitude
    - decomp
    - supermereo
    - cdae
    papers:
    - gantt_event_2024
    - gantt_small_2024
    - gantt_multimuc_2024
    - chen_unified_2023
    - chen_iterative_2023
    - gantt_decomposing_2022
    - gantt_natural_2020
    description: Will is a Research Scientist at the <a href="https://hltcoe.jhu.edu/">Human Language Technology Center of Excellence</a> at Johns Hopkins University. Will's dissertation, which he defended in 2024 under the supervision of Aaron Steven White, focused on ways of decomposing and describing the structure of events. He contributed to a number of projects during his PhD, including Decomp and MegaAttitude.

  ...
```

2. Adds your identifier (e.g. `wgantt`) to the [`groups`](https://github.com/FACTSlab/factslab.github.io/blob/master/_data/people.yml#L104) hash within [`_data/people.yml`](https://github.com/FACTSlab/factslab.github.io/blob/master/_data/people.yml), ensuring that the correct indentation is used. An example can be found below:

```yaml
groups:
  ...
  grads: 
    name: Graduate Researchers
    members:
    - han
    - srichter
    - cacevesrodriguez
    - jvalinsky
    - acao
    - wchoi
    - cjin
    - pkuchmiichuk
  ...
```

3. Adds a **square** image to [`assets/img/people/`](https://github.com/FACTSlab/factslab.github.io/tree/master/assets/img/people) nd [`assets/img/people-big/`](https://github.com/FACTSlab/factslab.github.io/tree/master/assets/img/people-big). You should make sure that the file name matches that found in the `image` field of the entry in `_data/people.yml`.
