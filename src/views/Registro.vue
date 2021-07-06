<template>
  <div>
    <h1 class="pt-5">Registro de Usuarios</h1>
    <form
      @submit.prevent="procesarFormulario({ email: email, password: pass })"
    >
      <div class="col-md-6 pt-5">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input
            type="email"
            class="form-control"
            placeholder="Ingrese su email"
            v-model.trim="email"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">&</span>
          </div>
          <input
            type="password"
            class="form-control"
            placeholder="Ingrese un Password"
            v-model.trim="pass"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">&</span>
          </div>
          <input
            type="password"
            class="form-control"
            placeholder="Reingrese el Password"
            v-model.trim="repetPass"
          />
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          Registrar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      pass: '',
      repetPass: '',
    }
  },
  computed: {
    bloquear() {
      if (!this.email.includes('@')) {
        return true
      }
      if (this.pass.length > 5 && this.pass === this.repetPass) {
        return false
      }
      return true
    },
  },
  methods: {
    ...mapActions(['registrarUsuario']),
    procesarFormulario() {
      this.registrarUsuario({ email: this.email, password: this.pass })
      ;(this.email = ''), (this.pass = ''), (this.repetPass = '')
    },
  },
}
</script>

<style></style>
