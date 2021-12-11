<template>
  <div>
    <ul>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">Sobre</NuxtLink>
    </ul>
    <h1>Sobre</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
a.nuxt-link-exact-active {
  font-weight: bold;
}
</style>
