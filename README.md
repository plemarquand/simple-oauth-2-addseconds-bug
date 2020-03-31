Demo for simple-oauth2/pull/310.

```
yarn install
npx webpack
node demo.js
```

Produces:

```
simple-oauth-2-addseconds-bug/demo.js:16763
  return addSeconds(new Date(), Number.parseInt(expiresIn, 10));
         ^

TypeError: addSeconds is not a function
```