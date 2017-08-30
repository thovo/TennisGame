import Tennis from './src/Tennis';
describe("Tennis", function() {
    let game;
  
    beforeEach(function() {
        game = new Tennis("Roger Federer", "Rafael Nadal");
        game.playerOneScore();
    });
  
    it("Player 1 score", function() {        
        expect(game.getStatus()).toEqual("Player Roger Federer : Fifteen -  Player Rafael Nadal : Zero");  
    });

    it("Indicate the status of the game", function() {
        game.playerOneScore();
        game.playerTwoScore();   
        expect(game.getStatus()).toEqual("Player Roger Federer : Thirty -  Player Rafael Nadal : Fifteen");  
    });
  
    describe("Deuce", function() {
        beforeEach(function() {            
            game.playerOneScore();            
            game.playerTwoScore();
            game.playerTwoScore();
        });
  
        it("Should indicate the game is deuce", function() {
            expect(game.getStatus()).toEqual("Deuce");
        });
    });

    describe("Player 2 has avantage", function() {
        beforeEach(function() {
            game.playerOneScore();    
            game.playerTwoScore();
            game.playerTwoScore();
        });
      it("Should show player 2 has avantage", function() {
        expect(game.getStatus()).toEqual("Player Rafael Nadal has avantage");
      });
    });

    describe("Player 2 has won", function() {
        beforeEach(function() {  
            game.playerTwoScore();
        });
      it("Should show player 2 has won", function() {
        expect(game.getStatus()).toEqual("Player Rafael Nadal has won");
      });
    });
    
  });
  