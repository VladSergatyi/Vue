<template>
  <div class="twit">
    <app-twit @onAdd()= 'add()'   v-on:enlarge-text="onEnlargeText"> </app-twit>
    <app-twit-create v-for= 'count in news' :key="count.id" :date='count.date'  :title='count.title' :content= 'count.content'> </app-twit-create>
  </div>
</template>

<script>
export default {
  data() {
    return{
      news: [],
      infoContent: '',
    }
  },
  methods: {
    onEnlargeText: function (infoContent, infoTitle) {
      if (infoContent && infoTitle) {
        let time = date()
     this.news.push({content: infoContent, title: infoTitle, date: time})
      } else {
        console.log('11');
      }
    }
  }
}
function date() {
  let time = new Date().toString();
  return time
}
</script>

<style scoped>
  .twit{
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
</style>
