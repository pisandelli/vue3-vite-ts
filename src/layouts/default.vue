<template lang="pug">
main
  article
    header
      h2 Default Layout
    section
      .content
        router-view
    footer
      ul
        li: a(href='about') About Page
        li: a(href='contact') Contacts
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
</style>
