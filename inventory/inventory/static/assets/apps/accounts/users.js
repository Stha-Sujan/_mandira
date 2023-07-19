$(document).ready(function(){
    $("#create-user-form").submit(function(e){
        e.preventDefault();
        let url = $(this).attr('data-url');
        console.log(url)
        let formData = new FormData(this);
        $.ajax({
            url: url,
            method: "POST",
            contentType: false,
            processData: false,
            dataType: "json",
            data: formData,
            
        })

        
    })

    $("#edit-user-form").submit(function(e){
        e.preventDefault();
        let url = $(this).attr('data-url');
        console.log(url)
        let formData = new FormData(this);
        $.ajax({
          url: url,
          method: "PUT",
          contentType: false,
          processData: false,
          dataType: "json",
          data: formData  
        })
    })
})