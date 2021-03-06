const aion = require('./types/aion.js')

/**
 * Generate keypair from private key
 * 
 * @param {string} type
 * @param {string} private_key
 * 
 * @returns {
 *      {string} private_key,
 *      {string} public_key,
 *      {string} address
 * }
 */
function from_private_key(type, private_key){
    switch(type){
        case 'aion': return aion.from_private_key(private_key)
        default: return {}
    }
}

/**
 * Sign a raw transaction
 * 
 * @param {string} type 
 * @param {string} tx
 * @param {string} private_key
 * @param {string} public_key
 * 
 * @return {string}
 */
function sign(type, tx, private_key, public_key){
    switch(type){
        case 'aion': return aion.sign(tx, private_key, public_key)
        default: return {}
    }
}

/**
 * Unsign a raw transaction
 * 
 * @param {string} type 
 * @param {string} tx 
 * 
 * @return {object}
 */
function unsign(type, tx){
    switch(type){
        case 'aion': return aion.unsign(tx)
        default: return {}
    }
}

module.exports = {
    from_private_key,
    sign,
    unsign
}