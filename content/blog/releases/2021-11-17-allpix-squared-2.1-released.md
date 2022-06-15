---
# SPDX-FileCopyrightText: 2021 CERN and the Allpix Squared authors
# SPDX-License-Identifier: CC-BY-4.0
title: "Allpix Squared 2.1 Released"
date: 2021-11-17T13:45:00+01:00
draft: false
---

We are happy to announce a new stable feature release **Allpix Squared version 2.1** with a total of **138 commits** added to the repository by **three contributors** since version 2.0. While this release is a bit smaller than previous feature releases, we decided it would still be of interest to ship this promptly. The release tarball can be downloaded from the repository:

https://gitlab.cern.ch/allpix-squared/allpix-squared/tags/v2.1.0

The new version is also available as docker image in the [project's docker registry](https://gitlab.cern.ch/allpix-squared/allpix-squared/container_registry), as read-to-use [version on CVMFS](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manualch11.html#x12-26000011.4.1) and as binary release [from the website](https://project-allpix-squared.web.cern.ch/project-allpix-squared/releases/).

Allpix Squared was extended be a new module and several improvements. In the following, an overview over the most important changes and new features is provided:
<!--more-->

### New Module: DepositionCosmics

The new module called `DepositionCosmics` simulates cosmic ray particle shower distributions and their energy deposition in all sensors of the setup. The cosmic ray particle showers are simulated using the Cosmic-ray shower generator (CRY) [@cry], the generated particles are transported through the setup by Geant4. More detailed information about CRY can be found in its physics description [@cryphysics] and user manual [@crymanual].

This module inherits functionality from the DepositionGeant4 modules and several of its parameters have their origin there.
It is capable of fully exploiting the multithreading capabilities of Allpix Squared and provides reproducible outputs.
The surface area required for simulation of the cosmic shower is calculated automatically from the total size of the detector setup in the current simulation geometry.
The tabulated reference data used by the CRY framework is downloaded at build time by CMake and placed in the build folder of Allpix Squared.


### Parallel Database Access in DatabaseWriter

The DatabaseWriter module has been revamped in order to better scale with the number of threads of the simulation and to provide better data integrity checks.

Now, individual database connections are established per thread, following the [suggested patterns of the PQXX library used](https://libpqxx.readthedocs.io/en/7.3.0/a01348.html).
This change enables the implementation of a new parameter called `require_sequence`. This Boolean flag selects whether events have to be written in sequential order or can be stored in the order of processing.
The default value `false` enables the new standard behavior of writing events immediately. Since SQL database access is normally performed using `SELECT` statements, the actual order of adding rows to the database is not of any importance.
However, if for some reason strict adherence to the order of events is required, finished events are buffered until they can be written to the database. Since in this case database access happens single-threaded, this might impact the performance of the simulation.
The new default behavior leads to a massive improvement in database access and throughput, some sample simulations have seen an event simulation rate increase by a factor five.

Furthermore, database access is now encapsulated in transactions on a per-event basis.
This means if writing to the database fails for some reason during the processing of one individual event, all of this transaction is rolled back instead of leaving remnants of a half-processed event behind.

The SQL statements are now pre-generated and provided to the database library as so-called "prepared statements" instead of assembling the strings again and again on the fly. This again improves the performance while being more safe in terms of SQL actions performed on the database at the same time.

Additional changes include the move to `std::optional` to determine relations between database entries which significantly reduces code complexity, the use of `libpqxx::result` types for simpler parsing of database responses, and the update of class name demangling code.

### Version Reporting

The reporting of the program version has been extended significantly to include additional information on the 3rd-party libraries used as well as on the actual build version and the repository state. The fingerprint of the new release version could for example look like this now:

```
$ allpix --version
Allpix Squared version v2.1.0
               built on 2021-11-17, 10:44:38 UTC
               using Boost.Random 1.71.0
                     ROOT 6.24/07
                     Geant4 1072

Copyright (c) 2017-2021 CERN and the Allpix Squared authors.

This software is distributed under the terms of the MIT License. In applying this license, CERN does not waive the privileges and immunities granted to it by virtue of its status as an Intergovernmental Organization or submit itself to any jurisdiction.
```

We hope that this change will help us in more quickly tracking down issues related to dependency libraries.
The version of Allpix Squared itself is reported more verbosely now, making use of the `git attributes` feature for tarballs downloaded directly from the repository.


### Other Notable Features and Improvements

* **Module: DetectorHistogrammer** We changed how the seed charge of clusters is calculated and plotted. Before, the pixel in which the truth MCParticle was found was designated the seed pixel. Now, the seed pixel is defined as the pixel in the cluster with the largest signal, more in coherence with analyses performed in the field. Also, the member methods of the `Cluster` class have been adapted to return the actual weighted cluster position in local coordinates instead of the fractional index position. This makes the class robust for future changes in pixel shape and pixel matrix composition.
* **Manual:**
    * Updates to the required build flags of dependency libraries, mostly concerning C++17 and multithreading
    * Fixing a mistake in stating default rotation axis
    * Update of the "passive materials" example
* **Build system & CI:**
   * Updated Docker container
   * The exported CMake target of Allpix Squared now includes the direct dependencies, no need anymore to include them manually in 3rd-party code
   * Moved to the latest LCG_101 release.
   * Update formatting to clang-format-12 and apply new clang-tidy rules.



[@cry]: https://ieeexplore.ieee.org/abstract/document/4437209
[@cryphysics]: https://nuclear.llnl.gov/simulation/doc_cry_v1.7/cry_physics.pdf
[@crymanual]: https://nuclear.llnl.gov/simulation/doc_cry_v1.7/cry.pdf
