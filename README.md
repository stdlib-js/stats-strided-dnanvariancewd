<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dnanvariancewd

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the [variance][variance] of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.

<section class="intro">

The population [variance][variance] of a finite size population of size `N` is given by

<!-- <equation class="equation" label="eq:population_variance" align="center" raw="\sigma^2 = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2" alt="Equation for the population variance."> -->

```math
\sigma^2 = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2
```

<!-- <div class="equation" align="center" data-raw-text="\sigma^2 = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2" data-equation="eq:population_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@576798eef2b1a2b1b713d022ed2e644269eb0ed7/lib/node_modules/@stdlib/stats/strided/dnanvariancewd/docs/img/equation_population_variance.svg" alt="Equation for the population variance.">
    <br>
</div> -->

<!-- </equation> -->

where the population mean is given by

<!-- <equation class="equation" label="eq:population_mean" align="center" raw="\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i" alt="Equation for the population mean."> -->

```math
\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i" data-equation="eq:population_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@576798eef2b1a2b1b713d022ed2e644269eb0ed7/lib/node_modules/@stdlib/stats/strided/dnanvariancewd/docs/img/equation_population_mean.svg" alt="Equation for the population mean.">
    <br>
</div> -->

<!-- </equation> -->

Often in the analysis of data, the true population [variance][variance] is not known _a priori_ and must be estimated from a sample drawn from the population distribution. If one attempts to use the formula for the population [variance][variance], the result is biased and yields a **biased sample variance**. To compute an **unbiased sample variance** for a sample of size `n`,

<!-- <equation class="equation" label="eq:unbiased_sample_variance" align="center" raw="s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2" alt="Equation for computing an unbiased sample variance."> -->

```math
s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2
```

<!-- <div class="equation" align="center" data-raw-text="s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2" data-equation="eq:unbiased_sample_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@576798eef2b1a2b1b713d022ed2e644269eb0ed7/lib/node_modules/@stdlib/stats/strided/dnanvariancewd/docs/img/equation_unbiased_sample_variance.svg" alt="Equation for computing an unbiased sample variance.">
    <br>
</div> -->

<!-- </equation> -->

where the sample mean is given by

<!-- <equation class="equation" label="eq:sample_mean" align="center" raw="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the sample mean."> -->

```math
\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:sample_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@576798eef2b1a2b1b713d022ed2e644269eb0ed7/lib/node_modules/@stdlib/stats/strided/dnanvariancewd/docs/img/equation_sample_mean.svg" alt="Equation for the sample mean.">
    <br>
</div> -->

<!-- </equation> -->

The use of the term `n-1` is commonly referred to as Bessel's correction. Note, however, that applying Bessel's correction can increase the mean squared error between the sample variance and population variance. Depending on the characteristics of the population distribution, other correction factors (e.g., `n-1.5`, `n+1`, etc) can yield better estimators.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-strided-dnanvariancewd
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var dnanvariancewd = require( '@stdlib/stats-strided-dnanvariancewd' );
```

#### dnanvariancewd( N, correction, x, strideX )

Computes the [variance][variance] of a double-precision floating-point strided array `x` ignoring `NaN` values and using Welford's algorithm.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = dnanvariancewd( x.length, 1, x, 1 );
// returns ~4.3333
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **correction**: degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [variance][variance] according to `n-c` where `c` corresponds to the provided degrees of freedom adjustment and `n` corresponds to the number of non-`NaN` indexed elements. When computing the [variance][variance] of a population, setting this parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the unbiased sample [variance][variance], setting this parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: index increment for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the [variance][variance] of every other element in `x`,

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0, NaN, NaN ] );

var v = dnanvariancewd( 5, 1, x, 2 );
// returns 6.25
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = dnanvariancewd( 5, 1, x1, 2 );
// returns 6.25
```

#### dnanvariancewd.ndarray( N, correction, x, strideX, offsetX )

Computes the [variance][variance] of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = dnanvariancewd.ndarray( x.length, 1, x, 1, 0 );
// returns ~4.33333
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the [variance][variance] for every other element in `X` starting from the second element

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );

var v = dnanvariancewd.ndarray( 5, 1, x, 2, 1 );
// returns 6.25
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   If `n - c` is less than or equal to `0` (where `c` corresponds to the provided degrees of freedom adjustment and `n` corresponds to the number of non-`NaN` indexed elements), both functions return `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-base-uniform' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var bernoulli = require( '@stdlib/random-base-bernoulli' );
var dnanvariancewd = require( '@stdlib/stats-strided-dnanvariancewd' );

function rand() {
    if ( bernoulli( 0.8 ) < 1 ) {
        return NaN;
    }
    return uniform( -50.0, 50.0 );
}

var x = filledarrayBy( 10, 'float64', rand );
console.log( x );

var v = dnanvariancewd( x.length, 1, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/strided/dnanvariancewd.h"
```

#### stdlib_strided_dnanvariancewd( N, correction, \*X, strideX )

Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.

```c
const double x[] = { 1.0, -2.0, 0.0/0.0, 2.0 };

double v = stdlib_strided_dnanvariancewd( 4, 1.0, x, 1 );
// returns ~4.3333
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **correction**: `[in] double` degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [variance][variance] according to `n-c` where `c` corresponds to the provided degrees of freedom adjustment and `n` corresponds to the number of non-`NaN` indexed elements. When computing the [variance][variance] of a population, setting this parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the unbiased sample [variance][variance], setting this parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
double stdlib_strided_dnanvariancewd( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX );
```

#### stdlib_strided_dnanvariancewd_ndarray( N, correction, \*X, strideX, offsetX )

Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm and alternative indexing semantics.

```c
const double x[] = { 1.0, -2.0, 0.0/0.0, 2.0 };

double v = stdlib_strided_dnanvariancewd_ndarray( 4, 1.0, x, 1, 0 );
// returns ~4.3333
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **correction**: `[in] double` degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [variance][variance] according to `n-c` where `c` corresponds to the provided degrees of freedom adjustment and `n` corresponds to the number of non-`NaN` indexed elements. When computing the [variance][variance] of a population, setting this parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the unbiased sample [variance][variance], setting this parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
double stdlib_strided_dnanvariancewd_ndarray( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/strided/dnanvariancewd.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, 2.0, 0.0/0.0, 3.0, 0.0/0.0, 4.0, 5.0, 6.0, 0.0/0.0, 7.0, 8.0, 0.0/0.0 };

    // Specify the number of elements:
    const int N = 6;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the variance:
    double v = stdlib_strided_dnanvariancewd( N, 1.0, x, strideX );

    // Print the result:
    printf( "sample variance: %lf\n", v );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

* * *

<section class="references">

## References

-   Welford, B. P. 1962. "Note on a Method for Calculating Corrected Sums of Squares and Products." _Technometrics_ 4 (3). Taylor & Francis: 419–20. doi:[10.1080/00401706.1962.10490022][@welford:1962a].
-   van Reeken, A. J. 1968. "Letters to the Editor: Dealing with Neely's Algorithms." _Communications of the ACM_ 11 (3): 149–50. doi:[10.1145/362929.362961][@vanreeken:1968a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-strided/dvariancewd`][@stdlib/stats/strided/dvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="package-name">[`@stdlib/stats-strided/dnanvariance`][@stdlib/stats/strided/dnanvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-strided/nanvariancewd`][@stdlib/stats/strided/nanvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring NaN values and using Welford's algorithm.</span>
-   <span class="package-name">[`@stdlib/stats-base/snanvariancewd`][@stdlib/stats/base/snanvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array ignoring NaN values and using Welford's algorithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-strided-dnanvariancewd.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-strided-dnanvariancewd

[test-image]: https://github.com/stdlib-js/stats-strided-dnanvariancewd/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-strided-dnanvariancewd/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-strided-dnanvariancewd/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-strided-dnanvariancewd?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-strided-dnanvariancewd.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-strided-dnanvariancewd/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-strided-dnanvariancewd/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-strided-dnanvariancewd/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-strided-dnanvariancewd/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-strided-dnanvariancewd/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-strided-dnanvariancewd/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-strided-dnanvariancewd/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-strided-dnanvariancewd/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-strided-dnanvariancewd/main/LICENSE

[variance]: https://en.wikipedia.org/wiki/Variance

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@welford:1962a]: https://doi.org/10.1080/00401706.1962.10490022

[@vanreeken:1968a]: https://doi.org/10.1145/362929.362961

<!-- <related-links> -->

[@stdlib/stats/strided/dvariancewd]: https://github.com/stdlib-js/stats-strided-dvariancewd

[@stdlib/stats/strided/dnanvariance]: https://github.com/stdlib-js/stats-strided-dnanvariance

[@stdlib/stats/strided/nanvariancewd]: https://github.com/stdlib-js/stats-strided-nanvariancewd

[@stdlib/stats/base/snanvariancewd]: https://github.com/stdlib-js/stats-base-snanvariancewd

<!-- </related-links> -->

</section>

<!-- /.links -->
