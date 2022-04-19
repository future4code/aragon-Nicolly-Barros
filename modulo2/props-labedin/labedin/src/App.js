import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQGoEOtV1qokRw/profile-displayphoto-shrink_800_800/0/1644661623307?e=1655942400&v=beta&t=hnLoV01GSfUgTD9xvkCu6aTccW-SbpDEOMBRPrUcfqU"
          nome="Nicoly Barros" 
          descricao="Olá, meu nome é Nicoly, tenho 22 anos e resido em Bauru/SP. Sou PCD auditiva e utilizo aparelhos em ambos ouvidos, e é aqui que entra minha decisão de embarcar na área de TI. Hoje, saber que um par de aparelhos auditivos me proporciona ouvir novamente os sons(até os mais simples), me mostrou o quanto a tecnologia contribui para a inclusão e acessibilidade, despertando meu interesse e paixão pela área."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/37/37050.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
          <CardPequeno 
            imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLIx4KsTwdTIeq4xaHaGjGOvRMXdHtJmZFA&usqp=CAU"
            titulo="Email:"
            descricao="E-mail: nicolybarros00@gmail.com"
          />

         <CardPequeno 
            imagem="https://w7.pngwing.com/pngs/30/177/png-transparent-ip-address-computer-icons-encapsulated-postscript-address-miscellaneous-logo-video-player.png"
            titulo="Endereço:"
            descricao="Bauru-SP"
          />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://play-lh.googleusercontent.com/tVSotxJQOSSVyV9PsX5mTwnNGgnyauJDntHHATCD84pcesOkeopl8IB-8wqxKHNtKw" 
          nome="Loggi Tecnologia" 
          descricao="Desenvolvedora Iniciante." 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQHsn9v3m-bN-Q/company-logo_200_200/0/1635937370077?e=2147483647&v=beta&t=yhVuzAEiyFJhAW-VEAiownl3Et3HLR_ipwbIPS3qmL4" 
          nome="CIEE - Centro de Integração Empresa-Escola" 
          descricao="Auxiliar Administrativo." 
        />
      </div>

      <div className="page-section-container">
        <h2>Formação</h2>
        <CardGrande 
          imagem="https://yt3.ggpht.com/ytc/AKedOLSH-PUg_wTvKW7xAKL4PsXFV85N9Ys341g0WSVd=s900-c-k-c0x00ffffff-no-rj"
          nome="Labenu"
          descricao="Desenvolvimento Web Full Stack, cursando."
        />

        <CardGrande 
          imagem="https://blogdosampaiodotcom.files.wordpress.com/2014/10/frente-da-escola-estadual-ernesto-monte-em-bauru.jpg"
          nome="E.E.Enrnesto Monte"
          descricao="Ensino médio, completo."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
