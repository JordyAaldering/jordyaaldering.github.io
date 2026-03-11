---
title: On the Accuracy of the Software Energy Lab
---

_0 minute read_

At our [Software Energie Lab](https://gitlab.com/software-energy-lab) on the Radboud University we measure and compare the energy efficiency of software.
In a controlled environment, we measure the energy consumption of websites to algorithms and AI-applications.
We do this with multiple kinds of specialised measuring equipment that accurately record how much energy the computer hardware consumes.

Programs can easily and automatically be measured with these kinds of specialised equipment by uploading programs to the Software Energy Lab [GitLab](https://about.gitlab.com/) environment.
Although this makes it convenient for developers to test their software, it also comes with additional overhead that may influence the accuracy of the results.

[Picture of our Odroid]

To validate this, [Joost/one of our students/we] developed a _cleanroom_ environment alongside our pre-existing Software Energy Lab.
By comparing our existing setup against an optimised _cleanroom_ system, we can evaluate if, and how much, overhead our current setup introduces.

Designing such a cleanroom system is non-trivial.
...

After comparing all benchmarks across both setups, we observe that both show provide very stable results.
Although not entirely clean, great care has gone into the current setup to make sure that it has as little overhead as possible.
In practise, it seems that this is indeed enough to get accuracte-enough energy measuremennts.

Surprisingly, the cleanroom system actually has slightly more variability then the current configuration.
It is unclear why this is the case, but it shows that great care needs to be taken when designing a software measuring setup.
