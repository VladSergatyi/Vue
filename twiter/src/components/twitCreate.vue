<template lang="html">
  <div class="alert alert-secondary">
    <div class="flex">
      <h2>{{ title }}</h2> <span>{{ date }}</span>
    </div>
    <p>{{ content }}</p>
  </div>
</template>

<script>
  export default {
    props: ['content', 'title','date']
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
