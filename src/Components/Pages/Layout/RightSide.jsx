import image1 from "../../../assets/qZone1.png"
import image2 from "../../../assets/qZone2.png"
import image3 from "../../../assets/qZone3.png"
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaSquareFacebook } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


const RightSide = () => {
    return (
        <div className="w-1/4">
            <h1 className="text-2xl my-2 font font-semibold">Login With</h1>
            <div>
                <button className="border my-1 p-2 flex gap-2"><FcGoogle className="my-auto "></FcGoogle>Login With Google</button>
                <button className="border my-1 p-2 flex gap-2"><BsGithub className="my-auto "></BsGithub>Login With GitHub</button>
            </div>
            <div>
                <h1 className="text-2xl my-2 font font-semibold">Find Us On</h1>
                <div>
                    <p className="flex gap-2 border border-black p-2 text-lg"><FaFacebook className="my-auto"></FaFacebook>FaceBook</p>
                    <p className="flex gap-2 border border-black p-2 text-lg"><BsTwitter className="my-auto"></BsTwitter>Twitter</p>
                    <p className="flex gap-2 border border-black p-2 text-lg"><BsInstagram className="my-auto"></BsInstagram>Instagram</p>
                </div>
            </div>
            <div className="bg-gray-200">
                <h1 className="text-2xl my-2 font font-semibold">Q-Zone</h1>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
        </div>
    );
};

export default RightSide;