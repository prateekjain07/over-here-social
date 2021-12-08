import { Users } from '../../DummyData'
import Online from '../online/Online'
import './rightbar.css'
export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />    
                    <span className="birthdayText">
                        <strong>Pola Fester</strong> and <strong>3 others</strong> have birthdays today.
                    </span>
                </div>    
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) =>(
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </div>            
        </div>
    )
}
