 var url ="https://cors.io/?http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
            
            function gen(){
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url,false);
                xhr.send();
                var res = xhr.responseText;
                var main = res.substring(2,(res.length-1))
                var obj = JSON.parse(main);
        document.getElementById("txt").innerHTML = obj.quoteText +" <br>" +obj.quoteAuthor ;}