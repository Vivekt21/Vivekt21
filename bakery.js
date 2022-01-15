var image=new Array();
		image[0]="a.jpg";
		image[1]="b.jpg";
		image[2]="c.jpg";
		image[3]="d.jpg";
	    image[4]="e.jpg";
		var i=0;
		function changeImage()
		{
			if(i<image.length-1)i++;
		else
			i=0;
		document.getElementById("slide").src=image[i];
		setTimeout("changeImage()",3000);
	}
	// var blink = document.getElementById('blink');
	// setInterval(function(){
	// 	blink.style.opacity=(blink.style.opacity == 0,5,1,5)
	// } ,1550);
	