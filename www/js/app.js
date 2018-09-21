/*****************************
Autor:Jesus Omar Rodriguez Hernandez
Fecha Modificacion: 07/07/2018
Archivo JS
******************************/
var $$ = Dom7;

var app7 = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'Sistema de Infracciones',
  // App id
  id: 'com.apizaco.app',
  // Enable swipe panel
  /*panel: {
    swipe: 'left',
  },*/
  // Add default routes
  routes: routes
  // ... other parameters
});


var mainView = app7.views.create('.view-main'); 


var app = {


    autenticado: false,
    usuario:"",
    password:"",
    hostname:"http://www.apiza.co",
    name:"",
    nombre:"",
    subject:"",
    message:"",
    mail:"",
    numero:"",
    calle:"",
    comentario:"",
    nombre2:"",
    numero2:"",
    calle2:"",
    comentario2:"",
    dias:"",


    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');


 console.log("VARIABLE AUTENTICADO:"+window.localStorage.getItem("autenticado"));


         if(window.localStorage.getItem("autenticado")=="true"){

                mainView.router.navigate('/home/',{animate:false});
         }
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       /* var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);*/
    },
    loginAccess:function(){


      this.usuario = $$('#usuario').val();
      this.password = $$('#password').val();


      if(this.usuario == "" || this.password == ""){
         
         app7.dialog.alert('Debes de ingresar usuario y/o contraseña');
           
      }else{

        app7.preloader.show();
        

        app7.request({
           url: this. hostname +'/mplay/api/login.php',
           data:{username:this.usuario,password:this.password},
           method:'POST',
           crossDomain: true,
           success:function(data){
            
            app7.preloader.hide();

            var objson = JSON.parse(data);
            if(objson.data =="Autenticado"){

            
            window.localStorage.setItem("autenticado", "true");
            this.autenticado = window.localStorage.getItem("autenticado");
            
            mainView.router.navigate('/home/',{animate:true});
            }else{
          mainView.router.navigate('/home/',{animate:true});
            }
            
           
           },
           error:function(error){

            app7.preloader.hide();
            app7.dialog.alert("Hubo un error por favor intenta nuevamente");
            console.log(data);
           }
           
        });
             
          

      }

    },
    
    RegisterAccess:function(){

      mainView.router.navigate('/register/',{animate:true});
    
    },
    RegisterAccess:function(){

      mainView.router.navigate('/register/',{animate:true});
    
    },
    Detencion:function(){

      mainView.router.navigate('/detencion/',{animate:true});
    
    },
    Detencion1:function(){

      mainView.router.navigate('/detencion1/',{animate:true});
    
    },
    Detencion2:function(){

      mainView.router.navigate('/detencion2/',{animate:true});
    
    },
   Placa:function(){

      mainView.router.navigate('/placa/',{animate:true});
    
    },
    Placa1:function(){

      mainView.router.navigate('/placa1/',{animate:true});
    
    },
    Placa2:function(){

      mainView.router.navigate('/placa2/',{animate:true});
    
    },
    Licencia:function(){

      mainView.router.navigate('/licencia/',{animate:true});
    
    },
    Licencia1:function(){

      mainView.router.navigate('/licencia1/',{animate:true});
    
    },
    Licencia2:function(){

      mainView.router.navigate('/licencia2/',{animate:true});
    
    },
    Tarjeta:function(){

      mainView.router.navigate('/tarjeta/',{animate:true});
    
    },
    Tarjeta1:function(){

      mainView.router.navigate('/tarjeta1/',{animate:true});
    
    },
    Tarjeta2:function(){

      mainView.router.navigate('/tarjeta2/',{animate:true});
    
    },
    Adios:function(){

      mainView.router.navigate('/home/',{animate:true});
      app7.dialog.alert("Envio Exitoso");
    
    },

    RegisterUser:function(){
      
      this.name = $$('#frm_name').val();
      this.usuario = $$('#frm_username').val();
      this.password = $$('#frm_password').val();

      app7.request({
           url: 'http://localhost/mplay/api/users.php',
           data:{name:this.name,username:this.usuario,password:this.password},
           method:'POST',
           crossDomain: true,
           success:function(data){
            
            app7.preloader.hide();

            var objson = JSON.parse(data);
           
            
           
           },
           error:function(error){

            app7.preloader.hide();
            app7.dialog.alert("Hubo un error por favor intenta nuevamente");
            console.log(data);
           }
           
        });

    

    },

    loginClose:function(){
     

        app7.panel.close();
        app7.dialog.confirm('¿Seguro, deseas salir de la aplicación?', function () {
            
        window.localStorage.setItem("autenticado", "false");
        mainView.router.navigate('/login/',{animate:true});
    
      });

    }
};



function showMenu(){

   app7.panel.open('left', true);

}


$$(document).on('page:init', '.page[data-name="home"]', function (e) {
      console.log('View Home load Init!');
      app7.panel.allowOpen = true;
      app7.panel.enableSwipe('left');
});