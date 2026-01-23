<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Carteirinha Estudantil</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      text-align: center;
      padding: 20px;
      background: #f0f2f5;
      min-height: 100vh;
    }
    
    .container {
      max-width: 850px;
      margin: 0 auto;
    }
    
    header {
      background: linear-gradient(135deg, #1a237e, #283593);
      color: white;
      padding: 25px;
      border-radius: 15px 15px 0 0;
      margin-bottom: 20px;
    }
    
    h1 {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    
    .subtitle {
      font-size: 1.1rem;
      opacity: 0.9;
    }
    
    .card {
      background: white;
      border-radius: 15px;
      padding: 30px;
      margin-bottom: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    }
    
    .input-section {
      background: #f8f9fa;
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 20px;
    }
    
    input {
      width: 100%;
      max-width: 400px;
      padding: 15px 20px;
      font-size: 18px;
      border: 2px solid #ddd;
      border-radius: 8px;
      margin: 10px 0;
      text-align: center;
      font-family: 'Courier New', monospace;
    }
    
    .buttons {
      display: flex;
      gap: 10px;
      justify-content: center;
      flex-wrap: wrap;
      margin: 20px 0;
    }
    
    button {
      padding: 12px 25px;
      font-size: 16px;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s;
      min-width: 140px;
    }
    
    .btn-primary {
      background: #1a237e;
      color: white;
    }
    
    .btn-success {
      background: #2e7d32;
      color: white;
    }
    
    .btn-download {
      background: #ff9800;
      color: white;
      display: none;
    }
    
    button:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }
    
    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }
    
    .status-box {
      background: #e3f2fd;
      border-left: 4px solid #1a237e;
      padding: 15px;
      margin: 15px 0;
      border-radius: 8px;
      text-align: left;
      font-size: 14px;
      display: none;
    }
    
    .status-box.visible {
      display: block;
    }
    
    .status-box.dupla-matricula {
      background: #fff3e0;
      border-left: 4px solid #ff9800;
    }
    
    .canvas-container {
      position: relative;
      margin: 20px 0;
    }
    
    canvas {
      width: 100%;
      height: auto;
      border: 2px solid #e0e0e0;
      border-radius: 10px;
      background: white;
    }
    
    .image-info {
      background: #f5f5f5;
      padding: 15px;
      border-radius: 8px;
      margin: 10px 0;
      font-size: 14px;
      text-align: left;
    }
    
    .image-info.success {
      background: #e8f5e9;
      border-left: 4px solid #4caf50;
    }
    
    .image-info.error {
      background: #ffebee;
      border-left: 4px solid #f44336;
    }
    
    @media (max-width: 768px) {
      .container {
        padding: 10px;
      }
      
      header {
        padding: 20px 15px;
      }
      
      h1 {
        font-size: 1.5rem;
      }
      
      .card {
        padding: 20px;
      }
      
      button {
        width: 100%;
        max-width: 300px;
      }
    }
  </style>
  
  <!-- jsPDF library -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
</head>

<body>
  <div class="container">
    <header>
      <h1>🎓 Carteirinha Estudantil</h1>
      <p class="subtitle">Sistema Digital de Identificação Estudantil para uso de Transporte Escolar Intermunicipal</p>
    </header>
    
    <div class="card">
      <div class="input-section">
        <h3>Digite seu CPF para acessar:</h3>
        <input type="text" id="cpf" placeholder="000.000.000-00" maxlength="14">
        <p style="margin-top: 10px; color: #666; font-size: 14px;">
          Para alunos com múltiplos cursos, digite o mesmo CPF para ver todas as matrículas
        </p>
      </div>
      
      <div class="buttons">
        <button class="btn-primary" onclick="gerarCarteirinha()" id="btnGerar">Gerar Carteirinha</button>
        <button class="btn-success" onclick="limparTudo()">Limpar</button>
        <button class="btn-download" onclick="salvarCarteirinhaPDF()" id="btnSalvar">Salvar Carteirinha (PDF)</button>
      </div>
      
      <div class="status-box visible" id="statusBox" style="border-left-color: rgb(76, 175, 80); background: rgb(232, 245, 233);">✅ Carteirinha gerada para: Aluno Teste</div>
      
      <div class="image-info success" id="imageInfo"> 
        ✅Veja Abaixo o Resultado
</div>
    </div>
    
    <div class="card">
      <h3></h3>
      <div class="canvas-container">
       <canvas id="frente" width="800" height="500"></canvas>
      </div>
   </div>
    
    <div class="card">
      <h3></h3>
      <div class="canvas-container">
        <canvas id="verso" width="800" height="500"></canvas>
      </div>
   </div>
  </div>

  <!-- Importa os dados dos alunos do arquivo externo -->
  <script src="alunos.js"></script>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js"></script>
  
  <script>
  // ============================================
  // CONFIGURAÇÃO
  // ============================================
  const CONFIG = {
    caminhoImagens: "./Imagens/",
    caminhoFotos: "./Imagens/fotos/",
    
    placeholders: {
      frente: "https://via.placeholder.com/800x500/4a6fa5/ffffff?text=CARTEIRINHA+ESTUDANTIL",
      verso: "https://via.placeholder.com/800x500/2c3e50/ffffff?text=VERSO+DA+CARTEIRINHA",
      foto: (matricula) => `https://ui-avatars.com/api/?name=Aluno&background=4a6fa5&color=fff&size=256&bold=true&length=1`
    }
  };

  // ============================================
  // VARIÁVEIS GLOBAIS
  // ============================================
  const canvasFrente = document.getElementById('frente');
  const ctxFrente = canvasFrente.getContext('2d');
  const canvasVerso = document.getElementById('verso');
  const ctxVerso = canvasVerso.getContext('2d');
  const statusBox = document.getElementById('statusBox');
  const imageInfo = document.getElementById('imageInfo');
  const btnSalvar = document.getElementById('btnSalvar');
  const btnGerar = document.getElementById('btnGerar');
  
  let alunoAtual = null;
  let alunosMultiplosCursos = []; // Array para armazenar múltiplos cursos do mesmo CPF

  // ============================================
  // DIMENSÕES PARA PDF (tamanho real para impressão e recorte)
  // ============================================
  const DIMENSOES_CARTEIRINHA = {
    largura: 85.6,   // mm
    altura: 53.98,   // mm
    espaco: 2        // mm de espaço entre frente e verso
  };

  // ============================================
  // FUNÇÕES DE UTILIDADE
  // ============================================
  function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length > 11) cpf = cpf.substring(0, 11);
    if (cpf.length > 9) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else if (cpf.length > 6) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    } else if (cpf.length > 3) {
      cpf = cpf.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    }
    return cpf;
  }

  function mostrarStatus(mensagem, tipo = 'info', duplaMatricula = false) {
    statusBox.textContent = mensagem;
    statusBox.className = 'status-box visible';
    
    if (duplaMatricula) {
      statusBox.classList.add('dupla-matricula');
    } else {
      statusBox.classList.remove('dupla-matricula');
    }
    
    if (tipo === 'error') {
      statusBox.style.borderLeftColor = '#f44336';
      statusBox.style.background = '#ffebee';
    } else if (tipo === 'success') {
      statusBox.style.borderLeftColor = '#4caf50';
      statusBox.style.background = '#e8f5e9';
    } else {
      statusBox.style.borderLeftColor = '#1a237e';
      statusBox.style.background = '#e3f2fd';
    }
  }

  function mostrarInfoImagens(mensagem, sucesso) {
    imageInfo.textContent = mensagem;
    imageInfo.className = sucesso ? 'image-info success' : 'image-info error';
  }

  // ============================================
  // FUNÇÃO PRINCIPAL - CARREGAR IMAGEM
  // ============================================
  function carregarImagemComDetalhes(url, tipo) {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = function() {
        resolve({
          sucesso: true,
          imagem: img,
          url: url,
          largura: img.width,
          altura: img.height,
          tipo: tipo
        });
      };
      
      img.onerror = function(e) {
        resolve({
          sucesso: false,
          imagem: null,
          url: url,
          erro: e,
          tipo: tipo
        });
      };
      
      const timestamp = new Date().getTime();
      const urlUnica = `${url}${url.includes('?') ? '&' : '?'}_=${timestamp}`;
      img.src = urlUnica;
    });
  }

  // ============================================
  // DESENHO DA CARTEIRINHA - ATUALIZADO PARA MULTIPLOS CURSOS
  // ============================================
  function desenharFrenteBasica(ctx, aluno, fundo = null, foto = null) {
    const largura = ctx.canvas.width;
    const altura = ctx.canvas.height;
    
    // Limpa tudo
    ctx.clearRect(0, 0, largura, altura);
    
    // Desenha fundo (modelo da imagem)
    if (fundo && fundo.sucesso) {
      ctx.drawImage(fundo.imagem, 0, 0, largura, altura);
    } else {
      // Fundo branco com bordas
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, largura, altura);
      
      // Cabeçalho azul
      ctx.fillStyle = '#1a237e';
      ctx.fillRect(0, 0, largura, 60);
      
      // Texto do cabeçalho
      ctx.fillStyle = 'white';
      ctx.font = 'bold 20px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('SECRETARIA MUNICIPAL DE EDUCAÇÃO - ANADIA - AL', largura/2, 25);
      ctx.font = 'bold 16px Arial';
      ctx.fillText('CARTEIRA DE TRANSPORTE INTERMUNICIPAL', largura/2, 45);
    }
    
    // Desenhar dados do aluno como na imagem
    ctx.fillStyle = '#000';
    ctx.textAlign = 'left';
    ctx.font = 'bold 18px Arial';
    
    // Matrícula no topo
    ctx.fillText('MATRÍCULA', 50, 100);
    ctx.font = 'bold 24px Arial';
    ctx.fillText(aluno.matricula, 50, 130);
    
    // Nome do aluno
    ctx.font = 'bold 16px Arial';
    ctx.fillText('NOME:', 50, 180);
    ctx.font = 'bold 20px Arial';
    ctx.fillText(aluno.nome.toUpperCase(), 50, 210);
    
    // Verificar se tem múltiplos cursos
    const temMultiplosCursos = alunosMultiplosCursos && alunosMultiplosCursos.length > 1;
    
    if (temMultiplosCursos) {
      // ===== PRIMEIRO CURSO (PRINCIPAL) =====
      ctx.font = 'bold 16px Arial';
      ctx.fillText('INSTITUIÇÃO:', 50, 260);
      ctx.font = 'bold 20px Arial';
      ctx.fillText(aluno.instituicao, 50, 290);
      
      ctx.font = 'bold 16px Arial';
      ctx.fillText('CURSO:', 50, 330);
      ctx.font = 'bold 20px Arial';
      ctx.fillText(aluno.curso, 50, 360);
      
      ctx.font = 'bold 16px Arial';
      ctx.fillText('CIDADE:', 50, 400);
      ctx.font = 'bold 20px Arial';
      ctx.fillText(aluno.cidade, 50, 430);
      
      ctx.font = 'bold 16px Arial';
      ctx.fillText('TURNO:', 50, 470);
      ctx.font = 'bold 20px Arial';
      ctx.fillText(aluno.turno, 50, 500);
      
      ctx.font = 'bold 16px Arial';
      ctx.fillText('VALIDADE:', 50, 540);
      ctx.font = 'bold 20px Arial';
      ctx.fillText(aluno.validade, 50, 570);
      
      // ===== SEGUNDO CURSO =====
      const segundoCurso = alunosMultiplosCursos[1];
      
      // Caixa azul para o segundo curso (como na imagem)
      ctx.fillStyle = '#e3f2fd'; // Azul claro
      ctx.fillRect(400, 250, 350, 150);
      ctx.strokeStyle = '#1a237e';
      ctx.lineWidth = 2;
      ctx.strokeRect(400, 250, 350, 150);
      
      ctx.fillStyle = '#1a237e';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('OBS: ESTUDA TAMBÉM EM OUTRA INSTITUIÇÃO', 575, 280);
      
      ctx.textAlign = 'left';
      ctx.font = 'bold 14px Arial';
      ctx.fillText('INSTITUIÇÃO:', 420, 310);
      ctx.font = 'bold 16px Arial';
      ctx.fillText(segundoCurso.instituicao, 420, 330);
      
      ctx.font = 'bold 14px Arial';
      ctx.fillText('CURSO:', 420, 360);
      ctx.font = 'bold 16px Arial';
      ctx.fillText(segundoCurso.curso, 420, 380);
      
      ctx.font = 'bold 14px Arial';
      ctx.fillText('CIDADE:', 420, 410);
      ctx.font = 'bold 16px Arial';
      ctx.fillText(segundoCurso.cidade, 420, 430);
      
    } else {
      // Formato original para um único curso
      ctx.font = 'bold 16px Arial';
      ctx.fillText('INSTITUIÇÃO:', 50, 260);
      ctx.font = 'bold 20px Arial';
      ctx.fillText(aluno.instituicao, 50, 290);
      
      ctx.font = 'bold 16px Arial';
      ctx.fillText('CURSO:', 50, 330);
      ctx.font = 'bold 20px Arial';
      ctx.fillText(aluno.curso, 50, 360);
      
      ctx.font = 'bold 16px Arial';
      ctx.fillText('CIDADE:', 50, 400);
      ctx.font = 'bold 20px Arial';
      ctx.fillText(aluno.cidade, 50, 430);
      
      ctx.font = 'bold 16px Arial';
      ctx.fillText('TURNO:', 50, 470);
      ctx.font = 'bold 20px Arial';
      ctx.fillText(aluno.turno, 50, 500);
      
      ctx.font = 'bold 16px Arial';
      ctx.fillText('VALIDADE:', 50, 540);
      ctx.font = 'bold 20px Arial';
      ctx.fillText(aluno.validade, 50, 570);
    }
    
    // Rodapé
    ctx.fillStyle = '#666';
    ctx.font = 'italic 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('UMA INICIATIVA SIMPLES - ANADIA / SISTEMAS', largura/2, 620);
  }

  function desenharVersoBasico(ctx, fundo = null) {
    const largura = ctx.canvas.width;
    const altura = ctx.canvas.height;
    
    ctx.clearRect(0, 0, largura, altura);
    
    if (fundo && fundo.sucesso) {
      ctx.drawImage(fundo.imagem, 0, 0, largura, altura);
    } else {
      // Fundo branco
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, largura, altura);
      
      // Cabeçalho azul
      ctx.fillStyle = '#1a237e';
      ctx.fillRect(0, 0, largura, 60);
      
      // Texto do cabeçalho
      ctx.fillStyle = 'white';
      ctx.font = 'bold 20px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('SECRETARIA MUNICIPAL DE EDUCAÇÃO - ANADIA - AL', largura/2, 25);
      ctx.font = 'bold 16px Arial';
      ctx.fillText('CARTEIRA DE TRANSPORTE INTERMUNICIPAL', largura/2, 45);
      
      // Ano grande
      ctx.fillStyle = '#1a237e';
      ctx.font = 'bold 80px Arial';
      ctx.fillText('2026', largura/2, 180);
      
      // Texto da prefeitura
      ctx.fillStyle = '#000';
      ctx.font = 'bold 24px Arial';
      ctx.fillText('PREFEITURA MUNICIPAL DE', largura/2, 250);
      ctx.fillText('ANADIA', largura/2, 290);
      ctx.font = 'bold 20px Arial';
      ctx.fillText('POR UMA CIDADE CADA VEZ MELHOR', largura/2, 330);
      
      // Assinatura digital
      ctx.fillStyle = '#666';
      ctx.font = 'bold 14px Arial';
      ctx.fillText('Documento assinado digitalmente', largura/2, 400);
      ctx.font = 'bold 18px Arial';
      ctx.fillText('gob.br', largura/2, 430);
      ctx.font = 'bold 16px Arial';
      ctx.fillText('JEAN RODRIGO ROCHA DE LIMA', largura/2, 460);
      ctx.font = '14px Arial';
      ctx.fillText('Data: 21/01/2026 08:45:26-0300', largura/2, 490);
      ctx.font = '12px Arial';
      ctx.fillText('Verifique em https://gob.br', largura/2, 510);
    }
    
    // Se tiver múltiplos cursos, adicionar mais informações no verso
    if (alunosMultiplosCursos && alunosMultiplosCursos.length > 1) {
      const segundoCurso = alunosMultiplosCursos[1];
      
      ctx.fillStyle = '#1a237e';
      ctx.font = 'bold 18px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('INFORMAÇÕES ADICIONAIS - SEGUNDO CURSO', largura/2, 560);
      
      ctx.textAlign = 'left';
      ctx.fillText(`INSTITUIÇÃO: ${segundoCurso.instituicao}`, 50, 590);
      ctx.fillText(`CURSO: ${segundoCurso.curso}`, 50, 620);
      ctx.fillText(`CIDADE: ${segundoCurso.cidade}`, 50, 650);
      ctx.fillText(`TURNO: ${segundoCurso.turno}`, 50, 680);
      ctx.fillText(`VALIDADE: ${segundoCurso.validade}`, 50, 710);
    }
  }

  // ============================================
  // FUNÇÃO PARA SALVAR CARTEIRINHA EM PDF
  // ============================================
  async function salvarCarteirinhaPDF() {
    if (!alunoAtual) {
      mostrarStatus('Gere uma carteirinha primeiro!', 'error');
      return;
    }
    
    try {
      mostrarStatus('Gerando PDF para recorte...', 'info');
      
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const pageWidth = 210;
      const pageHeight = 297;
      const cardWidth = DIMENSOES_CARTEIRINHA.largura;
      const cardHeight = DIMENSOES_CARTEIRINHA.altura;
      const espaco = DIMENSOES_CARTEIRINHA.espaco;
      
      const xFrente = (pageWidth - (cardWidth * 2 + espaco)) / 2;
      const xVerso = xFrente + cardWidth + espaco;
      const yPos = (pageHeight - cardHeight) / 2;
      
      const frenteDataURL = canvasFrente.toDataURL('image/png');
      const versoDataURL = canvasVerso.toDataURL('image/png');
      
      pdf.setTextColor(0, 0, 0);
      
      // Adicionar frente da carteirinha
      pdf.addImage(frenteDataURL, 'PNG', xFrente, yPos, cardWidth, cardHeight);
      
      // Adicionar verso da carteirinha
      pdf.addImage(versoDataURL, 'PNG', xVerso, yPos, cardWidth, cardHeight);
      
      // Linhas de corte
      pdf.setDrawColor(200, 200, 200);
      pdf.setLineWidth(0.1);
      pdf.line(
        xFrente + cardWidth + (espaco/2), 
        yPos - 2, 
        xFrente + cardWidth + (espaco/2), 
        yPos + cardHeight + 2
      );
      
      // Salvar o PDF
      const nomeArquivo = alunosMultiplosCursos && alunosMultiplosCursos.length > 1 ? 
        `carteirinha_${alunoAtual.matricula}_dupla_matricula.pdf` : 
        `carteirinha_${alunoAtual.matricula}.pdf`;
      pdf.save(nomeArquivo);
      
      mostrarStatus('PDF para recorte gerado com sucesso!', 'success');
      
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      mostrarStatus('Erro ao gerar o PDF. Tente novamente.', 'error');
    }
  }

  // ============================================
  // FUNÇÃO PRINCIPAL - GERAR CARTEIRINHA (ATUALIZADA PARA MULTIPLOS CURSOS)
  // ============================================
  async function gerarCarteirinha() {
    const cpfInput = document.getElementById('cpf');
    let cpf = cpfInput.value.replace(/\D/g, '');
    
    if (cpf.length !== 11) {
      mostrarStatus('Por favor, digite um CPF válido (11 números)', 'error');
      cpfInput.value = formatarCPF(cpf);
      cpfInput.focus();
      return;
    }
    
    // Desativar botão enquanto processa
    const originalText = btnGerar.textContent;
    btnGerar.textContent = 'Processando...';
    btnGerar.disabled = true;
    
    mostrarStatus('Processando... Aguarde.', 'info');
    
    try {
      cpfInput.value = formatarCPF(cpf);
      
      const hash = sha256(cpf);
      
      // Buscar TODOS os alunos com o mesmo CPF/hash
      const alunosEncontrados = alunos.filter(a => a.hash === hash);
      
      if (alunosEncontrados.length === 0) {
        mostrarStatus('Aluno não encontrado. Verifique o CPF.', 'error');
        btnGerar.textContent = originalText;
        btnGerar.disabled = false;
        return;
      }
      
      // Armazenar todos os cursos encontrados
      alunosMultiplosCursos = alunosEncontrados;
      
      // Usar o primeiro aluno como "principal" (para foto e matrícula)
      alunoAtual = alunosEncontrados[0];
      
      // Carregar as imagens (usar primeira matrícula para foto)
      const [frenteResult, versoResult, fotoResult] = await Promise.all([
        carregarImagemComDetalhes(CONFIG.caminhoImagens + 'modelo-frente.png', 'frente'),
        carregarImagemComDetalhes(CONFIG.caminhoImagens + 'modelo-verso.png', 'verso'),
        carregarImagemComDetalhes(CONFIG.caminhoFotos + alunoAtual.matricula + '.JPG', 'foto')
      ]);
      
      // Informações de debug
      let infoMsg = '';
      infoMsg += frenteResult.sucesso ? '✅ Modelo frente carregado\n' : '❌ Modelo frente não encontrado\n';
      infoMsg += versoResult.sucesso ? '✅ Modelo verso carregado\n' : '❌ Modelo verso não encontrado\n';
      infoMsg += fotoResult.sucesso ? '✅ Foto carregada\n' : '❌ Foto não encontrado\n';
      
      mostrarInfoImagens(infoMsg, frenteResult.sucesso || versoResult.sucesso || fotoResult.sucesso);
      
      // Desenha as carteirinhas com suporte a múltiplos cursos
      desenharFrenteBasica(ctxFrente, alunoAtual, frenteResult, fotoResult);
      desenharVersoBasico(ctxVerso, versoResult);
      
      // Mostra botão de salvar
      btnSalvar.style.display = 'inline-block';
      
      // Mensagem de status baseada no número de cursos
      if (alunosEncontrados.length > 1) {
        mostrarStatus(`✅ Carteirinha gerada para: ${alunoAtual.nome} (${alunosEncontrados.length} cursos - DUPLA MATRÍCULA)`, 'success', true);
      } else {
        mostrarStatus(`✅ Carteirinha gerada para: ${alunoAtual.nome}`, 'success');
      }
      
    } catch (error) {
      console.error('Erro crítico:', error);
      mostrarStatus('Erro ao processar. Tente novamente.', 'error');
    } finally {
      // Reativar o botão independente do resultado
      btnGerar.textContent = originalText;
      btnGerar.disabled = false;
    }
  }

  // ============================================
  // FUNÇÕES ADICIONAIS
  // ============================================
  function limparTudo() {
    ctxFrente.clearRect(0, 0, canvasFrente.width, canvasFrente.height);
    ctxVerso.clearRect(0, 0, canvasVerso.width, canvasVerso.height);
    statusBox.classList.remove('visible');
    statusBox.classList.remove('dupla-matricula');
    imageInfo.textContent = '';
    btnSalvar.style.display = 'none';
    document.getElementById('cpf').value = '';
    alunoAtual = null;
    alunosMultiplosCursos = []; // Limpar array de múltiplos cursos
    
    // Garantir que o botão de gerar esteja ativo
    btnGerar.disabled = false;
    btnGerar.textContent = 'Gerar Carteirinha';
    
    mostrarStatus('Sistema limpo. Digite um CPF para começar.', 'info');
  }

  // ============================================
  // INICIALIZAÇÃO
  // ============================================
  document.addEventListener('DOMContentLoaded', function() {
    console.log('🎓 Sistema de Carteirinha iniciado');
    
    const cpfInput = document.getElementById('cpf');
    cpfInput.addEventListener('input', function() {
      this.value = formatarCPF(this.value);
    });
    
    cpfInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        gerarCarteirinha();
      }
    });
    
    setTimeout(() => {
      mostrarStatus('Sistema pronto. Digite um CPF para gerar sua carteirinha.', 'info');
    }, 500);
  });
  </script>
</body>
</html>
