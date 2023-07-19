$(document).ready(function(){
    $("#category-create-form").submit(function(e){
        e.preventDefault();

        let url = $(this).attr("data-url");

        let formData = new FormData(this);

        $.ajax({
            url: url,
            method: "POST",
            contentType: false,
            processData: false,
            dataType: "json",
            data: formData
        })

    })

    $("#edit-category-form").submit(function(e){
        e.preventDefault();

        let url = $(this).attr("data-url");

        let formData = new FormData(this);

        $.ajax({
            url: url,
            method: "PATCH",
            contentType: false,
            processData: false,
            dataType: "json",
            data: formData
        })
    })
})