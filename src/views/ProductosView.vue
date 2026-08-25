<template>
  <div class="vista">
    <h1>Catálogo de Productos</h1>
    <div class="grid-productos">
      <ProductoCard
        v-for="item in productos"
        :key="item.id"
        :producto="item"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductoCard from '../components/ProductoCard.vue'

const productos = ref([
  { id: 1, nombre: 'Miel Multifloral Orgánica', categoria: 'Apicultura', productor: 'Don Mario', comuna: 'San Fabián', precio: 6500 },
  { id: 2, nombre: 'Longanizas Artesanales', categoria: 'Embutidos', productor: 'Cecinas El Ñublensino', comuna: 'Chillán', precio: 8900 },
  { id: 3, nombre: 'Queso Mantecoso de Campo', categoria: 'Lácteos', productor: 'Lácteos San Carlos', comuna: 'San Carlos', precio: 5500 },
  { id: 4, nombre: 'Conserva de Cerezas', categoria: 'Conservas', productor: 'Frutas del Valle', comuna: 'Quirihue', precio: 4000 },
  { id: 5, nombre: 'Mermelada de Frutilla Natural', categoria: 'Conservas', productor: 'Agro Coihueco', comuna: 'Coihueco', precio: 3500 },
  { id: 6, nombre: 'Cantarito de Greda Negra', categoria: 'Artesanía', productor: 'Alfareras de Quinchamalí', comuna: 'Chillán', precio: 12000 }
])
</script>

<style scoped>
.grid-productos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}
</style>