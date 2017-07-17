function Weather() {
this._NOT_STROMY_PROBABILITY = 0.5
}
Weather.prototype = {
    isStormy: function () {
        return (Math.random() < this._NOT_STROMY_PROBABILITY)
            
        }
    }
