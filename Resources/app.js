var win = Titanium.UI.createWindow({
  backgroundColor: 'gray',
    navBarHidden: true,
	fullscreen: false
});



//-------Views to hold content-------

var winView1 = Ti.UI.createScrollView({
	top: 0,
	height: '90%',
	backgroundColor: 'white',
});

var winView2 = Ti.UI.createScrollView({
	top: 0,
	height: '90%',
	backgroundColor: 'white'
});

var winView3 = Ti.UI.createScrollView({
	top: 0,
	height: '90%',
	backgroundColor: 'white'
});

var winView4 = Ti.UI.createScrollView({
	top: 0,
	height: '90%',
	backgroundColor: 'white'
});

	var grid = require('gridlines');
	grid.drawgrid(20,winView1);
	grid.drawgrid(20,winView2);
	grid.drawgrid(20,winView3);
	grid.drawgrid(20,winView4);



var viewContainer1 = Ti.UI.createView({
	height: '90%',
	width: '100%',
	layout: 'vertical',
	backgroundColor: 'white',
	opacity: 0.6,
	borderColor: 'black',
	borderWidth: 2,
	borderColor: "#black",
	borderRadius :1
});

winView1.add(viewContainer1);


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
	width : '25%'
});


var tab2 = Ti.UI.createView({
	left : 0,
	backgroundColor : '#953735',
	borderWidth: 2,	
	borderColor: "#cccccc",
	borderRadius :1,
	height : Ti.UI.FILL,
	width : '25%'
});

var tab3 = Ti.UI.createView({
	left : 0,
	backgroundColor : '#953735',
	borderWidth: 2,
	borderColor: "#cccccc",
	borderRadius :1,
	height : Ti.UI.FILL,
	width : '25%'
});

var tab4 = Ti.UI.createView({
	left : 0,
	backgroundColor : '#953735',
	borderWidth: 2,
	borderColor: "#cccccc",
	borderRadius :1,
	height : Ti.UI.FILL,
	width : '25%'
});

//Labels describing each custom tab view

var label1 = Ti.UI.createLabel({
	text : 'Home',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 24
	},
	color : 'white'

});


var label2 = Ti.UI.createLabel({
	text : 'Notes',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 24
	},
	color : 'white'

});

var label3 = Ti.UI.createLabel({
	text : 'Answers',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 24
	},
	color : 'white'

});

var label4 = Ti.UI.createLabel({
	text : 'Ask',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 24
	},
	color : 'white'

});

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