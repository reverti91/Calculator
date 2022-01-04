const container=document.getElementById('container');
const div_calculate=document.createElement('div');
div_calculate.setAttribute('style','border:2px solid cadetblue;background-color:bisque;border-top:20px solid cadetblue');

const div_show=document.createElement('div');
div_show.setAttribute('style','text-align:right;background-color:bisque;width:300px;height:70px;');
div_calculate.appendChild(div_show);
container.appendChild(div_calculate);

const div_component=document.createElement('div');
div_component.setAttribute('style','text-align:right;background-color:darkgrey');


const div_row_modify=document.createElement('div');
div_row_modify.setAttribute('style','display:flex;justify-content:center;text-align:right;background-color:darkgrey');

const div_clear=document.createElement('div');
div_clear.textContent="CLEAR";
div_clear.setAttribute('style','font-size:20px;width:150px;height:40px;text-align:center;color:white;border-right:2px solid white');

const div_supprim=document.createElement('div');
div_supprim.textContent="SUPPRIM";
div_supprim.setAttribute('style','font-size:20px;width:150px;height:40px;text-align:center;color:white;border-left:2px solid white');

div_row_modify.appendChild(div_clear);
div_row_modify.appendChild(div_supprim);
div_component.appendChild(div_row_modify);

const div_row_operator=document.createElement('div');
div_row_operator.setAttribute('style','display:flex;justify-content:center;');


const div_operator_add=document.createElement('div');
div_operator_add.setAttribute('id','add');
div_operator_add.setAttribute('class','compomnent');
div_operator_add.textContent="+";
div_operator_add.setAttribute('style','font-size:25px;width:75px;height:40px;text-align:center;border:2px solid white');

const div_operator_subtract=document.createElement('div');
div_operator_subtract.setAttribute('id','subtract');
div_operator_subtract.setAttribute('class','compomnent');
div_operator_subtract.textContent="-";
div_operator_subtract.setAttribute('style','font-size:25px;width:75px;height:40px;text-align:center;border:2px solid white');

const div_operator_multiply=document.createElement('div');
div_operator_multiply.setAttribute('id','multiply');
div_operator_multiply.setAttribute('class','compomnent');
div_operator_multiply.textContent="*";
div_operator_multiply.setAttribute('style','font-size:25px;width:75px;height:40px;text-align:center;border:2px solid white');

const div_operator_divide=document.createElement('div');
div_operator_divide.setAttribute('id','divide');
div_operator_divide.setAttribute('class','compomnent');
div_operator_divide.textContent="/";
div_operator_divide.setAttribute('style','font-size:25px;width:75px;height:40px;text-align:center;border:2px solid white');


div_row_operator.appendChild(div_operator_add);

div_row_operator.appendChild(div_operator_subtract);
div_row_operator.appendChild(div_operator_multiply);
div_row_operator.appendChild(div_operator_divide);
div_component.appendChild(div_row_operator);


const div_row_number1=document.createElement('div');
div_row_number1.setAttribute('style','display:flex;justify-content:center;');

const div_number_6=document.createElement('div');
div_number_6.setAttribute('id','6');
div_number_6.setAttribute('class','compomnent');
div_number_6.textContent="6";
div_number_6.setAttribute('style','font-size:25px;width:75px;height:50px;text-align:center;border:2px solid white');

const div_number_7=document.createElement('div');
div_number_7.setAttribute('id','7');
div_number_7.setAttribute('class','compomnent');
div_number_7.textContent="7";
div_number_7.setAttribute('style','font-size:25px;width:75px;height:50px;text-align:center;border:2px solid white');

const div_number_8=document.createElement('div');
div_number_8.setAttribute('id','8');
div_number_8.setAttribute('class','compomnent');
div_number_8.textContent="8";
div_number_8.setAttribute('style','font-size:25px;width:75px;height:50px;text-align:center;border:2px solid white');

const div_number_9=document.createElement('div');
div_number_9.setAttribute('id','9');
div_number_9.setAttribute('class','compomnent');
div_number_9.textContent="9";
div_number_9.setAttribute('style','font-size:25px;width:75px;height:50px;text-align:center;border:2px solid white');

div_row_number1.appendChild(div_number_6);
div_row_number1.appendChild(div_number_7);
div_row_number1.appendChild(div_number_8);
div_row_number1.appendChild(div_number_9);
div_component.appendChild(div_row_number1);


const div_row_number2=document.createElement('div');
div_row_number2.setAttribute('style','display:flex;justify-content:center;');

const div_number_2=document.createElement('div');
div_number_2.setAttribute('id','2');
div_number_2.setAttribute('class','compomnent');
div_number_2.textContent="2";
div_number_2.setAttribute('style','font-size:25px;width:75px;height:50px;text-align:center;border:2px solid white');

const div_number_3=document.createElement('div');
div_number_3.setAttribute('id','3');
div_number_3.setAttribute('class','compomnent');
div_number_3.textContent="3";
div_number_3.setAttribute('style','font-size:25px;width:75px;height:50px;text-align:center;border:2px solid white');

const div_number_4=document.createElement('div');
div_number_4.setAttribute('id','4');
div_number_4.setAttribute('class','compomnent');
div_number_4.textContent="4";
div_number_4.setAttribute('style','font-size:25px;width:75px;height:50px;text-align:center;border:2px solid white');

const div_number_5=document.createElement('div');
div_number_5.setAttribute('id','5');
div_number_5.setAttribute('class','compomnent');
div_number_5.textContent="5";
div_number_5.setAttribute('style','font-size:25px;width:75px;height:50px;text-align:center;border:2px solid white');

div_row_number2.appendChild(div_number_2);
div_row_number2.appendChild(div_number_3);
div_row_number2.appendChild(div_number_4);
div_row_number2.appendChild(div_number_5);
div_component.appendChild(div_row_number2);



const div_row_number3=document.createElement('div');
div_row_number3.setAttribute('style','display:flex;justify-content:center;');

const div_number_1=document.createElement('div');
div_number_1.setAttribute('id','1');
div_number_1.setAttribute('class','compomnent');
div_number_1.textContent="1";
div_number_1.setAttribute('style','font-size:25px;width:75px;height:50px;text-align:center;border:2px solid white');

const div_number_0=document.createElement('div');
div_number_0.setAttribute('id','0');
div_number_0.setAttribute('class','compomnent');
div_number_0.textContent="0";
div_number_0.setAttribute('style','font-size:25px;width:75px;height:50px;text-align:center;border:2px solid white');

const div_float=document.createElement('div');
div_float.setAttribute('id','.');
div_float.setAttribute('class','compomnent');
div_float.textContent=".";
div_float.setAttribute('style','font-size:25px;width:75px;height:50px;text-align:center;border:2px solid white');

const div_equal=document.createElement('div');
div_equal.setAttribute('id','=');
div_equal.setAttribute('class','compomnent');
div_equal.textContent="=";
div_equal.setAttribute('style','font-size:25px;width:75px;height:50px;text-align:center;border:2px solid white');

div_row_number3.appendChild(div_number_1);
div_row_number3.appendChild(div_number_0);
div_row_number3.appendChild(div_float);
div_row_number3.appendChild(div_equal);
div_component.appendChild(div_row_number3);

//Add all div in html
container.appendChild(div_component);

let action_compomnent=document.getElementsByClassName('compomnent');
let first_number=null;
let result=null;
let view=null;
let float=null;
//Click event on all btn
for (var i = 0; i < action_compomnent.length; i++) {
    action_compomnent[i].addEventListener('click', event=> {
        var attribute = event.target.getAttribute("id");
       
        //console.log(attribute);
        switch (attribute) {
            case 'add':
                if(first_number==null){
                    return;
                }else{
                    console.log(view);
                    view=view+"+";
                    //operator="-";
                    div_show.innerHTML=view;
                    float=document.getElementById('float');
                    float.setAttribute('id','.');
                }
            break;
            case 'subtract':
                if(first_number==null){
                    return;
                }else{
                    view=view+"-";
                    //operator="-";
                    div_show.innerHTML=view;
                    float=document.getElementById('float');
                    float.setAttribute('id','.');
                }
            break;
            case 'multiply':
                if(first_number==null){
                    return;
                }else{
                    view=view+"*";
                    //operator="*";
                    div_show.innerHTML=view;
                    float=document.getElementById('float');
                    float.setAttribute('id','.');
                }
            break;
            case 'divide':
                if(first_number==null){
                    return;
                }else{
                    view=view+"/";
                    //operator="/";
                    div_show.innerHTML=view;
                    float=document.getElementById('float');
                    float.setAttribute('id','.');
                }
            break;
            case '=':
                if(first_number==null ){
                    return;
                }else{
                    const index_operator = [];
                    let first_val=null;
                    let second_val=null;
                    let result=null;
                    let two_val=null;
                    for (let i = 0; i < view.length; i++) {
                        const element = view[i];
                        //console.log(element);
                        if(view[i]==='+' || view[i]==='-' || view[i]==='*' || view[i]==='/'){
                            index_operator.push(i);
                        }
                    }
                    console.table(index_operator);
                    for (let i = 0; i < index_operator.length; i++) {
                        switch (view[index_operator[i]]) {
                            case '+':
                                 two_val= calculate_val(result,view,first_val,second_val,index_operator,i);
                                console.log(result);
                                two_val=two_val.split('-');
                                
                                if (result==null) {
                                    result=parseFloat(two_val[0])+parseFloat(two_val[1]);
                                    second_val=null;
                                }else{
                                    result=result+parseFloat(two_val[1]);
                                    second_val=null;
                                }
                            //Show result
                                if(index_operator.length==v){
                                    if ( view.split('<br>').length==1) {
                                        view=view+"<br>"+result;
                                   }else{
                                        view=view.split('<br>')[0]+"<br>"+result;
                                   }
                                    div_show.innerHTML=view;
                                    first_val=null;
                                    second_val=null;
                                    result=null;
                                }
                            break;
                            case '-':
                                 two_val= calculate_val(result,view,first_val,second_val,index_operator,i);
                                console.log(result);
                                two_val=two_val.split('-');
                                
                                if (result==null) {
                                    result=parseFloat(two_val[0])-parseFloat(two_val[1]);
                                    second_val=null;
                                }else{
                                    result=result-parseFloat(two_val[1]);
                                    second_val=null;
                                }
                               
                            //Show result
                                if(index_operator.length==v){
                                    if ( view.split('<br>').length==1) {
                                        view=view+"<br>"+result;
                                   }else{
                                        view=view.split('<br>')[0]+"<br>"+result;
                                   }
                                    div_show.innerHTML=view;
                                    first_val=null;
                                    second_val=null;
                                    result=null;
                                }
                            break;
                            case '*':
                                 two_val= calculate_val(result,view,first_val,second_val,index_operator,i);
                                console.log(result);
                                two_val=two_val.split('-');
                                
                                if (result==null) {
                                    result=parseFloat(two_val[0])*parseFloat(two_val[1]);
                                    second_val=null;
                                }else{
                                    result=result*parseFloat(two_val[1]);
                                    second_val=null;
                                }
                               
                               
                            //Show result
                                if(index_operator.length==v){
                                   if ( view.split('<br>').length==1) {
                                        view=view+"<br>"+result;
                                   }else{
                                        view=view.split('<br>')[0]+"<br>"+result;
                                   }
                                    
                                    div_show.innerHTML=view;
                                    first_val=null;
                                    second_val=null;
                                    result=null;
                                }
                            break;
                            case '/':
                                 two_val= calculate_val(result,view,first_val,second_val,index_operator,i);
                                two_val=two_val.split('-');
                                if (parseFloat(two_val[1])==0) {
                                    alert('Division par 0 est impossible');
                                    div_show.innerHTML='IMPOSSIBLE OPERATION';
                                    first_val=null;
                                    view=null;
                                    second_val=null;
                                    result=null;
                                }else{
                                    if (result==null) {
                                        result=parseFloat(two_val[0])/parseFloat(two_val[1]);
                                        second_val=null;
                                    }else{
                                        result=result/parseFloat(two_val[1]);
                                        second_val=null;
                                    }

                                    //Show result
                                        if(index_operator.length==v){
                                            if ( view.split('<br>').length==1) {
                                                view=view+"<br>"+result;
                                        }else{
                                                view=view.split('<br>')[0]+"<br>"+result;
                                        }
                                            div_show.innerHTML=view;
                                            first_val=null;
                                            second_val=null;
                                            result=null;
                                        }
                                }
                                
                               
                               
                            
                            break;
                            
                            /*default:
                                if(first_val==null){
                                    first_val=view[i];
                                }else if(second_val==null){
                                    first_val=first_val+view[i];
                                }
                                
                            break;*/
                        }
                    }
                  
                }
            break;
              case '1':
                 if(view==null){
                    view="1";
                    div_show.innerHTML=view;
                  }else{
                    view=view+"1";
                    div_show.innerHTML=view;
                  }
                  if(first_number==null){
                      first_number=1;
                  }
                  
              
              break;
              case '2':
                if(view==null){
                    view="2";
                    div_show.innerHTML=view;
                  }else{
                    view=view+"2";
                    div_show.innerHTML=view;
                  }
                  if(first_number==null){
                      first_number=2;
                  }
                
              break;
              case '3':
               
                if(view==null){
                    view="3";
                    div_show.innerHTML=view;
                  }else{
                    view=view+"3";
                    div_show.innerHTML=view;
                  }
                  if(first_number==null){
                      first_number=3;
                  }
              break;
              case '4':
               
                if(view==null){
                    view="4";
                    div_show.innerHTML=view;
                  }else{
                    view=view+"4";
                    div_show.innerHTML=view;
                  }
                  if(first_number==null){
                      first_number=4;
                  }
              break;
              case '5':
               
                if(view==null){
                    view="5";
                    div_show.innerHTML=view;
                  }else{
                    view=view+"5";
                    div_show.innerHTML=view;
                  }
                  if(first_number==null){
                      first_number=5;
                  }
              break;
              case '6':
                
                if(view==null){
                    view="6";
                    div_show.innerHTML=view;
                  }else{
                    view=view+"6";
                    div_show.innerHTML=view;
                  }
                  if(first_number==null){
                      first_number=6;
                  }
              break;
              case '7':
               
                if(view==null){
                    view="7";
                    div_show.innerHTML=view;
                  }else{
                    view=view+"7";
                    div_show.innerHTML=view;
                  }
                  if(first_number==null){
                      first_number=7;
                  }
              break;
              case '8':
               
                if(view==null){
                    view="8";
                    div_show.innerHTML=view;
                  }else{
                    view=view+"8";
                    div_show.innerHTML=view;
                  }
                  if(first_number==null){
                      first_number=8;
                  }
              break;
              case '9':
                
                if(view==null){
                    view="9";
                    div_show.innerHTML=view;
                  }else{
                    view=view+"9";
                    div_show.innerHTML=view;
                  }
                  if(first_number==null){
                      first_number=9;
                  }
              break;
              case '0':
               
                if(view==null){
                    view="0";
                    div_show.innerHTML=view;
                  }else{
                    view=view+"0";
                    div_show.innerHTML=view;
                  }
                  if(first_number==null){
                      first_number=0;
                  }
              break;
              case '.':
               
                if(view==null){
                    return;
                  }else{
                    view=view+".";
                    div_show.innerHTML=view;
                    event.target.setAttribute('id','float');
                    
                  }
              break;
        
        }
    });
}

div_clear.addEventListener('click',event=>{
    
    view='';
    result='';
    first_val=null;
    second_val=null;
    div_show.innerHTML='';
    
});

div_supprim.addEventListener('click',event=>{
       let new_view=view.split('<br>');
       let new_val='';
       if (new_view.length==1) {
           end=view.length-2;
           for (let i = 0; i < end; i++) {
               new_val=new_val+view[i];
               
           }
           view=new_val;
           div_show.innerHTML=view;
       }else{
            end=new_view[0].length-2;
           for (let i = 0; i < end; i++) {
               new_val=new_val+view[i];
               
           }
           view=new_val;
           div_show.innerHTML=view;
       }
    });

    function calculate_val(result,view,first_val,second_val,index_operator,i){
        if(result==null){
                                        
            for (let j = 0; j < index_operator[i]; j++) {
                if(first_val==null){
                    first_val=view[j];
                    console.log(first_val);
                }else{
                    first_val=first_val+view[j];
                }
                
            }
            first_val=parseFloat(first_val);
        }
    
        v=i+1;
        start=index_operator[i]+1;
        if (index_operator.length===1) {
            end=view.length;
        }else{
            end=index_operator[v];
        }
         //Medium part
        for (let u =start; u < end; u++) {
            //const element = array[u];
            console.log(view[u]);
            if(second_val==null){
                second_val=view[u];
            }else{
                second_val=second_val+view[u];
            }
        }
        //Final part
        if(index_operator.length==v && index_operator.length!=1){
            for (let u =start; u < view.length; u++) {
                //const element = array[u];
                console.log(view[u]);
                if(second_val==null){
                    second_val=view[u];
                }else{
                    second_val=second_val+view[u];
                }
            }
        }
       

        return first_val+'-'+second_val;
       
    }
    
