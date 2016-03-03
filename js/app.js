$(document).ready(function(){
    var empty = true;
    showLocalStorage();
    
    function removeAllLocalStorage() {
        for (x in localStorage){
            localStorage.removeItem(x);
        }
    }
    
    function localStorageEmpty (){
        for(var x in localStorage){
            if(localStorage.getItem(x)!=null)
                return false;
        }
        return true;
    }
    
    function showLocalStorage(){
        if(!localStorageEmpty()){
            for(var x in localStorage){
                $(".notebook").find("ul").append(localStorage.getItem(x));
            }
        } 
    }
    
    document.getElementById("to-do").focus();
    
    $(document).keypress( function(e) {
       switch(e.keyCode){
           case 13: validateSearch();
               break;
       };
    });
    
    function validateSearch() {
        var id = new Date().getTime();
        var varLocated = "<li data-id = '"+id+"'style='background-color: beige; text-align: left;'>"+$("#to-do").val()+"</li>";
        localStorage.setItem(id, varLocated);
        $(".notebook").find("ul").append(varLocated);
        $("#to-do").val(""); 
    }
    
    $(".notebook").on("click", "li", function(e){
        $(this).addClass("selected");
    })
    
    $(".notebook").on("dblclick", "li", function(e){
        var content = $(this).data("id");
        for (var i in localStorage){
            if(localStorage.getItem(i).includes(content)){
                localStorage.removeItem(i);
                $(this).remove();
            }
        }
        
    })
    
    
});

