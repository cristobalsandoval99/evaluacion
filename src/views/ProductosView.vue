<template>
  <div class="vista">
    <h1>Catálogo de Productos</h1>

    <!-- Panel de notificación interactiva con opción de eliminar -->
    <div v-if="productosInteresados.length > 0" class="panel-interes">
      <h3>🛒 Resumen de Interés ({{ productosInteresados.length }})</h3>
      <ul class="lista-interes">
        <li v-for="item in productosInteresados" :key="item.id" class="item-interes">
          <span><strong>{{ item.nombre }}</strong> - {{ item.comuna }} (${{ item.precio.toLocaleString('es-CL') }})</span>
          <button @click="eliminarInteres(item.id)" class="btn-eliminar" title="Quitar producto">✕</button>
        </li>
      </ul>
    </div>

    <!-- Filtro por categoría -->
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

    <!-- Catálogo de productos -->
    <div v-if="productosFiltrados.length > 0" class="grid-productos">
      <ProductoCard
        v-for="item in productosFiltrados"
        :key="item.id"
        :producto="item"
        @manifestar-interes="registrarInteres"
      />
    </div>

    <div v-else class="mensaje-vacio">
      <p>⚠️ No se encontraron productos disponibles en la categoría seleccionada.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductoCard from '../components/ProductoCard.vue'

const categoriaSeleccionada = ref('Todas')
const productosInteresados = ref([])

const productos = ref([
  { id: 1, nombre: 'Miel Multifloral Orgánica', categoria: 'Apicultura', productor: 'Don Mario', comuna: 'San Fabián', precio: 6500 },
  { id: 2, nombre: 'Longanizas Artesanales', categoria: 'Embutidos', productor: 'Cecinas El Ñublensino', comuna: 'Chillán', precio: 8900 },
  { id: 3, nombre: 'Queso Mantecoso de Campo', categoria: 'Lácteos', productor: 'Lácteos San Carlos', comuna: 'San Carlos', precio: 5500 },
  { id: 4, nombre: 'Conserva de Cerezas', categoria: 'Conservas', productor: 'Frutas del Valle', comuna: 'Quirihue', precio: 4000 },
  { id: 5, nombre: 'Mermelada de Frutilla Natural', categoria: 'Conservas', productor: 'Agro Coihueco', comuna: 'Coihueco', precio: 3500 },
  { id: 6, nombre: 'Cantarito de Greda Negra', categoria: 'Artesanía', productor: 'Alfareras de Quinchamalí', comuna: 'Chillán', precio: 12000 }
])

const productosFiltrados = computed(() => {
  if (categoriaSeleccionada.value === 'Todas') {
    return productos.value
  }
  return productos.value.filter(item => item.categoria === categoriaSeleccionada.value)
})

const registrarInteres = (producto) => {
  const yaExiste = productosInteresados.value.some(p => p.id === producto.id)
  if (!yaExiste) {
    productosInteresados.value.push(producto)
  }
}

// Nueva función para eliminar un elemento por su ID
const eliminarInteres = (id) => {
  productosInteresados.value = productosInteresados.value.filter(p => p.id !== id)
}
</script>

<style scoped>
.panel-interes {
  background-color: #e8f5e9;
  border: 1px solid #c8e6c9;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  color: #1b5e20;
}
.panel-interes h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.lista-interes {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.item-interes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  border: 1px solid #a5d6a7;
}
.btn-eliminar {
  background-color: #e53935;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-eliminar:hover {
  background-color: #c62828;
}
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