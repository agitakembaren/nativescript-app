<template>
   <Page actionBarHidden="true">
      <Gradient direction="to-right" colors="#39B994,#337FC7">
        <flexboxLayout  flexDirection="column" justifyContent="center" class="full-height">
          <Image src="https://github.com/drehimself/nativescript-vue-example/blob/master/src/assets/images/nsvue_logo.png?raw=true" class="logo-container" ></Image>

    <StackLayout class="container">
      <StackLayout>
              <Image width="16" height="16" class="icon-margin" src="https://github.com/drehimself/nativescript-vue-example/blob/master/src/assets/images/icon_user.png?raw=true" />
              <TextField  class="form-input"  hint="Username" ></TextField>
      </StackLayout>
      <StackLayout>
              <Image width="16" height="16" class="icon-margin" src="https://github.com/drehimself/nativescript-vue-example/blob/master/src/assets/images/icon_lock.png?raw=true" />
              <TextField class="form-input" secure="true" hint="Password" ></TextField>   
      </StackLayout>

              <Button text="Login" class="btn btn-primary" @tap="$navigateTo($router['home'])" />

      <flexboxLayout alignItems="center" justifyContent="space-between" class="auth-buttons">
          <Label horizontalAlignment="left" text="Forgot Password?" @tap="$navigateTo($router['forgotpassword'])"></Label>
          <Label horizontalAlignment="right" text="Create Account" @tap="$navigateTo($router['register'])" ></Label>
      </flexboxLayout>
    </StackLayout>
  </flexboxLayout>
  </Gradient>
  </Page>
</template>



<script >
  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>
