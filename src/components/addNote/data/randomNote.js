const randomNote = () => {
  const arr = [
        {
            title:"Make",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, officia?",
            titleColor:"#4F7302",
            titleBg: "#465902",
            textColor:"#F2E205",
            textBg:"#465902",
            border: "#F2E205",
            font:"Arial",
            textSize: 1,
            titleSize: 1,
        },
      {
          title:"Make",
          text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, officia?",
          titleColor:"#4F7302",
          titleBg: "#465902",
          textColor:"#F2E205",
          textBg:"#465902",
          border: "#F2E205",
          font:"Arial",
          textSize: 1,
          titleSize: 1,
      },       {
          title:"Make",
          text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, officia?",
          titleColor:"#4F7302",
          titleBg: "#465902",
          textColor:"#F2E205",
          textBg:"#465902",
          border: "#F2E205",
          font:"Arial",
          textSize: 1,
          titleSize: 1,
      },       {
          title:"Make",
          text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, officia?",
          titleColor:"#4F7302",
          titleBg: "#465902",
          textColor:"#F2E205",
          textBg:"#465902",
          border: "#F2E205",
          font:"Arial",
          textSize: 1,
          titleSize: 1,
      },       {
          title:"Make",
          text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, officia?",
          titleColor:"#4F7302",
          titleBg: "#465902",
          textColor:"#F2E205",
          textBg:"#465902",
          border: "#F2E205",
          font:"Arial",
          textSize: 1,
          titleSize: 1,
      },
    ];
  const num = Math.floor(Math.random() * 5);
  return arr[num];
};

export default randomNote;