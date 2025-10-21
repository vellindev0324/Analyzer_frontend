import { motion } from "framer-motion";


const CardForText = (props) => {


  return <div className="card-grid">
    {props.numberInfo ?
      Object.entries(props.numberInfo).map(([country, total]) => (
        <motion.div
          key={country}
          className="card"
          whileHover={{ scale: 1.03 }}
        >
          <h3>{props.text}{country}</h3>
          <p className="big-number">{total}</p>
        </motion.div>
      ))
      : <></>
    }
  </div>
}

export default CardForText