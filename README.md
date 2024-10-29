# Jordy Aaldering

PhD student at the Radboud University, [Department of Software Science](https://sws.cs.ru.nl/).

## Publications

### 2024

Flattening Combinations of Arrays and Records

```
@inproceedings{sac-records,
  author={Huijben, Reg and Aaldering, Jordy and Achten, Peter and Scholz, Sven-Bodo},
  title={Flattening Combinations of Arrays and Records},
  booktitle={Trends in  Functional Programming},
  editor={Chang, Stephen and Hemann, Jason},
  publisher={Springer},
  address={},
  year={2024},
  series={TFP '24},
  location={South Orange, USA},
  articleno={},
  numpages={32},
  isbn={(accepted for publication)},
  doi={},
  url={},
  abstract={Flattening is known to be a performance-boosting technique to orchestrate parallel computations on arbitrarily deeply nested arrays. In this paper, we propose a flattening transformation that deals with nested data structures that are composed of combinations of arrays and records. We choose the functional array programming language SaC as basis for this work, as it already supports flattening of homogeneously nested arrays, i.e. arrays in which all elements have the same shape. We propose an extension of SaC's syntax for records that allows records and arrays to be used in homogeneously nested form, and provide an implementation of this record transformation in the SaC compiler. Based on that extension, we show how any legal program that operates with such data structures can be transformed into an equivalent one that does not require any records at runtime.},
  keywords={Nested Data Structures, Records, Array Programming, Program Transformation}
}
```

Type Patterns: Pattern Matching on Shape-Carrying Array Types

```
@inproceedings{type-patterns,
  author={Aaldering, Jordy and Scholz, Sven-Bodo and Gastel, Bernard van},
  title={Type Patterns: Pattern Matching on Shape-Carrying Array Types},
  booktitle={Proceedings of the 35th Symposium on Implementation and Application of Functional Languages},
  publisher={Association for Computing Machinery},
  address={New York, NY, USA},
  year={2024},
  series={IFL '23},
  location={Braga, Portugal},
  articleno={11},
  numpages={14},
  isbn={9798400716317},
  doi={10.1145/3652561.3652572},
  url={https://doi.org/10.1145/3652561.3652572},
  abstract={In this paper we present type patterns: a notation for shape-carrying array types that enables the specification of dependent type signatures while maintaining flexibility and a high level of code readability. Similar notations pre-exist, but we extend them to support rank-polymorphism and specifications of arbitrarily complex constraints between values and types. Furthermore, we enable type patterns to double as a pattern matching mechanism against shapes and shape-components of array arguments, making those values directly available in the corresponding function bodies. While this notation could be used as a basis for a dependently typed language, in our prototypical implementation in the context of SaC we do not require all dependencies to be resolved statically. Instead, we follow a hybrid approach: we map the proposed type patterns into the pre-existing type system of SaC, and we generate additional constraints which we try to statically resolve as far as possible by means of partial evaluation. Any remaining constraints are checked at run-time. We outline our implementation in the context of the SaC ecosystem, and present several examples demonstrating the effectiveness of this hybrid approach based on partial evaluation.},
  keywords={Array Programming, Dependent Types, Hybrid Types, Partial Evaluation, Pattern Matching, Rank-Polymorphism, Shape Pattern, Single assignment C, Type Constraints, Type Pattern}
}
```
