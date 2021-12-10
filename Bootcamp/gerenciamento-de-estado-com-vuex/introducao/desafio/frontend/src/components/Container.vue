<template>
  <div class="app">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.app {
  display: grid;
  grid-template-columns: 305px;
  grid-template-rows: 29.839rem;
  justify-content: center;
  align-content: center;
  height: 100vh;
  background: #f5f6f8;
}
.container {
  padding: 2rem 0.375rem;
  padding-bottom: 0.875rem;
  background: linear-gradient(#3f4452, #26282c);
  border-radius: 15px;
  box-shadow: 0 8px 21px 3px rgba(0, 0, 0, 0.19);
  overflow: hidden;
  position: relative;
}
</style>
