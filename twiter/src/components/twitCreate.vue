<template lang="html">
  <div class="alert alert-secondary">
    <div class="flex">
      <h2>{{ news.title }}</h2> <span>{{ news.date }}</span>
    </div>
    <p>{{ news.content }}</p>
  </div>
</template>

<script>
  export default {
    props: ['news']
  }
</script>

<style scoped>
.flex{
  display: flex;
  justify-content: space-around;
}
span{
  margin-top: 10px;
}
</style>
