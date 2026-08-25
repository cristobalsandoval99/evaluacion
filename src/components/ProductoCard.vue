<template>
  <div class="card-producto">
    <h3>{{ producto.nombre }}</h3>
    <p><strong>Categoría:</strong> {{ producto.categoria }}</p>
    <p><strong>Productor:</strong> {{ producto.productor }}</p>
    <p><strong>Comuna:</strong> {{ producto.comuna }}</p>
    <p class="precio"><strong>Precio:</strong> ${{ producto.precio.toLocaleString('es-CL') }}</p>
    
    <!-- Botón de acción que gatilla el emit -->
    <button class="btn-interes" @click="manifestarInteres">
      Me interesa este producto
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  producto: {
    type: Object,
    required: true
  }
})

// Declaración de eventos emitidos hacia el padre
const emit = defineEmits(['manifestar-interes'])

const manifestarInteres = () => {
  emit('manifestar-interes', props.producto)
}
</script>

<style scoped>
.card-producto {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
.btn-interes {
  background-color: #2e7d32;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.95rem;
  margin-top: 1rem;
  transition: background-color 0.2s;
}
.btn-interes:hover {
  background-color: #1b5e20;
}
</style>