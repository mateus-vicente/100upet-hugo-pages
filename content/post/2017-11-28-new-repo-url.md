---
title: "Repository URL Changed"
date: 2017-11-28T14:03:55+01:00
draft: false
---

we have **moved the main development repository of {{% allpix %}}** to live under a common group on the CERN GitLab instance. As a result, the URL under which the repository can be reached, has changed. The repository can now be found at

 https://gitlab.cern.ch/allpix-squared/allpix-squared
<!--more-->

When accessing GitLab through your browser, it should automatically redirect you to the new repository.

When trying to pull or push changes from your local repository, GitLab will present you with a message concerning the move, and will also provide you a guide to change your remote's URL setting:

```shell
remote: Project 'simonspa/allpix-squared' was moved to 'allpix-squared/allpix-squared'.
remote:
remote: Please update your Git remote and try again:
remote:
remote:   git remote set-url origin https://gitlab.cern.ch/allpix-squared/allpix-squared.git
fatal: repository 'https://gitlab.cern.ch/simonspa/allpix-squared.git/' not found
```

If you happen to run into any problems, do not hesitate to contact us for assistance.
