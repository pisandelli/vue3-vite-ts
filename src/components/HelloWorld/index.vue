<template lang="pug">
p {{ msg }}
</template>
<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>
