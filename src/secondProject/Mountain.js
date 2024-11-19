import "./StylePage.css";
export default function Mountain({flag}){
    if(flag){
        return(
            <div>

                <h1 style={{textAlign: "center", color: "#0E1E2D"}}>Mountain Pictures</h1>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53913013025_76cffb5e26_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912919105_18b184685d_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912557126_d60d643105_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912949030_22b47b7abe_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912714828_37b4426731_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911506102_6bd855a056_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912395411_3701e1b436_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912557126_d60d643105_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911565377_3b3b110444_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912395411_3701e1b436_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912557126_d60d643105_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911565377_3b3b110444_m.jpg"/>
                </div>
            </div>
        );
    }
    return (
        <></>
    );
}