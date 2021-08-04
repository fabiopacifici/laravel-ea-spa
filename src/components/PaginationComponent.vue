<template>
<nav class="pagination">
  <a class="prev" href="#" @click="$emit('prev')" v-if="links.prev">Prev</a>
  <span class="current_page">{{meta.current_page}}</span>
  <a class="next" href="#" @click="$emit('next')" v-if="links.next">Next</a>
</nav>
</template>

<script>
export default {
  props: {
    links: Object,
    meta: Object
  }
}
</script>

<style lang="scss" scoped>

  .pagination {
    display: flex;
    justify-content: center;
    .prev, .next, .current_page{
      padding: 1rem 0.5rem;
      text-decoration: none;
      color: cornflowerblue;
    }
  }

</style>