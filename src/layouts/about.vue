<template lang="pug">
main
  article
    header
      h2 About Layout
    section
      .content
        router-view
  aside
    nav
      ul
        li: a(href='/') Homepage
        li: a(href='#') Option 02
        li: a(href='#') Option 03
</template>
<style lang="stylus" scoped>
h2
  margin-block: 4rem
main
  border: 1px solid #333
  border-radius: 10px
  padding: 3rem
  width: max(50rem, 100rem)
  margin-inline: auto
  margin-block: 4rem
  display: flex
  align-items: center
  justify-content: space-between

  .content
    border: 1px solid #333
    border-radius: 10px
    padding: 3rem
</style>
