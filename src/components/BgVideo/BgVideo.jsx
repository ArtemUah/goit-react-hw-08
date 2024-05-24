import videoBg from '../../assets/VideoBg.mp4';
import css from '../BgVideo/BgVideo.module.css';

export default function BgVideo ({children}) {
    return (
        <div className={css.container}>
                    <video src={videoBg} autoPlay loop muted/>
                    <div className={css.content}>{children}</div>
        </div>
    )
}