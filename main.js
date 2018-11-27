window.onload = function () {
    var app = new Vue({
        el: '#app',
        data:{
            auto:{
                nombre: '',
                marca: '',
                modelo: '',
                potencia: '',
                precio: ''
            },
            autos:[],
            autoEditando : '',
            editando: false
        },
        methods:{
            agregar: function () {
                datos = new FormData();
                datos.append('nombre', this.auto.nombre);
                datos.append('marca', this.auto.marca);
                datos.append('modelo', this.auto.modelo);
                datos.append('potencia', this.auto.potencia);
                datos.append('precio', this.auto.precio);
                fetch('autos.php', {
                    'method': 'POST',
                    'body': datos
                }).then((response) => {
                    return response.json()
                }).then((data) => {
                    // OK
                    alert(data.mensaje);
                    if(data.estado === 'ok'){
                        if(app.editando){
                            //
                            const index = this.autos.indexOf(this.autoEditando);
                            app.autos.splice(index)
                        }
                        else{
                            app.autos.push(this.auto);
                        }

                        app.limpiar();
                        app.editando = false

                    }


                }).catch((err) => {
                    alert(err)
                })
            },
            limpiar: function () {
                this.auto ={
                    nombre: '',
                    marca: '',
                    modelo: '',
                    potencia: '',
                    precio: ''
                }
            },
            eliminar(auto){
                this.autos.splice(this.autos.indexOf(auto),1)
            },
            editar(auto){
                this.autoEditando = auto;
                this.auto = JSON.parse((JSON.stringify(auto)));

            }
        }
            
        
    },

    )
};