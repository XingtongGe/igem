<template>
    <div id="footer">
        <p>Created By Beijing Institute of Technology</p>
        <nav>
            <ul>
                <li><a href="#">weibo</a></li>
                <li><a href="#">twitter</a></li>
                <li><a href="#">instagram</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    #footer {
        padding:.5em 0 .35em 0; /*内容上下的间距*/
        text-align:center; /*居中内容*/
        border-radius:10px 0px 10px 0px;
        background:#fff;
        box-shadow:0 -3px 8px -9px #555;
    }


    #footer ul { /*链接列表*/
        display:inline-block; /*收缩包围列表*/
        margin:4px 0 0;
    }
    #footer li {
        list-style-type:none; /*去掉默认的项目符号*/
        float:left; /*让列表项水平排列*/
        font-weight:400;
        font-size:.85em;
    }

    /*联系我们的链接*/
    #footer li + li a {
        border-left:1px solid #ccc; /*链接分隔线*/
    }

    #footer li a {
        text-decoration:none; /*去掉链接默认的下划线*/
        color:blue;
        padding:0 5px; /*链接间距*/
    }

    #footer a:hover {
        color:red;
    }
</style>