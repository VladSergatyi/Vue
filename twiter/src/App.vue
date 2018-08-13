<template>
  <div class="twit">
    <app-twit @onAdd()= 'add()'   v-on:enlarge-text="onEnlargeText"> </app-twit>
    <app-twit-create v-for= 'count in news' :key="count.id" :content= 'postg'> </app-twit-create>
    <h1>{{ postg }}</h1>
  </div>
</template>

<script>

export default {

  data() {
    return{
      news: [],
      dat: now,
      info: '',
      postg:null
    }

  },
  methods: {

    onEnlargeText: function (enlargeAmount) {
      if (enlargeAmount) {
        this.news.push(1)
     this.postg = enlargeAmount
      } else {
        console.log('11');
      }

 }
  }

}
var now = new Date().toString();
</script>

<style scoped>
  .twit{
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
</style>
