<template>
  <h1>Sub app 1</h1>
  <input type="text" :value="useUser().username">
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUser } from './store/modules/user'

export default defineComponent({
  setup () {
    return { useUser }
  }
})
</script>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
