$(document).ready(function(){
    
    $("#login-form").submit(function(e){
        e.preventDefault()
        let url = $(this).attr("action");
        let data = $(this).serialize();
        $.ajax({
            url: url,
            method: "POST",
            dataType: "json",
            data: data,
            success: function(e){
                $.ajax({
                    url: url,
                    method: "GET",
                    dataType: "json"
                })
                location.reload()
            },
            error: function (jqXHR, textStatus, errorThrown){
                let html = `<div class="alert alert-danger" id="auth-error" role="alert">${jqXHR.responseJSON.error.details.detail}</div>`
                
                $("#error").append(html)
            }
        })
    })

})