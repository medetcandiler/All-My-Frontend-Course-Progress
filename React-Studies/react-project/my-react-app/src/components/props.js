import PropTypes, { oneOfType } from 'prop-types'
export default function Car( {car, owner, score, isCarExist}){
    if(!isCarExist){
        return (
            <>
                <h1>Car is not exist here. Please Try again to find out the car.</h1>
            </>
        )
    }
    return(
        <>
            <h2>
                What with all the happiness I am kind of happy today. And this is a {car.model} model car and brand is {car.cars[2]}.
            </h2>
            <p>
                The owner of car { owner ? 'medet' : ' was dead'}. They have these number { score.join(' ')}.
            </p>
        </>
    );
}

Car.propTypes={
    car : PropTypes.shape({
        cars: PropTypes.array,
        model : PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),
    owner : PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    isCarExist: PropTypes.bool
}

Car.defaultProps = {
    isCarExist: true,
}