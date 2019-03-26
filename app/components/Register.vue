<template>
   <Page>
      <ActionBar title="Register Page" />
      <flexboxLayout class="page"/>
      <StackLayout class="form">
          <Label class="header" text="Register Form"></Label>

          <StackLayout class="input-field">
              <Label text="Name" />
              <TextField class="input" hint="Name" ></TextField>
              <StackLayout class="hr-light"></StackLayout>
          </StackLayout>

          <StackLayout class="input-field">
              <Label text="Email" />
              <TextField class="input" hint="Email" ></TextField>
              <StackLayout class="hr-light"></StackLayout>
          </StackLayout>

          <StackLayout class="input-field">
              <Label text="Password" />
              <TextField class="input" secure="true" hint="Password" ></TextField>
              <StackLayout class="hr-light"></StackLayout>
          </StackLayout>

         <Button text="Sign Up" class="btn btn-primary" @tap="$navigateTo($router['app'])" />

      </StackLayout>
    </Page>
</template>


<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async register() {
            await this.$axios.post('/components/register', this.form);
            this.$auth.login({data: this.form});
            this.$router.push({name: 'index'});
        }
        
    }
}
</script>

