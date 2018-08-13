<template lang="html">
  <div class="alert alert-secondary">
    <h2>{{ title }}</h2> <span>{{ dat }}</span>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
 props: ['content'],
 inheritAttrs: false
}
</script>

<style >
</style>
