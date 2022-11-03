<template>
    <div class="container">
        <h1>Lista de Convocatorias Habilitadas</h1>
        <b-table striped hover :items="convocatorias"></b-table>
    </div>
</template>

<script>
    export default{
        name: 'LisConvocatorias',
        data(){
            return{
                convocatorias: [
                        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                        { age: 38, first_name: 'Jami', last_name: 'Carney' }
                        ],
            }
        },
        mounted(){
            this.axios.get('/convocatoria/listar')
             .then( r=>{
                console.log(r);
                this.convocatorias = r.data.data;
             })
        }
        
    }
</script>