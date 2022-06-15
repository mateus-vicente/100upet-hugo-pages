#!/bin/bash

# SPDX-FileCopyrightText: 2022 CERN and the Allpix Squared authors
# SPDX-License-Identifier: MIT

# exit on error
set -e

# cd to script location
pushd $(dirname "$0") > /dev/null

# create temporary path
pushd $XDG_RUNTIME_DIR > /dev/null
rm -rf allpix-squared-website
mkdir allpix-squared-website
cd allpix-squared-website

# check repo and ref with env vars
if [ -z "$APSQ_REPO" ]; then APSQ_REPO="allpix-squared/allpix-squared";fi
if [ -z "$APSQ_REF" ]; then APSQ_REF="master";fi
echo "Using repo \"$APSQ_REPO\" with ref \"$APSQ_REF\"."

# downloading artifacts
echo "Downloading artifacts..."
APSQ_ARTIFACT_URL_HUGO="https://gitlab.cern.ch/$APSQ_REPO/-/jobs/artifacts/$APSQ_REF/download?job=docs:usermanual-hugo"
APSQ_ARTIFACT_URL_PDF="https://gitlab.cern.ch/$APSQ_REPO/-/jobs/artifacts/$APSQ_REF/download?job=docs:usermanual-pdf"
wget -nv $APSQ_ARTIFACT_URL_HUGO -O usermanual-hugo.zip
wget -nv $APSQ_ARTIFACT_URL_PDF -O usermanual-pdf.zip

# extracting artifacts
echo "Extracting artifacts..."
unzip -q usermanual-hugo.zip
unzip -q usermanual-pdf.zip

# copying files
echo "Copying files..."
popd > /dev/null
rm -rf content/docs/*/
mv $XDG_RUNTIME_DIR/allpix-squared-website/result/usermanual_hugo/* content/docs/
rm -f static/usermanual/*.pdf
mv $XDG_RUNTIME_DIR/allpix-squared-website/result/allpix-manual.pdf static/usermanual/allpix-manual-latest.pdf

# cleanup
popd > /dev/null
rm -r $XDG_RUNTIME_DIR/allpix-squared-website
echo "Done, run \"hugo server\" to view the website."
