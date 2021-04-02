$(document).ready(function() {

    $('.btn-calcular').click(function(e) {
        e.preventDefault()

        var vlr01 = document.getElementById('vlr01').value
        var vlr02 = document.getElementById('vlr02').value
        var resultado = vlr02 / Math.pow(vlr01 , 2)
        



        $('#calcular').after(`
            <div class="alert alert-info alert-dismissible fade show" role="alert">
                <strong>${resultado.toFixed(2).replace('.', ',')}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>`)
    })

})