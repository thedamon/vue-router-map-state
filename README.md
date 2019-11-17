> Bind and sync vue-router query parameters to component scope

## Installation

```sh
npm install vue-router-state-sync
```

## Usage

The API is modelled after Vuex helpers like `mapState` and `mapGetters`

```js
// MyComponent.vue
import { syncQueryParams, mapQueryParams } from "vue-router-state-sync";

export default {
  // other options
  computed: {
    ...syncQueryParams(["page", "sort"]),
    ...mapQueryParams(["author"])
  }
};
```

The queries specifed will become available as computed properties in the template. When using `syncQueryparams`, the params can be set inside the template as well because the returned computed function has a setter function.

```sh
http://mysite.com/posts?page=7&author=John&sort=ASC
```

```html
<p>On page {{page}} of {{author}}'s articles.</p>
<paginator :page.sync="page"></paginator>
<select-input v-model="sort" :options="['ASC','DESC']"></select-input>
```

## Roadmap

- Route params? (more difficult because we can't arbitrarily assume routes)
- Provide more options:

```js
...syncQueryParams(
  'sort',
  {query: 'page', computed: 'listPage', default: 1, type: Number,history: 'replace'}
)
```

## License

[MIT](http://opensource.org/licenses/MIT)
