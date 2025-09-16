 function updateProgressBar(percentage) {
            const progressBar = document.getElementById('progress');
            progressBar.style.width = percentage + '%';
        }

          // Simular progresso
            let progress = 0;
            const interval = setInterval(() => {
            if (progress >= 100) {
                clearInterval(interval);
                const imagem = document.createElement('img');
                imagem.src = 'images/cat.jpg';
                imagem.alt = 'Foto de um gatinho se espreguiçando';
                document.body.appendChild(imagem).style.display = 'block';
                document.getElementById('progress').style.display = 'none';
                document.getElementById('Progresso').innerText = 'Imagem carregada com sucesso!';
            }
             else {
                progress += 10;
                updateProgressBar(progress);
            }
        }, 1000);
        // Função para atualizar a barra de progresso'