$(function(){


    $('#salvar').click(function () {
        var aluno = {
            'nome': $('#nome').val(),
            'matricula': $('#matricula').val(),
            'biografia': $('#biografia').val(),
            'curso': $('#curso').val(),
            'email': $('#email').val(),
            'telefone': $('#telefone').val(),
            'site': $('#site').val(),
        };
        var id = $('#id').val();

        if (id){
            alunos.splice(id, 1, aluno);
        }else {
            alunos.push(aluno);
        }

        localStorage.setItem('alunos', JSON.stringify(alunos));

        $('#nome').val('');
        $('#matricula').val('');
        $('#biografia').val('');
        $('#curso').val('');
        $('#email').val('');
        $('#telefone').val('');
        $('#site').val('');
        $('#id').val('');
        window.location.href = "index.html";
    });
    carregarLista();

    $('#listaAlunos').on('click', '.excluir', function () {
        var posicao = $(this).attr('posicao');
        alunos.splice(posicao, 1);
        localStorage.setItem('alunos', JSON.stringify(alunos));
        carregarLista();
    });


    $('#listaAlunos').on('click', '.alterar', function () {
        var posicao = $(this).attr('posicao');
        alunos.splice(posicao, 1);
        window.location.href = "editAdd.html?id=" + posicao;
    });


    function carregarLista() {

        alunos = localStorage.getItem('alunos');
        alunos = alunos ? JSON.parse(alunos) : [];
        // if(carros != ''){
        //     carros = JSON.parse(carros);
        // }else {
        //     carros = [];
        // }
        if(!alunos.length){
            $('#listaAlunos').html('' +
                '<div class="col-md-12">' +
                '<div class="alert alert-light border">' +
                'Não há alunos cadastrados!'+
                '</div>'+
                '</div>'
            )
        }else{

            $('#listaAlunos').html(
                '<div class="row">'+
                '</div>'
            );

            alunos.forEach(function (aluno, posicao) {
                $('#listaAlunos .row').append(
                    '<div class="col-md-6">' +
                        '<div class="card mb-4">'+
                            '<div class="card-header">'+
                                '<h3 class="font-weight-bold">'+ aluno.nome +'</h3>'+
                                '<small><i class="fas fa-fingerprint"></i>'+ aluno.matricula +'</small>'+
                            '</div>'+
                            '<div class="card-body">' +
                                '<div class="bio">' +
                                '<small class="font-weight-bold">BIOGRAFIA</small>'+
                                '<p><small>'+ aluno.biografia +'</small></p>'+
                            '</div> '+
                                '<p><i class="fas fa-user-graduate"></i><span>'+ aluno.curso +'</span></p>'+
                                '<p><i class="fas fa-phone-square-alt"></i><span>'+ aluno.telefone +'</span></p>'+
                                '<p><i class="far fa-envelope"></i><span>'+ aluno.email +'</span></p>'+
                                '<p><i class="fas fa-mouse-pointer"></i><span>'+ aluno.site +'</span></p>'+
                            '</div>'+
                            '<div class="card-footer p-0">' +
                                '<div class="btn-group btn-block" role="group"> '+
                                    '<button class="btn btn-edit font-weight-bold alterar" posicao="'+ posicao +'"><i class="fas fa-edit"></i> Editar</button>'+
                                    '<button class="btn btn-delete font-weight-bold excluir" posicao="'+ posicao +'"><i class="fas fa-trash-alt"></i> Excluir</button>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
                );
            });

        }
    }

});

