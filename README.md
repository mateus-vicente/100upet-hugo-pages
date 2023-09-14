---
# 100µPET authors
---

# 100µPET Website

This repository contains the static website pages of the 100µPET project. The deployed website can be found
[here](https://100upet-specifications.docs.cern.ch).

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
    hugo server -D
    ```
    The server will listen to [http://localhost:1313/](http://localhost:1313/).
    The additional command line argument `-D` also enables all documents currently in draft mode.

    Make sure to have the themes fetched as well (`git submodule init && git submodule update --recursive`).

    The repository has to be hosted on the CERN GitLab instance for the CI to work, and the pipeline on the ref has to be
    finished before the script can download the latest artifacts.

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
