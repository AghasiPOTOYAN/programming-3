class Grass {
    constructor(x,y){
            this.x = x
            this.y = y
            this.multiply = 0
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x    , this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y    ],
                [this.x + 1, this.y    ],
                [this.x - 1, this.y + 1],
                [this.x    , this.y + 1],
                [this.x + 1, this.y + 1]
            ];
        
    }

    chooseCell(char){
            let found = []

            for(let i in this.directions){
                    var x  = this.directions[i][0]
                    var y  = this.directions[i][1]
                    if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                            if(matrix[y][x] == char){
                                    found.push(this.directions[i])
                            }
                    }
            }

            return found
    }

    mul(){
        this.multiply++
        var emptyCell = this.chooseCell(0)
        var newCell = random(emptyCell)

            if(this.multiply >= 1 && newCell){
                  var newX  = newCell[0]
                  var newY = newCell[1]

                  matrix[newY][newX] = 1

                  var gr  = new Grass(newX,newY)
                  grassArr.push(gr)
                  this.multiply = 0
            }

    }

move() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;

           
            this.x = newX;
            this.y = newY;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        } 
    }
}