//For cursor option 4 with array choices
function find_msg_b(i, j, k, findOptions){
  for(var index = 0; index < findOptions.length; index++ ){
    if(findOptions[index].key == i.toString() + j.toString() + k.toString()){
      val = index;
      break;
    }
  }
}

//Find index to choose to start at the correct element for cursor 1,2, and 3
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

//Updates time to current state
function update_time(){
  control_menu[0].menu[1].menu[0].msg_t = moment().format('ll');
  control_menu[0].menu[1].menu[0].msg_b = moment().format('LTS');
}


//Variables for mouse event
var i = 0, j = 0, k = 0, x, y, keys, ys, obj, num, arr;
window.onmousedown = function(e) {

    // Coordinates on screen
    ys = Math.round(window.scrollY);
    x = e.pageX - canvas.getBoundingClientRect().left;
    y = e.pageY - canvas.getBoundingClientRect().top;

    //Button layouts
    var buttons = {exit: 0, up: 0, enter: 0, left: 0, down: 0, right: 0, enterPress: 1}, arr_str = '0';
    if (Math.sqrt((x-circles.circle_one.x)*(x-circles.circle_one.x) + (y-circles.circle_one.y - ys)*(y-circles.circle_one.y - ys)) < radius) { buttons.exit = 1; }
    if (Math.sqrt((x-circles.circle_two.x)*(x-circles.circle_two.x) + (y-circles.circle_two.y - ys)*(y-circles.circle_two.y - ys)) < radius) { buttons.up = 1; }
    if (Math.sqrt((x-circles.circle_three.x)*(x-circles.circle_three.x) + (y-circles.circle_three.y - ys)*(y-circles.circle_three.y - ys)) < radius) { buttons.enter = 1; }
    if (Math.sqrt((x-circles.circle_four.x)*(x-circles.circle_four.x) + (y-circles.circle_four.y - ys)*(y-circles.circle_four.y - ys)) < radius) { buttons.left = 1; }
    if (Math.sqrt((x-circles.circle_five.x)*(x-circles.circle_five.x) + (y-circles.circle_five.y - ys)*(y-circles.circle_five.y - ys)) < radius) { buttons.down = 1; }
    if (Math.sqrt((x-circles.circle_six.x)*(x-circles.circle_six.x) + (y-circles.circle_six.y - ys)*(y-circles.circle_six.y - ys)) < radius) { buttons.right = 1; }

    //To use less typing
    keys = control_menu[i].menu[j].menu[k];

    ////////////////////////////////////////////////////////////////////////////
    //                               Cursor Numbers                           //
    ////////////////////////////////////////////////////////////////////////////

    //Initial enter and exit press. Exit will return to main menu
    //Enter will allow cursor options if on correct menu or go into option menus if on index 0 ie "Outputs"
    if(buttons.enter){
      if(i == 0){
        i++;
        j = 0;
      }
      else {
        if(keys.cursor != 0){
          enterPress = (-1) * enterPress; //Toggle an enter press
          context.fillStyle = "black";
          context.fillRect(70,215,300,100);
          if(keys.cursor == 1 || keys.cursor == 2 || keys.cursor == 3){
            control_menu[i].menu[j].menu[k].msg_b = keys.arr.join('');
          }
        }
      }
    }
    //If exit, reset values
    if(buttons.exit){
      if(i != 0){
        i = 0;
        j = 0;
        k = 0;
      }
    }

    //If enter button hasn't been pressed do not allow cursor options. Scroll through outer menu
    if(enterPress == 1){
      if (buttons.up){
          if(!k > 0){
            if(j == control_menu[i].menu.length - 1){
              j = 0;
            }
            else{
              j++;
            }
          }
      }
      else if (buttons.down){
        if(!k > 0){
          if(j == 0){
            j = control_menu[i].menu.length - 1;
          }
          else{
            j--;
          }
        }
      }
      else if (buttons.left){
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
      else if (buttons.right){
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

    //When key is pressed, use the cursor options accordingly
    else{
      if(keys.cursor == 4){ //Scroll through the array
        obj = findOptions[val];
        find_msg_b(i, j, k, findOptions); //Updates val
        if(buttons.up){
          if(obj.index == obj.arr.length - 1){
              obj.index = 0;
          }
          else{
            obj.index++;
          }
          keys.msg_b = obj.arr[obj.index];
        }
        else if(buttons.down){
          if(obj.index == 0){
            obj.index = obj.arr.length - 1;
          }
          else{
            obj.index--;
          }
          keys.msg_b = obj.arr[obj.index];
        }
        //Not Needed but keep just incase
        else if(buttons.left) { }
        else if(buttons.right){ }
      }
      else if(keys.cursor == 1 || keys.cursor == 2 || keys.cursor == 3){ //Cursor options
        if(keys.cursor == 1) { arr = num_arr; }
        else if(keys.cursor == 2) { arr = cursor_arr; }
        else if(keys.cursor == 3) { arr = yes_no_arr; }
        num = find_index(keys, arr);
        if(buttons.up){
          if(num == arr.length - 1){
            num = 0;
          }
          else{
            num++;
          }
          keys.arr[keys.cursor_pos] = arr[num];
        }
        else if(buttons.down){
          if(num == 0){
            num = arr.length - 1;
          }
          else{
            num--;
          }
          keys.arr[keys.cursor_pos] = arr[num];
        }
        else if(buttons.left){
          if(keys.cursor_pos == 0){
            keys.cursor_pos = keys.arr.length - 1;
          }
          else{
            keys.cursor_pos--;
          }
        }
        else if(buttons.right){
          if(keys.cursor_pos == keys.arr.length - 1){
            keys.cursor_pos = 0;
          }
          else{
            keys.cursor_pos++;
          }
        }
      }
      else if(keys.cursor == 5){ //Two cursor options in units menu
        if(keys.key == "670"){
          var obj_t = vol_arr;
          var obj_b = time_arrVol;
        }
        else if(keys.key == "660"){
          var obj_t = mass_arr;
          var obj_b = time_arrMass;
        }
        if(buttons.up){
          if(obj_t.cursor_pos == 0){
            if(obj_t.index == obj_t.arr.length - 1){
              obj_t.index = 0;
            }
            else{
              obj_t.index++;
            }
          }
          else{
            if(obj_b.index == obj_b.arr.length - 1){
              obj_b.index = 0;
            }
            else{
              obj_b.index++;
            }
          }
        }
        else if(buttons.down){
          if(obj_t.cursor_pos == 0){
            if(obj_t.index == 0){
              obj_t.index = obj_t.arr.length - 1;
            }
            else{
              obj_t.index--;
            }
          }
          else{
            if(obj_b.index == 0){
              obj_b.index = obj_b.arr.length - 1;
            }
            else{
              obj_b.index--;
            }
          }
        }
        else if(buttons.left){
          if(obj_t.cursor_pos == 0){
            obj_t.cursor_pos = 1;
          }
          else{
            obj_t.cursor_pos = 0;
          }
        }
        else if(buttons.right){
          if(obj_t.cursor_pos == 1){
            obj_t.cursor_pos = 0;
          }
          else{
            obj_t.cursor_pos = 1;
          }
        }
        control_menu[i].menu[j].menu[k].msg_b = obj_t.arr[obj_t.index] + '/' + obj_b.arr[obj_b.index];
      }
    }

    if(keys.cursor == 6){ //Update Time
      if(j == 2){
        keys.arr = [moment().format('hh'), ':', moment().format('mm'), ':', moment().format('ss'), ' ', moment().format('A')];
        control_menu[i].menu[j].menu[k].msg_b = keys.arr.join('');
      }
    }
    else if(keys.cursor == 7){ //Update Date
      if(j == 1){
        keys.arr = [moment().format('MM'), '/', moment().format('DD'), '/', moment().format('YY')];
        control_menu[i].menu[j].menu[k].msg_b = keys.arr.join('');
      }
    }
    keys = control_menu[i].menu[j].menu[k]; //Update keys after indexes have been added
    draw_result(keys.msg_t, keys.msg_b, enterPress);
  }
