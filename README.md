# Jordy Aaldering

PhD candidate at the Radboud University, [Department of Software Science](https://sws.cs.ru.nl/).

- [ACM](https://dl.acm.org/profile/99661241184)
- [ORCiD](https://orcid.org/0009-0001-3018-5152)
- [LinkedIn](https://www.linkedin.com/in/jordy-aaldering-884512174/)

---

# Publications

## 2024

Flattening Combinations of Arrays and Records

```
@inproceedings{sac-records,
  author={Huijben, Reg and Aaldering, Jordy and Achten, Peter and Scholz, Sven-Bodo},
  title={Flattening Combinations of Arrays and Records},
  booktitle={Trends in  Functional Programming},
  editor={Chang, Stephen and Hemann, Jason},
  publisher={Springer},
  address={New York, NY},
  series={TFP '24},
  location={South Orange, NJ, USA},
  year={2024},
  month={},
  articleno={},
  numpages={32},
  isbn={(accepted for publication)},
  doi={},
  url={},
  abstract={Flattening is known to be a performance-boosting technique to orchestrate parallel computations on arbitrarily deeply nested arrays. In this paper, we propose a flattening transformation that deals with nested data structures that are composed of combinations of arrays and records. We choose the functional array programming language SaC as basis for this work, as it already supports flattening of homogeneously nested arrays, i.e. arrays in which all elements have the same shape. We propose an extension of SaC's syntax for records that allows records and arrays to be used in homogeneously nested form, and provide an implementation of this record transformation in the SaC compiler. Based on that extension, we show how any legal program that operates with such data structures can be transformed into an equivalent one that does not require any records at runtime.},
  keywords={Nested Data Structures, Records, Array Programming, Program Transformation}
}
```

[Type Patterns: Pattern Matching on Shape-Carrying Array Types](https://doi.org/10.1145/3652561.3652572)

```
@inproceedings{type-patterns,
  author={Aaldering, Jordy and Scholz, Sven-Bodo and Gastel, Bernard van},
  title={Type Patterns: Pattern Matching on Shape-Carrying Array Types},
  booktitle={Proceedings of the 35th Symposium on Implementation and Application of Functional Languages},
  publisher={Association for Computing Machinery},
  address={New York, NY},
  series={IFL '23},
  location={Braga, Portugal},
  year={2024},
  month={June},
  articleno={11},
  numpages={14},
  isbn={9798400716317},
  doi={10.1145/3652561.3652572},
  url={https://doi.org/10.1145/3652561.3652572},
  abstract={In this paper we present type patterns: a notation for shape-carrying array types that enables the specification of dependent type signatures while maintaining flexibility and a high level of code readability. Similar notations pre-exist, but we extend them to support rank-polymorphism and specifications of arbitrarily complex constraints between values and types. Furthermore, we enable type patterns to double as a pattern matching mechanism against shapes and shape-components of array arguments, making those values directly available in the corresponding function bodies. While this notation could be used as a basis for a dependently typed language, in our prototypical implementation in the context of SaC we do not require all dependencies to be resolved statically. Instead, we follow a hybrid approach: we map the proposed type patterns into the pre-existing type system of SaC, and we generate additional constraints which we try to statically resolve as far as possible by means of partial evaluation. Any remaining constraints are checked at run-time. We outline our implementation in the context of the SaC ecosystem, and present several examples demonstrating the effectiveness of this hybrid approach based on partial evaluation.},
  keywords={Array Programming, Dependent Types, Hybrid Types, Partial Evaluation, Pattern Matching, Rank-Polymorphism, Shape Pattern, Single assignment C, Type Constraints, Type Pattern}
}
```

## 2021 (Bachelor's thesis)

A new semantics for array programming languages; how to introduce some laziness without being lazy

```
@mastersthesis{lazy-array-semantics,
  type={Bachelor's thesis},
  author={Aaldering, Jordy and Scholz, Sven-Bodo and Koopman, Pieter},
  title={A new semantics for array programming languages; how to introduce some laziness without being lazy},
  school={Radboud University},
  address={Nijmegen, Netherlands},
  year={2021},
  month={March},
  abstract={Array programming languages are often used in mathematical and engineering applications with very large and complicated equations. In these languages all values are represented as arrays, these arrays can usually be multi-dimensional. These multi-dimensional arrays have a shape vector which describes the length of each of its dimensions. The separation of knowledge of these arrays allows programs to potentially be rewritten according to the required level of information of an array, reducing the computational load by only requiring the shape or dimensionality of that array. This paper defines a way to infer this required level of information and delivers rules for rewriting programs in a way that requires a lower level of information without losing strictness, finding a balance between lazy and strict evaluation. Along with this paper also comes a prototype language, created in a strict functional programming language, which implements these rules. This language will show how to implement these rules in the real world and will be used to validate and benchmark the results.}
}
```

---

# Team

- [Peter Achten](https://www.cs.ru.nl/P.Achten/)
- [Bernard van Gastel](https://sustainablesoftware.info)
- [Niek Janssen]()
- [Thomas Koopman]()
- [Mart Lubbers](https://martlubbers.net)
- [Sven-Bodo Scholz](https://thielescholz.eu/doku.php)

---

# Cooperation

- ODC Noord - Data centre visit, sustainability cooperation
- Tweede Golf - Nea energy benchmarks

---

# Talks

Ethics and Sustainability of Data Science
- [Alliander](https://www.ru.nl/en/about-us/organisation/partners-and-networks/alliander) winter school
- 20 November 2024

An introduction to SaC: parallel performance made easy
- [Institute for Programming research and Algorithmics (IPA) Course: Software Technology](https://ipa.win.tue.nl/?event=course-software-technology)
- 15 May 2024
