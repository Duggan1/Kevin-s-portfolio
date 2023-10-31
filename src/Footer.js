function Footer({marginADJ}) {

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
        <div style={{marginLeft:marginADJ}} className="foot ">
            
            <h1 className="footH" >Kevin Thomas Duggan </h1>
        <div style={{ display:'flex', justifyContent: 'center' }} id='icons' >
        <div className="icon1 relative "onClick={handleRClick} id='resume'></div>
        <div className="icon2 relative" onClick={handleLClick} style={{}} id='linkedin'></div>
        <div className="icon3 relative" onClick={handleGClick}  id='github'></div>
        </div>
        <h3  style={{ textAlign:'center', fontFamily:'monospace' }}>Oak Lawn, Illinois | 708-280-0622 | kevinduggan95@gmail.com </h3>
        

        </div>
        );
}

export default Footer;
