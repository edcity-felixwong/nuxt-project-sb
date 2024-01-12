#

1. defaultValue
2. validation

3. If no query variable provided, return the defaultValue and patch the URL with the defaultValue.
4. If provided, validate the variable and patch with defaultValue if it's invalid.

https://tanstack.com/router/v1/docs/guide/search-params

## Idea

To manipulate the query parameters,

## Example

```js
const query = useSearchParams((_) =>
  z.object({
    key1: z.enum(["key1Option1", "key1Option2"]).catch(() => "key1Option1"),
    key2: z.enum(["a", "b"]).optional(),
  } satisfies typeof _)
);
```

Notice that the `satisfies typeof _` give type check on the object you're validating 🙏.

### To set `?subject=chinese` for default

```js
const query = useSearchParams(
  {
    subject: "chinese",
  },
  {
    transform: (_) => {
      return z
        .object({
          subject: z.enum[("chinese", "english")].catch(() => "chinese"),
        })
        .parse(_);
    },
  }
);
```

### To retrieve optional query variable

### To change URL search query programmatically

```js
query.subject = "anything";
```

### To destructure query

```js
import { toRefs } from "@vueuse/core";
const { subject } = toRefs(query); // Ref<"chinese" | "english">
```

subject is a `Ref`, so we can have

```js
subject.value = "anything";
```

this will change the URL.
