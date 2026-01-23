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
    // Tamanho padrão de carteirinha: ~8.56cm x 5.398cm
    largura: 85.6,   // mm
    altura: 53.98,   // mm
    espaco: 2        // mm de espaço entre frente e verso (mínimo para recorte)
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

  function mostrarStatus(mensagem, tipo = 'info') {
    statusBox.textContent = mensagem;
    statusBox.className = 'status-box visible';
    
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
      console.log(`🔄 Tentando carregar: ${url}`);
      
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = function() {
        console.log(`✅ Imagem carregada: ${url} (${img.width}x${img.height})`);
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
        console.error(`❌ Falha ao carregar: ${url}`, e);
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
    
    // Desenha fundo
    if (fundo && fundo.sucesso) {
      ctx.drawImage(fundo.imagem, 0, 0, largura, altura);
    } else {
      // Fallback se não houver imagem de fundo
      const grad = ctx.createLinearGradient(0, 0, largura, 0);
      grad.addColorStop(0, '#1a237e');
      grad.addColorStop(0.5, '#283593');
      grad.addColorStop(1, '#3949ab');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, largura, altura);
      
      ctx.fillStyle = 'white';
      ctx.font = 'bold 32px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('CARTEIRINHA ESTUDANTIL', largura/2, 60);
      ctx.textAlign = 'left';
    }
    
    // ÁREA DA FOTO
    const fotoX = 125;
    const fotoY = 195;
    const fotoW = 160;
    const fotoH = 180;
    
    // Foto do aluno ou placeholder
    if (foto && foto.sucesso) {
      try {
        const scale = Math.min(fotoW / foto.imagem.width, fotoH / foto.imagem.height);
        const scaledW = foto.imagem.width * scale;
        const scaledH = foto.imagem.height * scale;
        const offsetX = fotoX + (fotoW - scaledW) / 2;
        const offsetY = fotoY + (fotoH - scaledH) / 2;
        
        ctx.drawImage(foto.imagem, offsetX, offsetY, scaledW, scaledH);
      } catch (e) {
        console.error('Erro ao desenhar foto:', e);
        desenharPlaceholderFoto(ctx, fotoX, fotoY, fotoW, fotoH, aluno.matricula);
      }
    } else {
      desenharPlaceholderFoto(ctx, fotoX, fotoY, fotoW, fotoH, aluno.matricula);
    }
    
    // DADOS DO ALUNO
    ctx.fillStyle = '#000';
    ctx.textAlign = 'left';
    
    // Nome do aluno
    ctx.font = 'bold 16px Arial';
    ctx.fillText(aluno.nome.toUpperCase(), 335, 130);
    
    // Verificar se tem múltiplos cursos
    const temMultiplosCursos = alunosMultiplosCursos && alunosMultiplosCursos.length > 1;
    
    if (temMultiplosCursos) {
      // ===== PRIMEIRO CURSO =====
      // Adicionar indicação visual para múltiplos cursos
      ctx.fillStyle = '#1a237e';
      ctx.font = 'bold 14px Arial';
      ctx.fillText('CURSO 1:', 460, 170);
      
      ctx.fillStyle = '#000';
      ctx.font = '14px Arial';
      ctx.fillText(aluno.instituicao, 460, 190);
      ctx.fillText(aluno.curso, 460, 210);
      ctx.fillText(aluno.cidade, 460, 230);
      ctx.fillText(aluno.turno, 460, 250);
      ctx.fillText(aluno.validade, 460, 270);
      
      // ===== SEGUNDO CURSO =====
      const segundoCurso = alunosMultiplosCursos[1];
      ctx.fillStyle = '#1a237e';
      ctx.font = 'bold 14px Arial';
      ctx.fillText('CURSO 2:', 460, 300);
      
      ctx.fillStyle = '#000';
      ctx.font = '14px Arial';
      ctx.fillText(segundoCurso.instituicao, 460, 320);
      ctx.fillText(segundoCurso.curso, 460, 340);
      ctx.fillText(segundoCurso.cidade, 460, 360);
      ctx.fillText(segundoCurso.turno, 460, 380);
      ctx.fillText(segundoCurso.validade, 460, 400);
      
      // Adicionar nota informativa
      ctx.fillStyle = '#666';
      ctx.font = 'italic 12px Arial';
      ctx.fillText('Documento válido para ambos os cursos', 460, 430);
      
    } else {
      // Formato original para um único curso
      ctx.font = '16px Arial';
      ctx.fillText(aluno.instituicao, 460, 190);
      ctx.fillText(aluno.curso, 460, 245);
      ctx.fillText(aluno.cidade, 460, 300);
      ctx.fillText(aluno.turno, 460, 357);
      ctx.fillText(aluno.validade, 460, 420);
    }
    
    // MATRÍCULA VERTICAL (lado esquerdo)
    ctx.save();
    ctx.translate(82, 320);
    ctx.rotate(-Math.PI / 2);
    ctx.font = '24px Arial';
    ctx.fillStyle = '#4a6fa5';
    ctx.fillText(aluno.matricula, 0, 0);
    ctx.restore();
    
    // Adicionar indicador visual se tiver múltiplos cursos
    if (temMultiplosCursos) {
      ctx.fillStyle = '#FF9800';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'right';
      ctx.fillText('DUPLA MATRÍCULA', largura - 20, 50);
      ctx.textAlign = 'left';
    }
  }

  function desenharVersoBasico(ctx, fundo = null) {
    const largura = ctx.canvas.width;
    const altura = ctx.canvas.height;
    
    ctx.clearRect(0, 0, largura, altura);
    
    if (fundo && fundo.sucesso) {
      ctx.drawImage(fundo.imagem, 0, 0, largura, altura);
    } else {
      // Fallback para verso
      const grad = ctx.createLinearGradient(0, 0, 0, altura);
      grad.addColorStop(0, '#37474f');
      grad.addColorStop(1, '#263238');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, largura, altura);
      
      ctx.fillStyle = 'white';
      ctx.font = 'bold 28px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('VERSO DA CARTEIRINHA', largura/2, 80);
    }
    
    // Adicionar informações sobre dupla matrícula no verso se aplicável
    if (alunosMultiplosCursos && alunosMultiplosCursos.length > 1) {
      ctx.fillStyle = 'white';
      ctx.font = 'bold 18px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('INFORMAÇÃO SOBRE DUPLA MATRÍCULA', largura/2, 150);
      
      ctx.font = '14px Arial';
      ctx.textAlign = 'left';
      ctx.fillText('Este documento é válido para:', 50, 200);
      
      alunosMultiplosCursos.forEach((curso, index) => {
        const yPos = 230 + (index * 60);
        ctx.fillText(`${index + 1}. ${curso.instituicao} - ${curso.curso}`, 70, yPos);
        ctx.fillText(`   Turno: ${curso.turno} | Cidade: ${curso.cidade}`, 70, yPos + 20);
      });
    }
  }

  function desenharPlaceholderFoto(ctx, x, y, w, h, matricula) {
    // Placeholder simples para quando não há foto
    const grad = ctx.createRadialGradient(x + w/2, y + h/2, 0, x + w/2, y + h/2, w/2);
    grad.addColorStop(0, '#5c6bc0');
    grad.addColorStop(1, '#3949ab');
    ctx.fillStyle = grad;
    ctx.fillRect(x, y, w, h);
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 60px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('👤', x + w/2, y + h/2 - 20);
    
    ctx.font = '20px Arial';
    ctx.fillText(matricula, x + w/2, y + h/2 + 40);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
  }

  // ============================================
  // FUNÇÃO PARA SALVAR CARTEIRINHA EM PDF (MODELO DE RECORTE)
  // ============================================
  async function salvarCarteirinhaPDF() {
    if (!alunoAtual) {
      mostrarStatus('Gere uma carteirinha primeiro!', 'error');
      return;
    }
    
    try {
      mostrarStatus('Gerando PDF para recorte...', 'info');
      
      // Criar um novo documento PDF
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      // Dimensões da página A4
      const pageWidth = 210; // mm
      const pageHeight = 297; // mm
      
      // Dimensões da carteirinha (tamanho real)
      const cardWidth = DIMENSOES_CARTEIRINHA.largura;  // 85.6 mm
      const cardHeight = DIMENSOES_CARTEIRINHA.altura;  // 53.98 mm
      const espaco = DIMENSOES_CARTEIRINHA.espaco;      // 2 mm
      
      // Calcular posições para deixar frente e verso lado a lado
      // Frente à esquerda, Verso à direita
      const xFrente = (pageWidth - (cardWidth * 2 + espaco)) / 2;
      const xVerso = xFrente + cardWidth + espaco;
      const yPos = (pageHeight - cardHeight) / 2; // Centralizado verticalmente
      
      // Converter canvas para imagens base64
      const frenteDataURL = canvasFrente.toDataURL('image/png');
      const versoDataURL = canvasVerso.toDataURL('image/png');
      
      // Limpar qualquer texto ou elemento extra
      pdf.setTextColor(0, 0, 0);
      
      // Adicionar frente da carteirinha (LADO ESQUERDO)
      pdf.addImage(frenteDataURL, 'PNG', xFrente, yPos, cardWidth, cardHeight);
      
      // Adicionar verso da carteirinha (LADO DIREITO)
      pdf.addImage(versoDataURL, 'PNG', xVerso, yPos, cardWidth, cardHeight);
      
      // Adicionar linha de corte muito fina (quase imperceptível)
      pdf.setDrawColor(200, 200, 200); // Cinza claro
      pdf.setLineWidth(0.1); // Linha muito fina
      
      // Linha de corte entre frente e verso
      pdf.line(
        xFrente + cardWidth + (espaco/2), 
        yPos - 2, 
        xFrente + cardWidth + (espaco/2), 
        yPos + cardHeight + 2
      );
      
      // Linhas de corte ao redor (opcional, para guia de recorte)
      pdf.setDrawColor(150, 150, 150);
      
      // Borda ao redor da frente (pontilhada)
      pdf.setLineDashPattern([1, 1], 0);
      pdf.rect(xFrente - 1, yPos - 1, cardWidth + 2, cardHeight + 2);
      
      // Borda ao redor do verso (pontilhada)
      pdf.rect(xVerso - 1, yPos - 1, cardWidth + 2, cardHeight + 2);
      pdf.setLineDashPattern([], 0); // Resetar padrão
      
      // Salvar o PDF
      const nomeArquivo = alunosMultiplosCursos && alunosMultiplosCursos.length > 1 ? 
        `carteirinha_${alunoAtual.matricula}_multicurso.pdf` : 
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
      
      if (alunosEncontrados.length > 1) {
        mostrarStatus(`Encontrado: ${alunoAtual.nome} (${alunosEncontrados.length} cursos)`, 'info');
      } else {
        mostrarStatus(`Carregando dados de: ${alunoAtual.nome}`, 'info');
      }
      
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
        mostrarStatus(`✅ Carteirinha gerada para: ${alunoAtual.nome} (${alunosEncontrados.length} cursos)`, 'success');
      } else {
        mostrarStatus(`✅ Carteirinha gerada para: ${alunoAtual.nome}`, 'success');
      }
      
    } catch (error) {
      console.error('Erro crítico:', error);
      console.error('Stack trace:', error.stack);
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
    
    // Adicionar listener para capturar erros não tratados
    window.addEventListener('error', function(e) {
      console.error('Erro global capturado:', e.error);
      console.error('Mensagem:', e.message);
      console.error('URL:', e.filename);
      console.error('Linha:', e.lineno);
      console.error('Coluna:', e.colno);
    });
    
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
