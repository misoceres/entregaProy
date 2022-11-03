<template>
    <div class="container">
        <h1>Registro Postulante</h1>
        <b-form>
            <b-form-group id="input-group-1" label="Nombre del Postulante:" label-for="input-1" >
                <b-form-input
                    id="input-1"
                    v-model="form.nombre"
                    type="text"
                    placeholder="Ingrese Ap.Paterno Ap.Materno Nombres"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="C.I:" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.ci"
                    type="text"
                    placeholder="Ingrese el Carnet de Identidad"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Carrera:" label-for="input-3">
                <b-form-select
                    id="input-3"
                    v-model="form.carrera"
                    :options="carreras"
                    required
                ></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4" label="Materia:" label-for="input-4">
                <b-form-select
                    id="input-4"
                    v-model="form.materia"
                    :options="materias"
                    required
                ></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-5" label="Telefono Celular:" label-for="input-5">
                <b-form-input
                    id="input-5"
                    v-model="form.tel"
                    placeholder="Ingrese numero de celular"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6" label="Foto:" label-for="input-6">
                <b-form-file
                    id="input-6"
                    accept="image/*"
                    v-model="form.file"
                    :state="Boolean(form.file)"
                    @change="onFileChange"
                    placeholder="Elija un Archivo o Arrastre aqui"
                    drop-placeholder="Arrastrar el archivo aqui..."
                    data-browse-on-zone-click ="true"
                    required
                ></b-form-file>
            </b-form-group>

            <div class="container m-5">
                <b-button type="button" v-on:click="onSubmit()" variant="primary">Registrar</b-button>
                <b-button type="reset" v-on:click="onReset()" variant="danger">Limpiar Datos</b-button>
            </div>

        </b-form>
    </div>
</template>

<script>


    export default{
        name: 'RegistroPost',
        data(){
            return {
                form:{
                    nombre:"",
                    ci:"",
                    carrera:"",
                    materia:"",
                    tel:"",
                    file:null,
                },
                file: null,
                carreras:[{text:"Seleccione su Carrera",value:null},"SIS","ELT","PRQ","CIV","INF","ETN","ELM","GLG","MIN","MET"],
                materias:[{text:"Materia a la que Postula",value:null},"MAT1100","MAT1101","MAT1102","MAT1103","MAT1104",
                            "MAT1105","MAT1206","MAT1135","MAT1136","MAT1207"],
            }
        },
        methods:{
            onFileChange(e){
                const selectedFile = e.target.files[0];
                this.file = selectedFile;
            },
            onSubmit(){
                const datosform = new FormData();
                datosform.append("nombre",this.form.nombre);
                datosform.append("ci",this.form.ci);
                datosform.append("carrera",this.form.carrera);
                datosform.append("materia",this.form.materia);
                datosform.append("tel",this.form.tel);
                datosform.append("file",this.file);
                let config = {headers: {'Content-Type':'multipart/form-data'} };
                this.axios.post('/postulante/agregar', datosform, config)
                 .then(r => {
                    console.log(r);
                    this.$router.push('/registrocompleto')
                 });
            },
            onReset(){
                this.form.nombre = "";
                this.form.ci = "";
                this.fomr.carrera = "";
                this.form.materia = "";
                this.form.tel = "";
            },
        }
    }
</script>