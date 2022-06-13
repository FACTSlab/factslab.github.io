# FACTS.lab website

This repository houses the [FACTS.lab website](http://factslab.io). Its design is based on the jekyll template [dactl](https://github.com/melangue/dactl), which is a fork of [daktilo](https://github.com/kronik3r/daktilo).

## Adding a lab member

To add yourself to the website, you will need to make a pull request that does two things:

1. Add your information to the [`_data/people.yml`](https://github.com/FACTSlab/factslab.github.io/blob/master/_data/people.yml) file. And example can be found below:

```yaml
name: Siddharth Vashishtha
role: Graduate Researcher
department: Computer Science
university: University of Rochester
website: https://sidsvash26.github.io/
description: Sid is a fourth-year Computer Science PhD Student advised by Aaron White. His research work focuses on extracting event semantics from natural language text. His latest projects involve working on <a href="https://aclanthology.org/2020.findings-emnlp.363/">temporal reasoning in natural language inference systems</a> and <a href="https://aclanthology.org/P19-1280/">temporal relation extraction</a>. 
image: siddharth-vashishtha.jpg
```

2. Add a **square** image to [`assets/img/people/`](https://github.com/FACTSlab/factslab.github.io/tree/master/assets/img/people). You should make sure that the file name matches that found in the `image` field of the entry in `_data/people.yml`.
