function myfunction()
        {
            document.getElementById('demo1').innerHTML = "Changed Text";
        }

        function abc()
        {
            document.getElementById("demo1").innerHTML = "Hello world";
        }
        
        function fontsize()
        {
            document.getElementById("demo").style.fontSize = "20px";
        }

        function add()
        {
            var a= Number(document.getElementById("input1").value);
            var b= Number(document.getElementById("input2").value);

            document.getElementById("val1").innerHTML=a;
            document.getElementById("val2").innerHTML=b;

            var c=a+b;
            document.getElementById('result').innerHTML = c;

        }