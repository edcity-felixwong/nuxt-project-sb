# HTTP client

`axios` was used for being a HTTP client on frontend, despite it has some drawback like being non-tree-shakable, re-inverting fetch instead of just using native browser built-in `fetch`.

Some libraries like `ky` that are tree-shakable, and having smaller size (7KB vs 11KB of `axios` gzip). I believe there will be a better library in the future.

`axios` provided extra feature like automatic conversion of JSON, automatic throw on non-200 HTTP status code, AxiosError, interceptors, compatible cause it using XMLRequest.

`axios` still has the advantage of being isomorphic, to run on both server and browser, but with node 18 providing native `fetch`, that means other libraries can also do it.

This `__test__` aims to put the consideration of a HTTP client we need into code. Hope that it can clear that whether something is wrong or not on our first gate of data-fetching, and what should a library acquire for this task.
