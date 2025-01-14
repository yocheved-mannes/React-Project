import { videoContainerStyle, videoStyle, categoriesContainerStyle, cardStyle, cardImageStyle, cardTextStyle, CategoriesContainer, AppContainer} from "../Style";

export function Home() {
    return <>
            <div style={AppContainer}>
                <div style={AppContainer}>
                    <div style={videoContainerStyle}>
                        <video style={videoStyle} autoPlay loop muted>
                            <source src="./img/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div>

                </div>

                {/* קטגוריות */}
                <div style={CategoriesContainer}>
                    <h1 style={{ textAlign: "center", margin: "20px 0", zIndex: 1  , color:"rgb(244, 171, 69)"}}>קטגוריות</h1>
                    <div style={categoriesContainerStyle}>
                        <div style={cardStyle}>
                            <img src="/img/klarinet2.jpg" alt="כלי נשיפה" style={cardImageStyle} />
                            <p style={cardTextStyle}>  כלי נשיפה</p>
                        </div>
                        <div style={cardStyle}>
                            <img src="/img/NEVEL2.jpg" alt="כלי מיתר" style={cardImageStyle} />
                            <p style={cardTextStyle}> כלי מיתר</p>
                        </div>
                        <div style={cardStyle}>
                            <img src="/img/ACORDION.jpg" alt="קלידים" style={cardImageStyle} />
                            <p style={cardTextStyle}>קלידים</p>
                        </div>
                        <div style={cardStyle}>
                            <img src="/img/topim.jpg" alt="כלי תיפוף" style={cardImageStyle} />
                            <p style={cardTextStyle}> כלי הקשה</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
}

export default Home;

