# What is javascript addEventListener
**definiton**
1. javascript addEventListener used as event
2. javascript addEventListener is used as callback
3. javascript addEventListener is used in ES6 and ES7 (advanced javascript)

## Example:
```

     <body>

     <p id="demo">Rohan</p>
     <button type="button" id="btn">Click me</button>

     <script>
          var btn = document.getElementById("btn");
          btn.addEventListener("click",
               function(){
                    document.getElementById("demo").style="color:red; font-size:30px";
               }
          )
     </script>
     
     </body>

```