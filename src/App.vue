<template>
  <div id="app">
    <Navbar />
    <main class="contenido">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue"
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
.contenido {
  padding: 2rem;
}
</style>
