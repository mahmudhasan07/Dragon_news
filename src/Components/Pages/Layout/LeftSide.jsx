import { NavLink } from "react-router-dom";

const LeftSide = ({card}) => {
    // console.log(card);
    return (
        <div className=" border h-fit p-2 rounded-lg shadow-lg w-1/4">
            <h1 className="text-xl my-2 font-semibold">All Category</h1>
            <div>
                
            {
                card.map((element,idx) => <Category key={element.idx} detail ={element}></Category>)
            }

            
            </div>
        </div>
    );
};

const Category = ({detail})=>{
return(
    <div>
<NavLink to={`/${detail.id}`}> <button className="btn my-1">{detail.name}</button> </NavLink>
    </div>
)
}

export default LeftSide;