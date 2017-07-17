function Port() {

} 

Port.prototype = {

}

function Ship(port) {
    this._currentPort = port
} 

Ship.prototype = {
    getCurrentPort: function () {
        return this._currentPort
    },
    setSail: function () {
        this._currentPort = null
        return
    },
    dock: function () {
        this._arrivalPort = null
        return
    }

}

