var px;
var py;
var x;
var y;
var orientation;
var steps = 1;
var index = {
    init: function () {
        $("#forward").on('click', function () {
            index.control("forward")
        });
        $("#clockwise").on('click', function () {
            index.control("clockwise")
        });


        $("#set").on('click', function () {
            px = parseInt($("#columnNum").val());
            py = parseInt($("#rowNum").val());
            x = 1;
            y = 1;
            orientation = $("#orientationSelect").val();
            index.show();
            $("#table1").bootstrapTable('removeAll');
            steps = 1
            index.appendtable("init");

        });
        $("#table1").bootstrapTable({
            columns: [{
                field: 'id',
                title: 'steps'
            }, {
                field: 'action',
                title: 'action'
            }, {
                field: 'position',
                title: 'position'
            }]
        })
    },
    control: function (type) {
        var parms = {
            px: px,
            py: py, x: x, y: y, orientation: orientation, type: type
        };

        new Service("control").sendData(parms, function (data) {
            if (data.result == "error") {
                alert("out of boundary");
                index.appendtable(type, "out of boundary");
                return;
            }
            orientation = data.orientation;
            x = parseInt(data.x);
            y = parseInt(data.y);
            index.show();
            index.appendtable(type);
        });

    },
    appendtable: function (action, message) {
        var data
        if (message == null) {
            data = [{
                id: steps++,
                action: action,
                position: "x:" + x + "  y:" + y + "  orientation:" + orientation
            }];
        } else {
            data = [{
                id: steps++,
                action: action,
                position: message
            }];
        }
        $("#table1").bootstrapTable('append', data);
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