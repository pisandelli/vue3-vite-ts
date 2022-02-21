<template lang="pug">
h1 {{ msg }}
hello-world
</template>

<script lang="ts" setup>
const msg = ref('HOME')
</script>

<style lang="stylus" scoped>
h1
  _square 200px
  background-color: #e7e7e7
</style>
