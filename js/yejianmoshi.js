<script type="text/javascript">
    var oDiv=document.getElementById("box");
    oDiv.onclick=function(){
        var bg=oDiv.style.backgroundColor;
    //三目运算符1,背景色点击从红变蓝
        bg=='red'?oDiv.style.backgroundColor='blue':oDiv.style.backgroundColor='red';
    //三目运算符2，红—>蓝—>黑—>红
        bg=='red'?oDiv.style.backgroundColor='blue':void(0);
        bg=='blue'?oDiv.style.backgroundColor='black':void(0);
        bg=='black'?oDiv.style.backgroundColor='red':void(0);
    }
</script>