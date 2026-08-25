<template>
  <div class="inicio-container">
    <header class="hero">
      <h1>Mercado Ñuble Digital</h1>
      <p>El portal de los productores y emprendedores locales de la Región de Ñuble.</p>
      <router-link to="/productos" class="btn-hero">Explorar Catálogo</router-link>
    </header>

    <section class="caracteristicas">
      <div class="card-feature">
        <h3>🌱 100% Local</h3>
        <p>Productos cultivados y elaborados directamente en las comunas de Ñuble.</p>
      </div>
      <div class="card-feature">
        <h3>🤝 Directo del Productor</h3>
        <p>Conoce la historia detrás de cada miel, queso, artesanía o conserva.</p>
      </div>
      <div class="card-feature">
        <h3>📍 Conexión Regional</h3>
        <p>Promovemos la visibilidad de pequeñas localidades y artesanos tradicionales.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(rgba(44, 62, 80, 0.85), rgba(44, 62, 80, 0.85)), url('https://picsum.photos/1200/400?farm') center/cover;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 2rem;
}
.hero h1 {
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
}
.hero p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}
.btn-hero {
  background-color: #2e7d32;
  color: white;
  padding: 0.8rem 1.6rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
}
.caracteristicas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
.card-feature {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  text-align: center;
}
</style>