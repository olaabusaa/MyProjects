import "./StylePage.css";
export default function Birds({flag}){
    if(flag){
        return(
            <div>

                <h1 style={{textAlign: "center", color: "#0E1E2D"}}>Birds Pictures</h1>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53913066090_1daf01edb0_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912884088_f50c1917c8_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53723607396_f7376d3a3d_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912885268_d25f5a1da4_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911723547_ec71bb0325_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53723607396_f7376d3a3d_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911672437_20f443f11e_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912515891_84cd23e4fc_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912976365_ffb4a1c8db_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911672437_20f443f11e_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912515891_84cd23e4fc_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912976365_ffb4a1c8db_m.jpg"/>
                </div>

            </div>
        );
    }
    return (
        <></>
    );
}