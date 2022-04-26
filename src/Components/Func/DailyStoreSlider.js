import SimpleImageSlider from "react-simple-image-slider";

export const DailyStoreSlider = () => {

    const images = [
            { url: require('../../Assets/one.png') },
            { url: require('../../Assets/two.png') },
        ];

    return (
        <div className="sliderContainer">
            <SimpleImageSlider
                width={896}
                height={254}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    )
}