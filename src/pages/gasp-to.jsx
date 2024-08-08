import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
    useGSAP(()=> {
        gsap.to('.box', {
          x:500,
          repeat: -1,
          yoyo:true,
          rotate:360,
          duration:2,
          borderRadius:'50%'
        })
      }, [])
    return (
        <div class='box' style={{width:'100px', height:'100px', background:'yellow'}}></div>
    )
}

export default GsapTo;