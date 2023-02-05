import PropTypes, { object, oneOfType } from "prop-types";
function User( {fname ,lname, age, isLoggedIn, friends, address} ){
    return (
        <div>
            <p className="lead">
                {
                    isLoggedIn ? `I'm ${fname} ${lname}. I'm ${age} years old. I live in ${address.title} ${address.zip}` : 'you cannot enter please try again '
                }
            </p>
            <div className="lead">
            {
                friends.map( (element) => {
                    return <div key={element.id} >
                        {element.name}
                    </div>
                })
            }
            </div>
        </div>

    )
}

User.propTypes= {
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        country: PropTypes.string,
        zip: PropTypes.number
    })
}

export default User;