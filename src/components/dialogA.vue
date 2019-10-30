<template>
  <div class="dialogA">
    <button @click="toggleDialog()">call Dialog B</button>
  </div>
</template>

<script>
export default {
  name: 'DialogA',
  methods: {
    toggleDialog() {
      this.$root.openDialog('dialogB');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
