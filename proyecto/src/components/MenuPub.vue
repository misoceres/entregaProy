<template>
    <div>  

        <b-nav v-if="$store.state.tipo==0" card-header tabs>
            <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
            <b-nav-item to="/" exact exact-active-class="active">Inicio</b-nav-item>
            <b-nav-item to="/registro" exact exact-active-class="active">Registro</b-nav-item>
            <b-nav-item to="/convocatorias" exact exact-active-class="active">Convocatorias</b-nav-item>
            <b-nav-item to="/habilitados" exact exact-active-class="active">Habilitados</b-nav-item>
            <b-nav-item to="/about" exact exact-active-class="active">Acerca de ...</b-nav-item>
         </b-nav>    

         <b-nav v-if="$store.state.tipo==1" card-header tabs>
            <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
            <b-nav-item to="/" exact exact-active-class="active">Inicio</b-nav-item>
            <b-nav-item to="/registro" exact exact-active-class="active">Registro2</b-nav-item>
            <b-nav-item to="/convocatorias" exact exact-active-class="active">Convocatorias2</b-nav-item>
            <b-nav-item to="/habilitados" exact exact-active-class="active">Habilitados2</b-nav-item>
            <b-nav-item v-on:click="salir()">Salir</b-nav-item>
         </b-nav>    
    </div>
    

    
</template>

<script>
    export default{
        name:'MenuPub',
        methods:{
            salir(){
                localStorage.setItem('token','');
                this.axios.defaults.headers.common.authorization='';
                this.$store.commit('SetUsuario','');
                this.$store.commit('SetIdusr',0);
                this.$store.commit('Setnombre','');
                this.$store.commit('SetTipo',0);
                this.$router.push('/')
            }
        }
    }
</script>

<style>

</style>