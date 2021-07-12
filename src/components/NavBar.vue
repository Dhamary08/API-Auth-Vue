<template>
  <div class="navbar navbar-primary bg-primary px-5">
    <!-- <pre>{{usuarioAutenticado}}</pre> -->
    <router-link
      to="/"
      class="navbar-brand text-light font-weight-bold"
      v-if="usuarioAutenticado"
    >
      Fomularios
    </router-link>
    <router-link to="/about" class="navbar-brand text-light font-weight-bold">
      About
    </router-link>

    <div class="d-flex">
      <router-link
        to="/"
        class="navbar-brand text-light font-weight-bold"
        v-if="usuarioAutenticado"
      >
        Tareas
      </router-link>
      <router-link
        to="/ingreso"
        class="btn btn-info font-weight-bold mx-2"
        v-if="!usuarioAutenticado"
      >
        Ingresar
      </router-link>
      <router-link
        to="/registro"
        class="btn btn-info font-weight-bold"
        v-if="!usuarioAutenticado"
      >
        Registrar
      </router-link>
    </div>

    <button
      type="button"
      to="/"
      class="btn btn-warning font-weight-bold"
      v-if="usuarioAutenticado"
      @click="cerrarSesion"
    >
      Cerrar Sesión
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['usuarioAutenticado']),
  },
  methods: {
    ...mapActions(['cerrarSesion']),
  },
}
</script>

<style></style>
