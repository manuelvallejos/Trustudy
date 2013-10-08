var win = Titanium.UI.createWindow({
  backgroundColor: 'gray',
    navBarHidden: true,
	fullscreen: false,
	exitOnClose: true
});

//-------Views to hold content-------

var winView1 = Ti.UI.createView({
	top: 0,
	height: '90%',
	backgroundColor: 'white',
});

var winView2 = Ti.UI.createView({
	top: 0,
	height: '90%',
	backgroundColor: 'white'
});

var winView3 = Ti.UI.createView({
	top: 0,
	height: '90%',
	backgroundColor: 'white'
});

var winView4 = Ti.UI.createView({
	top: 0,
	height: '90%',
	backgroundColor: 'white'
});

	var grid = require('gridlines');
	grid.drawgrid(20,winView1);
	grid.drawgrid(20,winView2);
	grid.drawgrid(20,winView3);
	grid.drawgrid(20,winView4);

//view Containers with Scroll View

var viewContainer1 = Ti.UI.createView({
	height: '100%',
	width: '100%',
	top:60,
	layout: 'vertical',
	borderColor: 'black',
	borderWidth: 1,
	borderRadius :1,
});

var viewContainer2 = Ti.UI.createView({
	height: '100%',
	width: '100%',
	top:60,
	layout: 'vertical',
	borderColor: 'black',
	borderWidth: 1,
	borderRadius :1
});

var viewContainer3 = Ti.UI.createView({
	height: '100%',
	width: '100%',
	top:60,	
	layout: 'vertical',
	borderColor: 'black',
	borderWidth: 1,
	borderRadius :1
});

var viewContainer4 = Ti.UI.createView({
	height: '100%',
	width: '100%',
	top:60,	
	layout: 'vertical',
	borderColor: 'black',
	borderWidth: 1,
	borderRadius :1
});


// nav bars

var redview1 = Ti.UI.createView({
    top:0,
	left:0,
    width:Ti.UI.FILL,
    height:60,
	backgroundColor : '#953735'
});

var redview2 = Ti.UI.createView({
    top:0,
	left:0,
    width:Ti.UI.FILL,
    height:60,
	backgroundColor : '#953735'
});

var redview3 = Ti.UI.createView({
    top:0,
	left:0,
    width:Ti.UI.FILL,
    height:60,
	backgroundColor : '#953735'
});

var redview4 = Ti.UI.createView({
    top:0,
	left:0,
    width:Ti.UI.FILL,
    height:60,
	backgroundColor : '#953735'
});


//adding Nav bars to View Containers

winView1.add(redview1);
winView1.add(viewContainer1);

winView2.add(redview2);
winView2.add(viewContainer2);

winView3.add(redview3);
winView3.add(viewContainer3);

winView4.add(redview4);
winView4.add(viewContainer4);

//hola

var hola = Ti.UI.createView({
    width:Ti.UI.FILL,
    height:60,
	backgroundColor : 'white',
	touchEnabled: false
});

var hola_usuario = Ti.UI.createLabel({
	text : 'Hola Manuel!',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 25
	},
	color : '#4A6F78'

});

hola.add(hola_usuario);
viewContainer1.add(hola);


var viewTuAmigos = Ti.UI.createView({
    width:Ti.UI.FILL,
	backgroundColor : '#4A6F78',
	layout: 'horizontal',
	height: 65	
});

var labelTu = Ti.UI.createLabel({
	text : 'Tú',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 26,
		fontWeight: 'bold'
	},
	color : 'white',
	width: '49%',
	borderColor: 'gray',
	bottom: 9
});

var viewContainerTu = Ti.UI.createView({
	height: '100%',
	width: '100%',
	layout: 'vertical'
});

//llenar Tu
var tbl_data = []; 

for (var i = 0; i < 7; i++){
	 var row = Ti.UI.createTableViewRow({
		backgroundColor: 'white',
		layout: 'horizontal',
		left: 10
	 }); 
	 var viewImage = Ti.UI.createView({
	 	width: '50px'
	 });
	 var viewLabel = Ti.UI.createView({
		left: 5,
		width: '87%' 		
	 });		  
	 var label = Ti.UI.createLabel({ 
	 	text: 'Esta es tu notificación de prueba número ' + (i+1),
 		font : {
			fontSize : 25,
		}
	}); 
	var image = Ti.UI.createImageView({ 
		image: '/icons/6_social_person.png',
	}); 
	
	viewImage.add(image);
	viewLabel.add(label);

	row.add(viewImage); 
	row.add(viewLabel); 
	tbl_data.push(row); 
} 

var table1 = Titanium.UI.createTableView({ 
	data: tbl_data,
	top: 15,
	height: '85%',
	width: '95%'
});

viewContainerTu.add(table1);

var viewSeparator = Ti.UI.createView({
    width: '0.5%',
	backgroundColor : 'white'
});

var labelAmigos = Ti.UI.createLabel({
	text : 'Amigos',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 26,
		fontWeight: 'bold'
	},
	color : 'white',
	width: '49%',
	borderColor: 'gray',
	bottom: 9
});

var viewContainerAmigos = Ti.UI.createView({
	height: '100%',
	width: '100%',
	layout: 'vertical'
});

//llenar Amigos
var tbl_data2 = []; 

for (var i = 0; i < 6; i++){
	 var row = Ti.UI.createTableViewRow({
		backgroundColor: 'white',
		layout: 'horizontal',
		left: 10
	 }); 
	 var viewImage = Ti.UI.createView({
	 	width: '50px'
	 });
	 var viewLabel = Ti.UI.createView({
		left: 5,
		width: '87%' 		
	 		
	 });		  
	 var label = Ti.UI.createLabel({ 
	 	text: 'Esta es la actividad de tus amigos número ' + (i+1),
 		font : {
			fontSize : 25,
		}
	}); 
	var image = Ti.UI.createImageView({ 
		image: '/icons/6_social_person.png',
	}); 
	
	viewImage.add(image);
	viewLabel.add(label);

	row.add(viewImage); 
	row.add(viewLabel); 
	tbl_data2.push(row); 
} 

var table2 = Titanium.UI.createTableView({ 
	data: tbl_data2,
	top: 15,
	height: '85%',
	width: '95%'
});

viewContainerAmigos.add(table2);


var viewContainerScrollable = Ti.UI.createScrollableView({
	views: [viewContainerTu, viewContainerAmigos],
});


//cambio
labelAmigos.addEventListener('click',function(e){
	viewContainerScrollable.setCurrentPage(1);
});

labelTu.addEventListener('click',function(e){
	viewContainerScrollable.setCurrentPage(0);
});


//menu
viewTuAmigos.add(labelTu);
viewTuAmigos.add(viewSeparator);
viewTuAmigos.add(labelAmigos);

viewContainer1.add(viewTuAmigos);
viewContainer1.add(viewContainerScrollable);

// view Container 2

//Apuntes
	
var apuntes = Ti.UI.createView({
    width:Ti.UI.FILL,
    height:60,
	backgroundColor : 'white'
});

var labelApuntes = Ti.UI.createLabel({
	text : 'Apuntes',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 30
	},
	color : '#4A6F78'
});

var viewContainerApuntes = Ti.UI.createView({
	height: '100%',
	width: '100%',
	layout: 'vertical'
});

//llenar Apuntes
var tbl_data3 = []; 

//borrador
 var rw = Ti.UI.createTableViewRow({
	backgroundColor: 'white',
	layout: 'horizontal',
	left: 10,
 }); 
 var viwImage = Ti.UI.createView({
 	width: '50px'
 });
 var viwLabel = Ti.UI.createView({
	left: 0,
	width: '87%' 		
 });		  
 var lbel = Ti.UI.createLabel({ 
 	text: 'Borrador',
	font : {
		fontSize : 30,
		fontStyle: 'bold'
	}
}); 
var imge = Ti.UI.createImageView({ 
	image: '/icons/5-content-paste.png',
}); 

viwImage.add(imge);
viwLabel.add(lbel);

rw.add(viwImage); 
rw.add(viwLabel); 
tbl_data3.push(rw); 


for (var i = 0; i < 5; i++){
	 var row = Ti.UI.createTableViewRow({
		backgroundColor: 'white',
		layout: 'horizontal',
		left: 10
	 }); 
	 var viewImage = Ti.UI.createView({
	 	width: '50px'
	 });
	 var viewLabel = Ti.UI.createView({
		left: 0,
		width: '87%' 		
	 });		  
	 var label = Ti.UI.createLabel({ 
	 	text: 'MA200' + (i+1),
 		font : {
			fontSize : 30,
			fontStyle: 'bold'
		}
	}); 
	var image = Ti.UI.createImageView({ 
		image: '/icons/4_collections_view_as_list.png',
	}); 
	
	viewImage.add(image);
	viewLabel.add(label);

	row.add(viewImage); 
	row.add(viewLabel); 
	tbl_data3.push(row); 
} 

var table3 = Titanium.UI.createTableView({ 
	data: tbl_data3,
	top: 15,
	height: '60%',
	width: '95%'
});

var buttonAdjuntarApunte = Ti.UI.createButton({
    title: 'Subir Apunte',
    width: '50%',
    top: 15
});

viewContainerApuntes.add(table3);
viewContainerApuntes.add(buttonAdjuntarApunte);

apuntes.add(labelApuntes);
viewContainer2.add(apuntes);
viewContainer2.add(viewContainerApuntes);

// view Container 3

//Respuestas

var respuestas = Ti.UI.createView({
    width:Ti.UI.FILL,
    height:60,
	backgroundColor : 'white'
});

var labelRespuestas = Ti.UI.createLabel({
	text : 'Responde',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 30
	},
	color : '#4A6F78'
});

var viewPregunta1 = Ti.UI.createView({
	width: '96%',
	height: '20%',
	layout: 'vertical',
	top: '30',
	backgroundColor: 'white'
});

var labelPregunta1 = Ti.UI.createLabel({
	text : '¿En qué casos se usa el Test de Chow y cómo se aplica?',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 30
	}
});

var labelRamo1 = Ti.UI.createLabel({
	text : 'IN4402',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 25
	},
	color : '#4A6F78'
});


viewPregunta1.add(labelRamo1);
viewPregunta1.add(labelPregunta1);

var barraBotones = Ti.UI.createView({
	layout: 'horizontal',
	width: '256px',
	height: '64px',
	backgroundColor: 'white'	
});

var imageBuenaPregunta = Ti.UI.createImageView({
	image: '/icons/1_navigation_collapse.png'
});

var imageMalaPregunta = Ti.UI.createImageView({
	image: '/icons/1_navigation_expand.png'
});

var imageAdjuntarRespuesta = Ti.UI.createImageView({
	image: '/icons/5-content-new-attachment.png'
});

var imageResponder = Ti.UI.createImageView({
	image: '/icons/5-content-new.png'
});

barraBotones.add(imageBuenaPregunta);
barraBotones.add(imageMalaPregunta);
barraBotones.add(imageAdjuntarRespuesta);
barraBotones.add(imageResponder);

respuestas.add(labelRespuestas);
viewContainer3.add(respuestas);
viewContainer3.add(viewPregunta1);
viewContainer3.add(barraBotones);


//view Container 4

var pickerRamo = Ti.UI.createPicker({
	top: 20,
	width: '94%'
});

var data = [];
data[0]=Ti.UI.createPickerRow({title:'Selecciona el curso'});
data[1]=Ti.UI.createPickerRow({title:'CC5602'});
data[2]=Ti.UI.createPickerRow({title:'IN5625'});
data[3]=Ti.UI.createPickerRow({title:'MA1002'});

pickerRamo.add(data);	
	
var textAreaQuestion = Ti.UI.createTextArea({
  color:"#000",
  borderColor : 'none',
  height: 180,
  width: '93%',
  hintText: 'Escribe tu pregunta'
});

win.addEventListener('load', function(){
  textAreaQuestion.blur();
});

var buttonAdjuntar = Ti.UI.createButton({
    title: 'Adjuntar',
    width: '50%'
});

var buttonEnviar = Ti.UI.createButton({
    title: 'Enviar',
    width: '50%'    
});

var viewButtons = Ti.UI.createView({
	layout: 'horizontal',
	width: '93%'
});

viewButtons.add(buttonAdjuntar);
viewButtons.add(buttonEnviar);

//Preguntas

var preguntas = Ti.UI.createView({
    width:Ti.UI.FILL,
    height:60,
	backgroundColor : 'white'
});

var labelPreguntas = Ti.UI.createLabel({
	text : 'Pregunta',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 30
	},
	color : '#4A6F78'
});

preguntas.add(labelPreguntas);
viewContainer4.add(preguntas);

	
viewContainer4.add(pickerRamo);
viewContainer4.add(textAreaQuestion);
viewContainer4.add(viewButtons);

//Tab container holds the custom tabgroup

var tabContainer = Ti.UI.createView({
	bottom:0,
	height: '80px',
	width: Ti.UI.FILL,
	layout: 'horizontal'
});

//----The custom tabs-----
//they can also be defined with a background image
//property which will give them a more professional style, look and feel

var tab1 = Ti.UI.createView({
	left : 0,
	backgroundColor : '#953735',
	borderWidth: 2,
	borderColor: "#cccccc",
	borderRadius :1,
	height : Ti.UI.FILL,
	width : '25%',
	layout: 'vertical'
});


var tab2 = Ti.UI.createView({
	left : 0,
	backgroundColor : '#953735',
	borderWidth: 2,	
	borderColor: "#cccccc",
	borderRadius :1,
	height : Ti.UI.FILL,
	width : '25%',
	layout: 'vertical'
});

var tab3 = Ti.UI.createView({
	left : 0,
	backgroundColor : '#953735',
	borderWidth: 2,
	borderColor: "#cccccc",
	borderRadius :1,
	height : Ti.UI.FILL,
	width : '25%',
	layout: 'vertical'	
});

var tab4 = Ti.UI.createView({
	left : 0,
	backgroundColor : '#953735',
	borderWidth: 2,
	borderColor: "#cccccc",
	borderRadius :1,
	height : Ti.UI.FILL,
	width : '25%',
	layout: 'vertical'	
});

var image1 = Ti.UI.createImageView({
	image: '/icons/2_action_about.png',
	zindex: 1
});

var image2 = Ti.UI.createImageView({
	image: '/icons/9_av_upload.png',
	zindex: 1
});

var image3 = Ti.UI.createImageView({
	image: '/icons/6_social_group.png',
	zindex: 1
});

var image4 = Ti.UI.createImageView({
	image: '/icons/2_action_help.png',
	zindex: 1
});

var logo = Ti.UI.createImageView({
	image: '/icons/logo.png',
	zindex: 1,
	top: 4,
	left: 4
});

var logo2 = Ti.UI.createImageView({
	image: '/icons/logo.png',
	zindex: 1,
	top: 4,
	left: 4
});

var logo3 = Ti.UI.createImageView({
	image: '/icons/logo.png',
	zindex: 1,
	top: 4,
	left: 4
});

var logo4 = Ti.UI.createImageView({
	image: '/icons/logo.png',
	zindex: 1,
	top: 4,
	left: 4
});


// adding logo to navBar

redview1.add(logo);
redview2.add(logo2);
redview3.add(logo3);
redview4.add(logo4);

// filling Containers

var viewSelectedTab1 = Ti.UI.createView({
	top:0,
	height: '20',
	width: Ti.UI.FILL
});

var viewSelectedTab2 = Ti.UI.createView({
	top:0,
	height: '20',
	width: Ti.UI.FILL
});

var viewSelectedTab3 = Ti.UI.createView({
	top:0,
	height: '20',
	width: Ti.UI.FILL
});

var viewSelectedTab4 = Ti.UI.createView({
	top:0,
	height: '20',
	width: Ti.UI.FILL
});



tab4.add(viewSelectedTab4);
tab4.add(image4);

tab3.add(viewSelectedTab3);
tab3.add(image3);

tab2.add(viewSelectedTab2);
tab2.add(image2);

tab1.add(viewSelectedTab1);
tab1.add(image1);


win.add(tabContainer);

tabContainer.add(tab1);
tabContainer.add(tab2);
tabContainer.add(tab3);
tabContainer.add(tab4);

win.add(winView4);
winView4.hide();

win.add(winView3);
winView3.hide();

win.add(winView2);
winView2.hide();

win.add(winView1);
viewSelectedTab1.setBackgroundColor('#4A6F78');	
	

//----------------Tab Event Listeners------------

tab1.addEventListener('click', function(e){
	winView2.hide();
	winView3.hide();
	winView4.hide();
	winView1.show();
	viewSelectedTab1.setBackgroundColor('#4A6F78');	
	viewSelectedTab2.setBackgroundColor('transparent');
	viewSelectedTab3.setBackgroundColor('transparent');
	viewSelectedTab4.setBackgroundColor('transparent');
		
});

tab2.addEventListener('click', function(e){
	winView1.hide();
	winView3.hide();
	winView4.hide();
	winView2.show();
	viewSelectedTab2.setBackgroundColor('#4A6F78');
	viewSelectedTab1.setBackgroundColor('transparent');
	viewSelectedTab3.setBackgroundColor('transparent');
	viewSelectedTab4.setBackgroundColor('transparent');

});

tab3.addEventListener('click', function(e){
	winView1.hide();
	winView2.hide();
	winView4.hide();
	winView3.show();
	viewSelectedTab3.setBackgroundColor('#4A6F78');
	viewSelectedTab1.setBackgroundColor('transparent');
	viewSelectedTab2.setBackgroundColor('transparent');
	viewSelectedTab4.setBackgroundColor('transparent');
});

tab4.addEventListener('click', function(e){
	winView1.hide();
	winView2.hide();
	winView3.hide();
	winView4.show();
	viewSelectedTab4.setBackgroundColor('#4A6F78');
	viewSelectedTab1.setBackgroundColor('transparent');
	viewSelectedTab2.setBackgroundColor('transparent');
	viewSelectedTab3.setBackgroundColor('transparent');
});


win.open();