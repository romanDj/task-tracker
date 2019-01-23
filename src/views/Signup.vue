<template>
    <div class="signup d-flex justify-content-center">
        <b-form id="login-form" class="d-flex flex-column  p-2">

            <b-form-group
                          label="Имя пользователя:"
                          label-for="name_us">
                <b-form-input id="name_us"
                              type="text"
                              placeholder="Введите имя"
                              v-model="user.name">
                </b-form-input>

                <template v-if="errors.name">
                    <p class="text-danger mt-2" v-for="(item, index) in errors.name" :key="index">{{item}}</p>
                </template>
            </b-form-group>

            <b-form-group
                          label="Почта:"
                          label-for="email_us">
                <b-form-input id="email_us"
                              type="email"
                              placeholder="Введите email"
                              v-model="user.email">
                </b-form-input>

                <template v-if="errors.email">
                    <p class="text-danger mt-2" v-for="(item, index) in errors.email" :key="index">{{item}}</p>
                </template>
            </b-form-group>

            <b-form-group
                          label="Логин:"
                          label-for="exampleInput1">
                <b-form-input id="exampleInput1"
                              type="text"
                              placeholder="Введите логин"
                              v-model="user.login">
                </b-form-input>

                <template v-if="errors.login">
                    <p class="text-danger mt-2" v-for="(item, index) in errors.login" :key="index">{{item}}</p>
                </template>

            </b-form-group>

            <b-form-group
                          label="Пароль:"
                          label-for="exampleInput2">
                <b-form-input id="exampleInput2"
                              type="password"
                              placeholder="Введите пароль"
                              v-model="user.password">
                </b-form-input>
                <template v-if="errors.password">
                    <p class="text-danger mt-2" v-for="(item, index) in errors.password" :key="index">{{item}}</p>
                </template>
            </b-form-group>

            <b-form-group
                    label="Повторите пароль:"
                    label-for="pass2_us">
                <b-form-input id="pass2_us"
                              type="password"
                              placeholder="Введите пароль"
                              v-model="user.password2">
                </b-form-input>
                <template v-if="errors.password2">
                    <p class="text-danger mt-2" v-for="(item, index) in errors.password2" :key="index">{{item}}</p>
                </template>
            </b-form-group>

            <b-button type="submit" class="mb-3 mygreen" @click.prevent="saveUser" variant="success">Сохранить</b-button>
            <router-link class="w-100"  to="/"><b-button class="w-100" type="reset" variant="secondary">Отмена</b-button></router-link>

        </b-form>
    </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      user: {
        name: '',
        login: '',
        email: '',
        password: '',
        password2: ''
      }
    }
  },
  computed: {
    errors: function () {
      return this.$store.getters.errors
    }
  },
  methods: {
    saveUser () {
      this.$store.dispatch('SIGNUP_REQUEST', this.user).then((response) => {
        if (response) {
          this.$router.push({ name: 'auth' })
        }
      })
      //      this.$router.push('/auth')
    }
  }
}
</script>

<style scoped>
    #login-form{
        width: 500px;
    }
</style>
