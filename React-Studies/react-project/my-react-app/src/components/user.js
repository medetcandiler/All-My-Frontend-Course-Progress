import PropTypes, { object, oneOfType } from "prop-types";

function User({ fname, lname, age, address, friends, isLoggedIn }) {
    if (!isLoggedIn) {
        return (
            <>
                <h1 className="bg-secondary p-5 text-center text-danger">the user cannot find please try again..</h1>
            </>
        )
    } else return (
        <>
            <h2>
                {
                    ` User informations => name: ${fname} surname:${lname} age:${age}`
                }
            </h2>
            <div>
                {`The users addresses informations => The user lives in ${address.country} and ${address.title} and also zip number of the user is ${address.zip}`}
            </div>
            <br />
            {friends.map((item, i) => {
                return <div key={i}>
                    {item.name}
                </div>
            })}
        </>

    )
}

User.propTypes = {
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    friends: PropTypes.array,
    isLoggedIn: oneOfType([PropTypes.string, PropTypes.bool]),
    address: PropTypes.shape({
        title: PropTypes.string,
        country: PropTypes.string,
        zip: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
}

User.defaultProps = {
    isLoggedIn: false,
    fname: 'Autofilled'
}

export default User;