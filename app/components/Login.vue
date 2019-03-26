<template>
   <Page>
      <ActionBar title="NativeApp" />
      <flexboxLayout class="page"/>
      <StackLayout class="form">
          <Label class="header" text="Login"></Label>

          <StackLayout class="input-field">
              <TextField class="input" hint="Username" ></TextField>
              <StackLayout class="hr-light"></StackLayout>
          </StackLayout>

          <StackLayout class="input-field">
              <TextField class="input" secure="true" hint="Password" ></TextField>
              <StackLayout class="hr-light"></StackLayout>
          </StackLayout>

        <Button text="Sign In" class="btn btn-primary" @tap="$navigateTo($router['home'])" />
        <Label class="footer" text="Forgot Password?"></Label>
        <StackLayout>
        <Label class="reset" text="Click Here" @tap="$navigateTo($router['forgotpassword'])" ></Label>
        </StackLayout>
      </StackLayout>
    </Page>
</template>