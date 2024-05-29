
const list = ['Home', 'Education', 'Gaming','Music','Movies','Coding','Sports','Comedy'];


const Menu = (props) => {
    const selectCategory = (value) =>{
        props.setactiveField(value);
        props.setisPending(true);
    }
    return (

        <div className="tabs">
            {list.map((field)=><div key={field} className={props.activeField === field?"cat activefield": "cat"} onClick={(e)=>selectCategory(field)}>
            <img src={props.activeField===field?require(`../assets/${field}-selected.png`):require(`../assets/${field}.png`)} alt=""/><p>{field}</p>
            </div>)}
            
            
        </div>
    );
}
 
export default Menu;