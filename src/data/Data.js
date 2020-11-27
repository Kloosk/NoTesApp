export const notesExample = [
    {
        titleColor:"#FFFFFF",
        titleBg: "linear-gradient(to right,#a34343,#4A90E2)",
        textColor:"#FFFFFF",
        textBg:"linear-gradient(to right,#a34343,#4A90E2)",
        border: "#000000",
        font:"Lato",
    },
    {
        titleColor:"#fd1d1d",
        titleBg: "linear-gradient(to right,#a34343,#4A90E2)",
        textColor:"#fd1d1d",
        textBg:"linear-gradient(to right,#a34343,#4A90E2)",
        border: "#000000",
        font:"Lato",
    },
    {
        titleColor:"#000000",
        titleBg: "linear-gradient(to right,#2E4BF2,#05F29B)",
        textColor:"#000000",
        textBg:"linear-gradient(to right,#2E4BF2,#05F29B)",
        border: "#000000",
        font:"Lato",
    },
    {
        titleColor:"#2E4BF2",
        titleBg: "#F2F2F2",
        textColor:"#2E4BF2",
        textBg:"#F2F2F2",
        border: "#05F29B",
        font:"Lato",
    },
    {
        titleColor:"#F2D852",
        titleBg: "#402A1D",
        textColor:"#F2D852",
        textBg:"#024873",
        border: "#F2D852",
        font:"Dancing Spirits",
    },
    {
        titleColor:"#F2E205",
        titleBg: "#BC04BF",
        textColor:"#BC04BF",
        textBg:"#F2E205",
        border: "#F20505",
        font:"Amatic SC",
    },
    {
        titleColor:"#2C4019",
        titleBg: "#BFBFBF",
        textColor:"#2C4019",
        textBg:"#BFBFBF",
        border: "#BFBFBF",
        font:"Roboto",
    },{
        titleColor:"#F2C791",
        titleBg: "#F2A0AF",
        textColor:"#011526",
        textBg:"#F2A0AF",
        border: "#A67563",
        font:"Turret Road",
    },{
        titleColor:"#F20505",
        titleBg: "#150773",
        textColor:"#F20505",
        textBg:"#150773",
        border: "#F20505",
        font:"Lato",
    },{
        titleColor:"#40122B",
        titleBg: "#2A2F8C",
        textColor:"#40122B",
        textBg:"#2983A6",
        border: "#40122B",
        font:"Lato"
    },{
        titleColor:"#152526",
        titleBg: "#F2EA7E",
        textColor:"#BFA27E",
        textBg:"#152526",
        border: "#8C7764",
        font:"Lato"
    },{
        titleColor:"#1B2B40",
        titleBg: "#F28DEB",
        textColor:"#1B2B40",
        textBg:"#B673BF",
        border: "#F2B6C6",
        font:"Lato",
    }
];
export const genereateOne = () => {
  const num = Math.floor(Math.random()*notesExample.length);
  return notesExample[num];
};