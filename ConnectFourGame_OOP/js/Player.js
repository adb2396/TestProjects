class Player {
	constructor(name, id, color, active = false) {
		this.name = name;
		this.id = id;
		this.color = color;
		this.active = active;
		this.tokens = this.createTokens(21);
	}

	/*
	*	Gets the unused tokens to the player
	*/
	get unusedTokens() {
		return this.tokens.filter( token => !token.dropped);
	}

	/*
	*	Gets the active tokens to the player
	*/
	get activeTokens() {
		return this.unusedTokens[0];
	}
	
	/**
	 * Check if a player has any undropped tokens left
	 * @return {Boolean} 
	 */
	checkTokens() {
		return this.unusedTokens.length == 0 ? false : true;
	}

	/**
    * Creates token objects for player
    * @param   {integer}   num - Number of token objects to be created
    * @return  {array}     tokens - an array of new token objects
    */
   createTokens(number) {

	const tokenArray = []

		for( let i=0; i<number; i++ ){
			let t = new Token( i, this);
			tokenArray.push( t );
		}

		return tokenArray;
	}

}