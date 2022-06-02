---
# SPDX-FileCopyrightText: 2017-2022 CERN and the Allpix Squared authors
# SPDX-License-Identifier: CC-BY-4.0
---

# Allpix Squared Website

This repository contains the static website pages of the Allpix Squared project. The deployed website can be found
[here](https://cern.ch/allpix-squared).

All commits to the master branch of this repository are automatically deployed to the EOS space of the project and thus
directly reflect on the published website.

## Dependencies

The website is generated from markdown files using the [hugo](https://gohugo.io/) compiler written in Go. In order to
install Hugo on your machine, pick the appropriate package or binary from
[the latest release](https://github.com/gohugoio/hugo/releases).

## Commands
The following commands might help adding content and testing the website locally before committing and deployment:

* __Start a local test server__
    ```sh
    ./get_artifacts.sh  # fetches the docs from the main repo
    hugo server -D
    ```
    The server will listen to [http://localhost:1313/](http://localhost:1313/).
    The additional command line argument `-D` also enables all documents currently in draft mode.

    Make sure to have the themes fetched as well (`git submodule init && git submodule update --recursive`).

    If you want to test changes e.g. for a merge request, set the `APSQ_REPO` environment variable to the repository where
    the branch of the merge request is located (i.e. `user_name/repo_name`) and `APSQ_REF` to the branch name when running
    `get_artifacts.sh`. The default values are `allpix-squared/allpix-squared` for `APSQ_REPO` and `master` for `APSQ_REF`,
    which is equivalent to calling:
    ```sh
    APSQ_REPO="allpix-squared/allpix-squared" APSQ_REF="master" ./get_artifacts.sh
    ```
    The repository has to be hosted on the CERN GitLab instance for the CI to work, and the pipeline on the ref has to be
    finished before the script can download the latest artifacts.

* __Add a new page__
    In order to add a new static page, run
    ```sh
    hugo new content/pagetitle.md
    ```
    and a new markdown file with the appropriate header will be created. The draft status is set to `true` by default.

* __Add a new post to the blog roll__
    In order to add a new post to the blog/new roll, run
    ```sh
    hugo new content/news/YYYY-MM-DD-post-title.md
    ```
    and a new markdown file with the appropriate header will be created. The draft status is set to `true` by default.
    For releases, change `news` to `releases`. Make sure to add a properly formatted date in your filename.

* __Add page to the main menu__

    See for example [content/docs/_index.md](./content/docs/_index.md) how to define a page to be in the main menu.


## Deploy Changes

Simply push to the `master` branch of this repository to get things published. It should be noted that only documents with
`draft = false` will be included in the published website.

## Updating Docsy & Prism

* __Docsy__
    To update Docsy (our hugo theme), run
    ```shell
    cd themes/docsy
    git fetch origin --prune
    git checkout origin/HEAD
    ```

* __Prism__
    To update Prism (our code highlighter), visit [this page][@prismdownload] and download `prism.js` and `prism.css` to the
    `static/js` and `static/css` folder respectively. Note that if you change any settings, make sure to update this README
    with the corresponding URL as well.

[@prismdownload]: https://prismjs.com/download.html#themes=prism-tomorrow&languages=clike+bash+c+cpp+cmake+ini+yaml&plugins=autolinker+show-language+toolbar+copy-to-clipboard
