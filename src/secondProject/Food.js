import "./StylePage.css";
export default function Food({flag}){
    if(flag){
        return(
            <div>

                <h1 style={{textAlign: "center", color: "#0E1E2D"}}>Food Pictures</h1>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911120667_dfaea5f34d_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911088587_406aae087f_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912287810_e8aaf275a2_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912940055_5e8cc40888_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912743525_13907dc71b_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912555655_1ac7f992f6_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912092813_62a7c12864_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911993346_2f813a318c_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911979826_4d8f53d089_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912092813_62a7c12864_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911993346_2f813a318c_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911979826_4d8f53d089_m.jpg"/>
                </div>

            </div>
        );
    }
    return (
        <></>
    );
}