import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const NotFound = () => {
    return (
        <div className="animation-container" style={{ height: '80vh' }}>
            <DotLottieReact
                src="/animations/404_Animation_Dino.lottie"
                loop
                autoplay
            />
        </div>
    )
}

export default NotFound