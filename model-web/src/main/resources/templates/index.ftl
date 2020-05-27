<!DOCTYPE html>
<html>
<head>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
    <script src="/js/jquery/jquery.js"></script>
    <script src="/js/jquery/jquery.validate.js"></script>
<#--    <script src="/js/bootstrap/js/bootstrap.js"></script>-->
<#--    <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>-->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.13.1/bootstrap-table.min.css">

    <!-- Latest compiled and minified JavaScript -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.13.1/bootstrap-table.min.js"></script>

    <!-- Latest compiled and minified Locales -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.13.1/locale/bootstrap-table-zh-CN.min.js"></script>
<#--    <script src="/js/table/bootstrap-table.js"></script>-->
    <script src="/js/service.js"></script>

    <title>${welcome}</title>
</head>
<body>
${welcome}

<div>
    <label>column:</label><input type="text" id="columnNum">
    <label>row:</label><input type="text" id="rowNum">
    <label for="orientationSelect">Choose a orientation:</label>

    <select id="orientationSelect">
        <option value="N">North</option>
        <option value="S">South</option>
        <option value="W">West</option>
        <option value="E" selected>East</option>
    </select>
    <input type="button" value="set" id="set">
</div>


<div id="show1">park boundary <label id="px"></label> X <label id="py"></label> </div>
<div id="show2">position x:<label id="x"></label>        position y:<label id="y"></label>        orientation:<label id="orientation"></label></div>

<div>
<input type="button" id="forward" value="forward">
<input type="button" id="clockwise" value="clockwise">
</div>

<div id="table1"></div>

</body>
<footer>
    <script src="/js/index.js"></script>
</footer>
</html>