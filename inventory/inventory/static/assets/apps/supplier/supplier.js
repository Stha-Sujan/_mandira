$(document).ready(function(){

    $("#create-supplier-form").submit(function(e){
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

    // $("#image").change(function(e){
    //     let file = $(this)[0].files[0];
    //     $("#supplier-image-display").attr('src', URL.createObjectURL(file))
    // })

    $("#edit-supplier-form").submit(function(e){
        e.preventDefault();

        let url = $(this).attr("data-url");

        let formData= new FormData(this);

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