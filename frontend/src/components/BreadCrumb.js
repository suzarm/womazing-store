import '../styles/BreadCrumb.css'

function BreadCrumb({homelabel,pageName}) {
    return (
        <div className="section-main">
            <h1>{pageName}</h1>
            <p>{homelabel} - <span style={{color:'gray'}}>{pageName}</span></p>
        </div>
    );
  }
  
  export default BreadCrumb;
  