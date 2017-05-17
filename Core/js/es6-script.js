/**
 * Created by Happy on 5/14/2017.
 */


var clearAll = () => {
    let options = {};
    $("#effect").effect( 'fold', options, 100, removeAll());
};

/*$("#button").on( "click", function() {
    clearAll();
    return false;
});
*/


function addTask() {
    const task = document.getElementById('tasks').value;
    //alert(task);
    if (task === '') {
        return;
    }
    if (document.getElementById('effect') !== null) {
        let div = document.createElement('div');
        div.className = 'insideContent';
        let content = document.createTextNode(task);
        div.appendChild(content);
   //     div.onmouseover = function() {
   //         removeTask(event);
    //    };
        div.onclick = function() {
            selected(event);
        };
        let div2 = document.createElement('div');
        div2.className = 'border';
        document.getElementById('effect').appendChild(div);
        document.getElementById('effect').appendChild(div2);
    }
    else {
        let parentDiv = document.createElement('div');
        parentDiv.className = 'contents ui-widget-header ui-corner-all';
        parentDiv.setAttribute('id', 'effect');
        document.getElementsByTagName('body')[0].appendChild(parentDiv);
        let div = document.createElement('div');
        div.className = 'insideContent';
        let content = document.createTextNode(task);
        div.appendChild(content);
//        div.addEventListener("mouseover", removeTask(task), false);
      //  div.onmouseover = function() {
       //     removeTask(event);
      //  };
        div.onclick = function() {
            selected(event);
        };
        let div2 = document.createElement('div');
        div2.className = 'border';
        document.getElementById('effect').appendChild(div);
        document.getElementById('effect').appendChild(div2);
    }

        //'<div id="effect" class="insideContent">' + task + '</div><div class="border"></div>';
}

function removeTask(cont) {
    cont.path[1].removeChild(cont.path[0]);
    //console.log(cont);
};

function selected(event) {

   if(event.srcElement.localName === 'div' && (event.offsetX > 450)) {
        removeTask(event);
        event.path[1].removeChild(event.path[1].lastChild);

   }

    if(event.srcElement.localName === 'del' &&  (event.offsetX < 450)) {
        event.path[1].innerHTML = event.path[0].innerText;
        event.path[1].classList.remove('selected');
        event.path[1].className = 'insideContent';

    }

    if(event.srcElement.localName !== 'del') {
        event.path[0].className = 'selected';
        event.path[0].innerHTML = '<del>' + event.path[0].innerHTML + '</del>'
    }
    console.log(event);
};


function removeAll() {
    document.getElementById('effect').remove();
}
