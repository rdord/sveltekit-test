<script lang="ts">
  import type { PageData } from './hello/$types';

  export let data: PageData;
</script>

<h1>Hello {data.name}</h1>
