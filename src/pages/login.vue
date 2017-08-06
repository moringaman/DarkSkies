<template>
 <f7-page login-screen>
     <div class="background">
            <f7-login-screen-title class="title">Login</f7-login-screen-title>
            <f7-list form >
              <f7-list-item>
                <f7-label>Username</f7-label>
                <f7-input name="username" placeholder="" type="text"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Password</f7-label>
                <f7-input name="password" type="password" placeholder=""></f7-input>
              </f7-list-item>
            </f7-list>
            <div class="buttons">
            <button class="button theme-white" title="Sign In" @click="login" close-login-screen>Sign In</button>
            <button class="button theme-white" title="Sign Up" @click="signUp" close-login-screen>Sign Up</button>
            </div>
            </div>
          </f7-page>
</template>

<script>
export default {
  methods: {
    login () {
            // TODO login to firebase then redirect to app page
      this.$f7.mainView.router.back()
    }
  }
}
</script>

<style scoped>

.background {
    background-image: url('../assets/skygaze.jpg');
     background-size: 120%;
    margin-top: -25px;
    margin-top: -25px;
    height: 100%;
    color: white;
    
}

.title {
    padding-top: 50px;
}

.button {
    padding: 0px 20px;
    height: 40px;
    background-color: rgba(0,0,0,0.3);
    width: 60%;
    margin: auto;
    margin-top: 10px;
    color: #fff;
    border: 0px;
    border-radius: 0px;
}

.button:first-child {
    margin-top: 100px;
}

.button:nth-child(2) {
    margin-top: 15px;
}



</style>