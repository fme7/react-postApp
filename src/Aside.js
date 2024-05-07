import './Aside.css'
function Aside(props){
    let {open} = props

    return(
        <aside className={open ? '' : "hidden"}>
            <nav>
                <a href='/'>Home</a>
                <a href='/posts'>Posts</a>
                <a href='/users'>Users</a>
            </nav>
        </aside>
    );
}
export default Aside;