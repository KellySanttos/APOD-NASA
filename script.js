$("#botao").click(function(event){
    event.preventDefault()
    let data = $("#data").val()
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=nz6aZNgAybJp2VNjx7isIPSae2Y3Ol0JvEhCKLUa&date=${data}`,
        type: "GET",
        success: function(objeto){
            console.log(objeto)
            $("#imagem").attr("src",objeto.url)
            $("#titulo").text(objeto.title)
            $("#descricao").text(objeto.explanation)

            console.log(objeto)
            if(objeto.media_type == "image"){
                $("#video").css("display", "none")
                $("#imagem").css("display", "flex")
                $("#imagem").attr("src",objeto.url)
            }else {
                $("#imagem").css("display", "none")
                $("#video").css("display", "block")
                $("#video").attr("src",objeto.url)
            }
        }
    })
})

$(function(){
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=nz6aZNgAybJp2VNjx7isIPSae2Y3Ol0JvEhCKLUa&`,
        type: "GET",
        success: function(objeto){
            console.log(objeto)
            $("#imagem").attr("src",objeto.url)
            $("#titulo").text(objeto.title)
            $("#descricao").text(objeto.explanation)

            console.log(objeto)
            if(objeto.media_type == "image"){
                $("#video").css("display", "none")
                $("#imagem").css("display", "flex")
                $("#imagem").attr("src",objeto.url)
            }else {
                $("#imagem").css("display", "none")
                $("#video").css("display", "block")
                $("#video").attr("src",objeto.url)
            }
        }
    })
})