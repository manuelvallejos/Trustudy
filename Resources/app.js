var win = Titanium.UI.createWindow({
  backgroundColor: 'gray',
    navBarHidden: true,
	fullscreen: false
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



var viewContainer1 = Ti.UI.createScrollView({
	height: '100%',
	width: '100%',
	layout: 'vertical',
	borderColor: 'black',
	borderWidth: 1,
	borderRadius :1
});

var viewContainer2 = Ti.UI.createScrollView({
	height: '100%',
	width: '100%',
	layout: 'vertical',
	borderColor: 'black',
	borderWidth: 1,
	borderRadius :1
});

var viewContainer3 = Ti.UI.createScrollView({
	height: '100%',
	width: '100%',
	layout: 'vertical',
	borderColor: 'black',
	borderWidth: 1,
	borderRadius :1
});

var viewContainer4 = Ti.UI.createScrollView({
	height: '100%',
	width: '100%',
	layout: 'vertical',
	borderColor: 'black',
	borderWidth: 1,
	borderRadius :1
});


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


viewContainer1.add(redview1);
winView1.add(viewContainer1);

viewContainer2.add(redview2);
winView2.add(viewContainer2);

viewContainer3.add(redview3);
winView3.add(viewContainer3);

viewContainer4.add(redview4);
winView4.add(viewContainer4);


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



redview1.add(logo);
redview2.add(logo2);
redview3.add(logo3);
redview4.add(logo4);



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


win.add(winView1);

win.add(winView2);
winView2.hide();

win.add(winView3);
winView3.hide();

win.add(winView4);
winView4.hide();



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