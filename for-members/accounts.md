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

### Tips for launching HITs using an external html file

Instead of providing a QuestionForm data structure that tells Amazon Mechanical Turk how to display your questions and collect answers, sometimes you want to host the questions on your own website using an "external" question. In such a case, you need to include certain functions in your html file to ensure that the mturk can fetch the data that was submitted through your website.

In your Python script, the typical way to initialize an external website for your HIT is as follows:

```python
url_link = f'https://sidsvash26.github.io/assets/js/frame_iden_spanf_highlight_bad_warning_without_data.html'
external_question = ExternalQuestion(url_link, frame_height=900)
new_hit =  mturk.create_hit(Question = external_question.get_as_xml(), ....)
```

You can find the official documentation on using an ExternalQuestion [here](https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ExternalQuestionArticle.html).

For a typical external html file, you need to use the following steps so that your submissions can be properly fetched by Mturk:

- First, you should include the following script in your html file to be able to use the `turkSetAssignmentID()` function:

  ```html
  <script src="https://s3.amazonaws.com/mturk-public/externalHIT_v1.js"></script>
  ```

- Then you need to include the following script inside the head of your html file:

  ```html
  <head>
    <script language="Javascript">
      window.onload = function () {
        turkSetAssignmentID();
      };
    </script>
  </head>
  ```

  Whenever you launch a HIT on the mturk website, it is automatically assigned an `AssignmentID`. The function `turkSetAssignmentID()` fetches the assignment ID from the URL which is used later in another function.

- The final thing is to put the entire body of your html inside a `<form>` tag as follows:

  ```html
  <form id="mturk_form" method="POST">
          <input id="assignmentId" name="assignmentId" type="hidden"></input>
          <input id="dummy_variable" name="dummy_variable" type="hidden"></input>
          <!--     Rest of the HTML contents go here -->
  </form>
  ```

  As mentioned earlier, the `assignmentId` would be automatically fetched when the `turkSetAssignmentID()` function is called in the head of your html. The dummy variable is the id of the variable which would contain the data that is to be submitted. You could include multiple such variables based on your needs.

- The process remain the same if you are on `sandbox` or not. The `turkSetAssignmentID` function takes care of everything by checking your URL. Note that the by default expects the id of your form to be `mturk_form` and the id of your submit button to be `submitButton`.

## Gmail

{% assign gmailadministratorid = site.data.people.roles.gmailadministrator %}
{% assign gmailadministrator = site.data.people.people[gmailadministratorid] %}

The FACTS.lab uses a lab gmail address (ur.facts.lab@gmail.com) distinct from its `@rochester.edu` address for communicating with participants recruited through crowd-sourcing platforms. Access to the lab gmail account is managed through [gmail delegations](https://support.google.com/mail/answer/138350?hl=en). To receive a delegation for the lab gmail, you will need to request an account from the current lab gmail administrator (<a href="{{ gmailadministrator.website }}">{{ gmailadministrator.name }}</a>).

Delegations can only be made to email addresses that end in `@gmail.com`. This means that, even though University of Rochester student email services are provided through gmail, `@u.rochester.edu` addresses cannot be delegated to.

## Devbox

{% assign devboxadministratorid = site.data.people.roles.devboxadministrator %}
{% assign devboxadministrator = site.data.people.people[devboxadministratorid] %}

The FACTS.lab has a development box housed in its lab space in Wegmans Hall (Room 4107). To obtain an account on this machine, you will need to request one from the current lab devbox administrator (<a href="{{ devboxadministrator.website }}">{{ devboxadministrator.name }}</a>).

The devbox is a Linux machine with Ubuntu 20.04.03 LTS (Focal Fossa) operating system. It can be used to store data and to run code for your experiments. The devbox has 3 GPUs ([GeForce GTX 1080 Ti]) with roughly 12GB RAM on each GPU.

### Getting an account

To get an account set up on the devbox, please fill up [this form](https://forms.gle/xaXgaia7acNQrX7n8) and the current lab devbox administrator will get in touch with you.

### First time Login

Once your request for the account on the devbox is complete, you will receive your username and a temporary password to login to the machine. You can sign-in to the machine via `ssh` using the following command from a terminal (you need to be on the University network to be able to ssh):

```console
ssh username@10.17.0.15
```

Use your temporary password to login for the first time and make sure to change your password by typing the following command in the devbox terminal:

```console
passwd
```

We use anaconda to manage Python environments on the devbox. If you are logging in for the first time, follow these steps to setup the base conda environment paths:

- Open the `~/.bashrc` file using the following command:

  ```console
  vim ~/.bashrc
  ```

- Press `i` to enter the insert mode and the copy and paste the following at the end of your file

  ```bash
  # anaconda path
  export PATH=/opt/anaconda3/bin:$PATH

  # >>> conda initialize >>>
  # !! Contents within this block are managed by 'conda init' !!
  __conda_setup="$('/opt/anaconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
  if [ $? -eq 0 ]; then
      eval "$__conda_setup"
  else
      if [ -f "/opt/anaconda3/etc/profile.d/conda.sh" ]; then
          . "/opt/anaconda3/etc/profile.d/conda.sh"
      else
          export PATH="/opt/anaconda3/bin:$PATH"
      fi
  fi
  unset __conda_setup
  # <<< conda initialize <<<
  ```

- Press `:` and type `wq` follwed by the `return/enter` command to save and exit the file.

- Enter the following command to initialize your bashrc file:

  ```console
  source ~/.bashrc
  ```

- Type the following command to verify conda works:
  ```console
  conda activate base
  ```

### Data and Model storage

Your devbox account comes with a `/home/username/` directory which you can use to store scripts for your experiments. However, if you want to store models or big datasets, it is advisable to create your own directory in `/data/username/` and store the big files under your `/data/..` directories.
