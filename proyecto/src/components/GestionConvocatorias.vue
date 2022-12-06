<template>
    <div class ="container">
        <h1>Gestion de Convocatorias</h1>
        <b-button variant="primary" @click="nuevo()"><b-icon-plus-circle></b-icon-plus-circle></b-button>
        <b-modal id="modal-1" title="Convocatorias" no-close-on-esc no-close-on-backdrop>
            <b-container fluid>
                <b-form @submit="guardar()" @reset="cerrar()">
                    <b-form-group id="input-group-0" label="Numero de Convocatoria:" label-for="input-0">
                        <b-form-input id="input-0" v-model="form.numero" type="number" placeholder="Numero de Convocatoria" required>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-1" label="Semestre:" label-for="input-1">
                        <b-form-input id="input-1" v-model="form.semestre" type="text" placeholder="Ingrese el Semestre" required>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Fecha Limite:" label-for="input-2">
                        <b-form-input id="input-2" v-model="form.fechalimite" type="date" required>
                        </b-form-input>
                    </b-form-group>

                    <!-- <b-form-group id="input-group-3" label="Tipo" label-for="input-3">
                        <b-form-select id="input-3" v-model="form.tipo" :options="tipos" required>
                        </b-form-select>
                    </b-form-group>  -->
                </b-form>
            </b-container>
            <template #modal-footer="{}">
                <b-button size="sm" variant="danger" @click="cerrar()">Cancelar</b-button>
                <b-button size="sm" variant="success" @click="guardar()">Guardar</b-button>
            </template>
        </b-modal>
        
        <b-table striped hover :items="convocatoria" :fields="campos" stacked="md" show-empty small>
            <template> 
                <b-button variant="primary" size="sm"  class="mr-1 mx-1">Modificar</b-button>
                <b-button variant="danger" size="sm" class="mr-1 mx-1">Borrar</b-button>
            </template>
        </b-table>
    </div>
    
</template>

<script>
    export default{
        name: 'GesConvocatoria',
        data(){
            return{
                convocatoria:[ ],
                campos: [{key: "numero", label:"Numero"},
                         {key: "semestre", label:"Semestre"},
                         {key: "fechapublicacion", label:"Fecha de Publicacion"},
                         {key: "fechalimite", label:"Fecha Limite"},
                         {key: "actions", label:"Opciones"},
                        ],
                form:{
                    id:0,
                    numero:0,
                    semestre:'',
                    fechalimite:'',
                }
            }

        },
        methods:{
            nuevo(){
                this.$root.$emit('bv::show::modal', 'modal-1');
            },
            cerrar(){
                this.$root.$emit('bv::hide::modal', 'modal-1');
            },
            async guardar(){
                await this.axios.post('/convocatoria/agregar',this.form);
            }
        },
        mounted(){
            this.axios.get('convocatoria/listar')
            .then(r=>{
                console.log(r);
                this.convocatoria = r.data.data;
            })
        }
    }
</script>