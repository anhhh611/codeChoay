
// Tạo 1 object tùy ý có 5 trường, có 2 trường là method, trong method phải dùng keyword this
const date = 'date of manufacture'
const myBad = {
	brand	: 'YSL',   				    
    [date]: '11/10/2022',		    	    
	size: function() { console.log('22*16*7') },    
    color: function() { console.log('do') }, 
    sayName: function() { 			  
        console.log(this.brand);  
    }, 
};

// Sửa property
myBad.brand = 'hơi mợt';
myBad.size = function() { console.log('30*26*9') };

// Thêm property mới 
myBad.leash = 'yes';      				      
myBad.rice = function() { console.log( '1000k' ) };

// Xóa property
delete myBad.sayName;		
delete myBad['date of manufacture'];	  