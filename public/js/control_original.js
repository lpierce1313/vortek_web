function find_msg_b(i, j, k, findOptions){
  for(var index = 0; index < findOptions.length; index++ ){
    if(findOptions[index].key == i.toString() + j.toString() + k.toString()){
      val = index;
      break;
    }
  }
}

function find_index(keys, arr){
  var index = 0;
  var char = keys.arr[keys.cursor_pos];
  for(index = 0; index < keys.arr.length; index++){
    if(arr[index] == keys.arr[keys.cursor_pos]) {
      break;
    }
  }
  return index;
}

function update_time(){
  control_menu[0].menu[1].menu[0].msg_t = moment().format('ll');
  control_menu[0].menu[1].menu[0].msg_b = moment().format('LTS');
}


var i = 0, j = 0, k = 0, x, y;
window.onmousedown = function(e) {
    var keys = control_menu[i].menu[j].menu[k];
    var ys = Math.round(window.scrollY);
    var buttons = {exit: 0, up: 0, enter: 0, left: 0, down: 0, right: 0, enterPress: 1}, arr_str = '0';

    x = e.pageX - canvas.getBoundingClientRect().left;
    y = e.pageY - canvas.getBoundingClientRect().top;

    if (Math.sqrt((x-circles.circle_one.x)*(x-circles.circle_one.x) + (y-circles.circle_one.y - ys)*(y-circles.circle_one.y - ys)) < radius) { buttons.exit = 1; }
    if (Math.sqrt((x-circles.circle_two.x)*(x-circles.circle_two.x) + (y-circles.circle_two.y - ys)*(y-circles.circle_two.y - ys)) < radius) { buttons.up = 1; }
    if (Math.sqrt((x-circles.circle_three.x)*(x-circles.circle_three.x) + (y-circles.circle_three.y - ys)*(y-circles.circle_three.y - ys)) < radius) { buttons.enter = 1; }
    if (Math.sqrt((x-circles.circle_four.x)*(x-circles.circle_four.x) + (y-circles.circle_four.y - ys)*(y-circles.circle_four.y - ys)) < radius) { buttons.left = 1; }
    if (Math.sqrt((x-circles.circle_five.x)*(x-circles.circle_five.x) + (y-circles.circle_five.y - ys)*(y-circles.circle_five.y - ys)) < radius) { buttons.down = 1; }
    if (Math.sqrt((x-circles.circle_six.x)*(x-circles.circle_six.x) + (y-circles.circle_six.y - ys)*(y-circles.circle_six.y - ys)) < radius) { buttons.right = 1; }

    update_time(control_menu);
    find_msg_b(i, j, k, findOptions); //Updates val

    if(enterPress == -1){
      var obj = findOptions[val];
      find_msg_b(i, j, k, findOptions); //Updates val
      //Key Press 4
      if(keys.cursor == 4){

        if(buttons.enter){

        }
        else if(buttons.exit){

        }
        else if(buttons.up){
          if(obj.index == obj.arr.length - 1){
              obj.index = 0;
          }
          else{
            obj.index++;
          }
          keys.msg_b = obj.arr[obj.index];
        }
        else if(buttons.down){

        }
        else if(buttons.left){

        }
        else if(buttons.right){

        }

      }

    }

    else{

    }

    if(keys.cursor == 1 || keys.cursor == 2 || keys.cursor == 3){
      var arr = [];
      var cursor_2_obj = {};
      if(keys.cursor == 1){
        arr = num_arr;
      }
      else if(keys.cursor == 2){
        arr = cursor_arr;
      }
      else if(keys.cursor == 3){
        arr = yes_no_arr;
      }
      else if(keys.cursor = 5){

      }
      var num = find_index(keys, arr);
    }

    if(buttons.enter){
      //Detect if enter can be pressed, then change if it can and dont execute bottom else update bottom
      console.log(keys);
      if(keys.cursor == 4 || keys.cursor == 1 || keys.cursor == 2 || keys.cursor == 3 || keys.cursor == 5 || keys.cursor == 6 || keys.cursor == 7){
        enterPress = (-1) * enterPress; //Toggle an enter press
        context.fillStyle = "black";
        context.fillRect(70,215,300, 100);
      }
      else{
        j = 0;
        // console.log(i);
        if(i == 0){
          i++;
        }
      }
    }

    if(buttons.up){
      if(enterPress == -1){
        if(keys.cursor == 4){
          if(obj.index == obj.arr.length - 1){
              obj.index = 0;
          }
          else{
            obj.index++;
          }
          keys.msg_b = obj.arr[obj.index];
        }
        else if(keys.cursor == 1 || keys.cursor == 2 || keys.cursor == 3){
          if(num == arr.length - 1){
            num = 0;
          }
          else{
            num++;
          }
          keys.arr[keys.cursor_pos] = arr[num];
          console.log(keys.arr[keys.cursor_pos]);
        }
        else if(keys.cursor = 5){

        }
      }

      //dont touch
      else{
        if(!k > 0){
          if(j == control_menu[i].menu.length - 1){
            j = 0;
          }
          else{
            j++;
          }
        }
      }
    }


    if(buttons.down){

      if(enterPress == -1){
        if(keys.cursor == 4){
          if(findOptions[val].index == 0){
            findOptions[val].index = findOptions[val].arr.length - 1;
          }
          else{
            findOptions[val].index--;
          }
          keys.msg_b = obj.arr[obj.index];
        }

        else if(keys.cursor == 1 || keys.cursor == 2 || keys.cursor == 3){
          if(num == 0){
            num = arr.length - 1;
          }
          else{
            num--;
          }
          keys.arr[keys.cursor_pos] = arr[num];
          console.log(keys.arr[keys.cursor_pos]);
        }
        else if(keys.cursor = 5){

        }
      }

      else{
        if(!k > 0){
          if(j == 0){
            j = control_menu[i].menu.length - 1;
          }
          else{
            j--;
          }
        }
      }
    }


    if(buttons.left){
      //Enter not pressed
      if(enterPress == -1){
        if(keys.cursor == 1 || keys.cursor == 2 || keys.cursor == 3){
          if(keys.cursor_pos == 0){
            keys.cursor_pos = keys.arr.length - 1;
          }
          else{
            keys.cursor_pos--;
          }
        }
        else if(keys.cursor = 5){

        }
      }
      else{
        if(i != 0){
          if(j == 0){
            if(control_menu[i].menu[j].menu.length == 1){
              if(i == 1){
                i = control_menu.length - 1;
              }
              i--;
            }
          }
          if(control_menu[i].menu[j].menu.length > 1){
            if(k == 0){
              k = control_menu[i].menu[j].menu.length - 1;
            }
            k--;
          }
        }
      }


    }


    if(buttons.right){
      //Enter not pressed
      if(enterPress == -1){
        if(keys.cursor == 1 || keys.cursor == 2 || keys.cursor == 3){
          if(keys.cursor_pos == keys.arr.length - 1){
            keys.cursor_pos = 0;
          }
          else{
            keys.cursor_pos++;
          }
        }
        else if(keys.cursor = 5){

        }
      }
      else{
        if(i != 0){
          if(j == 0){
            if(control_menu[i].menu[j].menu.length == 1){
              if(i == control_menu.length - 1){
                i = 1;
              }
              else{
                i++;
              }
            }
          }
          if(control_menu[i].menu[j].menu.length > 1){
            if(k == control_menu[i].menu[j].menu.length - 1){
              k = 0;
            }
            else{
              k++;
            }
          }
        }
      }
    }


    if(buttons.exit){
      //Enter not pressed
      if(enterPress == -1){

      }

      else{
        if(i != 0){
          i = 0;
          j = 0;
          k = 0;
        }
      }
    }
    keys = control_menu[i].menu[j].menu[k];
    if(keys.cursor == 1  || keys.cursor == 2 || keys.cursor == 3 || keys.cursor == 6 || keys.cursor == 7) {
      arr_str = keys.arr.join('');
      keys.msg_b = arr_str;
    }
    console.log(i, j, k, keys);
    draw_result(keys.msg_t, keys.msg_b, enterPress);
}
