var px;
var py;
var x;
var y;
var orientation;
var index = {
    init: function () {
        $("#forward").on('click', function () {
            var parms = {
                px: px,
                py: py, x: x, y: y, orientation: orientation, type: "forward"
            };

            new Service("control").sendData(parms, function (data) {
                if (data.result == "error") {
                    alert("out of boundary");
                    return;
                }
                orientation = data.orientation;
                x = parseInt(data.x);
                y = parseInt(data.y);
                index.show();
            });
        });
        $("#clockwise").on('click', function () {
            var parms = {
                px: px,
                py: py, x: x, y: y, orientation: orientation, type: "clockwise"
            };

            new Service("control").sendData(parms, function (data) {
                if (data.result == "error") {
                    alert("out of boundary");
                    return;
                }
                orientation = data.orientation;
                x = parseInt(data.x);
                y = parseInt(data.y);
                index.show();
            });
        });
        $("#set").on('click', function () {
            px = parseInt($("#columnNum").val());
            py = parseInt($("#rowNum").val());
            x = 1;
            y = 1;
            orientation = $("#orientationSelect").val();
            index.show();
            var data =[{
                id: 1,
                name: 'Item 1',
                price: '$1'
            }];
            $("table1").bootstrapTable("insertRow", data);
        });
        $("#table1").bootstrapTable({
            columns: [{
                field: 'id',
                title: 'Item ID'
            }, {
                field: 'action',
                title: 'Item Name'
            }, {
                field: 'price',
                title: 'Item Price'
            }],
            data: [{
                id: 1,
                name: 'Item 1',
                price: '$1'
            }, {
                id: 2,
                name: 'Item 2',
                price: '$2'
            }]
        })
    },
    show: function () {
        $("#px").text(px);
        $("#py").text(py);
        $("#x").text(x);
        $("#y").text(y);
        $("#orientation").text(orientation);


    }

}

index.init();