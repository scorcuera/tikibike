import imgPrices from "../img/prix.png"
import classes from "./Prices.module.css";

const Prices = () => {
    return (
        <div className={classes.imgContainer}>
            <img className={classes.imgPrix} src={imgPrices} alt="" />
        </div>
    )
}

export default Prices
