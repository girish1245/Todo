'use strict';

/**
 * Created by Happy on 5/14/2017.
 */

var clearAll = function clearAll() {
    var options = {};
    $("#effect").effect('fold', options, 100, removeAll());
};

/*$("#button").on( "click", function() {
    clearAll();
    return false;
});
*/

function addTask() {
    var task = document.getElementById('tasks').value;
    //alert(task);
    if (task === '') {
        return;
    }
    if (document.getElementById('effect') !== null) {
        var div = document.createElement('div');
        div.className = 'insideContent';
        var content = document.createTextNode(task);
        div.appendChild(content);
        div.onmouseover = function () {
            removeTask(e);
        };
        var div2 = document.createElement('div');
        div2.className = 'border';
        document.getElementById('effect').appendChild(div);
        document.getElementById('effect').appendChild(div2);
    } else {
        var parentDiv = document.createElement('div');
        parentDiv.className = 'contents ui-widget-header ui-corner-all';
        parentDiv.setAttribute('id', 'effect');
        document.getElementsByTagName('body')[0].appendChild(parentDiv);
        var _div = document.createElement('div');
        _div.className = 'insideContent';
        var _content = document.createTextNode(task);
        _div.appendChild(_content);
        //        div.addEventListener("mouseover", removeTask(task), false);
        _div.onmouseover = function () {
            removeTask(e);
        };
        var _div2 = document.createElement('div');
        _div2.className = 'border';
        document.getElementById('effect').appendChild(_div);
        document.getElementById('effect').appendChild(_div2);
    }

    //'<div id="effect" class="insideContent">' + task + '</div><div class="border"></div>';
}

function removeTask(cont) {

    console.log(cont);
};

function removeAll() {
    document.getElementById('effect').remove();
}
