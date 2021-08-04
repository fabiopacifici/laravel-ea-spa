<template>
  <nav class="pagination">
    <a v-if="links && links.prev != null" href="#" @click="$emit('prevPage')">Prev</a>
    <span title="current page" class="current_page">{{meta.current_page}}</span>
    <a v-if="links.next != null" href="#" @click="$emit('nextPage')">Next</a>
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
.pagination{
a {
  display: inline-block;
  padding: 0.5rem;
  margin: 1rem;
  border: 1px solid #333;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  &:hover {
    background-color: #333;
    color: white;
  }
}
  .current_page{
    background-color: #ededed;
    color: #333;
     padding: .75rem;
    margin: .25rem;
    border-radius: 5px;
  }
}

</style>