function Header(props){
    return(
        <nav>
            <h2>welcome my first react header component I will create whole page by using a lot of component in the future. Wait for that and I am aware of that you cannot wait... </h2>
        </nav>
    );
}

export function Indicator(){
    return(
        <div className="container">
            <p>
                {new Date().getFullYear()}
            </p>
        </div>
    );
}

export default Header;