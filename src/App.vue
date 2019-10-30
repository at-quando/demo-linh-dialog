<template>
  <div id="app">
    <h1>App</h1>
    <button @click="toggleDialog()">call dialog A</button>
    <Dialog v-show="$root.toggleDialog">
      <component :is="$root.currentDialog"></component>
    </Dialog>
  </div>
</template>

<script>
import Dialog from './components/dialog.vue'

export default {
  name: 'app',
  components: {
    Dialog
  },
  methods: {
    toggleDialog() {
      this.$root.openDialog('dialogA');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
