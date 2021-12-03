import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                    <input placeholder="What's in your mind?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOptions">
                        <Label htmlColor="blue"  className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOptions">
                        <Room htmlColor="green"  className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOptions">
                        <EmojiEmotions htmlColor="gold"  className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                    <div className="shareButton">
                        Share
                    </div>
                </div>
                
            </div>
        </div>
    )
}
