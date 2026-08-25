<template>
  <nav class="navbar">
    <h2>Mercado Ñuble Digital</h2>
    <div class="links">
      <router-link to="/">Inicio</router-link>
      <router-link to="/productos">Productos</router-link>
      <router-link to="/productores">Productores</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
}
.links a {
  color: white;
  margin-left: 1.5rem;
  text-decoration: none;
}
.links a.router-link-exact-active {
  font-weight: bold;
  border-bottom: 2px solid #42b983;
}
</style>
