<template>
<nav>
    <v-toolbar flat app dark >
        <v-card flat app dark to="/">
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Alfa</span>
            <span >Web</span>
        </v-toolbar-title>
        </v-card>
        <v-spacer></v-spacer>
            <v-btn to="/admin">Administrar</v-btn>
    </v-toolbar>
</nav>
</template>

<script>
export default {
name: 'my-navbar',
}
</script>

<style>

</style>