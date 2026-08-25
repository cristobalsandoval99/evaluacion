<template>
  <div class="card-producto">
    <h3>{{ producto.nombre }}</h3>
    <p><strong>Categoría:</strong> {{ producto.categoria }}</p>
    <p><strong>Productor:</strong> {{ producto.productor }}</p>
    <p><strong>Comuna:</strong> {{ producto.comuna }}</p>
    <p class="precio"><strong>Precio:</strong> ${{ producto.precio.toLocaleString('es-CL') }}</p>
  </div>
</template>

<script setup>
defineProps({
  producto: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.card-producto {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}
.card-producto h3 {
  margin-top: 0;
  color: #2c3e50;
}
.precio {
  font-weight: bold;
  color: #2e7d32;
  font-size: 1.1rem;
}
</style>