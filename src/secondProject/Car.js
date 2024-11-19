import "./StylePage.css";
export default function Car({flag}){
    if(flag){
        return(
            <div>

                <h1 style={{textAlign: "center", color: "#0E1E2D"}}>Car Pictures</h1>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53913021164_b9a7972aaa_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911786692_821f0f660c_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912966815_d807744442_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53913090750_aa8dfbf335_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911759927_0c86879afc_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912768958_0ce9936e1f_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912828659_3cae7fac23_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912999759_4de1445f60_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911760172_5bd60f8411_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912828659_3cae7fac23_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912999759_4de1445f60_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911760172_5bd60f8411_m.jpg"/>
                </div>
            </div>
        );
    }
    return (
        <></>
    );
}