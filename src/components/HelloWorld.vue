<template>
  <div class="hello">
  </div>
  <OurMenuBar/>
</template>

<script>
import OurMenuBar from './OurMenuBar.vue';


// We need to expor the components
export default {
  name: 'HelloWorld',
  components: {
    OurMenuBar
},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
