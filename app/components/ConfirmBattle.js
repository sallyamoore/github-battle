var React = require('react');


function ConfirmBattle(props) {
    return props.isLoading === true
        ? <p>Loading!</p>
        : <p> Confirm! ^_^</p>
}

module.exports = ConfirmBattle;
