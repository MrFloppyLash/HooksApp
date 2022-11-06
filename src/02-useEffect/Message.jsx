import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {

    //     const onMousemove = ({x,y}) => {
    //         const coods = {x, y};
    //         console.log(coods);
    //     }
    //     console.log("add");
    //     window.addEventListener('mousemove', onMousemove);
    
    //   return () => {
    //     console.log("remove");
    //     window.removeEventListener('mousemove', onMousemove);
    //   }
    }, [])
    
  return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}
