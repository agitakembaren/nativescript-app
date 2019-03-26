<template>
   <Page>
      <ActionBar title="NativeApp" />
      <flexboxLayout class="page"/>
      <StackLayout class="form">
          <Label class="header" text="Send reset password"></Label>

          <StackLayout class="input-field">
              <TextField class="input" hint="email" ></TextField>
              <StackLayout class="hr-light"></StackLayout>
          </StackLayout>

        <Button text="Send" class="btn btn-primary" @tap="$navigateTo($router['home'])" />

        
      </StackLayout>
    </Page>
</template>

