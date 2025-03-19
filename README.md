# Jordy Aaldering

PhD candidate at the Radboud University, [Department of Software Science](https://sws.cs.ru.nl/).

- [ACM](https://dl.acm.org/profile/99661241184)
- [ORCiD](https://orcid.org/0009-0001-3018-5152)
- [LinkedIn](https://www.linkedin.com/in/jordy-aaldering-884512174/)

---

# Publications

## 2025

Empowering Embedded Systems Developers to Meet Energy Consumption Requirements

```bibtex
@inproceedings{empowering-embedded,
  author={Rietvelt, Mark and Aaldering, Jordy and van Gastel, Bernard and Keuning, Hieke},
  title={Empowering Embedded Systems Developers to Meet Energy Consumption Requirements},
  booktitle={},
  editor={},
  publisher={},
  address={},
  series={ICT4S '25},
  location={},
  year={},
  month={},
  articleno={},
  pages={},
  numpages={11},
  isbn={},
  doi={},
  url={},
  abstract={Embedded systems, in which external components are managed through software, have become seamlessly integrated into modern society. These systems are ubiquitous in our daily lives. Their environmental impact encompasses not only the direct energy consumption required to operate the device itself, but also the indirect environmental footprint associated with the resources consumed by external components and the ecological consequences of manufacturing these components. As software controls these components, software decisions influence the energy impact of these embedded devices. There is a need for embedded systems to become more environmentally friendly, in part because governments impose increasingly stringent regulations on sustainability. This imperative forms the core focus of this article: we examine the information requirements of developers who are working to optimise energy usage and reduce greenhouse gas emissions. Although there are multiple tools for analysing energy consumption, an examination of their effectiveness has not been done before. Using a mixed-methods approach that includes an observational study, a semi-structured interview, and a questionnaire, we identify existing practices that guide embedded system software developers in achieving energy-efficiency. Our research reveals opportunities for hardware vendors to support this process. We highlight how developers prefer energy measurements to be collected and visualized, offering valuable insights for researchers and tool developers to create more effective tools and frameworks to advance sustainable software development.},
  keywords={Embedded Devices, Visualisation, Feedback, Software Engineering, Energy Consumption, Green Software}
}
```

Energy-Aware Dynamic Adaptation of Runtime Systems

```bibtex
@inproceedings{dynamic-adaptation,
  author={Aaldering, Jordy and van Gastel, Bernard and Scholz, Sven-Bodo},
  title={Energy-Aware Dynamic Adaptation of Runtime Systems},
  booktitle={},
  editor={},
  publisher={Springer Nature},
  address={Cham},
  series={TFP '25},
  location={Oxford, UK},
  year={},
  month={},
  articleno={},
  pages={},
  numpages={24},
  isbn={},
  doi={},
  url={},
  abstract={In recent years the energy-efficiency of software has become a key focus for both researchers and software developers, aiming to reduce greenhouse-gas emissions and operational costs. Despite this growing awareness, developers still lack effective strategies to improve the energy-efficiency of their programs beyond the well-established approaches that optimise for runtime performance. In this paper we present a dynamic adaptation algorithm that uses energy consumption feedback to optimise the energy-efficiency of data-parallel applications, by steering the level of parallelism during runtime through external control. This approach is especially suited to functional languages, whose side-effect-free nature and strong semantic guarantees allow for easier code generation and straightforward scalability of the parallelism of programs. Through a series of experiments we evaluate the effectiveness of this approach. We measure how well the adaptation algorithm adapts to runtime changes, and we evaluate its effectiveness compared to a hypothesised oracle that knows the optimal level of parallelism, as well as a runtime-optimising-based approach. We show that in a fixed-workload scenario we approach the theoretical best energy-efficiency, and that in changing workload scenarios the adaptation algorithm converges towards an optimal level of parallelism that minimises energy consumption.},
  keywords={Dynamic Adaptation, Runtime Systems, Energy-Efficiency, High-Performance Computing, Parallel Programming}
}
```

[Flattening Combinations of Arrays and Records](https://doi.org/10.1007/978-3-031-74558-4_10)

```bibtex
@inproceedings{sac-records,
  author={Huijben, Reg and Aaldering, Jordy and Achten, Peter and Scholz, Sven-Bodo},
  title={Flattening Combinations of Arrays and Records},
  booktitle={International Symposium on Trends in Functional Programming},
  editor={Chang, Stephen and Hemann, Jason},
  publisher={Springer Nature},
  address={Cham},
  series={TFP '24},
  location={South Orange, NJ, USA},
  year=2025,
  month=jan,
  articleno={10},
  pages={220--240},
  numpages={21},
  isbn={978-3-031-74558-4},
  doi={10.1007/978-3-031-74558-4_10},
  url={https://doi.org/10.1007/978-3-031-74558-4_10},
  abstract={Flattening is known to be a performance-boosting technique to orchestrate parallel computations on arbitrarily deeply nested arrays. In this paper, we propose a flattening transformation that deals with nested data structures that are composed of combinations of arrays and records. We choose the functional array programming language SaC as basis for this work, as it already supports flattening of homogeneously nested arrays, i.e. arrays in which all elements have the same shape. We propose an extension of SaC's syntax for records that allows records and arrays to be used in homogeneously nested form, and provide an implementation of this record transformation in the SaC compiler. Based on that extension, we show how any legal program that operates with such data structures can be transformed into an equivalent one that does not require any records at runtime.},
  keywords={Nested Data Structures, Records, Array Programming, Program Transformation}
}
```

## 2024

[Power Consumption of an Experimental Webserver](https://tweedegolf.nl/en/blog/144/power-consumption-of-an-experimental-webserver)

```bibtex
@misc{nea-energy,
  title={Power Consumption of an Experimental Webserver},
  author={Aaldering, Jordy and de Vries, Folkert},
  year=2024,
  month=dec,
  url={https://tweedegolf.nl/en/blog/144/power-consumption-of-an-experimental-webserver}
}
```

[Type Patterns: Pattern Matching on Shape-Carrying Array Types](https://doi.org/10.1145/3652561.3652572)

```bibtex
@inproceedings{type-patterns,
  author={Aaldering, Jordy and Scholz, Sven-Bodo and van Gastel, Bernard},
  title={Type Patterns: Pattern Matching on Shape-Carrying Array Types},
  booktitle={Proceedings of the 35th Symposium on Implementation and Application of Functional Languages},
  publisher={Association for Computing Machinery},
  address={New York, NY},
  series={IFL '23},
  location={Braga, Portugal},
  year=2024,
  month=jun,
  articleno={11},
  numpages={14},
  isbn={9798400716317},
  doi={10.1145/3652561.3652572},
  url={https://doi.org/10.1145/3652561.3652572},
  abstract={In this paper we present type patterns: a notation for shape-carrying array types that enables the specification of dependent type signatures while maintaining flexibility and a high level of code readability. Similar notations pre-exist, but we extend them to support rank-polymorphism and specifications of arbitrarily complex constraints between values and types. Furthermore, we enable type patterns to double as a pattern matching mechanism against shapes and shape-components of array arguments, making those values directly available in the corresponding function bodies. While this notation could be used as a basis for a dependently typed language, in our prototypical implementation in the context of SaC we do not require all dependencies to be resolved statically. Instead, we follow a hybrid approach: we map the proposed type patterns into the pre-existing type system of SaC, and we generate additional constraints which we try to statically resolve as far as possible by means of partial evaluation. Any remaining constraints are checked at run-time. We outline our implementation in the context of the SaC ecosystem, and present several examples demonstrating the effectiveness of this hybrid approach based on partial evaluation.},
  keywords={Array Programming, Dependent Types, Hybrid Types, Partial Evaluation, Pattern Matching, Rank-Polymorphism, Shape Pattern, Single assignment C, Type Constraints, Type Pattern}
}
```

## 2021

[A new semantics for array programming languages; how to introduce some laziness without being lazy](https://www.cs.ru.nl/bachelors-theses/2021/Jordy_Aaldering___1004292___A_new_semantics_for_array_programming_languages_-_how_to_introduce_some_laziness_without_being_lazy.pdf)

```bibtex
@mastersthesis{lazy-array-semantics,
  type={Bachelor's thesis},
  author={Aaldering, Jordy and Scholz, Sven-Bodo and Koopman, Pieter},
  title={A new semantics for array programming languages; how to introduce some laziness without being lazy},
  school={Radboud University},
  address={Nijmegen, Netherlands},
  year=2021,
  month=mar,
  abstract={Array programming languages are often used in mathematical and engineering applications with very large and complicated equations. In these languages all values are represented as arrays, these arrays can usually be multi-dimensional. These multi-dimensional arrays have a shape vector which describes the length of each of its dimensions. The separation of knowledge of these arrays allows programs to potentially be rewritten according to the required level of information of an array, reducing the computational load by only requiring the shape or dimensionality of that array. This paper defines a way to infer this required level of information and delivers rules for rewriting programs in a way that requires a lower level of information without losing strictness, finding a balance between lazy and strict evaluation. Along with this paper also comes a prototype language, created in a strict functional programming language, which implements these rules. This language will show how to implement these rules in the real world and will be used to validate and benchmark the results.}
}
```

---

# Team

- [Peter Achten](https://www.cs.ru.nl/P.Achten/)
- [Bernard van Gastel](https://sustainablesoftware.info)
- [Niek Janssen](https://www.ru.nl/en/people/janssen-n-j-a)
- [Thomas Koopman](https://www.ru.nl/personen/koopman-t)
- [Mart Lubbers](https://martlubbers.net)
- [Benedikt Rips](https://www.ru.nl/en/people/rips-b)
- [Sven-Bodo Scholz](https://thielescholz.eu/doku.php)

---

# Collaboration

Power consumption of an experimental webserver
- [Tweede Golf](https://tweedegolf.nl/en/blog/144/power-consumption-of-an-experimental-webserver)
- 18 December 2024

Ethics and Sustainability of Data Science
- [Alliander](https://www.ru.nl/en/about-us/organisation/partners-and-networks/alliander) winter school
- 20 November 2024

An introduction to SaC: parallel performance made easy
- [Institute for Programming research and Algorithmics (IPA) Course: Software Technology](https://ipa.win.tue.nl/?event=course-software-technology)
- 15 May 2024
