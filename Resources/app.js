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

var viewContainer1 = Ti.UI.createScrollView({
	height: '100%',
	width: '100%',
	top:60,
	layout: 'vertical',
	borderColor: 'black',
	borderWidth: 1,
	borderRadius :1,
});

var viewContainer2 = Ti.UI.createScrollView({
	height: '100%',
	width: '100%',
	top:60,
	layout: 'vertical',
	borderColor: 'black',
	borderWidth: 1,
	borderRadius :1
});

var viewContainer3 = Ti.UI.createScrollView({
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
});

var hola_usuario = Ti.UI.createLabel({
	text : 'Hola Manuel',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 20
	},
	color : '#4A6F78'

});

hola.add(hola_usuario);
viewContainer1.add(hola);


//tableview viewContainer 1

var sectionNotificaciones = Ti.UI.createTableViewSection({
	 headerTitle: 'Tú'
});

sectionNotificaciones.add(Ti.UI.createTableViewRow({
	title: 'Boris ha hecho una pregunta en el curso CC5602',
	backgroundColor: 'white',
	font : {
		fontSize : 18
	}
}));
sectionNotificaciones.add(Ti.UI.createTableViewRow({
	title: 'Valentina agradeció tu respuesta en el curso IN5625',
	backgroundColor: 'white',
	font : {
		fontSize : 18
	}	 
}));

var sectionCalendario = Ti.UI.createTableViewSection({ 
	headerTitle: 'Tus ramos'
});
sectionCalendario.add(Ti.UI.createTableViewRow({ 
	title: 'Claudia dijo que la prueba de IN5625 es el próximo martes',
	backgroundColor: 'white',
	font : {
		fontSize : 18
	}	
}));
sectionCalendario.add(Ti.UI.createTableViewRow({ 
	title: 'Guillermo dijo que la tarea de CC5602 tiene 3 días más de plazo',
	backgroundColor: 'white',
	font : {
		fontSize : 18
	},	
	
}));

var table1 = Ti.UI.createTableView({
  data: [sectionNotificaciones, sectionCalendario],
  height: '300'
});

viewContainer1.add(table1);


//tableview viewContainer 3

var sectionTusRamos = Ti.UI.createTableViewSection({
	 headerTitle: 'Tus Ramos'
});

sectionTusRamos.add(Ti.UI.createTableViewRow({
	title: 'Boris ha hecho una pregunta en el curso CC5602',
	backgroundColor: 'white',
	font : {
		fontSize : 18
	}
}));
sectionTusRamos.add(Ti.UI.createTableViewRow({
	title: 'Valentina agradeció tu respuesta en el curso IN5625',
	backgroundColor: 'white',
	font : {
		fontSize : 18
	}	 
}));

var sectionOtrosRamos = Ti.UI.createTableViewSection({ 
	headerTitle: 'Otros ramos'
});
sectionOtrosRamos.add(Ti.UI.createTableViewRow({ 
	title: 'Claudia dijo que la prueba de IN5625 es el próximo martes',
	backgroundColor: 'white',
	font : {
		fontSize : 18
	}	
}));
sectionOtrosRamos.add(Ti.UI.createTableViewRow({ 
	title: 'Guillermo dijo que la tarea de CC5602 tiene 3 días más de plazo',
	backgroundColor: 'white',
	font : {
		fontSize : 18
	},	
	
}));

var table2 = Ti.UI.createTableView({
  data: [sectionTusRamos, sectionOtrosRamos],
  height: '300'
});

viewContainer3.add(table2);

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
	
var textFieldQuestion = Ti.UI.createTextArea({
  color:"#000",
  borderColor : 'none',
  width: '92%',
  height: 210,
  top: 10,
  hintText: 'Escribe tu pregunta'
});

win.addEventListener('load', function(){
  textFieldQuestion.blur();
});

var buttonAdjuntar = Ti.UI.createButton({
	top: 10,
	width: '94%',
	title: 'Adjuntar apunte (opcional)',
});

var buttonEnviar = Ti.UI.createButton({
	top: 10,
	width: '94%',
	title: 'Enviar Pregunta'
});


viewContainer4.add(pickerRamo);
viewContainer4.add(textFieldQuestion);
viewContainer4.add(buttonAdjuntar);
viewContainer4.add(buttonEnviar);


//Tab container holds the custom tabgroup

var tabContainer = Ti.UI.createView({
	bottom:0,
	height: '10%',
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

//Labels describing each custom tab view

var label1 = Ti.UI.createLabel({
	text : 'Inicio',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 18
	},
	color : 'white'

});


var label2 = Ti.UI.createLabel({
	text : 'Apuntes',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 18
	},
	color : 'white'

});

var label3 = Ti.UI.createLabel({
	text : 'Responde',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 18
	},
	color : 'white'

});

var label4 = Ti.UI.createLabel({
	text : 'Pregunta',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 18
	},
	color : 'white'

});

var image1 = Ti.UI.createImageView({
	image: '/icons/2_action_about.png',
	zindex: 1,
	top: 10
});

var image2 = Ti.UI.createImageView({
	image: '/icons/9_av_upload.png',
	zindex: 1,
	top: 10
});

var image3 = Ti.UI.createImageView({
	image: '/icons/6_social_add_group.png',
	zindex: 1,
	top: 10
});

var image4 = Ti.UI.createImageView({
	image: '/icons/2-action-help.png',
	zindex: 1,
	top: 10
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



tab1.add(image1);
tab2.add(image2);
tab3.add(image3);
tab4.add(image4);

//adding the labels to tabs and the tabs to the container
tab1.add(label1);
tab2.add(label2);
tab3.add(label3);
tab4.add(label4);

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


//----------------Tab Event Listeners------------

tab1.addEventListener('click', function(e){
	winView2.hide();
	winView3.hide();
	winView4.hide();
	winView1.show();
});

tab2.addEventListener('click', function(e){
	winView1.hide();
	winView3.hide();
	winView4.hide();
	winView2.show();
});

tab3.addEventListener('click', function(e){
	winView1.hide();
	winView2.hide();
	winView4.hide();
	winView3.show();
});

tab4.addEventListener('click', function(e){
	winView1.hide();
	winView2.hide();
	winView3.hide();
	winView4.show();
});



win.open();