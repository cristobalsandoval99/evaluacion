<template>
  <div class="vista">
    <h1>Catálogo de Productos</h1>

    <!-- Filtro interactivo por categoría -->
    <div class="filtro-container">
      <label for="filtro">Filtrar por categoría: </label>
      <select id="filtro" v-model="categoriaSeleccionada">
        <option value="Todas">Todas</option>
        <option value="Apicultura">Apicultura</option>
        <option value="Embutidos">Embutidos</option>
        <option value="Lácteos">Lácteos</option>
        <option value="Conservas">Conservas</option>
        <option value="Artesanía">Artesanía</option>
        <option value="Verduras">Verduras (sin stock)</option>
      </select>
    </div>

    <!-- Renderizado dinámico condicional -->
    <div v-if="productosFiltrados.length > 0" class="grid-productos">
      <ProductoCard
        v-for="item in productosFiltrados"
        :key="item.id"
        :producto="item"
      />
    </div>

    <!-- Mensaje condicional de lista vacía -->
    <div v-else class="mensaje-vacio">
      <p>⚠️ No se encontraron productos disponibles en la categoría seleccionada.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductoCard from '../components/ProductoCard.vue'

const categoriaSeleccionada = ref('Todas')

const productos = ref([
  { id: 1, nombre: 'Miel Multifloral Orgánica', categoria: 'Apicultura', productor: 'Don Mario', comuna: 'San Fabián', precio: 6500 },
  { id: 2, nombre: 'Longanizas Artesanales', categoria: 'Embutidos', productor: 'Cecinas El Ñublensino', comuna: 'Chillán', precio: 8900 },
  { id: 3, nombre: 'Queso Mantecoso de Campo', categoria: 'Lácteos', productor: 'Lácteos San Carlos', comuna: 'San Carlos', precio: 5500 },
  { id: 4, nombre: 'Conserva de Cerezas', categoria: 'Conservas', productor: 'Frutas del Valle', comuna: 'Quirihue', precio: 4000 },
  { id: 5, nombre: 'Mermelada de Frutilla Natural', categoria: 'Conservas', productor: 'Agro Coihueco', comuna: 'Coihueco', precio: 3500 },
  { id: 6, nombre: 'Cantarito de Greda Negra', categoria: 'Artesanía', productor: 'Alfareras de Quinchamalí', comuna: 'Chillán', precio: 12000 }
])

// Propiedad computada para filtrar dinámicamente el arreglo
const productosFiltrados = computed(() => {
  if (categoriaSeleccionada.value === 'Todas') {
    return productos.value
  }
  return productos.value.filter(item => item.categoria === categoriaSeleccionada.value)
})
</script>

<style scoped>
.filtro-container {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.filtro-container select {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
}
.grid-productos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}
.mensaje-vacio {
  padding: 1.5rem;
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeeba;
  border-radius: 6px;
  text-align: center;
}
</style>