let player = {
    health: 100,
    fun: 100,
    play: function() {
        console.log('play');
        this.fun += 20;
        console.log(this.fun);
    },
    eat: function(food) {
        if(food == 'apple') {
            console.log('eat apple');
            this.health += 10;
            console.log(this.health);

        }else if(food == 'candy') {
            console.log('eat candy');
            this.health -= 10;
            this.fun += 10;
            console.log(this.health + this.fun);

        }
    }

};

player.eat('apple');
player.eat('candy');