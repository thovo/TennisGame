export default class Tennis {
    constructor(player1, player2){
        this._player1 = player1;
        this._player2 = player2;
        this._player1Score = 0;
        this._player2Score = 0;
    }

    // 1. A game is won by the first player to have won at least four points in total and at least two points more than the opponent.

    gameWon() {
        return (this._player1Score >=4 && this._player1Score >= this._player2Score + 2) ?
                        this._player1 : (this._player2Score >=4 && this._player2Score >= this._player1Score + 2) ? this._player2 : undefined;
    }

    // 2. The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as “love”, “fifteen”, “thirty”, and “forty” respectively.

    pointExchange(point) {
        switch (point) {
            case 0:
                return "Zero";
            case 1:
                return "Fifteen";
            case 2:
                return "Thirty";
            case 3:
                return "Forty";
            default:
                return undefined;
        }
    }

    // 3. If at least three points have been scored by each player, and the scores are equal, the score is “deuce”.

    checkDeuce() {
        return  (this._player1Score >= 3 && this._player2Score >=3 && this._player1Score === this._player2Score)? true : false;
    }

    // 4. If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “advantage” for the player in the lead.

    checkAvantage(){
        return (this._player1Score >= 3 && this._player2Score >=3) ? 
        (this._player1Score === this._player2Score+1) ? this._player1 : 
        ((this._player2Score === this._player1Score+1) ? this._player2 : undefined) : undefined;
    }


    playerOneScore() {
        return this._player1Score++;
    }

    playerTwoScore() {
        return this._player2Score++;
    }

    getStatus() {
        let status = this.gameWon();
        if(status) {
            return `Player ${status} has won`;
        }

        status = this.checkAvantage();

        if(status) {
            return `Player ${status} has avantage`;
        }

        status = this.checkDeuce();

        if(status) {
            return "Deuce";
        }

        return `Player ${this._player1} : ${this._player1Score} -  Player ${this._player2} : ${this._player2Score}`;

    }

}