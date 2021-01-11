canvas = new fabric.Canvas("mycanvas");

player_x = 10;
player_y = 10;

block_height = 30;
block_width = 30;

var player_object = "";
var block_image_object = "";

function player_update(){

    fabric.Image.fromURL("avenger_player.png", function(Img){

        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(player_object);

    });
}

function new_image(get_image){

    fabric.Image.fromURL(get_image, function(Img){

        block_image_object = Img;
        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey ==  true  && keyPressed == 80){

        block_width = block_width +10;
        block_height = block_height +10;
        console.log("shift and p is pressed");
         document.getElementById("current_width").innerHTML = block_width;
         document.getElementById("current_height").innerHTML = block_height;

    }

    if(e.shiftKey ==  true  && keyPressed == 77){

        block_width = block_width -10;
        block_height = block_height -10;
        console.log("shift and m is pressed");
         document.getElementById("current_width").innerHTML = block_width;
         document.getElementById("current_height").innerHTML = block_height;

    }

    if(keyPressed == '73'){

        new_image('ironman_face.png');
        console.log("i");
    }

    if(keyPressed == '72'){

        new_image('hulkd_body.png');
        console.log("h");
    }


    if(keyPressed == '83'){

        new_image('spiderman_legs.png');
        console.log("s");
    }

    if(keyPressed == '84'){

        new_image('thor_right_hand.png');
        console.log("t");
    }

    if(keyPressed == '67'){

        new_image('captain_america_left_hand.png');
        console.log("c");
    }


    if(keyPressed == '38'){

        up();
        console.log("up");
    }

    if(keyPressed == '40'){

        down();
        console.log("down");
    }


    if(keyPressed == '37'){

        left();
        console.log("left");
    }


    if(keyPressed == '39'){

        right();
        console.log("right");
    } 

}
if(keyPressed == '90'){
    new_image("Final_output.png")
    console.log("z")
}

function up(){

    if (player_y >= block_height){

        player_y = player_y - block_height;
        console.log("the x :" +player_x +" and y :" +player_y);
        canvas.remove(player_object);
        player_update();
    }

}

function down(){

    if (player_y <= 450){

        player_y = player_y + block_height;
        console.log("the x :" +player_x +" and y :" +player_y);
        canvas.remove(player_object);
        player_update();
    }

}

function left(){

    if (player_x >= block_width){

        player_x = player_x - block_width;
        console.log("the x :" +player_x +" and y :" +player_y);
        canvas.remove(player_object);
        player_update();
    }

}

function right(){

    if (player_x <= 830){

        player_x = player_x + block_width;
        console.log("the x :" +player_x +" and y :" +player_y);
        canvas.remove(player_object);
        player_update();
    }

}