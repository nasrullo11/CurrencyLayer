import React, {Component} from 'react'
import './courses.css'
import axios from 'axios'
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';

class Courses extends Component { 
    
        translate = () => {
            document.getElementById("usd").style.transform = "translateX(247px)"
            document.getElementById("eur").removeAttribute('disabled')
            document.getElementById("eur").style.transform = "translateX(-247px)" 
        }

    btn = () => {
        axios.get("http://apilayer.net/api/live?access_key=c335ea587fabfa4cfebf62edae6bd076&currencies=EUR&source=USD&format=1")
        .then(res => {
                let a = document.getElementById("number1").value
                let d = 1 / res.data.quotes.USDEUR
                let c = a / d
                document.getElementById("number2").value = Math.round(c * 100) / 100
                // document.getElementById("translate").value = c
        })

    }

    render() {
        return (
            <div className="courses">
                <div className="valut">
                    <h1>Enter your mark: </h1>
                    <div className="inputs">
                        <div className="usd" id="usd">
                            <label>USD</label>
                            <input type="text" id="number1"/>
                        </div>
                        <div className="arrow" onClick={this.translate} id="arrow">
                            <FlipCameraAndroidIcon/>
                        </div>
                        <div className="usd" id="eur">
                            <label>EUR</label>
                            <input type="text" disabled="disabled" id="number2"/>
                        </div>
                    </div>
                    <button onClick={this.btn} type="submit">Convert</button>
                    <span id="span"></span>
                </div>
            </div>
        )
    }

    // btn = () => {
    //     axios.get("https://free.currconv.com/api/v7/convert?q=USD_eur&compact=ultra&apiKey=f8ce5aa94525ad159baf")
    //     .then(res => {
    //             let a = document.getElementById("number1").value
    //             let d = 1 / res.data.USD_EUR
    //             let c = a / d
    //             document.getElementById("number2").value = Math.round(c * 100) / 100
    //     })

    // }

    // render() {
    //     return (
    //         <div className="courses">
    //             <div className="valut">
    //                 <h1>Enter your mark: </h1>
    //                 <div className="inputs">
    //                     <div className="usd" id="usd">
    //                         <label>USD</label>
    //                         <input type="text" id="number1"/>
    //                     </div>
    //                     <div className="arrow" onClick={this.translate} id="arrow">
    //                         <FlipCameraAndroidIcon/>
    //                     </div>
    //                     <div className="usd" id="eur">
    //                         <label>EUR</label>
    //                         <input type="text" disabled="disabled" id="number2"/>
    //                     </div>
    //                 </div>
    //                 <button onClick={this.btn} type="submit">Convert</button>
    //                 <span id="span"></span>
    //             </div>
    //         </div>
    //     )
    // }
}

export default Courses
