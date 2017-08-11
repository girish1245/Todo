'use strict';

/**
 * Created by Happy on 5/14/2017.
 */

function handleKeyPress(e) {
    var key = e.keyCode || e.which;
    if (key == 13) {
        addTask();
    }
};

var clearAll = function clearAll() {
    var options = {};
    $("#effect").effect('blind', options, 600, removeAll);
};

var t = [];

function addTask() {
    var task = document.getElementById('tasks').value;
    //alert(task);
    if (task === '') {
        return;
    }

    if (t.includes(task)) {
        document.getElementById('tasks').value = "";
        alert("Please Enter a New task");
        return;
    } else {
        t.push(task);
    }

    if (document.getElementById('effect') !== null) {
        //for Second element
        var div = document.createElement('div');
        div.className = 'insideContent';
        div.onclick = function (event) {
            if (event.x > 600) {
                removeTask(event);
            }
            console.log(event);
        };
        var span = document.createTextNode(task);
        div.innerHTML = '<span onclick="selected(event)">' + span.data + '</span>';
        var div2 = document.createElement('div');
        div2.classList.add('border');
        document.getElementById('effect').appendChild(div);
        document.getElementById('effect').appendChild(div2);
    } else {
        //for First Element
        var parentDiv = document.createElement('div');
        parentDiv.className = 'contents ui-widget-header ui-corner-all';
        parentDiv.setAttribute('id', 'effect');
        document.getElementsByTagName('body')[0].appendChild(parentDiv);
        var _div = document.createElement('div');
        _div.className = 'insideContent';
        _div.onclick = function (event) {
            if (event.screenX > 800) {
                removeTask(event);
            }
            console.log(event);
        };
        var _span = document.createTextNode(task);
        _div.innerHTML = '<span onclick="selected(event)">' + _span.data + '</span>';
        var _div2 = document.createElement('div');
        _div2.classList.add('border');
        document.getElementById('effect').appendChild(_div);
        document.getElementById('effect').appendChild(_div2);
    }
}

function removeTask(cont) {
    cont.path[1].removeChild(cont.path[0]);
    cont.path[1].removeChild(cont.path[1].lastChild);
};

function selected(event) {

    if ((event.srcElement.parentElement.localName !== 'del' || event.path[1].firstElementChild.localName !== 'span') && event.path[0].firstElementChild == null) {
        event.path[1].className = 'selected';
        event.path[1].innerHTML = '<del>' + event.path[1].innerHTML + '</del>';
    }
    // else if(event.srcElement.localName !== 'span') {                //To remove completed tasks
    //     removeTask(event);
    //     event.path[3].removeChild(event.path[2]);
    // }
    else if (event.srcElement.localName === 'span' && event.offsetX < 450) {
            // To uncheck completed tasks
            event.path[2].innerHTML = event.path[1].innerHTML;
            event.path[2].classList.remove('selected');
            event.path[2].className = 'insideContent';
        }
    console.log(event);
};

function removeAll() {
    setTimeout(function () {
        document.getElementById('effect').remove();
    }, 1000);
}
