---
layout: page
title: About
published: true
---

# Accounts

When you start in the lab, there are various accounts that you should make sure to get set up. This page provides information on how to set those accounts up.

## Zulip

{% assign zulipadministratorid = site.data.people.roles.zulipadministrator %}
{% assign zulipadministrator = site.data.people.people[zulipadministratorid] %}

The FACTS.lab uses [Zulip](https://zulip.com/) for communication and coordination within the lab. The lab Zulip organization can be found [here](https://factslab.zulipchat.com/). To access this Zulip organization, you will need to request an invitation from the current lab Zulip administrator (<a href="{{ zulipadministrator.website }}">{{ zulipadministrator.name }}</a>).

## Github

{% assign githubadministratorid = site.data.people.roles.githubadministrator %}
{% assign githubadministrator = site.data.people.people[githubadministratorid] %}

The FACTS.lab uses [Github](https://github.com/) to host [its website](http://factslab.io/) as well as data and code associated with [projects in the lab](http://factslab.io/research/). To be added as a colllaborator on [the lab organization](https://github.com/FACTSlab) or any of the project-specific organizations, you will need to request an invitation from the current lab Github administrator (<a href="{{ githubadministrator.website }}">{{ githubadministrator.name }}</a>).

## Amazon Mechanical Turk

{% assign awsadministratorid = site.data.people.roles.awsadministrator %}
{% assign awsadministrator = site.data.people.people[awsadministratorid] %}

The FACTS.lab uses [Amazon Mechanical Turk](https://www.mturk.com/) (AMT) for behavioral data collection. Access to the lab AMT account is managed using [Amazon Web Services](https://aws.amazon.com/) (AWS) [Identity and Access Management](https://aws.amazon.com/iam/) (IAM). To get access to the AMT through AWS IAM, you will need to request an account from the current lab AWS coordinator (<a href="{{ awsadministrator.website }}">{{ awsadministrator.name }}</a>).

## Gmail

{% assign gmailadministratorid = site.data.people.roles.gmailadministrator %}
{% assign gmailadministrator = site.data.people.people[gmailadministratorid] %}

The FACTS.lab uses a lab gmail address (ur.facts.lab@gmail.com) distinct from its `@rochester.edu` address for communicating with participants recruited through crowd-sourcing platforms. Access to the lab gmail account is managed through [gmail delegations](https://support.google.com/mail/answer/138350?hl=en). To receive a delegation for the lab gmail, you will need to request an account from the current lab gmail administrator (<a href="{{ gmailadministrator.website }}">{{ gmailadministrator.name }}</a>). 

Delegations can only be made to email addresses that end in `@gmail.com`. This means that, even though University of Rochester student email services are provided through gmail, `@u.rochester.edu` addresses cannot be delegated to. 

## Devbox

{% assign devboxadministratorid = site.data.people.roles.devboxadministrator %}
{% assign devboxadministrator = site.data.people.people[devboxadministratorid] %}

The FACTS.lab has a development box housed in its lab space in Wegmans Hall. To obtain an account on this machine, you will need to request one from the current lab devbox administrator (<a href="{{ devboxadministrator.website }}">{{ devboxadministrator.name }}</a>).