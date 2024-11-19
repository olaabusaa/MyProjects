import "./StylePage.css";
export default function Beach({flag}){
    if(flag){
        return(
            <div>

                <h1 style={{textAlign: "center", color: "#0E1E2D"}}>Beach Pictures</h1>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912923404_8c8f54ba50_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912923404_8c8f54ba50_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912964305_2cb0183aee_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912786759_a9a5f8a3be_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53911594067_a92dbfa8a6_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912602128_3f89562bd3_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912673644_7305964c20_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912674570_f8c401f01a_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912701374_44343bffaf_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912673644_7305964c20_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912674570_f8c401f01a_m.jpg"/>
                </div>
                <div className="D1"><img src="https://farm66.staticflickr.com/65535/53912701374_44343bffaf_m.jpg"/>
                </div>

            </div>
        );
    }
    return (
        <></>
    );
}