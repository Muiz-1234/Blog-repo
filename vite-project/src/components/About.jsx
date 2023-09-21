import { Link } from "react-router-dom"

const About= () => {
    return (
        <><div>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea et sequi incidunt esse maiores ipsum nobis
             quasi, necessitatibus soluta facilis possimus! Eum qui animi debitis laudantium tempora recusandae corrupti ea?
            </p>
         </div>
         <button className="bg-blue-900"><Link to='/'>Back to home</Link></button></>
        
    )
}

export default About;