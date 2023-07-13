function Footer() {

    const handleLClick = () => {
        window.open("https://www.linkedin.com/in/kevin-duggan-420624164/", "_blank");
      }
      const handleGClick = () => {
        window.open("https://github.com/Duggan1", "_blank");
      }
      const handleRClick = () => {
        window.open("https://docs.google.com/document/d/1m1uW6tSQ3suBAurwu5kaeojt2sDRwVAnyeWFuIVUPlY/edit?usp=sharing", "_blank");
      }
    
    
    return (
        <div className="foot">
            <h1 style={{ textAlign:'center', marginRight:'10%',fontFamily:'monospace',fontSize:'43px',fontWeight:'bolder' }} >Kevin Thomas Duggan </h1>
        <div style={{ display:'flex', }} id='icons' >
        <div onClick={handleRClick} style={{height:'90px', width:'90px', backgroundColor:'black', marginLeft:'32%', border:'white 2px solid', borderRadius:'58%', cursor:'pointer'}} id='resume'></div>
        <div onClick={handleLClick} style={{height:'90px', width:'90px', backgroundColor:'white', marginLeft:'25px', border:'white 2px solid', borderRadius:'8%', cursor:'pointer'}} id='linkedin'></div>
        <div onClick={handleGClick} style={{height:'90px', width:'90px', marginLeft:'25px', border:'white 2px solid', borderRadius:'58%', cursor:'pointer'}} id='github'></div>
        </div>
        <h3 style={{ textAlign:'center', marginRight:'10%',fontFamily:'monospace' }}>Oak Lawn, Illinois | 708-280-0622 | kevinduggan95@gmail.com </h3>
        

        </div>
        );
}

export default Footer;
