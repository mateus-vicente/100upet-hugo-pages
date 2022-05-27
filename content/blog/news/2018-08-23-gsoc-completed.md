---
# SPDX-FileCopyrightText: 2018 CERN and the Allpix Squared authors
# SPDX-License-Identifier: CC-BY-4.0
title: "GSoC 2018 Project Successfully Completed"
date: 2018-08-23T15:48:42+02:00
draft: false
---

Yesterday, Google [announced the students](https://opensource.googleblog.com/2018/08/thats-a-wrap-gsoc-2018.html) who have successfully finished their Google Summer of Code projects this year - one of them being Viktor Sonesten, who worked on Allpix Squared over the course of the last three months.
His main project was to [enable parallel processing of multiple events](https://summerofcode.withgoogle.com/projects/#6188171000283136) within Allpix Squared.

This required refactoring many
<!--more-->
central classes of the framework in order to separate events from each other, re-route messages, and to correctly distribute seeds for pseudo-random number generation for a strong reproducibility of simulations independent of the number of threads used.

As it turned out, some of the main difficulties were to be found outside the framework itself, but rather in dependencies such as ROOT.
Here, Viktor [reported the issues](https://root-forum.cern.ch/t/copying-trefs-and-accessing-tref-data-from-multiple-threads/29417) he uncovered and [helped the developers to prepare a fix](https://github.com/root-project/root/pull/2381) by writing minimal working examples to reproduce the behavior.

His final project submission in the form of a pull request can be found [on our GitHub mirror repository](https://github.com/allpix-squared/allpix-squared/pull/1), and as a clone for further discussion and upcoming improvement in [the main project repository](https://gitlab.cern.ch/allpix-squared/allpix-squared/merge_requests/159) on CERN's GitLab instance.
It comes with a detailed description of the changes, benchmarking plots comparing the performance of the new approach with the current Allpix Squared framework as well as an updated user manual detailing the newly implemented mechanisms.

We expect these changes to land in the main repository after another thorough internal review and after addressing some issues revealed during the GSoC project. The first Allpix Squared version to contain this new processing model will likely be Version 2.0.
