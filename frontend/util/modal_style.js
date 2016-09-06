export const ModalStyle = {
    overlay : {
      position        : "fixed",
      backgroundColor : 'rgba(30,30,30,0.85)',
      zIndex          : 10,
      display         : "flex",
      justifyContent  : 'center',
      alignItems      : 'center',
      height          : "100vh",
    },

    content : {
      position        : "relative",
      left            : "0px",
      right           : "0px",
      top             : "0px",
      bottom          : "0px",
      width           : "229px",
      height          : "400px",
      display         : 'flex',
      flexDirection   : 'column',
      justifyContent  : 'center',
      alignItems      : 'center',
      borderRadius    :  '4px',
      backgroundColor : '#dadbde',
      padding         : '20px',
      zIndex          : '11',
      transition      : 'opacity 1.5s',
      minHeight       : '200px',
      minWidth        : '300px',
      boxShadow       : "0px 6px 20px 0px rgba(0,0,0,1)"
    }
  };