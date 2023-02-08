import PropTypes, { oneOfType } from 'prop-types'
export default function Car( {car, owner, score, isCarExist}){
    if(!isCarExist){
        return(
            <h1> The is not exist.</h1>
        )
    }
    return(
        <>
            <h2>
                What with all the happiness I am kind of happy today. And this is a {car.model} model car and brand is {car.cars[2]}.
            </h2>
            <p>
                The owner of car { owner ? 'medet' : ' was dead'}. They have these number { score.map((item, i) => <span key={i} > {item}</span>)}.
            </p>
        </>
    );
}

Car.propTypes={
    car: PropTypes.shape({
        cars: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
        model: PropTypes.string
    }),
    scores: PropTypes.array,
    owner: PropTypes.bool,
    isCarExist: PropTypes.bool.isRequired
}

Car.defaultProps = {
    isCarExist: true,
}