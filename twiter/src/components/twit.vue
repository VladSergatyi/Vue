<template lang="html">
  <div class="alert alert-secondary">
    <h1>Create news</h1>
    <label for="title">Title</label>
    <input type="text" name="title" id="title">
    <textarea name="name" rows="6" cols="60" v-model='info' placeholder="Fill in the content"></textarea>
    <br>
    <button class="btn btn-success" @click = '$emit("enlarge-text", info)'>Create</button>
    <h1>{{ info }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return{
      info: '',

    }
  }

}

</script>

<style scoped>
h1{
  margin: 5px auto 20px auto;
}
.btn{
  margin:20px 20px 15px 20px;
}
textarea{
  margin-top: 20px;
  border: 1px solid #7FFFD4;
  border-radius: 5px;
  padding: 5px;
}
input{
  border: 1px solid #7FFFD4;
  border-radius: 5px;

}
label:nth-child(2){
  font-size: 23px;
  font-weight: 400;

}
</style>
