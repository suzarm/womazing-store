import '../styles/Header.css'; 


function Header() {
    return (
        <div class="header">
            <div class="header-content">
                <h1 class="header-title"><p>Новые поступления 
                    <br/>
                 в этом сезоне</p>
                </h1>
                <p class="header-text1">Утонченные сочетания и бархатные</p>
                <p class="header-text2"> оттенки - вот то, что вы искали в этом</p>
                <p class="header-text3"> сезоне. Время исследовать.</p>
                <div class="btn-container">
                    <img src="/images/Frame 9.png" class="btn-pic"/>
                    <button class="header-btn">Открыть магазин</button>
                </div>
            </div>
            <div class="header-images">
                <div class="header-main-pic"></div>
                <div class="header-left-pic"></div>
                <div class="header-right-pic"></div>
            </div>
        </div>
     
    );
  }
  
  export default Header;
