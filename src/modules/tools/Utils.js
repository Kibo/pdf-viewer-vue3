import * as Constants from '../constants/Constants.js'

const Utils = {

	/*
	* Helper method for attaching Constants in View template.
	*
	* @param {String} - Constant name. For instance: 'ID_APP'
	* @returns - Constant value.
	*/
	getConstant( id ){
		let val = Constants[id]
		if( typeof val === 'undefined' ){
			throw new Error('No value for constant: ' + id)
		}
		return val
	}

}

export default Utils
