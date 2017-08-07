<template>
 <f7-page login-screen>
     <div class="background">
         </div>
         <div class="form-elements">
            <f7-login-screen-title class="title">Login</f7-login-screen-title>
            <f7-list form class="form">
              <f7-list-item>
                  <i class="f7-icons">email</i> 
                <f7-input name="email" placeholder="Email" type="text" v-model="email"></f7-input>
              </f7-list-item>
              <f7-list-item>
                  <i class="f7-icons">padlock</i>
                <f7-input name="password" type="password" placeholder="Password" v-model="password"></f7-input>
              </f7-list-item>
              <f7-list-item v-show="register">
                  <i class="f7-icons">padlock</i>  
                <f7-input name="password" type="password" placeholder="Confirm Password" v-model="confirmPassword"></f7-input>
              </f7-list-item>
              <f7-list-item>
               <!-- <f7-label>Password</f7-label>
                <f7-input name="password" type="password" placeholder=""></f7-input> -->
              </f7-list-item>
            </f7-list>
            <div class="buttons">
            <button class="button theme-white" title="Sign In" @click="login">Sign In</button>
            <button class="button theme-white" title="Sign Up" @click="signUp">Sign Up</button>
            <p>Forgot your password? click here.</p>
            </div>
            </div>
          </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      register: true
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.user
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$f7.mainView.router.back()
      }
    }
  },
  methods: {
    login () {
            // TODO login to firebase then redirect to app page
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      // this.$f7.mainView.router.back()
    },
    signUp () {
            // TODO login to firebase then redirect to app page
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      // this.$f7.mainView.router.back()
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style scoped>

.background {
    position: absolute;
    background: url('/static/skygaze.jpg') no-repeat;
     background-size: 100%;
     left: 0px;
     right: 0px;
     background-position-y: 50%;
    margin-top: -25px;
    margin-bottom: -25px;
    height: 100%;
    color: white;
    padding: 0px 40px;
    z-index: 0;
    opacity: 0.6;
}

p {
    color: white;
}

.form-elements {
    width: 80%;
    margin: -30px auto;
    color: #fff;
}

.form {
    margin-left: -15px;
}

.title {
    padding-top: 130px;
    color: black;
}

.button {
    padding: 0px 20px;
    height: 40px;
    background-color: rgba(250,250,250,0.5);
    width: 100%;
    margin: 0px auto;
    color: white;
    border: 0px;
    border-radius: 0px;
}

.button:first-child {
    margin-top: 10px;
}

.button:nth-child(2) {
    margin-top: 15px;
    margin-bottom: 0px;
    background-color: rgba(250,250,250,0.0);
    border: 1px solid #fff;
    color: #fff;

}

i {
    margin-right: 25px;
}

f7-input{
    color: white;
}

</style>