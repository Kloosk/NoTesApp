export const notesExample = [
    {
        title:"Title",
        text: "Your text",
        titleColor:"#FFFFFF",
        titleBg: "linear-gradient(to right,#a34343,#4A90E2)",
        textColor:"#FFFFFF",
        textBg:"linear-gradient(to right,#a34343,#4A90E2)",
        border: "#000000",
        font:"Lato",
        textSize: 1.0,
        titleSize: 2
    },
    {
        title:"Title",
        text: "Your text",
        titleColor:"#fd1d1d",
        titleBg: "linear-gradient(to right,#a34343,#4A90E2)",
        textColor:"#fd1d1d",
        textBg:"linear-gradient(to right,#a34343,#4A90E2)",
        border: "#000000",
        font:"Lato",
        textSize: 1.0,
        titleSize: 2
    },
    {
        title:"Title",
        text: "Your text",
        titleColor:"#000000",
        titleBg: "linear-gradient(to right,#2E4BF2,#05F29B)",
        textColor:"#000000",
        textBg:"linear-gradient(to right,#2E4BF2,#05F29B)",
        border: "#000000",
        font:"Lato",
        textSize: 2,
        titleSize: 3
    },
    {
        title:"Title",
        text: "Your text",
        titleColor:"#2E4BF2",
        titleBg: "#F2F2F2",
        textColor:"#2E4BF2",
        textBg:"#F2F2F2",
        border: "#05F29B",
        font:"Lato",
        textSize: 1.0,
        titleSize: 2
    },
    {
        title:"Title",
        text: "Your text",
        titleColor:"#F2D852",
        titleBg: "#402A1D",
        textColor:"#F2D852",
        textBg:"#024873",
        border: "#F2D852",
        font:"Dancing Spirits",
        textSize: 1.0,
        titleSize: 2
    },
    {
        title:"Title",
        text: "Your text",
        titleColor:"#F2E205",
        titleBg: "#BC04BF",
        textColor:"#BC04BF",
        textBg:"#F2E205",
        border: "#F20505",
        font:"Amatic SC",
        textSize: 1.0,
        titleSize: 2
    },
    {
        title:"Title",
        text: "Your text",
        titleColor:"#2C4019",
        titleBg: "#BFBFBF",
        textColor:"#2C4019",
        textBg:"#BFBFBF",
        border: "#BFBFBF",
        font:"Roboto",
        textSize: 1.0,
        titleSize: 2
    },{
        title:"Title",
        text: "Your text",
        titleColor:"#F2C791",
        titleBg: "#F2A0AF",
        textColor:"#011526",
        textBg:"#F2A0AF",
        border: "#A67563",
        font:"Turret Road",
        textSize: 1.0,
        titleSize: 2
    },{
        title:"Title",
        text: "Your text",
        titleColor:"#F20505",
        titleBg: "#150773",
        textColor:"#F20505",
        textBg:"#150773",
        border: "#F20505",
        font:"Lato",
        textSize: 1.0,
        titleSize: 2
    },{
        title:"Title",
        text: "Your text",
        titleColor:"#40122B",
        titleBg: "#2A2F8C",
        textColor:"#40122B",
        textBg:"#2983A6",
        border: "#40122B",
        font:"Lato",
        textSize: 1.0,
        titleSize: 2
    },{
        title:"Title",
        text: "Your text",
        titleColor:"#152526",
        titleBg: "#F2EA7E",
        textColor:"#BFA27E",
        textBg:"#152526",
        border: "#8C7764",
        font:"Lato",
        textSize: 1.5,
        titleSize: 2.2
    },{
        title:"Title",
        text: "Your text",
        titleColor:"#1B2B40",
        titleBg: "#F28DEB",
        textColor:"#1B2B40",
        textBg:"#B673BF",
        border: "#F2B6C6",
        font:"Lato",
        textSize: 1.0,
        titleSize: 2
    }
];
export const genereateOne = () => {
  const num = Math.floor(Math.random()*notesExample.length);
  return notesExample[num];
};