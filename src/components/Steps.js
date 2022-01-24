import React from "react";
import styles from "./Steps.module.css";

class Steps extends React.Component {
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span className={styles["material-icons"]}>
                    directions_walk
                </span>
            </div>
        )
    };
}

export default Steps;