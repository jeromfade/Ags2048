
window.onload=()=>{
    {
        initialtile();

    }
}



let initialtile=()=>{
    let firstblock = Math.floor(
        Math.random() * 16);

    let secondblock = Math.floor(
        Math.random() * 16);

    if (firstblock==secondblock)
     {
         secondblock = firstblock+1 %16;
    }

    
    $("#block-"+firstblock)
        .html(
            "<p class='number' id='blk-"+firstblock+"'>2</p>")
                .css("background-color","red");

    $("#block-"+secondblock)
        .html(
            "<p class='number' id='blk-"+secondblock+"'>2</p>")
                .css("background-color","red");

}


let newtile=()=>{ 
    let emptyarray = []; 
    for (let i = 0; i <16; i++) {
        if ($( "#blk-"+i).text() == "") {
            emptyarray.push(i);
        }
       
    }


 let newitem = emptyarray[
     Math.floor(
         Math.random()*emptyarray.length)];

  $( "#blk-"+newitem).html("2");

}



let up=()=>{

    let changed = false;

for (let x = 0; x <4; x++) {

    for (let i = 0; i <16; i++) {

        if ( ($( "#blk-"+i).html() != "") && ($( "#blk-"+i).html() == $( "#blk-"+(i+4)).html())) {

            let temp= eval(2 * ($( "#blk-"+i).html()));

            $( "#blk-"+i).html(temp);

            $( "#blk-"+(i+4)).html("");

            changed = true;
        }

        if ($( "#blk-"+i).html() == "" ) { 

            let tem = $( "#blk-"+(i+4)).html();

            $( "#blk-"+i ).html(tem);

            $( "#blk-"+(i+4)).html("");

             changed = true;
        }


    }
 
}
if (changed) {
    newtile();
}
blkcolor();
win();
over();
score();

}



let down=()=>{

    let changed = false;

    for(let x=0;x<4;x++){

        for(let i=0;i<16;i++){

            if($('#blk-'+i).html() != ""  && $('#blk-'+i).html() == $('#blk-'+(i-4)).html()){

                let add = eval(2*($('#blk-'+i).html()));

                $('#blk-'+i).html(add);

                $('#blk-'+(i-4)).html("");

                 changed = true;

            }

            if($('#blk-'+i).html() == ""){

                let temp = $('#blk-'+(i-4)).html();

                $('#blk-'+i).html(temp);

                $('#blk-'+(i-4)).html("");

                 changed = true;
            }
        }
    }


    if(changed){

        newtile();
    }
    
    blkcolor();
win();
over();
score();


}



let left=()=>{

    let changed=false;

    for(let x = 0; x<4;x++){

        for( let i = 0 ; i<16;i++){

            if( $('#blk-'+i).html() != ""  && $('#blk-'+i).html() == $('#blk-'+(i+1)).html()){

                let temp = eval(2*($('#blk-'+i).html()));

                $('#blk-'+i).html(temp);

                $('#blk-'+(i+1)).html("");

                 changed = true;


            }

            if($('#blk-'+i).html() == "" &&  i != 3 && i != 7 && i != 11 ){

                let tem=$('#blk-'+(i+1)).html();

                $('#blk-'+i).html(tem);

                $('#blk-'+(i+1)).html("");

                 changed = true;
            }
        }
    }

    if(changed){
        newtile();
    }
blkcolor();
win();
over()
score()


}


let right= ()=>{

    for(let x = 0; x<4;x++){

        for( let i = 0 ; i<16;i++){

            if( $('#blk-'+i).html() != ""  && $('#blk-'+i).html() == $('#blk-'+(i-1)).html()){

                let temp = eval(2*($('#blk-'+i).html()));

                $('#blk-'+i).html(temp);

                $('#blk-'+(i-1)).html("");


            }

            if($('#blk-'+i).html() == ""  && i != 4 && i != 8 && i != 12 ){

                let tem=$('#blk-'+(i-1)).html();

                $('#blk-'+i).html(tem);

                $('#blk-'+(i-1)).html("");

                 changed = true;
            }
        }
    }

    if(changed){
        newtile();
    }
blkcolor();
win();
over()
score()


}


let blkcolor=()=>{

    for(let i=0; i<16;i++){

        let blok = $('#blk-'+i).html();

        switch(blok){
            case "":
            $('#block-'+i).css("background-color", "gray");
            break;
            case "2":
            $('#block-'+i).css("background-color", "Aquamarine");
            break;
            case '4':
            $('#block-'+i).css("background-color", "BlueViolet");
            break;
            case "8":
            $('#block-'+i).css("background-color", "Chartreuse");
            break;
            case "16":
            $('#block-'+i).css("background-color", "DarkOrange");
            break;
            case "32":
            $('#block-'+i).css("background-color", "Gray");
            break;
            case "64":
            $('#block-'+i).css("background-color", "IndianRed");
            break;
            case '128':
            $('#block-'+i).css("background-color", "LightGreen");
            break;
            case "256":
            $('#block-'+i).css("background-color", "Yellow");
            break;
            case "512":
            $('#block-'+i).css("background-color", "Lime");
            break;
            case "1024":
            $('#block-'+i).css("background-color", "red");
            break;
            case "2028":
                $('#block-'+i).css("background-color", "Indigo");
                break;



        }


    }
}

let win=()=>{
    for(let i=0;i<16;i++)
{
    if($('#blk-'+i).text()==2048){
        $('#gamestatus').text('You Won');
            $("button").prop("disabled", true);

    }
}
}


let over=()=>{
 let ar=[];
    for(let i=0;i<16;i++){
    if($('#blk-'+i).text()==''){

        ar.push($('#blk-'+i).text());


    }

}
if(ar.length == 0){
    $('#gamestatus').text('Game_Over');
    
    }

}


let score=()=>{
    let ary=[];
    for (let i=0;i<16;i++){
        if($('#blk-'+i).html()!=''){
            ary.push($('#blk-'+i).html());
        }

    }
    let a=Math.max(...ary);
    $('#score').text(a);

}


        
    
