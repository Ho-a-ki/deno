import "https://deno.land/x/lodash@4.17.19/dist/lodash.js";

// now `_` is imported in the global variable, which in deno is `self`
const _ = (self as any)._;
console.log(_.chunk([1, 2, 3], 2)); // --> [ [ 1, 2 ], [ 3 ] ]
