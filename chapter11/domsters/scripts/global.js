function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
//将targetElement放在newElement后面，问题是他们要有同一个父类
function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}

function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName+= " ";
    newClassName+= value;
    element.className = newClassName;
  }
}

function highlightPage() {
  // 测试浏览器是否理解DOM方法和属性，测试id属性值等于navigation的是否存在
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("navigation")) return false;
  // 获取导航条所有内容
  var nav = document.getElementById("navigation");
  var links = nav.getElementsByTagName("a");
  // 遍历link[i]的URL与当前页面的URL进行比较
  for (var i=0; i<links.length; i++) {
    var linkurl = links[i].getAttribute("href");  //link[i]的URL
    var currenturl = window.location.href;        //当前页面的URL
    if (currenturl.indexOf(linkurl) != -1) {      //indexOf字符比较,如果没有-1，其他则有
      links[i].className = "here";                //links[i]所代表的连接肯定是指向当前页面的连接
      var linktext = links[i].lastChild.nodeValue.toLowerCase();//把提取出来的字符串转化为小写字母
      document.body.setAttribute("id",linktext);
    }
  }
}

addLoadEvent(highlightPage);