# Allpix Squared Website

This repository contains the static website pages of the Allpix Squared project. The deployed website can be found [here](https://cern.ch/allpix-squared)

All commits to the master branch of this repository are automatically deployed to the EOS space of the project and thus directly reflect on the published website.

## Dependencies

The website is generated from markdown files using the [hugo](https://gohugo.io/) compiler written in Go. In order to install Hugo on your machine, pick the appropriate package or binary from [the latest release](https://github.com/gohugoio/hugo/releases).

## Commands
The following commands might help adding content and testing the website generation locally before committing and deployment:

* __Start a local test server__
    ```
    hugo server -D
    ```
    The server will listen on the address defined in the `config.toml` file, e.g. http://localhost:1313/.
    The additional command line argument `-D` also enables all documents currently in draft mode.
* __Add a new page__

    In order to add a new static page, run
    ```
    hugo new page/pagetitle.md
    ```
    and a new markdown file with the appropriate header will be created. The draft status is set to `true` by default.
* __Add page to the main menu__

    the main menu is defined in the `config.toml` file. Simply add a new entry to `[[menu.main]]`, potentially setting the `parent` key to add the item in one of the dropdown menus.


## Deploy Changes

Simply push to the `master` branch of this repository to get things published. It should be noted that only documents with `draft = false` will be included in the published website.
