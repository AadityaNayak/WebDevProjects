"use strict"

{
    $.ajax({
        url: " http://maps.google.com/maps?spn=0.030372,0.068665&z=6&t=h&vp=53.859462,-3.038235",
        method: "GET",
        data: {
            "output": "js"
        },
        success: (data) => {
            console.log(data);
        },
        fail: function() {}
    })
}