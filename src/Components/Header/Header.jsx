import Logo from "../../assets/logo.png"
import moment from 'moment'
// import Moment from 'react-moment';


const Header = () => {
    const date = new Date()
    return (
        <div className="text-center">
            <img className="mx-auto" src={Logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
             <div>
             {/* <Moment format='MMMM Do YYYY, h:mm:ss a' ></Moment> */}
             {/* <moment format='MMMM Do YYYY, h:mm:ss a'>{date}</moment> */}
             </div>
        </div>
    );
};

export default Header;