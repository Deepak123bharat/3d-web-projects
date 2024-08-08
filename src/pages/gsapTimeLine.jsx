import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapTimeLine = () => {

    const tl = gsap.timeline({
        repeat: -1, repeatDelay: 1, yoyo: true
    })

    useGSAP(()=>{
        tl.to('.tt-box', {
            x:250,
            rotation:360,
            duration:2
        })
        tl.to('.tt-box', {
            y:250,
            scale: 0.5,
            duration:2,
        })
        tl.to('.tt-box', {
            x:500,
            rotation:720,
            duration:2,
            borderRadius:'50%'
        })
    },[])
    return(
        <div class='tt-box' style={{width:'100px', height:'100px', background:"yellow"}}></div>
    )
}

export default GsapTimeLine