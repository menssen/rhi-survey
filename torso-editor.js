window.TorsoEditor = (function($, R) {

    function init(container, initShoulderW, initWaistW, initHipW) {
        this.container = $(container);
        this.paper = new R(this.container[0], this.container.width(), this.container.height());
        this.upperBody = this.paper.path();
        this.upperBody.attr('fill', '#000000');
        this.lowerBody = this.paper.path();
        this.lowerBody.attr('fill', '#000000');

        this.waistWidth = initWaistW;
        this.shoulderWidth = initShoulderW;
        this.hipWidth = initHipW;
        this.redraw();

    };

    init.prototype = {
        redraw: function() {
            console.log(1);
            var sLeft = (this.container.width() - this.shoulderWidth) / 2;
            var sRight = sLeft + this.shoulderWidth*1;
            var wLeft = (this.container.width() - this.waistWidth) / 2;
            var wRight = wLeft + this.waistWidth*1;
            var hLeft = (this.container.width() - this.hipWidth) / 2;
            var hRight = hLeft + this.hipWidth*1;

            var waist = this.container.height() / 1.5;

            this.upperBody.attr(
                'path',
                'M ' + sLeft + ' 0,L ' + sRight + ' 0,L ' + wRight + ' ' 
                + waist + ',L ' + wLeft + ' ' + waist + ' z'
            );

            this.lowerBody.attr(
                'path',
                'M ' + wLeft + ' ' + waist + ',L ' + wRight + ' ' + waist
                + ',L ' + hRight + ' ' + this.container.height() + ',L ' + hLeft
                + ' ' + this.container.height() + ' z'
            );
        },

        setShoulderWidth: function(w) {
            if (w == this.shoulderWidth) {
                return;
            }
            this.shoulderWidth = w;
            this.redraw();
        },

        setWaistWidth: function(w) {
            if (w == this.waistWidth) {
                return;
            }
            this.waistWidth = w;
            this.redraw();
        },

        setHipWidth: function(w) {
            if (w == this.hipWidth) {
                return;
            }
            this.hipWidth = w;
            this.redraw();
        }
    };

    return init;
})(jQuery, Raphael);

$(':range').rangeinput();


$(function() {
    var torso = new TorsoEditor(
        '#torso-container',
        $('#torso-shoulders').val(),
        $('#torso-waist').val(),
        $('#torso-hips').val()
    );

    setInterval(function() {
        torso.setShoulderWidth($('#torso-shoulders').val());
        torso.setWaistWidth($('#torso-waist').val());
        torso.setHipWidth($('#torso-hips').val());
    }, 30);
});

