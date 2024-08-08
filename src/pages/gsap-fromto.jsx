import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
    useGSAP(()=> {
        gsap.fromTo('.box', {
          x:100,
          repeat: 0,
          borderRadius:'0%'
        },{
          x:500,
          repeat: -1,
          yoyo:true,
          rotate:360,
          duration:2,
          borderRadius:'50%'
        })
      }, [])
    return (
        <div class='box' style={{width:'100px', height:'100px', background:'blue'}}></div>
    )
}

export default GsapFromTo;