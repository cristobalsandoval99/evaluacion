<template>
  <div class="vista-productores">
    <h1>Productores de la Región de Ñuble</h1>
    <p>Conoce a las personas y familias detrás de los productos de nuestra tierra.</p>

    <div class="grid-productores">
      <div v-for="productor in productores" :key="productor.id" class="card-productor">
        <h3>{{ productor.nombre }}</h3>
        <p class="rubro"><strong>Rubro:</strong> {{ productor.rubro }}</p>
        <p><strong>Comuna:</strong> {{ productor.comuna }}</p>
        <p class="descripcion">{{ productor.descripcion }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const productores = ref([
  { id: 1, nombre: 'Don Mario', rubro: 'Apicultura y Miel Orgánica', comuna: 'San Fabián', descripcion: 'Más de 20 años dedicados a la apicultura cordillerana libre de insumos químicos.' },
  { id: 2, nombre: 'Cecinas El Ñublensino', rubro: 'Embutidos Artesanales', comuna: 'Chillán', descripcion: 'Tradición familiar en la elaboración de ahumados con receta típica chillaneja.' },
  { id: 3, nombre: 'Lácteos San Carlos', rubro: 'Quesería Tradicional', comuna: 'San Carlos', descripcion: 'Quesos de leche fresca elaborados diariamente en el corazón agrícola de Ñuble.' },
  { id: 4, nombre: 'Alfareras de Quinchamalí', rubro: 'Artesanía en Greda Negra', comuna: 'Chillán', descripcion: 'Patrimonio cultural con piezas tradicionales moldeadas y cocidas a mano.' }
])
</script>

<style scoped>
.grid-productores {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}
.card-productor {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.card-productor h3 {
  margin-top: 0;
  color: #2c3e50;
}
.rubro {
  color: #2e7d32;
}
.descripcion {
  font-size: 0.95rem;
  color: #555;
}
</style>