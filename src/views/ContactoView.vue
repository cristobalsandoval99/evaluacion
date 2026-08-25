<template>
  <div class="vista-contacto">
    <h1>Contacto - Mercado Ñuble Digital</h1>
    <p>Envíanos tus dudas o consultas y nos pondremos en contacto contigo.</p>

    <!-- Formulario de contacto -->
    <form @submit.prevent="procesarFormulario" class="formulario" v-if="!formularioEnviado">
      
      <!-- Mensaje de error si la validación falla -->
      <div v-if="mensajeError" class="alerta error">
        {{ mensajeError }}
      </div>

      <div class="campo">
        <label for="nombre">Nombre completo *</label>
        <input 
          type="text" 
          id="nombre" 
          v-model.trim="formulario.nombre" 
          placeholder="Ej: María González"
        />
      </div>

      <div class="campo">
        <label for="correo">Correo electrónico *</label>
        <input 
          type="email" 
          id="correo" 
          v-model.trim="formulario.correo" 
          placeholder="ejemplo@correo.cl"
        />
      </div>

      <div class="campo">
        <label for="telefono">Teléfono *</label>
        <input 
          type="tel" 
          id="telefono" 
          v-model.trim="formulario.telefono" 
          placeholder="+56 9 1234 5678"
        />
      </div>

      <div class="campo">
        <label for="comuna">Comuna *</label>
        <select id="comuna" v-model="formulario.comuna">
          <option value="">Seleccione una comuna...</option>
          <option value="Chillán">Chillán</option>
          <option value="Chillán Viejo">Chillán Viejo</option>
          <option value="San Carlos">San Carlos</option>
          <option value="San Fabián">San Fabián</option>
          <option value="Quirihue">Quirihue</option>
          <option value="Coihueco">Coihueco</option>
          <option value="Bulnes">Bulnes</option>
          <option value="Yungay">Yungay</option>
          <option value="Otra">Otra comuna de Ñuble</option>
        </select>
      </div>

      <div class="campo">
        <label for="mensaje">Mensaje *</label>
        <textarea 
          id="mensaje" 
          v-model.trim="formulario.mensaje" 
          rows="4" 
          placeholder="Escribe tu mensaje aquí..."
        ></textarea>
      </div>

      <button type="submit" class="btn-enviar">Enviar mensaje</button>
    </form>

    <!-- Resumen de confirmación en caso de éxito -->
    <div v-else class="resumen-confirmacion">
      <h2>✅ ¡Mensaje enviado con éxito!</h2>
      <p>Gracias por contactarte con Mercado Ñuble Digital. A continuación, el resumen de la información ingresada:</p>
      
      <div class="datos-resumen">
        <p><strong>Nombre:</strong> {{ formulario.nombre }}</p>
        <p><strong>Correo electrónico:</strong> {{ formulario.correo }}</p>
        <p><strong>Teléfono:</strong> {{ formulario.telefono }}</p>
        <p><strong>Comuna:</strong> {{ formulario.comuna }}</p>
        <p><strong>Mensaje:</strong> {{ formulario.mensaje }}</p>
      </div>

      <button @click="nuevoEnvio" class="btn-nuevo">Enviar otro mensaje</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formulario = reactive({
  nombre: '',
  correo: '',
  telefono: '',
  comuna: '',
  mensaje: ''
})

const mensajeError = ref('')
const formularioEnviado = ref(false)

const procesarFormulario = () => {
  mensajeError.value = ''

  // Validación de campos requeridos obligatorios
  if (!formulario.nombre || !formulario.correo || !formulario.telefono || !formulario.comuna || !formulario.mensaje) {
    mensajeError.value = '⚠️ Todos los campos son obligatorios. Por favor completa la información faltante.'
    return
  }

  // Validación básica de formato de correo
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!regexEmail.test(formulario.correo)) {
    mensajeError.value = '⚠️ Por favor ingresa un correo electrónico válido.'
    return
  }

  // Confirmación exitosa
  formularioEnviado.value = true
}

const nuevoEnvio = () => {
  formulario.nombre = ''
  formulario.correo = ''
  formulario.telefono = ''
  formulario.comuna = ''
  formulario.mensaje = ''
  mensajeError.value = ''
  formularioEnviado.value = false
}
</script>

<style scoped>
.vista-contacto {
  max-width: 600px;
  margin: 0 auto;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.campo label {
  font-weight: bold;
  color: #333;
}

.campo input,
.campo select,
.campo textarea {
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.campo input:focus,
.campo select:focus,
.campo textarea:focus {
  outline: none;
  border-color: #42b983;
}

.alerta.error {
  background-color: #ffebee;
  color: #c62828;
  border: 1px solid #ffcdd2;
  padding: 0.8rem;
  border-radius: 4px;
}

.btn-enviar {
  background-color: #2c3e50;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-enviar:hover {
  background-color: #1a252f;
}

.resumen-confirmacion {
  background-color: #e8f5e9;
  border: 1px solid #c8e6c9;
  padding: 1.5rem;
  border-radius: 8px;
}

.resumen-confirmacion h2 {
  color: #2e7d32;
  margin-top: 0;
}

.datos-resumen {
  background-color: white;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  border: 1px solid #e0e0e0;
}

.btn-nuevo {
  background-color: #42b983;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>